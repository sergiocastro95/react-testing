[![CI pipeline](https://github.com/sergiocastro95/react-testing/actions/workflows/CI-pipeline.yml/badge.svg)](https://github.com/sergiocastro95/react-testing/actions/workflows/CI-pipeline.yml)

# React testing
The goal of this repo is to have a simple app tested using [Cypress](https://www.cypress.io/) for e2e tests and [React Testing Library](https://testing-library.com/) for component testing.
Even since Cypress 10 is possible to do component testing, it is still in beta and with this repo I want to show how React Testing Library works because currently is the main choice for React developers.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test:integration`

Launches integration tests in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:e2e`

Launches Cypress tests in browser mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.