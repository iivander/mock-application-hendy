# Getting Started with this Mock Application

## Access to Homepage
`https://iivander.github.io/mock-application-hendy/`

The application is mobile-responsive, when you switch to a mobile screen, it will have different behavior than web-screen.

### To switch to Mobile screen via Web Chrome
- Click on anywhere on the webpage and Right Click to 'Inspect'.
- Click on 'Toggle Device Toolbar' (right of `Elements` section) to toggle to any mobile device.

### Overview of the Project
- Entry point of the project is through App.js
- Components folder are the 'smarter' layer
- Library folder are the 'dumber' layer and reusable component
- Using useReducer as state management and useContext instead of prop drilling
- Unit tests are still TODO

## Create-React-App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run deploy`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

Will cause the predeploy and deploy scripts defined in package.json to run.
Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.
