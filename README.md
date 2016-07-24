# Animated Effects

This repo contains a demo Electricomic project that demonstrates a few animated effects. The effects can be added to any Electricomic created by the generator, with a little bit of manual intervention. With the core code added to your project, panel animations can be set up by adding extra attributes to the HTML.

This is all rather experimental at the time of writing, and I've noticed a few rough edges myself just putting the demo together. I cannot guarantee at the moment that the format of the attributes is finalised. Hopefully, I'll just keep adding more options, and if I do need to change any formats, I can add a bit of extra code to preserve backwards compatibility. 

So go ahead and experiment with this, but please don't create a 300-page masterwork that relies exclusively on my fledgling code - yet!

## Effects

* Flipbook to cycle through multiple images inside a single panel, with an option to 

* Transition to support changes in size, position and/or rotation

## To use the effects code in your own projects

Sorry, there's no support for this in the generator tool (yet!) You'll need to generate your project without animations and edit the code by hand afterwards, for now.

* generate the project as normal or use an existing generated project

* unzip the generated electricomic (Windows and Mac - double-clicking in Explorer/Finder ought to do the job. Linux users, I assume you know the drill!) 

* add the files comic2.js and transforms.js in the js folder

* edit index.html as follows

  * replace the script tag for comic.js with comic2.js

  * add a script tag for transforms.js afterwards

  * add data-transform attributes to the ec-panel tags. Unzip this project and have a look at the examples.
  
## Known Issues

* transitions play out first time, but not when you revisit the page (except rotations)

* rotations aren't respecting delay property 
