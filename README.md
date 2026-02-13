# Jeremy Prowse Digital

## Portfolio site

If, for whatever bizarre reason you find yourself reading this, welcome! This is code behind my personal portfolio site: [jpd.nz](https://jpd.nz). I have used this project to explore a few ideas I've wanted to play around with as well as a testing ground for a number of technologies I've been interested in trying out.

The site, while rather simple in design has a few key elements going on under the hood 👀:

- Next.js 15 using the src dir and app router
- Sass Modules
- Fully Typescript
- Scalable UI/Design > 1024px
- Deployment and hosting via AWS Amplify
- pnpm package manager
- A super secret easter egg 🤫

## Developmetn Setup

- Ensure you have a current Node.js (20>=) development environment setup.
- Configure a local .env file with the appropriate environment variables then run:
- Setup docker and [configured with caddy](https://gist.github.com/prowsejeremy/696764a4a6a9ca56181dacd5c934bb24):

```
  docker compose -f docker/compose-dev.yml up
```

Head to [jpd.test](https://jpd.test) in your browser and you're off to the races 🐎

## Production build and deployment

This site is designed to be hosted via docker, while it should run on any server supporting docker, the below guide is specifically for configuration on an EC2 Instance.

### Initial setup

#### Configure an ec2 instance

- Log in to AWS and create a new ec2 instance
- When creating the security policy, set up the following inbound rules:
  - SSH | 22 | 0.0.0.0/0
  - HTTP | 80 | 0.0.0.0/0
  - HTTPS | 443 | 0.0.0.0/0
- Configure a Key pair and download the `.pem` file for ssh access
- Setup an Elastic IP and allocate it to the ec2 instance
  - This will be the public IP for ssh access as well as pointing a domain to.

#### Install depenencies on ec2 instance

> Run `sh deploy/install-docker.sh` to run through the below commands.

##### Manual process

- SSH onto the server
  ```
  ssh -i path/to/ec2-instance.pem ec2-user@elastic-ip
  ```
- Install Docker
  ```
  sudo yum update -y
  sudo yum install docker -y
  sudo service docker start
  ```
- Setup users
  ```
  sudo usermod -aG docker ec2-user
  ```
- Ensure docker starts if/when the ec2 instance boots
  ```
  sudo systemctl enable docker.service
  sudo systemctl start docker.service
  ```
- Install docker compose
  ```
  sudo mkdir -p /usr/local/lib/docker/cli-plugins
  sudo curl -SL https://github.com/docker/compose/releases/download/latest/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose
  sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose
  ```

#### Configure domains and SSL

- Create a `A` name records in your dns provider for any domains you wish to point to the site.
  - These will point to the Elastic IP configured earlier.
- Configure `docker/nginx/default.conf` with your desired domains.
  > **For now ensure the SSL (443) server block is commented out. If not the next steps will fail.**
- Run `deploy/build_and_deploy.sh` to build a production version of the app and rsync the required files to the ec2 instance.
  > **NOTE** This will require you configuring your ssh creds in `deploy/connection_variables.sh.`
  >
  > 🚨 **IMPORTANT** Do _NOT_ select to restart the ec2 Docker instance at this point.
- SSH onto the server and start only the nginx container
  ```
  ssh -i path/to/ec2-instance.pem ec2-user@elastic-ip
  cd path/to/app/on/ec2-instance
  docker compose up nginx -d
  ```
- Create directories for certbot to use (note: these should match the volume paths configured in docker/compose.yml for)
  ```
  mkdir -p /certbot/conf
  mkdir -p /certbot/www
  ```
- Perform a dry-run of the certbot generation to ensure everything is configured correctly
  ```
  docker compose run --rm \
    certbot certonly \
    --webroot --webroot-path /var/www/certbot/ \
    --email myemail@provider.com \
    --agree-tos \
    --dry-run \
    -d mydomain.com \
    -d anotherdomain.com
  ```
- If this succeeds then remove the `--dry-run` flag and run again to generate your SSL cert files.
- Run `docker compose down` to stop all containers.
- Close this SSH session
- Back in the local directory, update the nginx config file.
  - In `docker/nginx/default.conf` uncomment the SSL (443) block, ensuring that the `ssl_certificate` and `ssl_certificate_key` paths are configured correctly.
- To push the updated nginx config and start the app, run (note: Consult the scripts to see exactly what is being run.):
  ```
  sh deploy/rsync.sh
  sh deploy/start.sh
  ```
- Setup the "cron job" to handle renewal of the cert
  ```
  sh deploy/spawn_timer.sh
  ```

### Incremental updates

- To build the docker image and upload it to the ec2 instance:

```
sh deploy/build_and_deploy.sh
```
