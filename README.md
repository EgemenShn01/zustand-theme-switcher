# Zustand Theme Switcher

This project is a simple theme switcher (Light/Dark mode) built with [Zustand](https://zustand-demo.pmnd.rs/) and React. It demonstrates how to manage global state in React applications using Zustand with minimal setup and clear, functional code.

---

## Features

* Toggle between light and dark themes
* Theme state (light/dark) is managed globally with Zustand store
* The theme applies across all components instantly
* No extra CSS frameworks—just clean, inline or basic CSS
* Fast, modern, and minimal

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/EgemenShn01/zustand-theme-switcher.git
   cd zustand-theme-switcher
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the project:**

   ```bash
   npm start
   ```

---

## Tech Stack

* [React](https://reactjs.org/)
* [Zustand](https://zustand-demo.pmnd.rs/)

---

## How It Works

* The Zustand store holds a `theme` state (`light` or `dark`).
* Clicking the toggle button switches the theme globally.
* The selected theme is applied to the entire app instantly.
* Styling uses only basic or inline CSS for simplicity.

---

## Project Structure

```
src/
  store/
    useThemeStore.js    # Zustand store file
  App.js                # Main application component
  index.js              # React entry point
```

