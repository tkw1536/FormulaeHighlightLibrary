# What's this about?

This is a really simple highlighting Library for Math Formulaes (and text). It was opriginally witten for use with [MathWebSearch](http://search.mathweb.org/). 

# Simple Example 

If we want to highlight a specific part of a forumular you can: 

```js
var element = FHL.getPresentation("/*[1]/*[3]/*[2]/*[2]/*[2]/*[2]/*[2]", FHL.getElementByXMLId("m19.1")); 
element.setAttribute("mathcolor", "blue"); 
```

API documentation can be found under ```doc/```. 

A tutorial / demo can be found in [index.html](index.xhtml) or online at http://pages.w1536.tk/FormulaeHighlightLibrary/

# License

```
The MIT License (MIT)

Copyright (c) 2014 Tom Wiesing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```