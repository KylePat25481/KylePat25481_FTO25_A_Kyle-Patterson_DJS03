# 🎙️ Podcast Explorer App

A responsive React application for discovering, browsing, and exploring podcasts. Built using React Context for global state management, it fetches podcast data from a Netlify-hosted API and displays them with genre badges, images, and metadata.  

---

## **Table of Contents**

- [Features](#features)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Components](#components)  
- [Utilities & Services](#utilities--services)  
- [Styling](#styling)  
- [API](#api)  
- [License](#license)  

---

## **Features**

- Fetches podcasts dynamically from a Netlify API  
- Maps genre IDs to human-readable names using a local `GenreService`  
- Displays podcasts in a responsive grid layout  
- Individual podcast cards show:  
  - Cover image  
  - Title  
  - Number of seasons  
  - Genre badges  
  - Last updated date  
- Loading spinner while fetching data  
- Error handling for failed API requests  
- Context-based state management for scalable and maintainable architecture  

---

## **Installation**

1. Clone the repository:

```bash```

git clone "https://github.com/yourusername/podcast-explorer.git";

2.  Navigate into the project directory:

cd podcast-explorer


3.  Install dependencies:

npm install


4.  Start the development server:

npm run dev


Open your browser at http://localhost:5173

## Usage

Browse podcasts directly on the homepage.

Each podcast card displays its genres, number of seasons, and last updated date.

Genres are resolved via the GenreService to provide readable names instead of IDs.

## Project Structure
src/
│
├─ api/
│  └─ fetchPodcasts.js          # Handles fetching podcasts from the Netlify API
│
├─ components/
│  ├─ Header.jsx                # App header with title
│  ├─ PodcastCard.jsx           # Individual podcast card
│  ├─ PodcastGrid.jsx           # Grid layout for podcasts
│  └─ *.module.css              # Component-level styles
│
├─ context/
│  └─ PodcastContext.jsx        # Context provider for podcasts and global state
│
├─ data/
│  └─ data.js                   # Local genre definitions for mapping IDs
│
├─ services/
│  └─ GenreService.js           # Maps genre IDs to names
│
├─ utils/
│  └─ formatDate.js             # Converts ISO dates to readable strings
│
├─ App.jsx                      # Root component
├─ App.module.css                # Global app styles
├─ index.css                     # Base styles
└─ main.jsx                      # Entry point

## Components
## Header

Displays the app title and logo emoji 🎙️

Styled with flexbox and a subtle shadow

## PodcastGrid

Consumes podcasts from context

Handles loading, error, and empty states

Maps genre IDs to names using the GenreService

## PodcastCard

Shows cover image, title, seasons, genres, and last updated date

Uses formatDate utility for human-readable dates

Styled for hover effects, badges, and responsive display

## Utilities & Services

GenreService.js: Maps numeric genre IDs to readable names.

formatDate.js: Converts ISO date strings to MMM DD, YYYY format.

## Styling

Component-level styling with CSS modules for Header, PodcastCard, and PodcastGrid

Global styles in App.module.css and index.css

Responsive design with grid layout for podcasts

Loading spinner animation using CSS keyframes

## API

Podcasts are fetched from: https://podcast-api.netlify.app/

Genre IDs are resolved using local data (data.js / GenreService.js) instead of the API to avoid unreliable endpoints