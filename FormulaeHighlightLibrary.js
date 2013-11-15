var FHL = {
	"getElementsByXMlId": function(doc, id){
		if(typeof id == "undefined"){
			id = doc; 
			doc = document; 
		}

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
	"getElementBySimpleXPath": function(doc, xpath){
		if(typeof xpath == "undefined"){
			xpath = doc; 
			doc = document; 
		}		
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
	"getSemantics": function(id, xpath){
		var base = FHL.getElementsByXMlId(id); 
		base = base.getElementsByTagName("m:semantics")[0];
		base = base.getElementsByTagName("m:annotation-xml");

		var annottree = base[0]; 
		for(var i=0;i<base.length;i++){
			if(base[i].getAttribute("encoding") == ""){
				annottree = base[i]; 
				break; 
			} 
		}

		return FHL.getElementBySimpleXPath(annottree, xpath); 
	},
	"getPresentation": function(id, xpath){
		var base = FHL.getElementsByXMlId(id);

		var semantics = FHL.getSemantics(id, xpath); 
		if(typeof semantics == "undefined"){
			return undefined; 
		} else {
			return FHL.getElementsByXMlId(base, semantics.getAttribute("xref")); 
		}
	}
}