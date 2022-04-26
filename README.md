# Real-Time Web @cmda-minor-web 2021 - 2022

![Interface van de app](https://raw.githubusercontent.com/basv1996/progressive-web-apps-2122/main/docs/img/.....)

# Live Link
:globe_with_meridians: [Link naar live app](https://browser-technology-2122.herokuapp.com/)

---

# Table of Contents
- [Live link ](#live-link)
- [Description](#project-description)
- [Communication](#communication)
- [Goals](#goals)
- [Grading](#grading)
- [Programme](#programme)

---

# :book:Project description

For this assignment I wanted to create a guessing game. With the implemantations of sockets I want to create a real time web app. I will use the techniques to set up an open connection between the client and the server. This will enable me to send data in real-time both wayd

---

## :gear:Installation
1. Clone this repo
```
git clone https://github.com/basv1996/real-time-web-2122.git
```
2. Make sure you're in the right folder
```
cd real-time-web-2122
```
3. Install dependencies
```
npm install
```
4. Start the application
```
npm start
```
5. For development you can run it in dev mode
```
npm run dev
```

---

## Ideation

For this project I skecthed multiple ideas for me to create. I Thought about a hangman game, a movie guesser game, catch the pokemon game and a guess that pokemon game. I decided to go for the `who's that pokemon` game.

## Who's that pokemon?
![Who's that pokemon](https://user-images.githubusercontent.com/15678757/165141741-c1799201-2e62-4ef6-8c73-1bbdd87bcf63.png)

### Hangman
![Hangman game](https://user-images.githubusercontent.com/15678757/165140720-a41e474b-b5a6-4f3d-a3d7-215fc0ac698e.png)

## Catch the pokemon
![catch the pokemon](https://user-images.githubusercontent.com/15678757/165140887-8b1c86ab-f580-40da-a3a1-d9d007ef4b52.png)

## Movie guesser
![movie guesser](https://user-images.githubusercontent.com/15678757/165141278-71f39862-e57e-4f0d-ac2a-b768f5eed1cf.png)

## Movie guesser chat bot
![Movie guesser chat bot](https://user-images.githubusercontent.com/15678757/165141402-3fd870dc-d8d6-4ff7-bb40-5bf5bd7cc281.png)

## Data Model




## API
The API I chose is the pokemon API. With this API I can get all the pokemons with their sprite and statistics. 

## :clipboard:MOSCOW feature list
#### Must have:
* [ ] Chatting with display name
* [ ] Guess correct with feedback
* [ ] Loading API data


#### Should have: 
* [ ] Chat history
* [ ] Scoreboard
* [ ] UI-stack
* [ ] Next question button


 
#### Could have:
* [ ] Chat timestamps
* [ ] Detailed stats
* [ ] Profile authentication
* [ ] Give me a hint button


#### Would have:


---

## :package: NPM packages
Discriptions are from the websites given or written by me when not existing.

### Dotenv
[Dotenv](https://www.npmjs.com/package/dotenv) is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

### EJS
[Ejs](https://www.npmjs.com/package/ejs) is a template engine used to create dynamic web pages.

### Express
[Express](https://www.npmjs.com/package/express) is a small framework used to create node servers, making routing easier to setup and use.

### Nodemon
[Nodemon](https://www.npmjs.com/package/nodemon) is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

### Socket.IO
[ Socket.IO](https://www.npmjs.com/package/socket.io) enables real-time bidirectional event-based communication

### Node-Fetch
[ Node Fecth](https://www.npmjs.com/package/node-fetch) A light-weight module that brings Fetch API to Node.js.

<!-- 
### EsLint
[ESLint](https://www.npmjs.com/package/eslint) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code -->

## Synopsis
- Course: Real-Time Web
- Course Coordinator: Justus Sturkenboom ([@ju5tu5](https://github.com/ju5tu5))
- Minor Coordinator(s): Joost Faber ([@joostf](https://github.com/joostf)) Koop Reynders ([@KoopReynders](https://github.com/KoopReynders))
- Lecturers: Shyanta Vleugel ([@shyanta](https://github.com/shyanta)) & Justus Sturkenboom ([@ju5tu5](https://github.com/ju5tu5))
- Student Assistants: Daan Korver ([@daankorver](https://github.com/DaanKorver))
- Credit: 3 ECTS credits
- Academic year: 2021-2022
- Programme: Communication and Multimedia Design (full time bachelor)
- Language: Dutch instructions and English resources

## Description
During this course you will learn how to build a real-time application. You will learn techniques to setup an open connection between the client and the server. This will enable you to send data in real-time both ways, at the same time.

## Communication
- [Github](https://github.com/cmda-minor-web/real-time-web-2122)
- [Microsoft Teams](https://teams.microsoft.com/l/channel/19%3a2b5ac900b14c4b68a31dc5dbb380dcbe%40thread.tacv2/06%2520-%2520Real%2520Time%2520web)
- [Brightspace](https://dlo.mijnhva.nl/d2l/home/324147)

If you have questions:
- [Look at the additional resources]()
- [Use a search engine like startpage](https://www.startpage.com/)
- [Ask questions on MS Teams](https://teams.microsoft.com/l/channel/19%3a2b5ac900b14c4b68a31dc5dbb380dcbe%40thread.tacv2/06%2520-%2520Real%2520Time%2520web) (please help each other!)
- [Contact a student-assisstant](#synopsis)
- [Contact a lecturer](#synopsis)

## Goals
After finishing this program you can:
- _deal with real-time complexity;_
- _handle real-time client-server interaction;_
- _handle real-time data management;_
- _handle multi-user support._

## Grading
Your efforts will be graded using a single point rubric (see below). You will have to pass the criterion (centre column) to pass the course. During the test you will be consulted and will be given feedback on things we think deficient and things we think are an improvement on the criterion.

| Deficiency | Criterion | Improvement |
|:--|:--|:--|
|  | *Project* Your app is working and published on Heroku. Your project is thoroughly documented in the `README.md` file in your repository. Included are a description of the data-lifecycle, real-time events and external data source used by your app. |  |
|  | *Complexity* You’ve implemented enough real-time functionality for us to test your comprehension of the subject. A lot of functionality is self-written. You are able to manipulate online examples live. |  |
|  | *Client-server interaction* By interacting with the app, a user can influence the data model of the server in real time by directly modifying data OR by influencing API requests between server and source. The student has set up the data manipulations. |  |
|  | *Data management* The server maintains a data model and each client is continuously updated with the correct data. |  |
|  | *Multi-user support* Multiple clients can connect to the server. Interaction works as expected and is not dependent on the number of clients. You can explain how your app approaches this. |  |

## Programme

### Daily Schedule
To keep things simple we use a daily schedule that will be used during normal course days (monday/tuesday). We make exceptions for fridays, on these days a different schedule will be given.

| Time | Who | Activity |
|:--|:--|:--|
| *~09:00* | *(Shyanta, Justus)* | *Standup* |
| 09:30 | Tribe *+(Shyanta, Justus)* | Talk with crucial information (make sure you attend!) |
| 11:00 | Tribe | Work on the (day)assignment |
|  | Team 1 *+(Shyanta)* | Standup |
|  | Team 2 *+(Justus)* | Standup |
| 11:20 | Team 3 *+(Shyanta)* | Standup |
|  | Team 4 *+(Justus)* | Standup |
| 11.40 | Team 5 *+(Shyanta)* | Standup |
|  | Team 6 *+(Justus)* | Standup |
| 12.00 | Team 7 *+(Shyanta)* | Standup |
|  | Team 8 *+(Justus)* | Standup |
| 12.20 | Team 9 *+(Shyanta)* | Standup |
|  | Team 20 *+(Justus)* | Standup |
| 13:00 | Tribe *+(Daan, Justin)* | Continue work on the (day)assignment |
| 16:00ish | Tribe | Wrapup |

### Week 1 - Getting a grip
Goal: Build and deploy a simple but unique real-time app

#### Tuesday 19 April 
**Talk subjects:** Hit the ground running... [(slides)](https://docs.google.com/presentation/d/1Z-zOIDvFB0P2qGHV0F74n9T4kprgybJ_8GYU-1MaKfM/edit?usp=sharing) Course objective and explanation of the assignment, examples from last year, explanation of real-time, (live coded) bare bone chat app and deployment on Heroku.\
**Day assignment:** [(assignment)](./course/week-1.md#assignment-1-make-it-so) Make it so *(as a team)*: Implement (code/style/discuss/deploy) basic chat (or other realtime) functionality on your teampage!

#### Friday 22 April
**Talk subjects:** My first realtime web app! [(slides)](https://docs.google.com/presentation/d/18eftO3epzIXDjdwl3cn5Wq99fkQYCUnExUqq9P72A3k/edit?usp=sharing) Short recap, (local) data management, using (wire) flows for realtime web apps, (live coded) multi-user woordzoeker.\
**Day assignment:** [(assignment)](./course/week-1.md#assignment-2-make-it-so) Make it so *(individually)*. i) Create (code/style/discuss/deploy) a chat app (or other realtime functionality) based on the examples and ii) add your own unique feature!

### Week 2 - Sockets and data
Goal: Store, manipulate and share data between server-client   

#### Monday 25 April
**Talk subjects:** Data driven development?! [(slides)](https://docs.google.com/presentation/d/1WC1DxkQm2eUCTQp7dEfv0cTVMK7zlg3der0P0qP7S5I/edit?usp=sharing) Feedback about last week, final assignment and conditions (rubric), explanation of data management, (live coded) Long polling vs Websockets. \
**Day assignment:** [(assignment)](./course/week-2.md#assignment-1-proof-of-concept) (Proof of) Concept *(individually)*. i) Create a (3 > 1) concept based on existing data from an API and ii) map this data using modelling techniques.

#### Tuesday 26 April
**Talk subjects:** Above all else, show the data. [(slides)](https://docs.google.com/presentation/d/1tW4klrDjt1AfWte311uKkfQYwaHwokzQ-ue3a4VphqA/edit?usp=sharing) Securing real-time web apps, offline support, the publication/subscription model and (case study) Quek!\
**Day assignment:** [(assignment)](./course/week-2.md#assignment-2-proof-of-concept) Proof of concept *(individually)*: i) Create (code/style/discuss/deploy) part of the core functionality for your concept and ii) show the  corresponding data lifecycle diagram.

#### Friday 29 April
Instead of our talk we will have a [peer review session](./course/peer-review.md). You will read, comment and fire issues on each others code. Doing this is really good for your programming insight and helps others refining/refactoring their code.

| Time | Who | Activity |
|:--|:--|:--|
| | Tribe *+(Shyanta, Justus)* | Peer review |

### Week 3 - Dealing with multiple users
Goal: Handle data sharing and multi-user support 

#### Monday 9 May
**Talk subjects:** Roll your own... [(slides) ](https://docs.google.com/presentation/d/1Cx9qCo8QQXH5Btbtwg0L61so-wn2OxFQZdphIhbumQk/edit?usp=sharing) Data management, the functional programming trinity (map, filter and reduce). OAuth?!
**Day assignment:** [(assignment)](./course/week-3.md#assignment-1-data-management)

#### Tuesday 10 May
**Talk subjects:** Not ignoring the UI-Stack! [(slides)](https://docs.google.com/presentation/d/1ACuUJ-B19hgFN2CCTYH8ClN0WD69ok8ZVnkRGbU0FjA/edit?usp=sharing). Usability, feedback, feedforward etc. in real-time web apps, (case study) postNL loader and FAQ.
**Day assignment:** [(assignment)](./course/week-3.md#assignment-2-user-testing)

#### Friday 13 May
We will have our final [peer review session](./course/peer-review.md). You will read, comment and fire issues on each others code. Doing this helps others dotting the i’s on their project.

| Time | Who | Activity |
|:--|:--|:--|
| | Tribe *+(Shyanta, Justus)* | Peer review |
| | Tribe *+(Shyanta, Justus)* | Finalize your assignment |
| 16.00 | Tribe *+(Shyanta, Justus)* | (drinks?!) |

# Credits
- Shyanta Vleugel ([@shyanta](https://github.com/shyanta))  
- Justus Sturkenboom ([@ju5tu5](https://github.com/ju5tu5))
- Daan Korver ([@daankorver](https://github.com/DaanKorver))


<!-- Here are some hints for your project! -->

<!-- Start out with a title and a description -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- ☝️ replace this description with a description of your own work -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- This would be a good place for your data life cycle ♻️-->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- We all stand on the shoulders of giants, please link all the sources you used in to create this project. -->

<!-- How about a license here? When in doubt use GNU GPL v3. 📜  -->
