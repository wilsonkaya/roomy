
## Roomy ##
![Wireframe](http://imgur.com/uMeJbDX)
Link for picture: http://imgur.com/uMeJbDX

## Technologies ##
The technologies that I have used in front-end are HTML, JQuery, CSS and Handlebars. The main frame of the application is created with plain HTML. The browser template that is provided for this project has a Bootstrap 3, to implement cards I have utilized Bootstrap 4. Api calls are made by an ajax request. The data from api-server is rendered by handlebars.

## General Approach ##
After creating my api server and making sure that it was fully functioning, I started working in the front-end. For creating complete crud action of a specific table in the api, I started from the get request. My first step was always creating the necessary component to make a click event and with the help of the JQuery my app listens for events and passes the necessary data into promises. In each step of reciving data or sending it I always used “console.log” to make sure that I was in the right path. In terms of making a successful api request, promises deliver the data to ui to render them with handlebars. Finally, the data that are rendered by handlebars are injected back into certain tags.

## Installation instructions ##
Dependencies are installed with Npm install.

## User Stories ##
* As a user, I want to create an account so that I can share information of the room that I want to rent.
* As a user I would like to create a rental profile so that I can publish it to find tenants.
* As a user, I want to update rental profile so that I can deliver the most recent data of the rooms for room seekers.
* As a user, I want to delete my rental profile when rentals are not available or I don’t want to rent them anymore.
* As a User I want my room profile to be seen with all other rentals, so that it can be seen by people that are looking for a room
* As a User I want to see the list of my room profiles when I am logged in so that If I want to make any changes it will be easier.
* As a user I would like to search with name of the city so that I can find more related data.
* As a user I  want to see my comments so that I can read them
* As a user I want to comment on rentals so  that I can share my experience on rentals
* As a user I want to update my comments so that I can rephrase them or correct them
* As user I want to delete my comments when I believe they are not relevant  so that they no longer exist.

## Proposed architecture ##
* As a user, I want to add pictures of rentals so that tenants can have a better idea on rental.
* As a user, I want to add the address of a rental so that I can pin my location on google maps.
* http://imgur.com/a/YkZOg

## Major Hurdles ##
There are two main points that I had a really hard time overcoming. An index request for reviews of a rental must be done according to rental id that is stored on reviews. Additionally, I needed to capture the id and pass it to my index call.
The second major issue that I had was caused because of not separating concerns. I tried making two ajax calls by a single click event. However, I overcame the issue by creating a tag for each event.

## WIREFRAME ##
http://imgur.com/a/c8LA3
http://imgur.com/a/Wazbk
