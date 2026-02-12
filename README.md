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

### Setup and dev

- Ensure you have a current Node.js (20>=) development environment setup.
- Configure a local .env file with the appropriate environment variables then run:
- Setup docker and [configured with caddy](https://gist.github.com/prowsejeremy/696764a4a6a9ca56181dacd5c934bb24):

```
  docker compose -f docker/compose-dev.yml up
```

Head to [jpd.test](https://jpd.test) in your browser and you're off to the races 🐎

### Production build and deployment

- Build and Save Locally: (Build for the EC2 architecture (usually amd64))

  `docker build --platform linux/amd64 -t jpd-portfolio .`

- Save the image to a .tar file

  `docker save jpd-portfolio > jpd-portfolio-image.tar`

- Transfer to EC2:

  `scp -i your-key.pem jpd-portfolio-image.tar ec2-user@your-ec2-ip:~/`

- Load the image into the EC2's Docker engine

  `docker load < ~/jpd-portfolio-image.tar`

- Run using the Compose file

  `docker compose up -d`

### Files to copy for Production

- jpd-portfolio-image.tar
- docker/mongo/mongo-init.js
- docker/nginx/
- docker/compose.yml
- .env (To be generated remotely using repo variables)
