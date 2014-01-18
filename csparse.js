var cs={};

cs.parse = function(cssString){
    var separateEachSelector = cssString.replace(/\n/g,'').split('}')
    
    separateEachSelector.pop(); //Last element will be //'' or \n
    var cssObj = {}
     for(var i=0;i<separateEachSelector.length;i+=1) {
     	var sepSelectorAndData = separateEachSelector[i].split('{');
    	var selector = sepSelectorAndData[0].trim();
    	var fields = sepSelectorAndData[1].trim()

     	var individualFields = fields.split(';');
	 individualFields.pop();
     	cssObj[selector] = {};
	
     	for(var j=0;j<individualFields.length;j+=1){
     	    var sepPropAndValue = individualFields[j].split(':');
     	    cssObj[selector][sepPropAndValue[0]] = sepPropAndValue[1];
     	}
     }
    return cssObj
}


CS.stringify = function(cssObject){
    var cssString = '';
    for(var selector in cssObject){
	var mainObject = cssObject[selector]
	cssString += selector + ' {\n';
	for(var field in mainObject){
	    field + ':' + mainObject[field] + '\n;';
	}
	cssString+='}\n';
    }
    return cssString;
}
