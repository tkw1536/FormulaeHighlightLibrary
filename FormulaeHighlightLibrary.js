/*
	ForumlaeHighlightLibrary
	A simple stand-alone library to search and Highlight Math Forumals and text
	
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
*/


/**
 * Forumlae Highlighting Library Functions
 * @namespace FHL
 */
var FHL = {
	/**
	 * @function getElementByXMLId
	 * @memberof FHL
	 * 
	 * Finds an element By Its xml:id attribute
	 * @param {string} id Id to look for
	 * @param {HTMLElement} [doc = document] Root node to start searching at. 
	 * @returns {HTMLElement|undefined} The DOM Node with the given attributes or undefined. 
	 */
	"getElementByXMLId": function(id, doc){
		var doc = (typeof doc == "undefined")?document:doc; 

		var items = doc.getElementsByTagName("*");
		for (var i = items.length; i--;) {
		    try{
		    	if(items[i].getAttribute("xml:id") == id){
		    		return items[i]; 
		    	}
		    } catch(e){}; 
		}
		return undefined;
	},
	/**
	 * Finds an element by its simply XPath (something like /*[1]/*[3]/*[2]/*[2]/*[2]/*[2]/*[2])
	 * @param {string} xpath Simple XPath to element. 
	 * @param {HTMLElement} [doc = document] Root node to start at. 
	 * @returns {HTMLElement|undefined} The element which is located at the given XPath, or undefined if it does not exist. 
	 */
	"getElementBySimpleXPath": function(xpath, doc){
		var doc = (typeof doc == "undefined")?document:doc; 

		xpath = xpath
		.split("/").join("")
		.split("[").join("")
		.split("]").join("")
		.split("*")

		xpath.shift();
		xpath = xpath.map(function(e){
			return parseInt(e) - 1;//xpath is one-based
		})

		while(xpath.length > 0){
			var n = xpath.shift(); 
			try{
				doc = doc.children[n]; 
			} catch(e){
				return undefined; 
			}
		}

		return doc;
	},
	/**
	 * Gets the semantic MathML Element. 
	 * @param {string} xpath Simple XPath to element. 
	 * @param {HTMLElement} [doc = document] Root node to start at. 
	 * @returns {HTMLElement|undefined} The element which is located at the given XPath, or undefined if it does not exist. 
	 */
	"getSemantic": function(xpath, doc){
		var doc = (typeof doc == "undefined")?document:doc;
		var base = doc;
		base = base.getElementsByTagName("m:semantics")[0] || base.getElementsByTagName("semantics")[0];
		base = base.getElementsByTagName("m:annotation-xml")[0] || base.getElementsByTagName("annotation-xml")[0];

		var annottree = base;
		for(var i=0;i<base.length;i++){
			if(base[i].getAttribute("encoding") == "MathML-Content"){
				annottree = base[i];
				break;
			}
		}

		return FHL.getElementBySimpleXPath(xpath, annottree); 
	},
	/**
	 * Gets the presentation MathML Element. 
	 * @param {string} xpath Simple XPath to element. 
	 * @param {HTMLElement} [doc = document] Root node to start at. 
	 * @return 
	 */
	"getPresentation": function(xpath, doc){
		var doc = (typeof doc == "undefined")?document:doc;
		var semantics = FHL.getSemantic(xpath, doc);
		
		if(typeof semantics == "undefined"){
			return undefined; 
		} else {
			return FHL.getElementByXMLId(semantics.getAttribute("xref"), doc);
		}
	}
}
