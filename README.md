# Animated Effects

This repo contains a demo Electricomic that demonstrates a few animated effects

* Flipbook to cycle through multiple images inside a single panel

* Transition to support changes in size, position and/or rotation

## To use the effects code in your own projects

Sorry, there's no support for this in the generator tool (yet!) You'll need to generate your project without animations and edit the code by hand afterwards, for now.

* generate as normal

* unzip the generated electricomic

* add the files comic2.js and transforms.js in the js folder

* edit index.html as follows

  * replace the script tag for comic.js with comic2.js

  * add a script tag for transforms.js afterwards

  * add data-transform attributes to the ec-panel tags 