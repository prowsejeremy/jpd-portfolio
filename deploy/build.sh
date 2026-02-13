#!/bin/bash
# Build docker image and save to tar file

SCRIPT_DIR="$(dirname "$(realpath "${BASH_SOURCE[0]}")")"
source "$SCRIPT_DIR/print_message.sh"

# Build the Docker image using the Dockerfile in the parent directory
printmessage "🔨 Building the Docker image..."
docker build -f "$SCRIPT_DIR/../docker/Dockerfile" --platform linux/amd64 -t jpd-portfolio "$SCRIPT_DIR/.."

# Save the Docker image to a tar file for transfer to the EC2 instance
printmessage "💾 Saving the Docker image to a tar file..."
docker save jpd-portfolio > "$SCRIPT_DIR/../jpd-portfolio-image.tar"

exit 0