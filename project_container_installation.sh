#!/bin/bash

# Build the Podman image
podman build -t filmore_image .

# Create a container from the image
container_id=$(podman create filmore_image)

# Start the container (required for podman exec)
podman start $container_id

echo "Current directory on host: $(pwd)"

# Use tar inside the running container to create an archive of /app/frontend/filmore, excluding node_modules
podman exec $container_id bash -c "tar --exclude='node_modules' -czf /tmp/archive.tar.gz -C /app/frontend filmore"

# Stop the container after creating the archive
podman stop $container_id

# Copy the tarball from the container to the host
podman cp $container_id:/tmp/archive.tar.gz .

# Clean up by removing the container
podman rm $container_id

# Extract the archive on the host
tar -xzf archive.tar.gz

# Optionally, remove the tarball after extraction
rm archive.tar.gz
