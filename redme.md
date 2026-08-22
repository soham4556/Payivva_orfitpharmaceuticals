# Payivva Orfit Pharmaceuticals

Payivva Orfit Pharmaceuticals is a full-stack web project with:
- **Frontend:** React + Vite (`/website`)
- **Backend:** Node.js + Express + MySQL (`/server`)

## Project Structure

- `website/` - React frontend application
- `server/` - Express backend API
- `package.json` (root) - scripts to run frontend and backend together

## Prerequisites

- Node.js (v18+ recommended)
- npm
- MySQL database access

## Installation

From the repository root:

```bash
npm install
cd website && npm install
cd ../server && npm install
```

Or use the root helper script:

```bash
npm run install-all
```

## Running in Development

From the repository root:

```bash
npm run dev
```

This starts:
- Frontend on Vite dev server
- Backend on Node/Express (`http://localhost:5000`)

## Build Frontend

```bash
npm run build
```

## Backend Environment Variables

Create a `.env` file inside `server/` and set:

- `DB_HOST`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`
- `PORT` (optional)

## API Endpoints

- `GET /api/products`
- `POST /api/contact`
- `GET /api/contacts`
