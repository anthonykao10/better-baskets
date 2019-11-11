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

There are multiple steps to deploy this project.

1) Clone the project onto your local server. 
2) Setup an AWS S3 account with a basket named "betterbaskets"
3) Setup a POSTGRES Database named of your choice, and create the tables using our script in "server/db/migrations/create.sql"
4) Setup a .env file in the "server" folder with your AWS S3 credentials, and Database information.
5) In the terminal under the "betterBaskets" folder, enter "npm start". This will host your client on "localhost:3002"
6) In the terminal under the "betterBaskets/server" folder, enter "node app.js". This will host your server on "localhost:8080"

Once completed, please go ahead and take some shots in the betterBaskets web application!