# DivyaPath

DivyaPath is a web application designed to provide a collection of Aartis (devotional songs) with their lyrics. It features a backend API for managing Aarti data and a frontend built with React for a user-friendly experience.

## Features

-   Browse a collection of Aartis.
-   View Aarti lyrics.
-   Responsive design for various devices.

## Technologies Used

**Frontend:**

-   React
-   Vite
-   Tailwind CSS

**Backend:**

-   Node.js
-   Express.js
-   MongoDB (with Mongoose)
-   CORS
-   dotenv

## Setup and Installation

Follow these steps to set up and run the project locally.

### Prerequisites

-   Node.js (LTS version recommended)
-   npm or Yarn
-   MongoDB Atlas account (or a local MongoDB instance)

### 1. Clone the Repository

```bash
git clone https://github.com/atharvabaodhankar/DivyaPath.git
cd DivyaPath
```

### 2. Backend Setup

Navigate to the `backend` directory:

```bash
cd backend
```

Install backend dependencies:

```bash
npm install
```

Create a `.env` file in the root directory of the project (i.e., `DivyaPath/.env`) and add the following environment variables:

```
FRONTEND_URL=http://localhost:5173
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING_HERE
```

**Note**: Replace `YOUR_MONGODB_CONNECTION_STRING_HERE` with your actual MongoDB connection string. You can obtain this from your MongoDB Atlas dashboard.

Run the backend server:

```bash
npm run start
```

The backend server will run on `http://localhost:5000`.

### 3. Frontend Setup

Open a new terminal and navigate to the project root directory:

```bash
cd ..
```

Install frontend dependencies:

```bash
npm install
```

Run the frontend development server:

```bash
npm run dev
```

The frontend application will be available at `http://localhost:5173`.

## Usage

Once both the backend and frontend servers are running, open your web browser and navigate to `http://localhost:5173` to access the DivyaPath application. You can browse through the list of Aartis and view their lyrics.

## Project Structure

```
DivyaPath/
├── .gitignore
├── README.md
├── backend/
│   ├── db.js
│   ├── index.js
│   ├── models/
│   │   └── Aarti.js
│   ├── package-lock.json
│   ├── package.json
│   └── routes/
│       └── aartis.js
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public/
│   ├── images/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   └── Header.jsx
│   ├── data/
│   │   └── aartis.json
│   ├── index.css
│   ├── main.jsx
│   └── pages/
│       ├── AartiDetails.jsx
│       ├── Aartis.jsx
│       └── Home.jsx
└── vite.config.js
```

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.
