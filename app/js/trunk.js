// $(".ellipsiss").each(function(index,value)
//   { 

        
//        	/**
//        	 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
//        	 * 
//        	 * @param text The text to be rendered.
//        	 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "14px verdana").
//        	 * 
//        	 * @see http://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
//        	 */
//        	function getTextWidth(text, font) {
//        	    // if given, use cached canvas for better performance
//        	    // else, create new canvas
//        	    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
//        	    var context = canvas.getContext("2d");
//        	    context.font = font;
//        	    var metrics = context.measureText(text);
//        	    return metrics.width;
//        	};

//        	console.log(getTextWidth("hola", ""));  // close to 86
//   });