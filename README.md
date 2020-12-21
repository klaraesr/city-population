# City population React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). For more information, read the [Create React App Docs](https://create-react-app.dev/docs/getting-started/).

## Installation and development

1. Add API username

This application uses the [Geonames API](https://www.geonames.org/export/geonames-search.html). To add a username for the API to the project, create a .env file in root and add the line ```REACT_APP_API_USERNAME=[username]```. You can also add the username directly in the file ```src/api.js``` by changing the constant ```API_USERNAME```.

2. Run ```npm install``` to install all dependencies for the project.

3. Run ```npm start``` to run the app in the development mode.

Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Other scripts 

### npm test
Launches the test runner in the interactive watch mode.
Right now there is just one simple test in the project.

### npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.



