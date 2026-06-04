# Personal Website

My personal website. More design changes incoming

## Getting Started

1. Run `npm install`
2. Run `npm run dev`

## Testing

This project uses **Vitest** and **React Testing Library** for unit and component testing.

### Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests once (CI mode)
npm test -- --run

# Open interactive test UI dashboard
npm test:ui

# Generate coverage report
npm test:coverage
```

Tests are located in `src/**/*.test.tsx` files. The App component has comprehensive test coverage including rendering, styling, DOM structure, and accessibility checks.

### Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server (Vite) |
| `npm run build` | Production build |
| `npm run lint` | ESLint check |
| `npm test` | Run tests in watch mode |
| `npm test:ui` | Interactive test UI |

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
docker run -p 8080:80 -v "{RESUME_FOLDER_LOCATION}:/app/dist/downloads:ro" personal-website
```

The site will be available at `http://localhost:8080`.


