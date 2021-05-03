# webpack-js-bundle
A boiler-plate project for compiling a js+css source to one bundle file.
The goal of this boiler-plate is to create a framework-less SPA with an injected JS code compiled from an entry-point with modules.

**Usage**
1) *npm install*
2) Change scripts and css on the *src* folder.
3) *npm run build*
4) Check the generated *bundle.js* file on the *dist* folder.
5) Update the *?v=* version number on *dist/index.html* so that browsers will refresh their cache with the new *bundle.js* file.
