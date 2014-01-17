CsParse
=======

A simple CSS parser to convert CSS into JavaScript objects.

I noticed I kept rewriting this code.  Might as well make a library out of it.

Usage
=====
To install the plugin:

```
<script src="/path/to/csparse.js"></script>
```

After that, using CsParse is pretty simple.

```
var cssString = 'body {color: red;}'

var cssObj =cs.parse(cssString);
```

NOTES
=====
all fields in the CSS must end with a ```;```, including the last line.  This is the way it should be.  This is the way it will always be. 
