# Covid-Lite Tracer

The Covid-Lite Tracer is a web-app resource for all things related to Covid-19 built using React, Express, & PostgreSQL (ElephantSQL). It allows the user to see general trends for Canada and individual provinces & territories on the dashboard. The Assesement page provides a list of information resources for Covid self-assessments and province restrictions and guidelines. The user can see recent Covid-19 news on the news page, and click on the "Vaccine Progress" tab to see progress bars on vaccines currently being developed. Upon login, the user can set a 2-week self-isolation timer, and place a location marker on the map by self-reporting. The map displays current health region cases as well as self-report markers. The heat map displays Covid-19 hotspots within the last two weeks.

## Screenshots

!["Default Monday Page"](https://github.com/kevinyang-cyen/scheduler/blob/master/docs/1.PNG?raw=true)
!["Switching Days and Adding an Interview"](https://github.com/kevinyang-cyen/scheduler/blob/master/docs/2.PNG?raw=true)
!["Completed Booking New Interview"](https://github.com/kevinyang-cyen/scheduler/blob/master/docs/3.PNG?raw=true)

## Setup

1. Install Express dependencies with `npm install`.
2. See README file within react-front-end folder to React installation instructions.

## Running Webpack Development Server

```sh
npm start
```