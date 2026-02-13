#!/bin/bash
# Build the Docker image, push it to the EC2 instance, and optionally restart Docker services
set -e;

SCRIPT_DIR="$(dirname "$(realpath "${BASH_SOURCE[0]}")")"
source "$SCRIPT_DIR/print_message.sh"

printmessage "🚀 Starting the build and deployment process for the Docker image. This will take a few moments..."

# Test the SSH connection to the EC2 instance
chmod +x $SCRIPT_DIR/build.sh
$SCRIPT_DIR/build.sh

# Test the SSH connection to the EC2 instance
chmod +x $SCRIPT_DIR/ssh_test.sh
$SCRIPT_DIR/ssh_test.sh

printmessage "✅ SSH connection to EC2 instance is working. Proceeding with build and deployment."

exit 0;