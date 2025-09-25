# Full Stack Web Application

This is a full-stack web application built with Node.js, Express, and React.

## Project Structure

```
├── backend/         # Express backend
│   ├── src/         # Source files
│   ├── tests/       # Test files
│   └── package.json # Backend dependencies
├── frontend/        # React frontend
│   ├── src/         # Source files
│   ├── public/      # Static files
│   └── package.json # Frontend dependencies
```

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend server will start on http://localhost:5000

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend development server will start on http://localhost:3000

## Available Scripts

In both the backend and frontend directories, you can run:

- `npm start`: Starts the production server
- `npm run dev`: Starts the development server
- `npm test`: Runs the test suite
- `npm run build`: Creates a production build

## Environment Variables

Create `.env` files in both backend and frontend directories. Example:

### Backend (.env)
```
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
``` 