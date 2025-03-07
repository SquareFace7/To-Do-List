# Use the latest official Nginx image
FROM nginx:latest

# Copy all web files to the Nginx default directory
COPY . /usr/share/nginx/html
