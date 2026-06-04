# Personal Website

My personal website. More design changes incoming

## Getting Started

1. Run `npm install`
2. Run `npm run dev`

## Docker

### Docker build
```bash
# Build the image
docker build -t personal-website .
```
### Volume: resume folder

The container serves files from `/app/dist/downloads` (e.g. a resume PDF). Mount a local folder into that path so you can update the files without rebuilding the image.

Set `RESUME_FOLDER_LOCATION` to the absolute path of that folder before running.

### Using Docker Compose (recommended)

```YAML
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    image: personal-website:latest
    container_name: personal-website
    restart: unless-stopped
    ports:
      - "8080:4173"
    volumes:
      - {RESUME_LOCATION}:/app/dist/downloads:ro
```

The site will be available at `http://localhost:8080`.

### Using Docker directly

```bash
# Run the container
docker run -p 8080:4173 -v "{RESUME_FOLDER_LOCATION}:/app/dist/downloads:ro" personal-website
```

The site will be available at `http://localhost:8080`.


