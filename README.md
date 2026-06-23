# Ownaesthetics — Total Health Website

This repository contains the frontend (React + Vite) and a small Node/Express `server` used by the Total Health website.

**Quick overview**
- **Frontend:** Vite + React (see `package.json` scripts: `dev`, `build`, `preview`, `lint`).
- **Server:** Node + Express + Mongoose in the `server` folder (scripts: `start`, `dev`).

## Features
- React 19 with client-side routing
- 3D/three.js integrations and animated UI
- Authentication, JWT, and MongoDB models in `server`

## Tech stack
- Frontend: React, Vite, Framer Motion, GSAP, Three.js
- Backend: Node, Express, Mongoose, JSON Web Tokens

## Prerequisites
- Node.js 18+ and npm
- MongoDB instance (local or Atlas)

## Setup
1. Clone the repo and install frontend deps:

```bash
git clone <repo-url>
cd ownaesthetics
npm install
```

2. Install server dependencies and configure environment:

```bash
cd server
npm install
```

Create a `.env` file in `server/` with at least:

```
MONGO_URI=<your-mongo-connection-string>
JWT_SECRET=<a-secret-string>
EMAIL_USER=<smtp-user>
EMAIL_PASS=<smtp-pass>
PORT=4000
```

## Running locally
- Frontend (dev server with HMR):

```bash
# from repository root
npm run dev
```

- Server (dev with nodemon):

```bash
cd server
npm run dev
```

Open the frontend at `http://localhost:5173` (Vite default) and the API at `http://localhost:4000` (or the `PORT` you set).

## Build & Preview

```bash
# build frontend
npm run build

# preview production build
npm run preview

# start production server
cd server && npm start
```

## Project structure (selected)
- `src/` — React app source (components, pages, hooks, styles)
- `public/` — static assets
- `server/` — Express API, models, and auth code

## Deployment
- Frontend can be deployed to Vercel, Netlify, or any static hosting after `npm run build`.
- Server requires a Node host (Render, Heroku, DigitalOcean) and environment variables for Mongo and JWT.

## Contributing
- Create branches named `feat/*` or `fix/*` and open PRs with a short description.

## License & contact
Specify a license if desired — add a `LICENSE` file.

If you want I can add: environment validation, a `concurrently` script to start both servers, or a minimal `README` for the `server` folder.
