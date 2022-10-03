# New York Times RSS Reader

Reading NYT Technology RSS feeds with a graceful UI

## Features
- Spring boot backend for parsing and caching the data from RSS feeds
- React/Angular frontends built with MaterialUI
- Data is represented as a list of cards
- Localization (Google Translate API) is available only on the Angular frontend

## Prerequisites
- Java 8+
- Maven
### Frontend(dev purposes only) prerequisites
- Node16

## Quickstart

- run `mvn spring-boot:run` and wait for app to start running
- http://localhost:8080/frontend-angular will route you to the angular UI
- http://localhost:8080/frontend-react will route you to the react UI


Frontends are already built and inside the static resources for spring boot

If you wanna do it manually:

- cd into `frontend-*`
- run `npm install`
- run `npm start` to serve locally

##NOTES:
- URLs are HARDCODED TO LOCALHOST:8080
- the API key used for google translate is not hidden, but will not work for long ;D