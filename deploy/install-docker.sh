#!/bin/bash
# Install Docker and Docker Compose on the EC2 instance

# SSH into the EC2 instance

# Ensure you've set the following environment variables in connection_variables.sh:
SCRIPT_DIR="$(dirname "$(realpath "${BASH_SOURCE[0]}")")"
source $SCRIPT_DIR/connection_variables.sh

ssh -i $EC2_KEY_PATH $EC2_USER@$EC2_HOST <<EOF

  # Install Docker
  if ! command -v docker &> /dev/null
  then
    echo "Docker not found, installing..."
    sudo yum update -y
    sudo yum install docker -y
    sudo service docker start

    # Update user permissions to allow running Docker without sudo
    sudo usermod -aG docker ec2-user

    # Ensure Docker starts on boot
    sudo systemctl enable docker.service
    sudo systemctl start docker.service
  else
    echo "Docker is already installed, skipping installation."
    exit 0
  fi

  # Install Docker Compose
  if ! command -v docker compose &> /dev/null
  then
    echo "Docker Compose not found, installing..."
    sudo mkdir -p /usr/local/lib/docker/cli-plugins
    sudo curl -SL https://github.com/docker/compose/releases/download/latest/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose
    sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose
  else
    echo "Docker Compose is already installed, skipping installation."
  fi

EOF