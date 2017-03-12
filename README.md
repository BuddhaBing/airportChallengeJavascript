# Airport Challenge in Javascript

[![Build Status](https://travis-ci.org/treborb/airportChallengeJavascript.svg?branch=master)](https://travis-ci.org/treborb/airportChallengeJavascript)
[![codecov](https://codecov.io/gh/treborb/airportChallengeJavascript/branch/master/graph/badge.svg)](https://codecov.io/gh/treborb/airportChallengeJavascript)

```
        ______
        _\____\___
= == ==(____MA____)
          \_____\___________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/-----------------'
=    =    =   = = = ===(_________)

```

## [Makers Academy](http://www.makersacademy.com) - Week 5 - Paired Programming Challenge

## Technologies
* [Javascript ES5](https://www.javascript.com/)
* [Jasmine](https://jasmine.github.io/)
* [Grunt](https://gruntjs.com/)
* [NPM](https://www.npmjs.com/)


## Jump To
* [Installation](#install)
* [Usage](#usage)
* [Tests](#tests)

## The Brief

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport and confirm that it has landed

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

Your task is to test drive the creation of a set of classes/modules to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to use a stub to override random weather to ensure consistent test behaviour.

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot takes off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.

## <a name="install">Installation</a>

```sh
$ git clone https://github.com/treborb/airportChallengeJavascript.git
$ cd airportChallengeJavascript
```

## <a name="usage">Usage</a>

```
$ open SpecRunner.html
```

From there, you can open the Chrome developer tools console and issue commands to the app:

#### In the developer console
```javascript
plane = new Plane();
airport = new Airport();
plane.land(airport);
plane.takeoff();
```

There are two ways to run the tests, the first relies on having NPM (Node Package Manager) installed:

```sh
$ npm update
$ grunt jasmine
```

Or to run the tests in the web browser:

```sh
$ open SpecRunner.html
```
