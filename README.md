# 🔴 Pokedex

A lightweight and responsive React application that connects to the public **PokeAPI** to fetch, display, and filter Pokemon cards. Built as a single-page application (SPA) with a focus on clean architecture, performance optimization, and smooth UI/UX.

## 💻 Live Demo
Check out the live application here: **[https://ellissium.github.io/pokedex/](https://ellissium.github.io/pokedex/)**

## 🔑 Key Features

* **Dynamic Pagination:** Fetches Pokemon data in chunks of 12 using optimized parallel API requests.
* **Smart Filtering:** Instant filtering by Pokemon types (e.g., Fire, Water, Grass) with zero-lag UI response.
* **Performance Boost:** Utilizes React hooks (`useMemo`) to prevent unnecessary re-renders during interactions.
* **Detailed View:** Click on any Pokemon card to load and display its full stats and features in a dedicated sidebar.
* **Robust UX Loading State:** Implements an overlay loader that covers the list safely without causing layout shifts or allowing duplicate clicks.

## 🛠️ Tech Stack & Libraries

* **Frontend:** React.js (Functional Components, Hooks)
* **Styling:** CSS Modules (`*.module.css`) for scoped and maintainable styles
* **HTTP Client:** Axios (with `Promise.all` for parallel request handling)
* **Deployment:** GitHub Pages (`gh-pages`)
* **API:** [PokeAPI v2](https://pokeapi.co/docs/v2)

## 📈 Performance Optimizations Implemented

1. **Parallel Request Batching:** Replaced sequential `for` loop requests with `Promise.all`. This reduced the loading time per batch by up to 5x.
2. **State Memoization:** Wrapped heavy filtering logic in `useMemo` to ensure the array is only processed when the data or filter type actually changes—preventing slowdowns when clicking on individual cards.
3. **Safe ID Parsing:** Avoided hardcoded counter bugs (`id++`) by safely extracting real entities' IDs directly from the PokeAPI payload strings, preventing `404` crashes on higher pagination offsets (especially after ID 905).
4. **Valid DOM Nesting:** Ensured perfect standard HTML tables compliance inside the detailed features view, solving React-to-DOM synchronization warnings and UI state freezing.

## 📦 Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ellissium/pokedex.git
   ```

2. **Navigate to the project folder:**
   ```bash
   cd pokedex
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```
   *The app should now be running on `http://localhost:3000`.*

---
*Developed as a technical assignment to demonstrate React state management, API integration, and performance profiling.*
