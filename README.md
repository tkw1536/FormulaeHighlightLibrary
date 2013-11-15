# FormulaeHighlightLibrary

Really tiny stand-alone library to highlight Subformulae for MWS. 

## API
* `FHL.getPresentation(id, xpath)`: Gets the presentation element referenced by the given Semantics element. 
* `FHL.getSemantics(id, xpath)`: Gets the semantics element specefied by the given id and XPath. 
* `FHL.getElementsByXMlId([root], id)`: Gets an element by its `xml:id` attribute. Optionally only searches from the node `root`. 
* `FHL.getElementBySimpleXPath([root], xpath)`: Gets an element via its simple XPath (i. e. XPaths of the form `/*[1]/*[3]/*[2]/*[2]/*[2]/*[2]/*[2]` ). Optionally starts at `root`. 

## Example

```js
var element = FHL.getPresentation("m19.1", "/*[1]/*[3]/*[2]/*[2]/*[2]/*[2]/*[2]");

element.setAttribute("mathcolor", "blue"); 
```