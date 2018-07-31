# How to start the app
* Create an empty folder somewhere (preferably named 'db'/'database' in a folder one level before this project)
* Open a Command Prompt where you installed mongodb in bin (i.e. C:\Program Files\MongoDB\Server\3.6\bin)
* Type in mongod --dbpath="path\to\your\project\db\folder" (i.e. mongod --dbpath="D:\Stagii pe Bune Front-End\db")
* Open a git bash/ command prompt/ visual studio code terminal in the root of this project
* Type in npm run start
* Open a browser and go to localhost:3000
* Have fun breaking the app :D

## How to get to a different branch
* Open a git bash/ command prompt/ visual studio code terminal in the root of this project
* If you have changes that you want to discard:
  * git add .
  * git reset --hard HEAD
* If you have changes that you want to keep for later
  * git add .
  * git stash
* Type in git fetch
* Type in git checkout workshop-step4-stable
* You are now in the same stable step as we got at the end of the workshop!
* Have fun playing around and tinkering!

## Requirements
* Browser
* Code Editor (VScode, Sublime, other...)
* Node.js & npm
* MongoDB
* git