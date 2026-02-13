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
    echo "============================================================="
    echo "🗑️ Removing the Docker image file from the EC2 instance..."
    echo "============================================================="
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
  echo "=========================="
  echo "🥳 Deployment complete!"
  echo "=========================="
  echo ""

  exit 0;
EOF

[[ $? -ne 0 ]] && { printmessage "❌ Failed to start app."; exit 1; }

exit 0;