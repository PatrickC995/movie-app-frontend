# React-Movie-App-Frontend

This repository showcases the frontend for a movie application. The app fetches popular movies through an API, allowing users to search, favorite, and rank their favorite films.

Through this project, I’ve gained hands-on experience with JavaScript, HTML, CSS and helped me develope fundamentals, including:

- Building reusable components
- Making API calls
- Securely managing API keys

### Node.js packages
- Express: I used Express to create routes in my server so it can respond to HTTP requests
- CORS: I added CORS middleware to my Express app so my frontend on a different domain can access the API
- Dotenv: I used Dotenv to load my API key from a .env file instead of hardcoding them
- Axios: I used Axios to send HTTP requests from my backend to fetch data from an API.

> Note: The API key used to make these API calls was provided by The Movie Database (TMDb). You can create a free account on their platform to obtain your own API key.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
