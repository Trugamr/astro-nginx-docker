# Docker Image for static Astro projects
We build docker image for astro project by using _alpine-slim_ variant of nginx as base image.
For barebones astro project with react and tailwind added the resulting image size is around **11mb** which is quite good considering we get all the functionality for a web server like nginx.

### Ngninx config
Simple server block that listens for request on port 80 and serves available pages, also responds with custom 404 page if present in astro project. 
```nginx
server {
  listen 80;
  location / {
    root  /usr/share/nginx/html;
  }

  # Show custom 404 page 
  error_page 404 /404.html;
  location = /404.html {
    root  /usr/share/nginx/html;
  }
}
```


### Building and running docker image
```
# Build docker image
docker build -t astro-nginx-docker -f docker/Docker .
# Create docker container using built image
docker run --rm -p 3000:80 astro-nginx-docker
```
