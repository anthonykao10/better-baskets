## BetterBaskets Introduction

The BetterBaskets web application improves your basketball abilities. It takes recordings of you playing basketball, and leverages computer vision video processing to identify key weaknesses in your basketball game. It provides the users with benchmarks so they can constantly improve their basketball capabilities. 

This was a 2-week final project produced by [Andrew Hui](https://github.com/AndrewHui), [Anthony Kao](https://github.com/anthonykao10), and [Sarah Mahovlich](https://github.com/SarahMahovlich). During this time, the group learned new technologies such as **OpenCV, AWS S3, VideoJs, Google Charts**, while also improving their understanding of **React (Hooks), Node, Express, Postgres, and Bootstrap**. 

## How to use?


!["Shot Page Display"](https://github.com/anthonykao10/better-baskets/blob/master/ReadmeScreenshots/ShotPageGif.gif)

BetterBaskets tracks the ball to extract key information such as shot arc, success and shot angle. 


!["Session Data to Shot Display"](https://github.com/anthonykao10/better-baskets/blob/master/ReadmeScreenshots/SessionToShotGif.gif)

In a session, multiple shots can be taken. This is so you can collect all data from a single practice session. As you can see in this session, we have a total of 9 shots which all have been collated into a graph. This way you can evaluate your shots against each other. In the session screen, you will also see stat cards, and links to all shots that belong within that session. On each shot, you can see icons that indicate the success of your shot. Please see below for in-depth on how to use the stat cards.

!["Session Stat Cards"](https://github.com/anthonykao10/better-baskets/blob/master/ReadmeScreenshots/SessionStatCards.png)

These session stat cards identifies your basketball weaknesses and help you improve your basketball shot. There are two rows of cards. The top row is your session statistics, and your bottom row is the users overall average. There are green and red cards for the session stat cards. Green cards meaning you are doing above average, and red cards meaning you need some improvement in this area. Idealy you want to have all green cards in your top row!

!["Dashboard of BetterBaskets"](https://github.com/anthonykao10/better-baskets/blob/master/ReadmeScreenshots/dashboard.png)

This is the user dashboard of BetterBaskets. It collates all data from your user profile for this application. BetterBaskets provides lifetime statistics from all your shots, and all your sessions combined in this dashboard.


!["Taking New Shots"](https://github.com/anthonykao10/better-baskets/blob/master/ReadmeScreenshots/newShot.gif)

From the dashboard, you can navigate to the new session page, which will redirect you to create a new shot. When on this page, click the recorder button, and line up the blue and green box to be right under the basket like above. This is critical for our success algorithim to accurately calculate the success of the shot. Shoot away, and click "end session" when you are done your session. It will redirect you to your results! 




## How to deploy?


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
