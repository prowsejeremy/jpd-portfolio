#!/bin/bash
# SSH test script to verify connectivity to the EC2 instance

# Ensure you've set the following environment variables in connection_variables.sh:
SCRIPT_DIR="$(dirname "$(realpath "${BASH_SOURCE[0]}")")"
source $SCRIPT_DIR/connection_variables.sh
source $SCRIPT_DIR/print_message.sh

ssh -i $EC2_KEY_PATH $EC2_USER@$EC2_HOST <<EOF
  set -e;

  cd $EC2_APP_DIR

  echo ""
  echo "===================================================="
  echo "🛑 Stopping Docker services on the EC2 instance..."
  echo "===================================================="
  echo ""

  docker compose down

  # Load the new Docker image into the EC2 instance
  if [ -f "jpd-portfolio-image.tar" ]; then

    # If there is an existing image with the same name, remove it to prevent disk space issues
    if [ "\$(docker images -q jpd-portfolio 2> /dev/null)" != "" ]; then
      echo ""
      echo "==================================================="
      echo "🗑️ Removing old images to prevent excess disk use"
      echo "==================================================="
      echo ""

      docker image rm jpd-portfolio
    fi

    echo ""
    echo "===================================================="
    echo "⌛ Loading the new image and restarting services."
    echo "===================================================="
    echo ""

    docker load -i jpd-portfolio-image.tar

    echo ""
    echo "========================================"
    echo "✅ Docker image loaded successfully."
    echo "========================================"
    echo ""
    echo "================================================================"
    echo "🗑️ Removing the Docker image tar file from the EC2 instance..."
    echo "================================================================"
    echo ""

    rm jpd-portfolio-image.tar
  fi

  echo ""
  echo "========================================================"
  echo "⌛ Restarting Docker services on the EC2 instance..."
  echo "========================================================"
  echo ""
  
  docker compose up -d

  echo ""
  echo "============================================================"
  echo "🧹 Docker Cleanup: Removing any dangling images or volumes"
  echo "============================================================"
  echo ""

  # If there are any dangling volumes, remove them to free up disk space
  if [ -n "\$(docker volume ls -qf dangling=true)" ]; then
    echo ""
    echo "===================================="
    echo "⚠️ Dangling volumes to be removed:"
    echo "===================================="
    echo ""
    docker volume ls --filter dangling=true
    docker volume rm \$(docker volume ls -qf dangling=true)
  fi

  # If there are any dangling images, remove them to free up disk space
  if [ -n "\$(docker image ls -qf dangling=true)" ]; then
    echo ""
    echo "===================================="
    echo "⚠️ Dangling images to be removed:"
    echo "===================================="
    echo ""
    docker image ls --filter dangling=true
    docker image rm \$(docker image ls -qf dangling=true --no-trunc)
  fi

  echo ""
  echo "========================================================"
  echo "📋 Docker images currently on the EC2 instance:"
  echo "========================================================"
  echo ""

  docker system df

  echo ""
  echo "=========================="
  echo "🥳 Deployment complete!"
  echo "=========================="
  echo ""

  exit 0;
EOF

[[ $? -ne 0 ]] && { printmessage "❌ Failed to start app."; exit 1; }

exit 0;