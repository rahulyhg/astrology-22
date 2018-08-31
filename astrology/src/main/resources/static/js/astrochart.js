// ## Settings #############################
(function( astrology ) {
	
	//Scale of symbols	 
	astrology.SYMBOL_SCALE = 1;
	
	astrology.SYMBOL_SCALE1 = 1;
		
	// BG color
	astrology.COLOR_BACKGROUND = "#fff";		 
				
	// Color of planet's symbols
	astrology.POINTS_COLOR = "#000";
	
	// Size of description text next to the planet: angle, retrograde, dignities, ...
	astrology.POINTS_TEXT_SIZE = 8;
	
	// Points strength of lines
	astrology.POINTS_STROKE = 1.8;
		
	// Font color of signs symbols
	astrology.SIGNS_COLOR = "#000"; 
	
	// Signs strength of lines
	astrology.SIGNS_STROKE = 1.5;
	
	// Chart margin
	astrology.MARGIN = 50; //px
		
	// Chart Padding  
	astrology.PADDING = 18; //px
	
	// Module wrapper element ID
	astrology.ID_CHART = "astrology";
	
	// Radix chart element ID
	astrology.ID_RADIX = "radix";
	
	// Transit chart element ID
	astrology.ID_TRANSIT = "transit";
	
	// Aspects wrapper element ID
	astrology.ID_ASPECTS = "aspects";
	
	// Aspects wrapper element ID
	astrology.ID_POINTS = "planets"; 
	
	// Signs wrapper element ID
	astrology.ID_SIGNS = "signs"; 
	
	// Circles wrapper element ID
	astrology.ID_CIRCLES = "circles";
	
	// Axis wrapper element ID
	astrology.ID_AXIS = "axis";
	
	// Cusps wrapper element ID
	astrology.ID_CUSPS = "cusps";
		
	// Cusps wrapper element ID
	astrology.ID_RULER = "ruler";
	
	// Background wrapper element ID
	astrology.ID_BG = "bg";
	
	// Color of circles in charts
	astrology.CIRCLE_COLOR = "#333";
	
	// Circles strength of lines
	astrology.CIRCLE_STRONG = 2;
	
	// Color of lines in charts
	astrology.LINE_COLOR = "#333";
	
	// radius / INDOOR_CIRCLE_RADIUS_RATIO
	astrology.INDOOR_CIRCLE_RADIUS_RATIO = 2;
	
	// radius - radius/INNER_CIRCLE_RADIUS_RATIO
	astrology.INNER_CIRCLE_RADIUS_RATIO = 8;
	
	// ( radius / astrology.INNER_CIRCLE_RADIUS_RATIO ) / astrology.RULER_RADIUS 
	astrology.RULER_RADIUS = 4;
		
	// Points
	astrology.SYMBOL_SUN = "Sun";
	astrology.SYMBOL_MOON = "Moon";
	astrology.SYMBOL_MERCURY = "Mercury";
	astrology.SYMBOL_VENUS = "Venus";
	astrology.SYMBOL_MARS = "Mars";
	astrology.SYMBOL_JUPITER = "Jupiter";
	astrology.SYMBOL_SATURN = "Saturn";
	astrology.SYMBOL_URANUS = "Uranus";
	astrology.SYMBOL_NEPTUNE = "Neptune";
	astrology.SYMBOL_PLUTO = "Pluto";
	astrology.SYMBOL_CHIRON = "Chiron";
	astrology.SYMBOL_LILITH = "Lilith";
	astrology.SYMBOL_NNODE = "NNode";
	
	// Axis
	astrology.SYMBOL_AS = "Asc";
	astrology.SYMBOL_DS = "Des";
	astrology.SYMBOL_MC = "Mc";
	astrology.SYMBOL_IC = "Ic";
		
	astrology.SYMBOL_AXIS_FONT_COLOR = "#333";
	astrology.SYMBOL_AXIS_STROKE = 1.6;
		
	// Cusps
	astrology.SYMBOL_CUSP_1 = "1";
	astrology.SYMBOL_CUSP_2 = "2";
	astrology.SYMBOL_CUSP_3 = "3";
	astrology.SYMBOL_CUSP_4 = "4";
	astrology.SYMBOL_CUSP_5 = "5";
	astrology.SYMBOL_CUSP_6 = "6";
	astrology.SYMBOL_CUSP_7 = "7";
	astrology.SYMBOL_CUSP_8 = "8";
	astrology.SYMBOL_CUSP_9 = "9";
	astrology.SYMBOL_CUSP_10 = "10";
	astrology.SYMBOL_CUSP_11 = "11";
	astrology.SYMBOL_CUSP_12 = "12";
	
	// Cusps strength of lines
	astrology.CUSPS_STROKE = 1;
	astrology.CUSPS_FONT_COLOR = "#000";	
	
	//Signs
	astrology.SYMBOL_ARIES = "Aries";
	astrology.SYMBOL_TAURUS = "Taurus";
	astrology.SYMBOL_GEMINI= "Gemini";
	astrology.SYMBOL_CANCER = "Cancer"; 
	astrology.SYMBOL_LEO = "Leo"; 
	astrology.SYMBOL_VIRGO = "Virgo"; 
	astrology.SYMBOL_LIBRA = "Libra";  
	astrology.SYMBOL_SCORPIO = "Scorpio";  
	astrology.SYMBOL_SAGITTARIUS = "Sagittarius";
	astrology.SYMBOL_CAPRICORN = "Capricorn"; 
	astrology.SYMBOL_AQUARIUS = "Aquarius"; 
	astrology.SYMBOL_PISCES = "Pisces";
	astrology.SYMBOL_SIGNS = [astrology.SYMBOL_ARIES, astrology.SYMBOL_TAURUS, astrology.SYMBOL_GEMINI, astrology.SYMBOL_CANCER, astrology.SYMBOL_LEO, astrology.SYMBOL_VIRGO, astrology.SYMBOL_LIBRA, astrology.SYMBOL_SCORPIO, astrology.SYMBOL_SAGITTARIUS, astrology.SYMBOL_CAPRICORN, astrology.SYMBOL_AQUARIUS, astrology.SYMBOL_PISCES];
			 
	// http://www.rapidtables.com/web/color/html-color-codes.htm
	astrology.COLOR_ARIES = "red";
	astrology.COLOR_TAURUS = "#B8860B";
	astrology.COLOR_GEMINI= "#007bff";
	astrology.COLOR_CANCER = "rgb(129, 216, 208)"; 
	astrology.COLOR_LEO = "red"; 
	astrology.COLOR_VIRGO = "#B8860B"; 
	astrology.COLOR_LIBRA = "#007bff";  
	astrology.COLOR_SCORPIO = "rgb(129, 216, 208)";  
	astrology.COLOR_SAGITTARIUS = "red";
	astrology.COLOR_CAPRICORN = "#B8860B"; 
	astrology.COLOR_AQUARIUS = "#007bff"; 
	astrology.COLOR_PISCES = "rgb(129, 216, 208)"; 	        	
	astrology.COLORS_SIGNS = [astrology.COLOR_ARIES, astrology.COLOR_TAURUS, astrology.COLOR_GEMINI, astrology.COLOR_CANCER, astrology.COLOR_LEO, astrology.COLOR_VIRGO, astrology.COLOR_LIBRA, astrology.COLOR_SCORPIO, astrology.COLOR_SAGITTARIUS, astrology.COLOR_CAPRICORN, astrology.COLOR_AQUARIUS, astrology.COLOR_PISCES];
	
	// 0 degree is on the West 
	astrology.SHIFT_IN_DEGREES = 180;
	
	// No fill, only stroke
	astrology.STROKE_ONLY = false;
	
	// Planets collision circle radius for astrology.SYMBOL_SCALE = 1
	// Scaling changes the collision radius 
	astrology.COLLISION_RADIUS = 10; //px
	
	// Aspects	
	astrology.ASPECTS = { 
		"conjunction":{"degree":60, "orbit":20, "color":"#00FF00"}, 
		"square":{"degree":90, "orbit":13, "color":"red"}, 
		"trine":{"degree":120, "orbit":13, "color":"#00FF00"},
		"opposition":{"degree":180, "orbit":11, "color":"red"}
		};	
	
	// Dignities
	astrology.DIGNITIES_RULERSHIP = "r";			
	astrology.DIGNITIES_DETRIMENT = "d";			
	astrology.DIGNITIES_EXALTATION = "e";			
	astrology.DIGNITIES_EXACT_EXALTATION = "E";		
	astrology.DIGNITIES_FALL = "f";	
	
	// Source: Aleister Crowley
	astrology.DIGNITIES_EXACT_EXALTATION_DEFAULT = [
		{"name":"Sun", "position":19, "orbit":8}, // 19 Arise
		{"name":"Moon", "position":33, "orbit":8}, //3 Taurus
		{"name":"Mercury", "position":155, "orbit":6}, //15 Virgo
		{"name":"Venus", "position":357, "orbit":6}, //27 Pisces
		{"name":"Mars", "position":298, "orbit":6}, //28 Capricorn
		{"name":"Jupiter", "position":105, "orbit":5}, //15 Cancer
		{"name":"Saturn", "position":201, "orbit":5}, //21 Libra
		{"name":"NNode", "position":63, "orbit":4}, //3 Geminy
	];
	
	// 0 - 4
	astrology.ANIMATION_CUSPS_ROTATION_SPEED = 2;
	
	astrology.DEBUG = false;
	astrology.TIP = null;
	
									       	      
}( window.astrology = window.astrology || {}));
// ## SVG #####################
(function( astrology ) {
	
	var context;
		
	/**
	 * SVG tools.
	 * 
	 * @class
	 * @public
	 * @constructor
	 * @param {String} elementId - root DOM Element 
	 * @param {int} width
	 * @param {int} height 
	 */
	astrology.SVG = function( elementId, width, height){		
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");		
		svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
		svg.setAttribute('style', "position: relative; overflow: hidden;");		
		svg.setAttribute('version', "1.1");						 				
		svg.setAttribute('width', width);
		svg.setAttribute('height', height);									
		document.getElementById( elementId ).appendChild( svg );
		
		var wrapper = document.createElementNS(svg.namespaceURI, "g");
		wrapper.setAttribute('id', astrology.ID_CHART);
		svg.appendChild( wrapper );
						
		this.DOMElement = svg;				
		this.root = wrapper;
		this.width = width;
		this.height = height;
						
		context = this;
	};	
	
	/**
	 * Get constellation Id of Chart . 
	 * 
	 * @param {String} constellation
	 * 
	 * @return {String} id
	 */
	astrology.SVG.prototype.addIdByConstellation = function(constellation) {
		return "astrology-constellation-" + constellation;
	}
	
	/**
	 * Get a required symbol. 
	 * 
	 * @param {String} name
	 * @param {int} x
	 * @param {int} y
	 * 
	 * @return {SVG g}
	 */
	astrology.SVG.prototype.getSymbol = function( name, x, y){		
		
		switch(name) {
			case astrology.SYMBOL_SUN:		        
		        return sun( x, y);		        
		        break;
		    case astrology.SYMBOL_MOON:		        
		        return moon( x, y);		        
		        break;
		   case astrology.SYMBOL_MERCURY:		        
		        return mercury( x, y);		        
		        break;     
		    case astrology.SYMBOL_VENUS:		        
		        return venus( x, y);		        
		        break;	
		    case astrology.SYMBOL_MARS:		        
		        return mars( x, y);		        
		        break;
		    case astrology.SYMBOL_JUPITER:		        
		        return jupiter( x, y);		        
		        break;
		    case astrology.SYMBOL_SATURN:		        
		        return saturn( x, y);		        
		        break; 
		    case astrology.SYMBOL_URANUS:		        
		        return uranus( x, y);		        
		        break;
		    case astrology.SYMBOL_NEPTUNE:		        
		        return neptune( x, y);		        
		        break;
		    case astrology.SYMBOL_PLUTO:		        
		        return pluto( x, y);		        
		        break;
		    case astrology.SYMBOL_CHIRON:		        
		        return chiron( x, y);		        
		        break;
		    case astrology.SYMBOL_LILITH:		        
		        return lilith( x, y);		        
		        break;
		    case astrology.SYMBOL_NNODE:		        
		        return nnode( x, y);		        
		        break;
		    case astrology.SYMBOL_ARIES:		        
		        return aries( x, y);		        
		        break; 
		    case astrology.SYMBOL_TAURUS:		        
		        return taurus( x, y);		        
		        break;
		    case astrology.SYMBOL_GEMINI:		        
		        return gemini( x, y);		        
		        break;
		    case astrology.SYMBOL_CANCER:		        
		        return cancer( x, y);		        
		        break;
		    case astrology.SYMBOL_LEO:		        
		        return leo( x, y);		        
		        break;
		    case astrology.SYMBOL_VIRGO:		        
		        return virgo( x, y);		        
		        break;
		    case astrology.SYMBOL_LIBRA:		        
		        return libra( x, y);		        
		        break;
		    case astrology.SYMBOL_SCORPIO:		        
		        return scorpio( x, y);		        
		        break;
		    case astrology.SYMBOL_SAGITTARIUS:		        
		        return sagittarius( x, y);		        
		        break;
		    case astrology.SYMBOL_CAPRICORN:		        
		        return capricorn( x, y);		        
		        break;
		    case astrology.SYMBOL_AQUARIUS:		        
		        return aquarius( x, y);		        
		        break; 
		    case astrology.SYMBOL_PISCES:		        
		        return pisces( x, y);		        
		        break;		        
		    case astrology.SYMBOL_AS:		        
		        return ascendant( x, y );		        
		        break;		    
		    case astrology.SYMBOL_DS:		        
		        return descendant( x, y );		        
		        break;
		    case astrology.SYMBOL_MC:		        
		        return mediumCoeli( x, y );		        
		        break;
		    case astrology.SYMBOL_IC:		        
		        return immumCoeli( x, y );		        
		        break;	
		    case astrology.SYMBOL_IC:		        
		        return immumCoeli( x, y );		        
		        break;		    
		    case astrology.SYMBOL_CUSP_1:		        
		        return number1( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_2:		        
		        return number2( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_3:		        
		        return number3( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_4:		        
		        return number4( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_5:		        
		        return number5( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_6:		        
		        return number6( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_7:		        
		        return number7( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_8:		        
		        return number8( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_9:		        
		        return number9( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_10:		        
		        return number10( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_11:		        
		        return number11( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_12:		        
		        return number12( x, y );		        
		        break; 		                                                                                              	
		    default:
		    	var unknownPoint = this.circle(x, y, 8);
		    	unknownPoint.setAttribute("stroke", "#ffff00");		 
				unknownPoint.setAttribute("stroke-width", 1);
		    	unknownPoint.setAttribute("fill", "#ff0000");		    							    			    			    			    		
		    	return unknownPoint;	 
		}			
	};
	
	/*
	 * Sun path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVG g}
	 */
	function sun( x, y ){
		
		// center symbol
		var xShift = -1; //px						
		var yShift = -8; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
					
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
						
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.18182,0.727268 -2.181819,1.454543 -1.454552,2.18182 -0.727268,2.181819 0,2.181819 0.727268,2.181819 1.454552,2.18182 2.181819,1.454544 2.18182,0.727276 2.18181,0 2.18182,-0.727276 2.181819,-1.454544 1.454552,-2.18182 0.727268,-2.181819 0,-2.181819 -0.727268,-2.181819 -1.454552,-2.18182 -2.181819,-1.454543 -2.18182,-0.727268 -2.18181,0 m 0.727267,6.54545 -0.727267,0.727276 0,0.727275 0.727267,0.727268 0.727276,0 0.727267,-0.727268 0,-0.727275 -0.727267,-0.727276 -0.727276,0 m 0,0.727276 0,0.727275 0.727276,0 0,-0.727275 -0.727276,0");				
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);					
			node.setAttribute("fill", "none");
			wrapper.appendChild(node);
																	
		return wrapper;
	};
	
	/*
	 * Moon path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function moon( x, y ){
		
		// center symbol
		var xShift = -2; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " a 7.4969283,7.4969283 0 0 1 0,14.327462 7.4969283,7.4969283 0 1 0 0,-14.327462 z");				
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Mercury path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function mercury( x, y ){
		
		// center symbol
		var xShift = -2; //px						
		var yShift = 7; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + x + ", " + y + " 4.26011,0 m -2.13005,-2.98207 0,5.11213 m 4.70312,-9.7983 a 4.70315,4.70315 0 0 1 -4.70315,4.70314 4.70315,4.70315 0 0 1 -4.70314,-4.70314 4.70315,4.70315 0 0 1 4.70314,-4.70315 4.70315,4.70315 0 0 1 4.70315,4.70315 z");				
			body.setAttribute("stroke", astrology.POINTS_COLOR);		 
			body.setAttribute("stroke-width", astrology.POINTS_STROKE);
			body.setAttribute("fill","none");			
			wrapper.appendChild( body );
			
			var crownXShift = 6; //px						
			var crownYShift = -16; //px
			var crown = document.createElementNS( context.root.namespaceURI, "path");
			crown.setAttribute("d", "m" + (x + crownXShift) + ", " + (y + crownYShift) + " a 3.9717855,3.9717855 0 0 1 -3.95541,3.59054 3.9717855,3.9717855 0 0 1 -3.95185,-3.59445");				
			crown.setAttribute("stroke", astrology.POINTS_COLOR);		 
			crown.setAttribute("stroke-width", astrology.POINTS_STROKE);
			crown.setAttribute("fill", "none");			
			wrapper.appendChild( crown );
											
		return wrapper;

	};
		
	/*
	 * Venus path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function venus( x, y ){
		
		// center symbol
		var xShift = 2; //px						
		var yShift = 7; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -4.937669,0.03973 m 2.448972,2.364607 0,-5.79014 c -3.109546,-0.0085 -5.624617,-2.534212 -5.620187,-5.64208 0.0044,-3.107706 2.526514,-5.621689 5.635582,-5.621689 3.109068,0 5.631152,2.513983 5.635582,5.621689 0.0044,3.107868 -2.510641,5.633586 -5.620187,5.64208");				
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill","none");												
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Mars path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function mars( x, y ){
		
		// center symbol
		var xShift = 2; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");								
			node.setAttribute("d", "m" + x + ", " + y + " c -5.247438,-4.150623 -11.6993,3.205518 -7.018807,7.886007 4.680494,4.680488 12.036628,-1.771382 7.885999,-7.018816 z m 0,0 0.433597,0.433595 3.996566,-4.217419 m -3.239802,-0.05521 3.295015,0 0.110427,3.681507");			
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill", "none");			
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Jupiter path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function jupiter( x, y ){
		
		// center symbol
		var xShift = -5; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " c -0.43473,0 -1.30422,-0.40572 -1.30422,-2.02857 0,-1.62285 1.73897,-3.2457 3.47792,-3.2457 1.73897,0 3.47792,1.21715 3.47792,4.05713 0,2.83999 -2.1737,7.30283 -6.52108,7.30283 m 12.17269,0 -12.60745,0 m 9.99902,-11.76567 0,15.82279");				
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill", "none");													
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Saturn path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function saturn( x, y ){
		
		// center symbol
		var xShift = 5; //px						
		var yShift = 10; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " c -0.52222,0.52221 -1.04445,1.04444 -1.56666,1.04444 -0.52222,0 -1.56667,-0.52223 -1.56667,-1.56667 0,-1.04443 0.52223,-2.08887 1.56667,-3.13332 1.04444,-1.04443 2.08888,-3.13331 2.08888,-5.22219 0,-2.08888 -1.04444,-4.17776 -3.13332,-4.17776 -1.97566,0 -3.65555,1.04444 -4.69998,3.13333 m -2.55515,-5.87499 6.26664,0 m -3.71149,-2.48054 0,15.14438");				
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill", "none");												
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Uranus path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function uranus( x, y ){
		
		// center symbol
		var xShift = -5; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
			
			var horns = document.createElementNS( context.root.namespaceURI, "path");
			horns.setAttribute("d", "m" + x + ", " + y + "  0,10.23824 m 10.23633,-10.32764 0,10.23824 m -10.26606,-4.6394 10.23085,0 m -5.06415,-5.51532 0,11.94985");				
			horns.setAttribute("stroke", astrology.POINTS_COLOR);		 
			horns.setAttribute("stroke-width", astrology.POINTS_STROKE);
			horns.setAttribute("fill", "none");												
			wrapper.appendChild(horns);
								
			var bodyXShift = 7; //px						
			var bodyYShift = 14.5; //px
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + (x + bodyXShift) + ", " + (y + bodyYShift) + " a 1.8384377,1.8384377 0 0 1 -1.83844,1.83843 1.8384377,1.8384377 0 0 1 -1.83842,-1.83843 1.8384377,1.8384377 0 0 1 1.83842,-1.83844 1.8384377,1.8384377 0 0 1 1.83844,1.83844 z");				
			body.setAttribute("stroke", astrology.POINTS_COLOR);
			body.setAttribute("stroke-width", astrology.POINTS_STROKE); 			
			body.setAttribute("fill", "none");	 									
			wrapper.appendChild( body );
			
													
		return wrapper;
	};
	
	/*
	 * Neptune path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function neptune( x, y ){
		
		// center symbol
		var xShift = 3; //px						
		var yShift = -5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " 1.77059,-2.36312 2.31872,1.8045 m -14.44264,-0.20006 2.34113,-1.77418 1.74085,2.38595 m -1.80013,-1.77265 c -1.23776,8.40975 0.82518,9.67121 4.95106,9.67121 4.12589,0 6.18883,-1.26146 4.95107,-9.67121 m -7.05334,3.17005 2.03997,-2.12559 2.08565,2.07903 m -5.32406,9.91162 6.60142,0 m -3.30071,-12.19414 0,15.55803");				
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill", "none");														
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Pluto path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function pluto( x, y ){
		
		// center symbol
		var xShift = 5; //px						
		var yShift = -5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + x + ", " + y + " a 5.7676856,5.7676856 0 0 1 -2.88385,4.99496 5.7676856,5.7676856 0 0 1 -5.76768,0 5.7676856,5.7676856 0 0 1 -2.88385,-4.99496 m 5.76771,13.93858 0,-8.17088 m -3.84512,4.32576 7.69024,0");				
			body.setAttribute("stroke", astrology.POINTS_COLOR);		 
			body.setAttribute("stroke-width", astrology.POINTS_STROKE);
			body.setAttribute("fill", "none");														
			wrapper.appendChild(body);
			
			var headXShift = -2.3; //px						
			var headYShift = 0; //px
			var head = document.createElementNS( context.root.namespaceURI, "path");
			head.setAttribute("d", "m" + (x + headXShift) + ", " + (y + headYShift) + " a 3.3644834,3.3644834 0 0 1 -3.36448,3.36449 3.3644834,3.3644834 0 0 1 -3.36448,-3.36449 3.3644834,3.3644834 0 0 1 3.36448,-3.36448 3.3644834,3.3644834 0 0 1 3.36448,3.36448 z");				
			head.setAttribute("stroke", astrology.POINTS_COLOR);		 
			head.setAttribute("stroke-width", astrology.POINTS_STROKE);
			head.setAttribute("fill", "none");														
			wrapper.appendChild(head);
														
		return wrapper;
	};
	
	/*
	 * Chiron path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function chiron( x, y ){
		
		// center symbol
		var xShift = 3; //px						
		var yShift = 5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + x + ", " + y + " a 3.8764725,3.0675249 0 0 1 -3.876473,3.067525 3.8764725,3.0675249 0 0 1 -3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876473,3.067525 z");
			body.setAttribute("stroke", astrology.POINTS_COLOR);		 
			body.setAttribute("stroke-width", astrology.POINTS_STROKE);
			body.setAttribute("fill", "none");												
			wrapper.appendChild( body );
			
			var headXShift = 0; //px						
			var headYShift = -13; //px
			var head = document.createElementNS( context.root.namespaceURI, "path");
			head.setAttribute("d", "m" + (x + headXShift) + ", " + (y + headYShift) + "   -3.942997,4.243844 4.110849,3.656151 m -4.867569,-9.009468 0,11.727251");
			head.setAttribute("stroke", astrology.POINTS_COLOR);		 
			head.setAttribute("stroke-width", astrology.POINTS_STROKE);
			head.setAttribute("fill", "none");												
			wrapper.appendChild( head );
			
											
		return wrapper;
	};
	
	/*
	 * Lilith path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function lilith( x, y ){
		
		// center symbol
		var xShift = 2; //px						
		var yShift = 4; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.525435,-1.12853 -1.464752,-1.79539 -0.808138,-2.20576 0.151526,-2.05188 0.909156,-1.5389 1.010173,-1.02593 0.909157,-0.56427 1.363735,-0.61556 m 2.315327,-0.39055 -1.716301,0.54716 -1.7163,1.09431 -1.1442,1.64146 -0.572102,1.64146 0,1.64146 0.572102,1.64147 1.1442,1.64145 1.7163,1.09432 1.716301,0.54715 m 0,-11.49024 -2.2884,0 -2.288401,0.54716 -1.716302,1.09431 -1.144201,1.64146 -0.5721,1.64146 0,1.64146 0.5721,1.64147 1.144201,1.64145 1.716302,1.09432 2.288401,0.54715 2.2884,0 m -4.36712,-0.4752 0,6.44307 m -2.709107,-3.41101 5.616025,0");			
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * NNode path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function nnode( x, y ){
		
		// center symbol
		var xShift = -2; //px						
		var yShift = 3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -1.3333334,-0.6666667 -0.6666666,0 -1.3333334,0.6666667 -0.6666667,1.3333333 0,0.6666667 0.6666667,1.3333333 1.3333334,0.6666667 0.6666666,0 1.3333334,-0.6666667 0.6666666,-1.3333333 0,-0.6666667 -0.6666666,-1.3333333 -2,-2.66666665 -0.6666667,-1.99999995 0,-1.3333334 0.6666667,-2 1.3333333,-1.3333333 2,-0.6666667 2.6666666,0 2,0.6666667 1.3333333,1.3333333 0.6666667,2 0,1.3333334 -0.6666667,1.99999995 -2,2.66666665 -0.6666666,1.3333333 0,0.6666667 0.6666666,1.3333333 1.3333334,0.6666667 0.6666666,0 1.3333334,-0.6666667 0.6666667,-1.3333333 0,-0.6666667 -0.6666667,-1.3333333 -1.3333334,-0.6666667 -0.6666666,0 -1.3333334,0.6666667 m -7.9999999,-6 0.6666667,-1.3333333 1.3333333,-1.3333333 2,-0.6666667 2.6666666,0 2,0.6666667 1.3333333,1.3333333 0.6666667,1.3333333");				
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill", "none");	
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Aries symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function aries( x, y ){
		
		// center symbol
		var xShift = -9; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE1 - 1)) + "," + (-y * (astrology.SYMBOL_SCALE1 - 1)) + ") scale(" + astrology.SYMBOL_SCALE1 + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + (x+9) + ", " + (y+12) + 
					" 0,-1.5125 c -10e-6,-1.19166 -0.25834,-3.31666 -0.775,-6.375 -0.23334,-1.44166 -0.61668,-2.94166 -1.15,-4.5 -0.54167,-1.58332 -1.10834,-2.82498 -1.7,-3.725 -0.45834,-0.68332 -1.00417,-1.02498 -1.6375,-1.025 -0.71667,2e-5 -1.21667,0.27502 -1.5,0.825 -0.25834,0.50835 -0.3875,1.06252 -0.3875,1.6625 0,1.26668 0.45416,2.41251 1.3625,3.4375 l -2.125,0 c -0.73334,-1.12499 -1.1,-2.31248 -1.1,-3.5625 0,-1.30832 0.35,-2.33332 1.05,-3.075 0.725,-0.76665 1.60416,-1.14998 2.6375,-1.15 1.33333,2e-5 2.37499,0.55002 3.125,1.65 0.84999,1.24168 1.55832,2.75002 2.125,4.525 0.39999,1.29168 0.73749,2.72084 1.0125,4.2875 0.27499,-1.56666 0.61249,-2.99582 1.0125,-4.2875 0.53332,-1.73332 1.24165,-3.24165 2.125,-4.525 0.74998,-1.09998 1.79165,-1.64998 3.125,-1.65 1.03332,2e-5 1.91248,0.38335 2.6375,1.15 0.69998,0.74168 1.04998,1.76668 1.05,3.075 -2e-5,1.25002 -0.36669,2.43751 -1.1,3.5625 l -2.125,0 c 0.90832,-1.02499 1.36248,-2.17082 1.3625,-3.4375 -2e-5,-0.59998 -0.12918,-1.15415 -0.3875,-1.6625 -0.28335,-0.54998 -0.78335,-0.82498 -1.5,-0.825 -0.63335,2e-5 -1.17918,0.34168 -1.6375,1.025 -0.59168,0.90002 -1.15835,2.14168 -1.7,3.725 -0.53335,1.55834 -0.91668,3.05834 -1.15,4.5 -0.51668,3.05834 -0.77501,5.18334 -0.775,6.375 l 0,1.5125 -1.875,0");																						
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Taurus symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function taurus( x, y ){
		
		// center symbol
		var xShift = -9; //px						
		var yShift = -11; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE1 - 1)) + "," + (-y * (astrology.SYMBOL_SCALE1 - 1)) + ") scale(" + astrology.SYMBOL_SCALE1 + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + (x+5) + ", " + (y+8) + 
					" c -0.225,-0.53332 -0.54584,-1.00832 -0.9625,-1.425 -0.38334,-0.38332 -0.85417,-0.69998 -1.4125,-0.95 -0.48334,-0.21665 -1.0375,-0.32498 -1.6625,-0.325 l 0,-1.875 c 0.85833,2e-5 1.65,0.15419 2.375,0.4625 0.75833,0.32502 1.43333,0.77918 2.025,1.3625 0.6,0.59168 1.05833,1.27085 1.375,2.0375 0.22499,0.53335 0.54583,1.00835 0.9625,1.425 0.38332,0.38335 0.85416,0.70001 1.4125,0.95 0.48332,0.21668 1.03749,0.32501 1.6625,0.325 0.59999,1e-5 1.15416,-0.10832 1.6625,-0.325 0.53332,-0.22499 1.00415,-0.54165 1.4125,-0.95 0.41665,-0.41665 0.73748,-0.89165 0.9625,-1.425 0.31665,-0.76665 0.77498,-1.44582 1.375,-2.0375 0.59165,-0.58332 1.26665,-1.03748 2.025,-1.3625 0.72498,-0.30831 1.51665,-0.46248 2.375,-0.4625 l 0,1.875 c -0.62502,2e-5 -1.17919,0.10835 -1.6625,0.325 -0.55835,0.25002 -1.02918,0.56668 -1.4125,0.95 -0.41668,0.41668 -0.73752,0.89168 -0.9625,1.425 -0.31668,0.75835 -0.77502,1.43751 -1.375,2.0375 -0.29168,0.29168 -0.67085,0.58751 -1.1375,0.8875 0.46665,0.30001 0.84582,0.59584 1.1375,0.8875 0.59998,0.60001 1.05832,1.27918 1.375,2.0375 0.30832,0.75001 0.46248,1.55418 0.4625,2.4125 -2e-5,0.83334 -0.15418,1.625 -0.4625,2.375 -0.32502,0.76667 -0.78335,1.44584 -1.375,2.0375 -0.59168,0.58334 -1.26668,1.0375 -2.025,1.3625 -0.72501,0.30834 -1.51668,0.4625 -2.375,0.4625 -0.90001,0 -1.69168,-0.15416 -2.375,-0.4625 -0.79168,-0.35833 -1.46667,-0.8125 -2.025,-1.3625 -0.59167,-0.59166 -1.05,-1.27083 -1.375,-2.0375 -0.30834,-0.75 -0.4625,-1.54166 -0.4625,-2.375 0,-0.85832 0.15416,-1.66249 0.4625,-2.4125 0.33333,-0.80832 0.79166,-1.48749 1.375,-2.0375 0.35833,-0.34166 0.74166,-0.63749 1.15,-0.8875 -0.41667,-0.24999 -0.80001,-0.54582 -1.15,-0.8875 -0.58334,-0.56665 -1.04167,-1.24582 -1.375,-2.0375 m 7.4375,4.1875 c -0.50834,-0.21666 -1.06251,-0.32499 -1.6625,-0.325 -0.60001,1e-5 -1.15418,0.10834 -1.6625,0.325 -0.51668,0.23334 -0.98751,0.55001 -1.4125,0.95 -0.43334,0.45001 -0.75417,0.92501 -0.9625,1.425 -0.21667,0.52501 -0.32501,1.09168 -0.325,1.7 -10e-6,0.58334 0.10833,1.1375 0.325,1.6625 0.20833,0.5 0.52916,0.975 0.9625,1.425 0.42499,0.4 0.89582,0.71667 1.4125,0.95 0.50832,0.21667 1.06249,0.325 1.6625,0.325 0.59999,0 1.15416,-0.10833 1.6625,-0.325 0.51665,-0.23333 0.98749,-0.55 1.4125,-0.95 0.43332,-0.45 0.75415,-0.925 0.9625,-1.425 0.21665,-0.525 0.32498,-1.07916 0.325,-1.6625 -2e-5,-0.60832 -0.10835,-1.17499 -0.325,-1.7 -0.20835,-0.49999 -0.52918,-0.97499 -0.9625,-1.425 -0.42501,-0.39999 -0.89585,-0.71666 -1.4125,-0.95");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Gemini symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function gemini( x, y ){
		
		// center symbol
		var xShift = -6; //px						
		var yShift = -6; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE1 - 1)) + "," + (-y * (astrology.SYMBOL_SCALE1 - 1)) + ") scale(" + (astrology.SYMBOL_SCALE1) + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + (x+12) + ", " + (y+13) + " c 1.39165,0.19167 2.74998,0.45417 4.075,0.7875 l 0,1.8625 c -2.95002,-0.74166 -6.05835,-1.1125 -9.325,-1.1125 -3.26668,0 -6.375,0.37084 -9.325,1.1125 l 0,-1.8625 c 1.325,-0.33333 2.68333,-0.59583 4.075,-0.7875 l 0,-14.0625 c -1.39167,-0.19165 -2.75,-0.45415 -4.075,-0.7875 l 0,-1.8625 c 2.95,0.74169 6.05832,1.11252 9.325,1.1125 3.26665,2e-5 6.37498,-0.37081 9.325,-1.1125 l 0,1.8625 c -1.32502,0.33335 -2.68335,0.59585 -4.075,0.7875 l 0,14.0625 m -1.875,-13.8625 c -1.10835,0.0917 -2.23334,0.13752 -3.375,0.1375 -1.14168,2e-5 -2.26668,-0.0458 -3.375,-0.1375 l 0,13.6625 c 1.10832,-0.0917 2.23332,-0.1375 3.375,-0.1375 1.14166,0 2.26665,0.0458 3.375,0.1375 l 0,-13.6625");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Cancer symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function cancer( x, y ){
		
		// center symbol
		var xShift = 9; //px						
		var yShift = -9; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE1 - 1)) + "," + (-y * (astrology.SYMBOL_SCALE1 - 1)) + ") scale(" + astrology.SYMBOL_SCALE1 + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + (x-19) + ", " + (y+13) + 
					" c 3.49847,2.2999 7.9798,2.88699 12.0125,1.875 -1.66059,-1.11538 -1.75368,-3.62251 -0.64078,-5.15594 1.02276,-1.5711 3.36301,-2.20765 4.93157,-1.06938 1.79935,1.13495 2.35373,3.88166 0.97343,5.55063 -1.0646,1.41816 -2.87209,1.85597 -4.47085,2.38208 -4.23375,1.20478 -8.92842,0.70459 -12.80589,-1.38237 2e-5,-0.73334 -2e-5,-1.46668 2e-5,-2.20002 z m 13.6375,0.6875 c 0.99031,0.54306 2.50885,-0.3259 2.29279,-1.50819 -0.009,-0.99656 -0.72701,-2.31733 -1.85448,-2.22078 -1.55258,0.28532 -2.2148,2.74003 -0.7843,3.59611 0.1081,0.0607 0.22483,0.10629 0.34599,0.13286 z m 4.45,-6.675 c -3.49848,-2.29988 -7.97979,-2.88695 -12.0125,-1.875 1.74977,1.18032 1.76473,3.88512 0.4452,5.39485 -1.14287,1.57804 -3.67636,1.91326 -5.11186,0.54332 -1.59192,-1.30013 -1.85262,-3.93774 -0.44849,-5.47109 1.1411,-1.32328 2.93429,-1.69873 4.51924,-2.22807 4.14582,-1.13582 8.72841,-0.64238 12.50869,1.4169 0.21373,0.72318 0.0573,1.48044 0.0997,2.21909 z m -13.6375,-0.6875 c -0.9898,-0.54425 -2.50874,0.32459 -2.29292,1.50675 0.008,0.99596 0.72396,2.32003 1.85137,2.22382 1.55218,-0.28697 2.2152,-2.7386 0.78924,-3.5994 -0.10857,-0.0605 -0.22595,-0.10563 -0.34769,-0.13117 z");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Leo symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function leo( x, y ){
		
		// center symbol
		var xShift = -3; //px						
		var yShift = 4; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE1 - 1)) + "," + (-y * (astrology.SYMBOL_SCALE1 - 1)) + ") scale(" + astrology.SYMBOL_SCALE1 + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + (x+6) + ", " + (y+1) + 
					" c -0.32704,0.89209 0.011,2.07505 1.00625,2.34219 0.85086,0.21231 1.79248,-0.0204 2.41875,-0.64219 0.44167,0.44167 0.88333,0.88333 1.325,1.325 -0.96066,0.90247 -2.29049,1.42737 -3.61495,1.23686 -1.7588,-0.11803 -3.2224,-1.77189 -3.11005,-3.53686 -0.0248,-1.42517 0.76409,-2.68358 1.37299,-3.92036 0.69572,-1.21765 1.66115,-2.27529 2.18451,-3.5933 0.68243,-1.40252 0.83192,-3.17025 0.0534,-4.56329 -0.89468,-1.57566 -2.98023,-2.29944 -4.64843,-1.57305 -1.63349,0.66365 -2.62109,2.52575 -2.24375,4.25001 0.46112,1.7866 1.97845,3.19859 2.00298,5.12284 0.1703,2.19069 -1.93116,4.19774 -4.11392,3.89746 -2.05884,-0.1566 -3.68615,-2.25665 -3.31914,-4.29238 0.23234,-1.85784 2.03872,-3.35278 3.91133,-3.20293 -0.86301,-2.09166 -0.43054,-4.70107 1.225,-6.2875 1.83562,-1.91819 5.08938,-2.20194 7.21269,-0.59745 1.57088,1.07132 2.44547,2.97402 2.36231,4.85995 0.0765,1.89183 -0.89773,3.59052 -1.8447,5.15361 -0.86143,1.25999 -1.76373,2.53136 -2.1803,4.02139 z m -6.275,-5.1375 c -1.23886,-0.57286 -2.77969,0.58729 -2.57891,1.93516 0.0742,1.34966 1.80907,2.18943 2.90078,1.37422 1.25502,-0.77671 1.05013,-2.77821 -0.32187,-3.30938 z");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Virgo symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function virgo( x, y ){
		
		// center symbol
		var xShift = -9; //px						
		var yShift = -5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE1 - 1)) + "," + (-y * (astrology.SYMBOL_SCALE1 - 1)) + ") scale(" + astrology.SYMBOL_SCALE1 + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + (x+14) + ", " + (y+10) + 
					" c 2.18337,-2.12037 2.88923,-5.47424 2.1273,-8.36821 -0.60994,-1.39255 -1.54502,0.27324 -1.73159,1.04932 -0.60497,1.76247 -0.33825,3.64246 -0.39571,5.46869 0,0.61673 0,1.23347 0,1.8502 z m -1.26097,2.90026 c -1.0685,0.59073 -2.24841,0.99941 -3.4677,1.11386 0,-0.52891 0,-1.05782 0,-1.58673 1.12987,-0.1497 2.21599,-0.57334 3.17347,-1.18742 -0.0767,-3.93611 0.0521,-7.87544 -0.0695,-11.80985 -0.16794,-0.87136 -0.0946,-2.2628 -1.0612,-2.60524 -0.89754,0.44142 -1.17629,1.58057 -1.60144,2.42399 -0.66912,1.89576 -0.38196,3.925 -0.44126,5.89347 0,1.86791 0,3.73583 0,5.60374 -0.52541,0 -1.05082,0 -1.57623,0 -0.029,-3.71837 0.0615,-7.43995 -0.0521,-11.15625 -0.13824,-0.87746 -0.0408,-2.71278 -1.19603,-2.70923 -0.81355,0.56191 -1.08599,1.63875 -1.51113,2.49319 -0.61211,1.91613 -0.3353,3.9475 -0.3931,5.92523 0,1.81568 0,3.63137 0,5.44706 -0.5254,0 -1.05081,0 -1.57622,0 -0.0305,-3.66269 0.0646,-7.32869 -0.0546,-10.98925 -0.13449,-1.62075 -0.55158,-3.29776 -1.62662,-4.56282 0.53943,0 1.07884,0 1.61826,0 0.72151,0.57509 1.0742,1.99948 1.33081,2.45534 0.40854,-1.12329 1.13307,-2.17325 2.17562,-2.79028 1.25779,-0.28411 1.89945,1.1864 2.29501,2.12843 0.0386,0.42388 0.34691,0.97196 0.43728,0.21062 0.54383,-1.02909 1.36887,-2.46378 2.69579,-2.37019 0.95154,0.37873 1.43502,1.42761 1.77572,2.33371 0.30213,1.00743 0.27583,2.06918 0.35485,3.10781 0.44614,-0.80139 1.28985,-2.07332 2.34968,-1.56292 0.85245,0.62406 1.05955,1.7581 1.35204,2.71275 0.83691,3.31549 0.0334,7.08275 -2.40827,9.544 -0.6096,0.6002 -1.5425,1.07563 -0.82173,2.00039 0.18052,0.67274 1.0211,1.48789 1.15782,1.85958 -0.64476,0 -1.28951,0 -1.93427,0 -0.38131,-0.60165 -0.72129,-1.23758 -0.92478,-1.92299 z");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Libra symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function libra( x, y ){
		
		// center symbol
		var xShift = -4; //px						
		var yShift = 3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE1 - 1)) + "," + (-y * (astrology.SYMBOL_SCALE1 - 1)) + ") scale(" + astrology.SYMBOL_SCALE1 + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + (x+3) + ", " + y + " c -2.3791,0 -4.7583,0 -7.1375,0 0,-0.625 0,-1.25 0,-1.875 1.4333,0 2.8667,0 4.3,0 -1.7672,-2.14662 -1.5685,-5.5656 0.4094,-7.51152 2.0181,-2.18368 5.6309,-2.60558 8.0906,-0.93221 1.9873,1.21173 3.127,3.66116 2.674,5.95888 -0.059,0.88801 -0.8073,1.93084 -1.0232,2.48485 1.3998,0 2.7995,0 4.1992,0 0,0.625 0,1.25 0,1.875 -2.3833,0 -4.7667,0 -7.15,0 0,-0.625 0,-1.25 0,-1.875 1.5522,-0.77524 2.4993,-2.60555 2.1062,-4.31561 -0.4463,-2.16745 -2.7982,-3.58998 -4.9369,-3.22969 -2.116,0.24112 -3.9706,2.2508 -3.6865,4.43437 0.1215,1.32077 1.0054,2.48975 2.1547,3.11093 0,0.625 0,1.25 0,1.875 z m -7.1375,5.625 c 0,-0.625 0,-1.25 0,-1.875 6.2167,0 12.4333,0 18.65,0 0,0.625 0,1.25 0,1.875 -6.2167,0 -12.4333,0 -18.65,0 z");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Scorpio symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function scorpio( x, y ){
		
		// center symbol
		var xShift = -9; //px						
		var yShift = -4; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE1 - 1)) + "," + (-y * (astrology.SYMBOL_SCALE1 - 1)) + ") scale(" + astrology.SYMBOL_SCALE1 + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + (x+15) + ", " + (y+13) + 
					" c -1.74459,0.17759 -3.34372,-1.58247 -3.04571,-3.30015 -0.0612,-3.76985 0.13674,-7.54934 -0.12804,-11.31241 0.0595,-0.78287 -0.4097,-2.51589 -1.44301,-1.68035 -0.75346,0.66937 -0.87692,1.73412 -1.28643,2.60645 -0.47699,2.35531 -0.16874,4.76756 -0.25076,7.15038 0,1.19448 0,2.38896 0,3.58343 -0.51801,0 -1.03602,0 -1.55403,0 -0.0624,-3.88458 0.13853,-7.77866 -0.12793,-11.65662 0.0622,-0.78409 -0.40407,-2.52016 -1.44084,-1.68574 -0.75524,0.66913 -0.8785,1.73547 -1.28851,2.60855 -0.47699,2.35531 -0.16875,4.76756 -0.25077,7.15038 0,1.19448 0,2.38896 0,3.58343 -0.51801,0 -1.03602,0 -1.55403,0 -0.0642,-3.85133 0.14319,-7.71161 -0.13348,-11.55649 -0.18768,-1.3544 -0.62588,-2.72057 -1.52414,-3.77657 0.53183,0 1.06365,0 1.59547,0 0.82696,0.37078 0.70101,2.01964 1.43365,2.11419 0.44117,-1.00471 1.11055,-1.99473 2.1379,-2.46567 1.18633,-0.1013 1.81498,1.18699 2.11146,2.14358 0.4097,1.18768 0.66328,-0.52924 1.07762,-0.85784 0.4455,-0.66874 1.16893,-1.38641 2.035,-1.26507 1.25282,0.49572 1.72161,1.94145 1.93963,3.15831 0.34676,2.40986 0.0892,4.8499 0.17491,7.27309 0.0107,1.91556 -0.0409,3.83566 0.043,5.74829 0.26469,1.06694 2.44817,1.37451 2.04195,-0.11522 0.46544,-0.29106 0.80167,0.53092 1.18821,0.77285 0.34872,0.33406 0.69745,0.66813 1.04619,1.00219 -0.73903,0.7114 -1.47805,1.4228 -2.21708,2.1342 0,-0.45239 0,-0.90479 0,-1.35719 -0.1934,0 -0.38679,0 -0.5802,0 z");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);					
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/*
	 * Sagittarius symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function sagittarius( x, y ){
		
		// center symbol
		var xShift = 7; //px						
		var yShift = -9; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE1 - 1)) + "," + (-y * (astrology.SYMBOL_SCALE1 - 1)) + ") scale(" + astrology.SYMBOL_SCALE1 + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + (x-2) + ", " + (y+5) + " -6.75,6.75 3.3875,3.3875 -1.325,1.325 -3.3875,-3.3875 -4.425,4.425 -1.325,-1.325 4.425,-4.425 -3.3875,-3.3875 1.325,-1.325 3.3875,3.3875 6.7625,-6.7625 -5.1375,0 0,-1.875 8.325,0 0,8.325 -1.875,0 0,-5.1125");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");
			wrapper.appendChild(node);	
											
		return wrapper;
	};
	
	/*
	 * Capricorn symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function capricorn( x, y ){
		
		// center symbol
		var xShift = -9; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
				
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE1 - 1)) + "," + (-y * (astrology.SYMBOL_SCALE1 - 1)) + ") scale(" + astrology.SYMBOL_SCALE1 + ")");		
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + (x+10) + ", " + (y+7) + 
					" c -1.30322,-1.84066 -1.53456,-4.16908 -1.44542,-6.35956 -0.0166,-1.47834 -0.0602,-3.02921 -0.76392,-4.36797 -1.09794,-0.87671 -1.64432,1.10216 -2.11052,1.81481 -0.83211,1.64462 -0.92923,3.51484 -0.86764,5.32167 0,0.55118 0,1.10236 0,1.65355 -0.625,0 -1.25,0 -1.875,0 -0.0649,-2.40824 0.18478,-4.85224 -0.28194,-7.23139 -0.20203,-1.01066 -1.02389,-2.01529 -2.1444,-1.89426 -0.721,0.20395 -0.89348,-0.14332 -0.78616,-0.76911 0,-0.53508 0,-1.07017 0,-1.60526 1.23265,-0.0635 2.68956,0.007 3.49623,1.08937 0.64197,0.55633 0.98726,2.01186 1.22494,2.33007 0.51805,-1.39175 1.43454,-2.77061 2.83559,-3.37963 1.17336,-0.19763 1.83388,1.07072 2.34536,1.91556 0.90391,1.91955 0.72531,4.1082 0.7781,6.17316 0.0222,0.96732 0.12018,1.94932 0.46978,2.85897 0.73194,-1.99036 2.97445,-3.23646 5.05048,-2.79726 2.12144,0.37688 3.68917,2.61011 3.22499,4.7333 -0.32148,1.85972 -2.0303,3.36769 -3.9384,3.3361 -1.3529,0.0607 -2.73258,-0.36585 -3.78707,-1.22214 -0.69709,2.25039 -2.72881,4.08446 -5.11223,4.28502 -0.46233,-0.0533 -1.53331,0.38436 -1.33777,-0.39987 0,-0.47838 0,-0.95676 0,-1.43515 1.47626,0.15236 3.05553,-0.39739 3.89421,-1.66676 0.5121,-0.72242 0.8177,-1.56232 1.13079,-2.38322 z m 2.125,-0.4875 c 0.96936,1.23213 2.88115,1.93018 4.29654,1.05844 1.14719,-0.77558 1.28238,-2.65138 0.15334,-3.50875 -1.13109,-0.9534 -3.01281,-0.44744 -3.62939,0.86598 -0.33531,0.49297 -0.60866,1.02728 -0.82049,1.58433 z");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/*
	 * Aquarius symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function aquarius( x, y ){
		
		// center symbol
		var xShift = -8; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE1 - 1)) + "," + (-y * (astrology.SYMBOL_SCALE1 - 1)) + ") scale(" + astrology.SYMBOL_SCALE1 + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + (x+5) + ", " + y + 
					" -1.45,-2.5 -4.325,2.5 -0.9375,-1.6125 5.9625,-3.4375 1.4375,2.5 4.3375,-2.5 1.4375,2.5 4.3375,-2.5 2.375,4.1125 -1.625,0.9375 -1.45,-2.5 -4.325,2.5 -1.45,-2.5 -4.325,2.5 m 0,8 -1.45,-2.5 -4.325,2.5 -0.9375,-1.6125 5.9625,-3.4375 1.4375,2.5 4.3375,-2.5 1.4375,2.5 4.3375,-2.5 2.375,4.1125 -1.625,0.9375 -1.45,-2.5 -4.325,2.5 -1.45,-2.5 -4.325,2.5");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/*
	 * Pisces symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function pisces( x, y ){
		
		// center symbol
		var xShift = -8; //px						
		var yShift = -8; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE1 - 1)) + "," + (-y * (astrology.SYMBOL_SCALE1 - 1)) + ") scale(" + astrology.SYMBOL_SCALE1 + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + (x+12) + ", " + (y+9) + " -3.925,0 c -0.10001,1.65001 -0.44584,3.18751 -1.0375,4.6125 -0.54167,1.30834 -1.32501,2.56667 -2.35,3.775 l -2.5875,0 c 1.525,-1.48333 2.59166,-2.98333 3.2,-4.5 0.49999,-1.23332 0.79583,-2.52916 0.8875,-3.8875 l -3.7125,0 0,-1.875 3.7125,0 c -0.0917,-1.35832 -0.38751,-2.65415 -0.8875,-3.8875 -0.61667,-1.51665 -1.68334,-3.02081 -3.2,-4.5125 l 2.5875,0 c 1.01666,1.20836 1.79999,2.47085 2.35,3.7875 0.59999,1.42502 0.94582,2.96252 1.0375,4.6125 l 3.925,0 c 0.0917,-1.64998 0.43749,-3.18748 1.0375,-4.6125 0.54998,-1.31665 1.33332,-2.57914 2.35,-3.7875 l 2.5875,0 c -1.51668,1.49169 -2.58335,2.99585 -3.2,4.5125 -0.50002,1.23335 -0.79585,2.52918 -0.8875,3.8875 l 3.5875,0 0,1.875 -3.5875,0 c 0.0916,1.35834 0.38748,2.65418 0.8875,3.8875 0.60832,1.51667 1.67498,3.01667 3.2,4.5 l -2.5875,0 c -1.02502,-1.20833 -1.80835,-2.46666 -2.35,-3.775 -0.59168,-1.44999 -0.93751,-2.98749 -1.0375,-4.6125");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/**
	 * Draw As symbol
	 */
	function ascendant( x, y ){
		// center symbol
		var xShift = 12; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
		
//			var node = document.createElementNS( context.root.namespaceURI, "path");
//			node.setAttribute("d", "m " + x + ", " + y + " -0.563078,-1.1261527 -1.689228,-0.5630765 -1.689229,0 -1.68923,0.5630765 -0.563076,1.1261527 0.563076,1.12615272 1.126154,0.56307636 2.815381,0.56307635 1.126152,0.56307647 0.563078,1.1261526 0,0.5630763 -0.563078,1.1261528 -1.689228,0.5630764 -1.689229,0 -1.68923,-0.5630764 -0.563076,-1.1261528 m -6.756916,-10.135374 -4.504611,11.8246032 m 4.504611,-11.8246032 4.504611,11.8246032 m -7.3199925,-3.94153457 5.6307625,0");									
//			node.setAttribute("stroke", astrology.SYMBOL_AXIS_FONT_COLOR);		 
//			node.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));			
//			node.setAttribute("fill", "none");
//			wrapper.appendChild(node);
			
		var text = document.createElementNS( context.root.namespaceURI, "text");
		text.setAttribute("x", x-20);	
		text.setAttribute("y", y);
		text.setAttribute("font-family", "fantasy");
		text.setAttribute("dominant-baseline", "central");
		text.setAttribute("style", "cursor:default");
		text.appendChild( document.createTextNode( "Asc" ));
	
		wrapper.appendChild(text);
													
		return wrapper;
	};
	
	/**
	 * Draw Ds symbol
	 */
	function descendant(x,y){
		// center symbol
		var xShift = 22; //px						
		var yShift = -1; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
//			var node = document.createElementNS( context.root.namespaceURI, "path");
//			node.setAttribute("d", "m " + x + ", " + y + " -0.5625,-1.125 -1.6875,-0.5625 -1.6875,0 -1.6875,0.5625 -0.5625,1.125 0.5625,1.125 1.125,0.5625 2.8125,0.5625 1.125,0.5625 0.5625,1.125 0,0.5625 -0.5625,1.125 -1.6875,0.5625 -1.6875,0 -1.6875,-0.5625 -0.5625,-1.125 m -11.25,-10.125 0,11.8125 m 0,-11.8125 3.9375,0 1.6875,0.5625 1.125,1.125 0.5625,1.125 0.5625,1.6875 0,2.8125 -0.5625,1.6875 -0.5625,1.125 -1.125,1.125 -1.6875,0.5625 -3.9375,0");				
//			node.setAttribute("stroke", astrology.SYMBOL_AXIS_FONT_COLOR);		 
//			node.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));			
//			node.setAttribute("fill", "none");		
//			wrapper.appendChild(node);
		
		var text = document.createElementNS( context.root.namespaceURI, "text");
		text.setAttribute("x", x-20);	
		text.setAttribute("y", y);
		text.setAttribute("font-family", "fantasy");
		text.setAttribute("dominant-baseline", "central");
		text.setAttribute("style", "cursor:default");
		text.appendChild( document.createTextNode( "Des" ));
	
		wrapper.appendChild(text);		
		
		return wrapper;
	};
	
	/**
	 * Draw MC symbol
	 */
	function mediumCoeli(x,y){
		// center symbol
		var xShift = 19; //px						
		var yShift = -4; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
//			var node = document.createElementNS( context.root.namespaceURI, "path");
//			node.setAttribute("d", "m " + x + ", " + y + " -1.004085,-1.0040845 -1.004084,-0.5020423 -1.506127,0 -1.004085,0.5020423 -1.004084,1.0040845 -0.502043,1.50612689 0,1.00408458 0.502043,1.50612683 1.004084,1.0040846 1.004085,0.5020423 1.506127,0 1.004084,-0.5020423 1.004085,-1.0040846 m -17.57148,-9.0367612 0,10.5428881 m 0,-10.5428881 4.016338,10.5428881 m 4.016338,-10.5428881 -4.016338,10.5428881 m 4.016338,-10.5428881 0,10.5428881");				
//			node.setAttribute("stroke", astrology.SYMBOL_AXIS_FONT_COLOR);		 
//			node.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));			
//			node.setAttribute("fill", "none");											
//			wrapper.appendChild(node);
		
		var text = document.createElementNS( context.root.namespaceURI, "text");
		text.setAttribute("x", x-20);	
		text.setAttribute("y", y);
		text.setAttribute("font-family", "fantasy");
		text.setAttribute("dominant-baseline", "central");
		text.setAttribute("style", "cursor:default");
		text.appendChild( document.createTextNode( "Mc" ));
	
		wrapper.appendChild(text);
													
		return wrapper;
	};
	
	/**
	 * Draw IC symbol
	 */
	function immumCoeli(x,y){
		// center symbol
		var xShift = 19; //px						
		var yShift = 2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
//			var node = document.createElementNS( context.root.namespaceURI, "path");
//			node.setAttribute("d", "m " + x + ", " + y + " -1.208852,-1.2088514 -1.208851,-0.6044258 -1.813278,0 -1.208852,0.6044258 -1.20885,1.2088514 -0.604426,1.81327715 0,1.20885135 0.604426,1.8132772 1.20885,1.2088513 1.208852,0.6044259 1.813278,0 1.208851,-0.6044259 1.208852,-1.2088513 m -11.4840902,-10.8796629 0,12.6929401");				
//			node.setAttribute("stroke", astrology.SYMBOL_AXIS_FONT_COLOR);		 
//			node.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));		
//			node.setAttribute("fill", "none");											
//			wrapper.appendChild(node);
		
		var text = document.createElementNS( context.root.namespaceURI, "text");
		text.setAttribute("x", x-20);	
		text.setAttribute("y", y);
		text.setAttribute("font-family", "fantasy");
		text.setAttribute("dominant-baseline", "central");
		text.setAttribute("style", "cursor:default");
		text.appendChild( document.createTextNode( "Ic" ));
	
		wrapper.appendChild(text);
													
		return wrapper;
	};
	
	function number1(x,y){
		// center symbol
		var xShift = 0; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.5128753,7.7578884 1.00515009,0 m 3.01545031,-9.5832737 -1.0051501,1.8253853 -2.51287527,7.7578884 m 3.51802537,-9.5832737 -3.01545031,9.5832737 m 3.01545031,-9.5832737 -1.5077251,1.3690388 -1.50772521,0.9126929 -1.00515009,0.4563463 m 2.5128753,-0.9126927 -1.00515016,0.4563464 -1.50772514,0.4563463");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
			wrapper.setAttribute("id", "astrology-radix-cusps-1");							
		return wrapper;
	};
	
	function number2(x,y){
		// center symbol
		var xShift = -2; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " 0,-0.4545454 0.4545454,0 0,0.9090909 -0.9090909,0 0,-0.9090909 0.4545455,-0.9090909 0.4545454,-0.4545455 1.36363637,-0.4545454 1.36363633,0 1.3636364,0.4545454 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -4.5454546,2.72727269 -0.9090909,0.90909091 -0.9090909,1.8181818 m 6.8181818,-9.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -1.36363633,0.9090909 m 1.36363633,-5 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -3.6363637,2.72727269 m -1.3636363,1.81818181 0.4545454,-0.4545454 0.9090909,0 2.27272732,0.4545454 2.27272728,0 0.4545454,-0.4545454 m -5,0 2.27272732,0.9090909 2.27272728,0 m -4.5454546,-0.9090909 2.27272732,1.3636363 1.36363638,0 0.9090909,-0.4545454 0.4545454,-0.9090909 0,-0.4545455");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
			wrapper.setAttribute("id", "astrology-radix-cusps-2");								
		return wrapper;
	};
	
	function number3(x,y){
		// center symbol
		var xShift = -2; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " 0,-0.4545454 0.45454549,0 0,0.9090909 -0.90909089,0 0,-0.9090909 0.4545454,-0.9090909 0.45454549,-0.4545455 1.36363636,-0.4545454 1.36363635,0 1.3636364,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.4545455,0.4545454 -0.9090909,0.4545455 -1.36363635,0.4545454 m 2.27272725,-4.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.4545454,0.4545454 m -0.4545455,-3.6363636 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -0.90909095,0.4545454 m -0.9090909,0 0.9090909,0 1.36363635,0.4545455 0.4545455,0.45454542 0.4545454,0.90909091 0,1.36363637 -0.4545454,0.9090909 -0.9090909,0.4545455 -1.3636364,0.4545454 -1.3636364,0 -1.3636363,-0.4545454 -0.4545455,-0.4545455 -0.4545454,-0.9090909 0,-0.90909091 0.9090909,0 0,0.90909091 -0.4545455,0 0,-0.45454546 m 5,-1.81818182 0.4545455,0.90909091 0,1.36363637 -0.4545455,0.9090909 m -1.36363635,-4.0909091 0.90909095,0.4545455 0.4545454,0.90909088 0,1.81818182 -0.4545454,0.9090909 -0.45454549,0.4545455 -0.90909091,0.4545454");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
			wrapper.setAttribute("id", "astrology-radix-cusps-3");	
		return wrapper;
	};
	
	function number4(x,y){
		// center symbol
		var xShift = 1; //px						
		var yShift = -4; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.28678383,7.7750651 0.91471356,0 m 2.74414057,-9.6044922 -0.9147135,1.8294271 -2.28678386,7.7750651 m 3.20149736,-9.6044922 -2.74414057,9.6044922 m 2.74414057,-9.6044922 -7.3177083,6.8603516 7.3177083,0");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
			wrapper.setAttribute("id", "astrology-radix-cusps-4");	
		return wrapper;
	};
	
	function number5(x,y){
		// center symbol
		var xShift = -2; //px						
		var yShift = -5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.27272725,4.5454545 m 2.27272725,-4.5454545 4.54545455,0 m -4.54545455,0.4545454 3.63636365,0 m -4.0909091,0.4545455 2.2727273,0 1.8181818,-0.4545455 0.9090909,-0.4545454 m -6.8181818,4.5454545 0.4545454,-0.4545454 1.3636364,-0.4545455 1.36363636,0 1.36363634,0.4545455 0.4545455,0.4545454 0.4545454,0.90909092 0,1.36363638 -0.4545454,1.3636364 -0.9090909,0.9090909 -1.81818185,0.4545454 -1.36363635,0 -0.9090909,-0.4545454 -0.4545455,-0.4545455 -0.4545454,-0.9090909 0,-0.9090909 0.9090909,0 0,0.9090909 -0.4545455,0 0,-0.45454545 m 5,-2.72727275 0.4545455,0.90909092 0,1.36363638 -0.4545455,1.3636364 -0.9090909,0.9090909 m -0.45454544,-5.4545455 0.90909094,0.4545455 0.4545454,0.9090909 0,1.8181818 -0.4545454,1.3636364 -0.90909094,0.9090909 -0.90909091,0.4545454");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
			wrapper.setAttribute("id", "astrology-radix-cusps-5");								
		return wrapper;
	};
	
	function number6(x,y){
		// center symbol
		var xShift = 3; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " 0,-0.4545455 -0.4545455,0 0,0.9090909 0.9090909,0 0,-0.9090909 -0.4545454,-0.9090909 -0.909091,-0.4545454 -1.3636363,0 -1.36363638,0.4545454 -0.90909092,0.9090909 -0.9090909,1.3636364 -0.4545455,1.3636364 -0.4545454,1.81818178 0,1.36363636 0.4545454,1.36363636 0.4545455,0.4545455 0.9090909,0.4545454 1.36363637,0 1.36363633,-0.4545454 0.9090909,-0.9090909 0.4545455,-0.90909096 0,-1.36363636 -0.4545455,-0.90909088 -0.4545454,-0.4545455 -0.9090909,-0.4545454 -1.36363638,0 -0.90909092,0.4545454 -0.4545454,0.4545455 -0.4545455,0.90909088 m 1.36363636,-4.54545458 -0.90909086,1.3636364 -0.4545455,1.3636364 -0.4545455,1.81818178 0,1.81818182 0.4545455,0.9090909 m 4.0909091,-0.4545454 0.4545454,-0.90909096 0,-1.36363636 -0.4545454,-0.90909088 m -0.9090909,-5 -0.90909093,0.4545454 -0.90909091,1.3636364 -0.45454546,0.9090909 -0.4545454,1.3636364 -0.4545455,1.81818178 0,2.27272732 0.4545455,0.9090909 0.4545454,0.4545454 m 1.36363637,0 0.90909093,-0.4545454 0.4545454,-0.4545455 0.4545455,-1.36363636 0,-1.81818182 -0.4545455,-0.90909092 -0.4545454,-0.4545454");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
			wrapper.setAttribute("id", "astrology-radix-cusps-6");								
		return wrapper;
	};
	
	function number7(x,y){
		// center symbol
		var xShift = -4; //px						
		var yShift = -4; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -0.9090909,2.7272727 m 6.8181818,-2.7272727 -0.4545454,1.3636363 -0.909091,1.3636364 -1.8181818,2.2727273 -0.90909088,1.36363633 -0.45454546,1.36363637 -0.45454545,1.8181818 m 0.90909091,-3.63636362 -0.90909091,1.81818182 -0.45454546,1.8181818 m 4.09090905,-6.8181818 -2.72727268,2.72727272 -0.90909091,1.36363637 -0.45454546,0.90909091 -0.45454545,1.8181818 0.90909091,0 m -1.36363641,-8.1818182 1.36363641,-1.3636363 0.90909091,0 2.27272728,1.3636363 m -3.63636365,-0.9090909 1.36363637,0 2.27272728,0.9090909 m -4.5454546,0 0.90909095,-0.4545454 1.36363637,0 2.27272728,0.4545454 0.9090909,0 0.4545455,-0.4545454 0.4545454,-0.9090909");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
			wrapper.setAttribute("id", "astrology-radix-cusps-7");								
		return wrapper;
	};
	
	function number8(x,y){
		// center symbol
		var xShift = -1; //px						
		var yShift = -5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -1.3631244,0.4543748 -0.4543748,0.4543748 -0.4543748,0.9087496 0,1.3631244 0.4543748,0.9087496 0.9087496,0.4543748 1.3631244,0 1.3631244,-0.4543748 0.9087496,-0.4543748 0.4543748,-0.9087496 0,-1.3631244 -0.4543748,-0.9087496 -0.9087496,-0.4543748 -1.8174992,0 m 0.9087496,0 -2.271874,0.4543748 m 0,0.4543748 -0.4543748,0.9087496 0,1.8174992 0.4543748,0.4543748 m -0.4543748,0 1.3631244,0.4543748 m 0.4543748,0 1.8174992,-0.4543748 m 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.3631244 -0.4543748,-0.9087496 m 0.4543748,0 -1.8174992,-0.4543748 m -0.9087496,0 -0.9087496,0.9087496 -0.4543748,0.9087496 0,1.8174992 0.4543748,0.9087496 m 1.3631244,0 0.9087496,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.8174992 -0.4543748,-0.9087496 m -2.7262488,4.543748 -1.8174992,0.4543748 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 1.3631244,0.4543748 1.8174992,0 1.8174992,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.36312436 -0.4543748,-0.9087496 -0.4543748,-0.45437484 -0.9087496,-0.4543748 m -0.9087496,0 -2.271874,0.4543748 m 0.4543748,0 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 m -0.4543748,0 2.271874,0.4543748 2.7262488,-0.4543748 m 0,-0.4543748 0.4543748,-0.9087496 0,-1.36312436 -0.4543748,-0.9087496 m 0,-0.45437484 -1.3631244,-0.4543748 m -0.9087496,0 -0.9087496,0.4543748 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 0.4543748,0.4543748 m 1.8174992,0 0.9087496,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.81749916 -0.4543748,-0.90874964 -0.4543748,-0.4543748");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
			wrapper.setAttribute("id", "astrology-radix-cusps-8");								
		return wrapper;
	};
	
	function number9(x,y){
		// center symbol
		var xShift = 1; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -0.4545455,0.9090909 -0.4545454,0.4545455 -0.9090909,0.45454542 -1.36363638,0 -0.90909092,-0.45454542 -0.4545454,-0.4545455 -0.4545455,-0.9090909 0,-1.3636364 0.4545455,-0.9090909 0.90909086,-0.9090909 1.36363637,-0.4545454 1.36363637,0 0.9090909,0.4545454 0.4545455,0.4545455 0.4545454,1.3636363 0,1.3636364 -0.4545454,1.81818182 -0.4545455,1.36363637 -0.9090909,1.36363641 -0.9090909,0.9090909 -1.36363638,0.4545454 -1.36363632,0 -0.909091,-0.4545454 -0.4545454,-0.9090909 0,-0.90909096 0.9090909,0 0,0.90909096 -0.4545455,0 0,-0.4545455 m 1.3636364,-3.1818182 -0.4545454,-0.9090909 0,-1.3636364 0.4545454,-0.9090909 m 4.0909091,-0.4545454 0.4545455,0.9090909 0,1.8181818 -0.4545455,1.81818182 -0.4545455,1.36363637 -0.9090909,1.36363641 m -1.81818178,-2.72727278 -0.45454546,-0.45454542 -0.45454546,-0.9090909 0,-1.8181819 0.45454546,-1.3636363 0.45454546,-0.4545455 0.90909091,-0.4545454 m 1.36363637,0 0.4545454,0.4545454 0.4545455,0.9090909 0,2.2727273 -0.4545455,1.81818182 -0.4545454,1.36363637 -0.4545455,0.90909091 -0.90909087,1.3636364 -0.90909091,0.4545454");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
			wrapper.setAttribute("id", "astrology-radix-cusps-9");								
		return wrapper;
	};
	
	function number10(x,y){
		// center symbol
		var xShift = -3; //px						
		var yShift = -3.5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var one = document.createElementNS( context.root.namespaceURI, "path");
			one.setAttribute("d", "m" + x + ", " + y + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915");			
			one.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			one.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			one.setAttribute("fill", "none");															
			wrapper.appendChild(one);
						
			var numberXShift = 6.5; //px						
			var numberYShift = -1.5; //px
			var zero = document.createElementNS( context.root.namespaceURI, "path");
			zero.setAttribute("d", "m" + (x + numberXShift) + ", " + (y + numberYShift) + " -1.36363638,0.4545454 -0.90909092,0.9090909 -0.9090909,1.3636364 -0.4545455,1.3636364 -0.4545454,1.81818178 0,1.36363636 0.4545454,1.36363636 0.4545455,0.4545455 0.9090909,0.4545454 0.90909092,0 1.36363638,-0.4545454 0.9090909,-0.9090909 0.9090909,-1.36363641 0.4545455,-1.36363637 0.4545454,-1.81818182 0,-1.3636364 -0.4545454,-1.3636363 -0.4545455,-0.4545455 -0.9090909,-0.4545454 -0.9090909,0 m -1.36363638,0.9090909 -0.90909092,0.9090909 -0.4545454,0.9090909 -0.4545455,1.3636364 -0.4545455,1.81818178 0,1.81818182 0.4545455,0.9090909 m 3.1818182,0 0.9090909,-0.9090909 0.4545454,-0.90909091 0.4545455,-1.36363637 0.4545455,-1.81818182 0,-1.8181818 -0.4545455,-0.9090909 m -1.8181818,-0.9090909 -0.90909093,0.4545454 -0.90909091,1.3636364 -0.45454546,0.9090909 -0.4545454,1.3636364 -0.4545455,1.81818178 0,2.27272732 0.4545455,0.9090909 0.4545454,0.4545454 m 0.90909092,0 0.90909091,-0.4545454 0.90909087,-1.3636364 0.4545455,-0.90909091 0.4545454,-1.36363637 0.4545455,-1.81818182 0,-2.2727273 -0.4545455,-0.9090909 -0.4545454,-0.4545454");
			zero.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			zero.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			zero.setAttribute("fill", "none");												
			wrapper.appendChild( zero );
			wrapper.setAttribute("id", "astrology-radix-cusps-10");										
		return wrapper;
	};
	
	function number11(x,y){
		// center symbol
		var xShift = -3; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var one = document.createElementNS( context.root.namespaceURI, "path");
			one.setAttribute("d", "m" + x + ", " + y + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915");			
			one.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			one.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			one.setAttribute("fill", "none");															
			wrapper.appendChild(one);
						
			var numberXShift = 6; //px						
			var numberYShift = 0; //px
			var one2 = document.createElementNS( context.root.namespaceURI, "path");
			one2.setAttribute("d", "m" + (x + numberXShift) + ", " + (y + numberYShift) + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915");
			one2.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			one2.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			one2.setAttribute("fill", "none");												
			wrapper.appendChild( one2 );
			wrapper.setAttribute("id", "astrology-radix-cusps-11");										
		return wrapper;
	};
		
	function number12(x,y){
		// center symbol
		var xShift = -3; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var one = document.createElementNS( context.root.namespaceURI, "path");
			one.setAttribute("d", "m" + x + ", " + y + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915");			
			one.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			one.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			one.setAttribute("fill", "none");															
			wrapper.appendChild(one);
						
			var numberXShift = 4; //px						
			var numberYShift = 1; //px
			var two = document.createElementNS( context.root.namespaceURI, "path");
			two.setAttribute("d", "m" + (x + numberXShift) + ", " + (y + numberYShift) + " 0,-0.4545454 0.4545454,0 0,0.9090909 -0.9090909,0 0,-0.9090909 0.4545455,-0.9090909 0.4545454,-0.4545455 1.36363637,-0.4545454 1.36363633,0 1.3636364,0.4545454 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -4.5454546,2.72727269 -0.9090909,0.90909091 -0.9090909,1.8181818 m 6.8181818,-9.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -1.36363633,0.9090909 m 1.36363633,-5 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -3.6363637,2.72727269 m -1.3636363,1.81818181 0.4545454,-0.4545454 0.9090909,0 2.27272732,0.4545454 2.27272728,0 0.4545454,-0.4545454 m -5,0 2.27272732,0.9090909 2.27272728,0 m -4.5454546,-0.9090909 2.27272732,1.3636363 1.36363638,0 0.9090909,-0.4545454 0.4545454,-0.9090909 0,-0.4545455");
			two.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			two.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			two.setAttribute("fill", "none");												
			wrapper.appendChild( two );
			wrapper.setAttribute("id", "astrology-radix-cusps-12");										
		return wrapper;
	};	
			
	/**
	 * Draw circular sector
	 * 
	 * @param {int} x - circle x center position
	 * @param {int} y - circle y center position
	 * @param {int} radius - circle radius in px
	 * @param {int} a1 - angleFrom in degree
	 * @param {int} a2 - angleTo in degree
	 * @param {int} thickness - from outside to center in px  	
	 * 
	 * @return {SVGElement} segment
	 *  
	 * @see SVG Path arc: https://www.w3.org/TR/SVG/paths.html#PathData
	 */  
	astrology.SVG.prototype.segment = function segment( x, y, radius, a1, a2, thickness, lFlag, sFlag){
									            	 	            	
	 	// @see SVG Path arc: https://www.w3.org/TR/SVG/paths.html#PathData
	 	var LARGE_ARC_FLAG = lFlag || 0;
	 	var SWEET_FLAG = sFlag || 0;
            	 	                
        a1 = ((astrology.SHIFT_IN_DEGREES - a1) % 360) * Math.PI / 180;
        a2 = ((astrology.SHIFT_IN_DEGREES - a2 ) % 360) * Math.PI / 180;
		
		var segment = document.createElementNS( context.root.namespaceURI, "path");
		segment.setAttribute("d", "M " + (x + thickness * Math.cos(a1)) + ", " + (y + thickness * Math.sin(a1)) + " l " + ((radius-thickness) * Math.cos(a1)) + ", " + ((radius-thickness) * Math.sin(a1)) + " A " + radius + ", " + radius + ",0 ," +  LARGE_ARC_FLAG + ", " + SWEET_FLAG + ", " + ( x + radius * Math.cos(a2) ) + ", " + ( y + radius * Math.sin(a2) ) + " l " + ( (radius-thickness)  * -Math.cos(a2) ) + ", " + ( (radius-thickness) * -Math.sin(a2) ) + " A " + thickness + ", " + thickness + ",0 ," +  LARGE_ARC_FLAG + ", " + 1 + ", " + ( x + thickness * Math.cos(a1) ) + ", " + ( y + thickness * Math.sin(a1)));
		segment.setAttribute("fill", "none");						
		return segment;
	};
	
	/**
	 * Draw line in circle
	 * 
	 * @param {int} x1
	 * @param {int} y2
	 * @param {int} x2
	 * @param {int} y2 
	 * @param {String} color - HTML rgb	 
	 * 
	 * @return {SVGElement} line
	 */  
	astrology.SVG.prototype.line = function line( x1, y1, x2, y2, color){									            	 	            	
		var line = document.createElementNS( context.root.namespaceURI, "line");
		line.setAttribute("x1", x1);
		line.setAttribute("y1", y1);	
  	    line.setAttribute("x2", x2);
		line.setAttribute("y2", y2);											
		return line;
	};
	
	/**
	 * Draw a circle
	 * 
	 * @param {int} cx
	 * @param {int} cy
	 * @param {int} radius	
	 * 
	 * @return {SVGElement} circle
	 */  
	astrology.SVG.prototype.circle = function circle( cx, cy, radius){						            	 	            		
		var circle = document.createElementNS( context.root.namespaceURI, "circle");
		circle.setAttribute("cx", cx);	
  	    circle.setAttribute("cy", cy);
		circle.setAttribute("r", radius);
		circle.setAttribute("fill", "none");							
		return circle;
	};
	
	/**
	 * Draw a text
	 * 
	 * @param {String} text
	 * @param {int} x
	 * @param {int} y
	 * @param {String} size - etc. "13px"
	 * @param {String} color - HTML rgb
	 * 
	 * @return {SVGElement} text
	 */  
	astrology.SVG.prototype.text = function text( txt, x, y, size, color){						            	 	            		
		var text = document.createElementNS( context.root.namespaceURI, "text");
		text.setAttribute("x", x);	
  	    text.setAttribute("y", y);
		text.setAttribute("font-size", size);
		text.setAttribute("fill", color);
		text.setAttribute("font-family", "serif");
		text.setAttribute("dominant-baseline", "central");
		text.appendChild( document.createTextNode( txt ));
		text.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");	
		return text;
	};
										  
}( window.astrology = window.astrology || {}));
// ## CHART ###################################
(function( astrology ) {
    
	/**
	 * Displays astrology charts.
	 * 
	 * @class
	 * @public
	 * @constructor
 	 * @param {String} elementId - root DOMElement 
	 * @param {int} width
	 * @param {int} height
	 * @param {Object} settings
	 */
	astrology.Chart = function( elementId, width, height, settings ){
		
		if(settings){
			Object.assign(astrology, settings);
		}
		
		if (elementId && !document.getElementById( elementId )){
			var paper = document.createElement('div');					
			paper.setAttribute('id', elementId);			
			document.body.appendChild( paper );
		}
										
		this.paper = new astrology.SVG( elementId, width, height); 
		this.cx = this.paper.width/2;
		this.cy = this.paper.height/2;
		this.radius = this.paper.height/2 - astrology.MARGIN;
						
		return this;
	};
	
	/**
	 * Display radix horoscope
	 * 
	 * @param {Object} data
	 * @example
	 *	{
	 *		"points":{"Moon":[0], "Sun":[30],  ... },
	 *		"cusps":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274] 
	 *	}
	 * 
	 * @see https://github.com/Kibo/AstroWebService 
	 * 
	 * @return {astrology.Radix} radix
	 */
	astrology.Chart.prototype.radix = function( data ){
												
		var radix = new astrology.Radix(this.paper, this.cx, this.cy, this.radius, data);
		
		radix.drawBg();				
		radix.drawUniverse();									
		radix.drawRuler();									
		radix.drawPoints();
		radix.drawCusps();		
		radix.drawAxis();	 
		radix.drawCircles();
										 							
		return radix;
	 };
	 	
	 /**
	 * Scale chart
	 * 
	 * @param {int} factor 
	 */
	astrology.Chart.prototype.scale = function( factor ){			
		this.paper.root.setAttribute("transform", "translate(" + ( -this.cx * (factor - 1)) + "," + (-this.cy * (factor - 1)) + ") scale(" + factor + ")");		
	};
	
	/**
	 * Draw the symbol on the axis.
	 * For debug only.
	 * 	
	 */
	astrology.Chart.prototype.calibrate = function calibrate(){
		var positions, circle, line;
		var startRadius = 60;
		
		var planets = ["Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Chiron", "Lilith", "NNode"];
		
		for(var i = 0; i < planets.length; i++){		
			positions = astrology.utils.getPointPosition(this.cx, this.cy, this.radius*2, i * 30 );
			
			line = this.paper.line(this.cx, this.cy, positions.x, positions.y);
			line.setAttribute("stroke", astrology.LINE_COLOR);	
			this.paper.root.appendChild( line);
			
			circle = this.paper.circle(this.cx, this.cy, startRadius + startRadius * i );
			circle.setAttribute("stroke", astrology.LINE_COLOR);		 
			circle.setAttribute("stroke-width", 1);
			this.paper.root.appendChild( circle );
						
		}
						
		for(var n = 0, ln = planets.length; n < ln; n++){
			
			var radius = startRadius + startRadius*n; 
			
			for(var i = 0; i < 12; i++){
				positions = astrology.utils.getPointPosition(this.cx, this.cy, radius, i * 30 );
			
				circle = this.paper.circle(positions.x, positions.y, astrology.COLLISION_RADIUS *astrology.SYMBOL_SCALE );
				circle.setAttribute("stroke", "red");		 
				circle.setAttribute("stroke-width", 1);
				this.paper.root.appendChild( circle );
							
				this.paper.root.appendChild( this.paper.getSymbol( planets[n], positions.x, positions.y));	
			}
		
		}
											
		return this;		
	};
		 		  
}( window.astrology = window.astrology || {}));

// ## Radix chart ###################################
(function( astrology ) {
	
	var context;
    
	/**
	 * Radix charts.
	 * 
	 * @class
	 * @public
	 * @constructor
 	 * @param {astrology.SVG} paper 
	 * @param {int} cx
	 * @param {int} cy
	 * @param {int} radius
	 * @param {Object} data
	 */
	astrology.Radix = function( paper, cx, cy, radius, data ){
		
		// Validate data
		var status = astrology.utils.validate(data);		 		
		if( status.hasError ) {										
			throw new Error( status.messages );
		}
		
		this.data = data;								
		this.paper = paper; 
		this.cx = cx;
		this.cy = cy;
		this.radius = radius;
		
		// after calling this.drawPoints() it contains current position of point
		this.locatedPoints = [];
		this.rulerRadius = ((this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO)/astrology.RULER_RADIUS);
		this.pointRadius = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + 2*this.rulerRadius + (astrology.PADDING * astrology.SYMBOL_SCALE));
					
		//@see astrology.Radix.prototype.aspects()
		//@see astrology.Radix.prototype.setPointsOfInterest() 
        this.toPoints = JSON.parse(JSON.stringify(this.data.planets)); // Clone object
                	
		this.shift = 0;		
		if(this.data.cusps && this.data.cusps[0]){
			var deg360 = astrology.utils.radiansToDegree(2*Math.PI);
			this.shift = deg360 - this.data.cusps[0];	
		}	
		
		// preparing wrapper for aspects. It is the lowest layer
		var divisionForAspects = document.createElementNS(this.paper.root.namespaceURI, "g");
		divisionForAspects.setAttribute('id', astrology.ID_CHART + "-" + astrology.ID_ASPECTS);
		this.paper.root.appendChild( divisionForAspects );
				
		this.universe = document.createElementNS(this.paper.root.namespaceURI, "g");
		this.universe.setAttribute('id', astrology.ID_CHART + "-" + astrology.ID_RADIX);
		this.paper.root.appendChild( this.universe );
						
		context = this;
			
		return this;
	};
	
	/**
	 * Draw background
	 */
	astrology.Radix.prototype.drawBg = function(){				
		var universe = this.universe;	
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_BG);	
		
		var LARGE_ARC_FLAG = 1;	
		var start = 0; //degree
		var end = 359.99; //degree 				
		var hemisphere = this.paper.segment( this.cx, this.cy, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, start, end, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, LARGE_ARC_FLAG);
		hemisphere.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);				
		wrapper.appendChild( hemisphere );					
	};
		
	/**
	 * Draw universe.
	 */
	astrology.Radix.prototype.drawUniverse = function(){
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_RADIX + "-" + astrology.ID_SIGNS);
		
		// colors 
        for( var i = 0, step = 30, start = this.shift, len = astrology.COLORS_SIGNS.length; i < len; i++ ){ 
        	        	        	       	        	                	        	        	     
        	var segment = this.paper.segment( this.cx, this.cy, this.radius, start, start+step, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO);        	        	
        	segment.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLORS_SIGNS[i]);        	        	        	
        	segment.setAttribute("stroke", astrology.STROKE_ONLY ? astrology.CIRCLE_COLOR: "none");		 				 				 		
 			segment.setAttribute("stroke-width", astrology.STROKE_ONLY ? 1 : 0);
 			segment.setAttribute("id", this.paper.addIdByConstellation(astrology.SYMBOL_SIGNS[i]));
        	wrapper.appendChild( segment );
        	        	        	        	        	        	               	
			start += step;
        };
                       
        // signs
        for( var i = 0, step = 30, start = 15 + this.shift, len = astrology.SYMBOL_SIGNS.length; i < len; i++ ){ 
        	var position = astrology.utils.getPointPosition( this.cx, this.cy, this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO)/2, start);       	        	                	
        	wrapper.appendChild( this.paper.getSymbol( astrology.SYMBOL_SIGNS[i], position.x, position.y));        	        	        	               		
			start += step;
        }      
        
        //星座標記
        d3.select(wrapper).selectAll("path")
        .on("mouseenter", function() {
			var node = d3.select(this);
			if (node[0][0].id && node[0][0].id.indexOf("astrology-constellation") > -1) {
				var id = node[0][0].id.split("-")[2];
				astrology.TIP.show(id);
			}
		})
		.on("mouseout", function() {
			astrology.TIP.hide();
		});
	};
	
	/**
	 * Draw points
	 */
	astrology.Radix.prototype.drawPoints = function(){
		if(this.data.planets == null){
			return;
		}
				
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_RADIX + "-" + astrology.ID_POINTS);
					
		var gap = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);								
		var step = ( gap - 2*(astrology.PADDING* astrology.SYMBOL_SCALE) ) / Object.keys(this.data.planets).length;
					
		var pointerRadius = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.rulerRadius);
		var startPosition, endPosition;
																					
		for (var planet in this.data.planets) {
 		   if (this.data.planets.hasOwnProperty( planet )) {
 		   	 		   	 		   		 		   		
 		   		var position = astrology.utils.getPointPosition( this.cx, this.cy, this.pointRadius, this.data.planets[planet][0] + this.shift); 		   	
 		   		var point = {name:planet, x:position.x, y:position.y, r:(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), angle:this.data.planets[planet][0] + this.shift, pointer:this.data.planets[planet][0] + this.shift}; 		   		 		   		 		   		 		  
 		   		this.locatedPoints = astrology.utils.assemble(this.locatedPoints, point, {cx:this.cx, cy:this.cy, r:this.pointRadius});   
 		   	} 		
		}
		
		if( astrology.DEBUG ) console.log( "Radix count of points: " + this.locatedPoints.length );
		if( astrology.DEBUG ) console.log( "Radix located points:\n" + JSON.stringify(this.locatedPoints) );
											
		this.locatedPoints.forEach(function(point){
						        
        	// draw pointer        	
        	startPosition = astrology.utils.getPointPosition( this.cx, this.cy, pointerRadius, this.data.planets[point.name][0] + this.shift);
        	endPosition = astrology.utils.getPointPosition(this.cx, this.cy, pointerRadius-this.rulerRadius/2, this.data.planets[point.name][0] + this.shift );
        	var pointer = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
        	pointer.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
			pointer.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
        	wrapper.appendChild(pointer);
        	
        	// draw pointer line
        	if( !astrology.STROKE_ONLY && (this.data.planets[point.name][0] + this.shift) != point.angle){	        	
	        	startPosition = endPosition;
	        	endPosition = astrology.utils.getPointPosition(this.cx, this.cy, this.pointRadius + (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), point.angle );
	        	var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
	        	line.setAttribute("stroke", astrology.LINE_COLOR);	
	        	line.setAttribute("stroke-width", 0.5 * (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));        	
	        	wrapper.appendChild(line);
        	}        	
        	
        	// draw symbol						
			var symbol = this.paper.getSymbol(point.name, point.x, point.y);
        	symbol.setAttribute('id', astrology.ID_CHART + "-" + astrology.ID_RADIX + "-" + astrology.ID_POINTS + "-" + point.name);        	
        	wrapper.appendChild( symbol );
        	
        	//行星標記
        	d3.select(wrapper).selectAll("g")
            .on("mouseenter", function() {
    			var node = d3.select(this);
    			if (node[0][0].id && node[0][0].id.indexOf("astrology-radix-planets") > -1) {
    				var id = node[0][0].id.split("-")[3];
    				astrology.TIP.show(id);
    			}
    		})
    		.on("mouseout", function() {
    			astrology.TIP.hide();
    		});
        	
        	        	        	        
        	// draw point descriptions
        	var textsToShow = [(Math.round(this.data.planets[point.name][0]) % 30).toString()];
        	
        	var zodiac = new astrology.Zodiac(this.data.cusps);
        	
        	if(this.data.planets[point.name][1] && zodiac.isRetrograde(this.data.planets[point.name][1])){
        		textsToShow.push("R");
        	}else{
        		textsToShow.push("");
        	}
        	textsToShow = textsToShow.concat(zodiac.getDignities({"name":point.name, "position":this.data.planets[point.name][0]}, astrology.DIGNITIES_EXACT_EXALTATION_DEFAULT).join(","));        	
        	        	        	        	        	        	      	        	         	        	        	      
//        	var pointDescriptions = astrology.utils.getDescriptionPosition(point, textsToShow);         	
//        	pointDescriptions.forEach(function(dsc){        		        		        		     
//				wrapper.appendChild( this.paper.text( dsc.text, dsc.x, dsc.y, astrology.POINTS_TEXT_SIZE, astrology.SIGNS_COLOR) );	        		
//        	}, this);
        	        	        	        	       	              	        	          			
		}, this);		
	};
	
	astrology.Radix.prototype.drawAxis = function(){
		if(this.data.cusps == null){
			return;
		}
		
		var universe = this.universe;
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_RADIX + "-" + astrology.ID_AXIS);
		
		var axisRadius = this.radius + ((this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO)/4);
					
		var AS = 0;
		var IC = 3;
		var DC = 6;
		var MC = 9;
		var overlapLine, 
		startPosition, 
		endPosition, 
		line,
		lines;
				
		[AS,IC,DC,MC].forEach( function(i) {
																    								    								    								    								    																		 	 					 				 				 
			// overlap 												
			startPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius, this.data.cusps[i] + this.shift);
			endPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius, this.data.cusps[i] + this.shift);
			overlapLine = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y); 				 			
			overlapLine.setAttribute("stroke", astrology.LINE_COLOR);		 				 				 		
			overlapLine.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));
			wrapper.appendChild( overlapLine ); 
						 				 																
			// As
		 	if(i == AS){ 
		 		// Text
		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + (20 * astrology.SYMBOL_SCALE), this.data.cusps[i] + this.shift);
		 		wrapper.appendChild( this.paper.getSymbol( astrology.SYMBOL_AS, textPosition.x, textPosition.y));
		 	}
		 	 		 	 		 	 		
		 	// Ds
		 	if(i == DC){  		 		 		 		 		 		 		 
		 		// Text
		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + (2 * astrology.SYMBOL_SCALE), this.data.cusps[i] + this.shift);
		 		wrapper.appendChild( this.paper.getSymbol( astrology.SYMBOL_DS, textPosition.x, textPosition.y));
		 	}
		 	 		 	
		 	// Ic
		 	if(i == IC){ 
		 		// Text
		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + (10 * astrology.SYMBOL_SCALE), this.data.cusps[i] - 2 + this.shift);
		 		wrapper.appendChild( this.paper.getSymbol( astrology.SYMBOL_IC, textPosition.x, textPosition.y));
		 	}
		 	
		 	// Mc
		 	if(i == MC){ 		 		 		 	
		 		// Text
		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + (10 * astrology.SYMBOL_SCALE), this.data.cusps[i] + 2 + this.shift);
		 		wrapper.appendChild( this.paper.getSymbol( astrology.SYMBOL_MC, textPosition.x, textPosition.y));
		 	} 
	 	}, this);
	};
	
	/**
	 * Draw cusps
	 */
	astrology.Radix.prototype.drawCusps = function(){
		if(this.data.cusps == null){
			return;
		}
		
		var startPosition, endPosition, lines, line;
		var universe = this.universe;
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_RADIX + "-" + astrology.ID_CUSPS);
				
		var numbersRadius = this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO + (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE);
		
		var AS = 0;
		var IC = 3;
		var DC = 6;
		var MC = 9;
		var mainAxis = [AS,IC,DC,MC];
											
		//Cusps
		for (var i = 0, ln = this.data.cusps.length; i < ln; i++) {
 			
 			// Draws a dashed line when an point is in the way
 			lines = astrology.utils.getDashedLinesPositions(
 				this.cx, 
 				this.cy, 
 				this.data.cusps[i] + this.shift, 
 				this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, 
 				this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.rulerRadius),
 				this.pointRadius,
 				this.locatedPoints
 				);
 				
 			lines.forEach(function(line){ 				
 				line = this.paper.line( line.startX, line.startY, line.endX, line.endY);
 				line.setAttribute("stroke", astrology.LINE_COLOR);	 				 			 				 			
 				
 				if(mainAxis.indexOf(i) != -1){ 					
 					line.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));
 				}else{
 					line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));	 					
 				}	 			 			 	
 				 				 				 				 			 						 			 			 	
 		 		wrapper.appendChild( line );  				
 			}, this);	
 			 			 			 			 		 			 		 	 		
 		 	// Cup number  		 	
 		 	var deg360 = astrology.utils.radiansToDegree( 2 * Math.PI );
 		 	var startOfCusp = this.data.cusps[i];
 		 	var endOfCusp = this.data.cusps[ (i+1)%12 ];
 		 	var gap = endOfCusp - startOfCusp > 0 ? endOfCusp - startOfCusp : endOfCusp - startOfCusp + deg360;
 		 	var textPosition = astrology.utils.getPointPosition( this.cx, this.cy, numbersRadius, ((startOfCusp + gap/2) % deg360) + this.shift );
 		 	wrapper.appendChild( this.paper.getSymbol( (i+1).toString(), textPosition.x, textPosition.y )); 		 	  		 			  		 			
		}						      	      
	};
	
	/**
	 * Draw aspects
	 * @param{Array<Object> | null} customAspects - posible custom aspects to draw;
	 */
	astrology.Radix.prototype.aspects = function( customAspects ){
															
		var aspectsList = customAspects != null && Array.isArray(customAspects) ? 
						  customAspects : 
						  new astrology.AspectCalculator( this.toPoints, this.data.cusps).radix( this.data.planets );
						  						  						 						  										
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_ASPECTS);
								
		var duplicateCheck = [];
		
		for(var i = 0, ln = aspectsList.length; i < ln; i++){
			
			var key 		= aspectsList[i].aspect.name + "-" + aspectsList[i].point.name + "-" + aspectsList[i].toPoint.name;
			var opositeKey	= aspectsList[i].aspect.name + "-" + aspectsList[i].toPoint.name + "-" + aspectsList[i].point.name;									
			if( duplicateCheck.indexOf( opositeKey ) == -1 ){			
				duplicateCheck.push( key );
																			
				var startPoint = astrology.utils.getPointPosition(this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, aspectsList[i].toPoint.position + this.shift );
				var endPoint = astrology.utils.getPointPosition(this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, aspectsList[i].point.position + this.shift);
									
				var line = this.paper.line( startPoint.x, startPoint.y, endPoint.x, endPoint.y);       		       		       
				line.setAttribute("stroke", astrology.STROKE_ONLY ? astrology.LINE_COLOR : aspectsList[i].aspect.color);		 				 				 		
				line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));    
				
				line.setAttribute("data-name", aspectsList[i].aspect.name);
				line.setAttribute("data-degree", aspectsList[i].aspect.degree);				
				line.setAttribute("data-point", aspectsList[i].point.name);   		
				line.setAttribute("data-toPoint", aspectsList[i].toPoint.name);
				line.setAttribute("data-precision", aspectsList[i].precision);
				
				wrapper.appendChild( line );			
			}
		}
										     
        // this
        return context;
	};
	
	/**
	 * Add points of interest for aspects calculation
	 * @param {Obect} points, {"As":[0],"Ic":[90],"Ds":[180],"Mc":[270]} 
	 * @see (astrology.AspectCalculator( toPoints) )
	 */
	astrology.Radix.prototype.addPointsOfInterest = function( points ){
		
		for(point in points){
			this.toPoints[ point ] = points[point]; 	
		}
						
        return context;	
	};
		
	astrology.Radix.prototype.drawRuler = function drawRuler(){
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_RADIX + "-" + astrology.ID_RULER);
				
		var startRadius = (this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.rulerRadius));		
		var rays = astrology.utils.getRulerPositions( this.cx, this.cy, startRadius, startRadius + this.rulerRadius, this.shift);
		
		rays.forEach(function( ray ){
			var line = this.paper.line( ray.startX, ray.startY, ray.endX, ray.endY);       		       		       
			line.setAttribute("stroke", astrology.CIRCLE_COLOR);		 				 				 		
			line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));       		
			wrapper.appendChild( line );				
		}, this);

		var circle;			
		circle = this.paper.circle( this.cx, this.cy, startRadius);
		circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
        wrapper.appendChild( circle );       	       	
	};
	
	/**
	 * Draw circles
	 */
	astrology.Radix.prototype.drawCircles = function drawCircles(){
	
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_RADIX + "-" + astrology.ID_CIRCLES);
														
		var circle;
						      
        //indoor circle
        circle = this.paper.circle( this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);
        circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CIRCLE_STRONG * astrology.SYMBOL_SCALE));		
       	wrapper.appendChild( circle );     
       	
       	//outdoor circle
		circle = this.paper.circle( this.cx, this.cy, this.radius);
		circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CIRCLE_STRONG * astrology.SYMBOL_SCALE));
        wrapper.appendChild( circle );
       	
       	//inner circle
       	circle = this.paper.circle( this.cx, this.cy, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO);
       	circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CIRCLE_STRONG * astrology.SYMBOL_SCALE));
        wrapper.appendChild( circle );  	       	       	       	       	   
	};
			
	/**
	 * Display transit horoscope
	 * 
	 * @param {Object} data
	 * @example
	 *	{
	 *		"planets":{"Moon":[0], "Sun":[30],  ... },
	 *		"cusps":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274],	*		 
	 *	} 
	 * 
	 * @return {astrology.Transit} transit
	 */
	astrology.Radix.prototype.transit = function( data ){
		
		// remove axis (As, Ds, Mc, Ic) from radix
		astrology.utils.getEmptyWrapper( this.universe, astrology.ID_CHART + "-" + astrology.ID_RADIX + "-" + astrology.ID_AXIS);
		
		var transit = new astrology.Transit(context, data);
		transit.drawBg();					
		transit.drawPoints();		
		transit.drawCusps();	
		transit.drawRuler();			
		transit.drawCircles();	
		return transit; 			
	};
		
}( window.astrology = window.astrology || {}));

// ## Transit chart ###################################
(function( astrology ) {
	
	var context;
    
	/**
	 * Transit charts.
	 * 
	 * @class
	 * @public
	 * @constructor
 	 * @param {astrology.Radix} radix 
	 * @param {Object} data
	 */
	astrology.Transit = function( radix, data ){
		
		// Validate data
		var status = astrology.utils.validate(data);		 		
		if( status.hasError ) {										
			throw new Error( status.messages );
		}
						
		this.data = data;								
		this.paper = radix.paper; 
		this.cx = radix.cx;
		this.cy = radix.cy;
		this.toPoints = radix.toPoints;
		this.radius = radix.radius;
				
		this.rulerRadius = ((this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO)/astrology.RULER_RADIUS);
		this.pointRadius = this.radius + (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO +  (astrology.PADDING * astrology.SYMBOL_SCALE));
											
		this.shift = radix.shift;		
						
		this.universe = document.createElementNS(this.paper.root.namespaceURI, "g");
		this.universe.setAttribute('id', astrology.ID_CHART + "-" + astrology.ID_TRANSIT);
		this.paper.root.appendChild( this.universe );
					
		context = this; 
												
		return this;
	};
	
	/**
	 * Draw background
	 */
	astrology.Transit.prototype.drawBg = function(){				
		var universe = this.universe;		
						
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_BG);	
		
		var LARGE_ARC_FLAG = 1;	
		var start = 0; //degree
		var end = 359.99; //degree 				
		var hemisphere = this.paper.segment( this.cx, this.cy, this.radius+this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, start, end, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, LARGE_ARC_FLAG);
		hemisphere.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);				
		wrapper.appendChild( hemisphere );							
	};
				
	/**
	 * Draw planets
	 * 
	 * @param{undefined | Object} planetsData, posible data planets to draw
	 */
	astrology.Transit.prototype.drawPoints = function( planetsData ){
		
		var planets = (planetsData == null) ? this.data.planets : planetsData;		
		if(planets == null){
			return;
		}
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_POINTS);
					
		var gap = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);								
		var step = ( gap - 2*(astrology.PADDING * astrology.SYMBOL_SCALE)) / Object.keys(planets).length;
					
		var pointerRadius = this.radius + (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO);
		var startPosition, endPosition;
		
		this.locatedPoints = [];																			
		for (var planet in planets) {
 		   if (planets.hasOwnProperty( planet )) {
 		   	 		   	 		   		 		   		
 		   		var position = astrology.utils.getPointPosition( this.cx, this.cy, this.pointRadius, planets[planet][0] + this.shift); 		   	
 		   		var point = {name:planet, x:position.x, y:position.y, r:(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), angle:planets[planet][0] + this.shift, pointer:planets[planet][0] + this.shift}; 		   		
 		   		this.locatedPoints = astrology.utils.assemble(this.locatedPoints, point, {cx:this.cx, cy:this.cy, r:this.pointRadius});   
 		   	} 		
		}
		
		if( astrology.DEBUG ) console.log( "Transit count of points: " + this.locatedPoints.length );
		if( astrology.DEBUG ) console.log( "Transit located points:\n" + JSON.stringify(this.locatedPoints) );
													
		this.locatedPoints.forEach(function(point){
						        
        	// draw pointer        	
        	startPosition = astrology.utils.getPointPosition( this.cx, this.cy, pointerRadius, planets[point.name][0] + this.shift);
        	endPosition = astrology.utils.getPointPosition(this.cx, this.cy, pointerRadius+this.rulerRadius/2, planets[point.name][0] + this.shift );
        	var pointer = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
        	pointer.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
			pointer.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
        	wrapper.appendChild(pointer);
        	
        	// draw pointer line
        	if( !astrology.STROKE_ONLY && (planets[point.name][0] + this.shift) != point.angle){	        	
	        	startPosition = endPosition;
	        	endPosition = astrology.utils.getPointPosition(this.cx, this.cy, this.pointRadius-(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), point.angle );
	        	var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
	        	line.setAttribute("stroke", astrology.LINE_COLOR);		        	
	        	line.setAttribute("stroke-width", 0.5 * (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));       	
	        	wrapper.appendChild(line);
        	}        	
        	
        	// draw symbol						
			var symbol = this.paper.getSymbol(point.name, point.x, point.y);
        	symbol.setAttribute('id', astrology.ID_CHART + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_POINTS + "-" + point.name);
        	wrapper.appendChild( symbol );
        	        	        	        
        	// draw point descriptions
        	var textsToShow = [(Math.round(planets[point.name][0]) % 30).toString()];
        	
        	var zodiac = new astrology.Zodiac(this.data.cusps);
        	if(planets[point.name][1] && zodiac.isRetrograde(planets[point.name][1])){
        		textsToShow.push("R");
        	}else{
        		textsToShow.push("");
        	}
        	textsToShow = textsToShow.concat(zodiac.getDignities({"name":point.name, "position":planets[point.name][0]}, astrology.DIGNITIES_EXACT_EXALTATION_DEFAULT).join(","));        	
        	         	           	        	        	        	 
        	var pointDescriptions = astrology.utils.getDescriptionPosition(point, textsToShow);         	
        	pointDescriptions.forEach(function(dsc){        		        		        		     
				wrapper.appendChild( this.paper.text( dsc.text, dsc.x, dsc.y, astrology.POINTS_TEXT_SIZE, astrology.SIGNS_COLOR) );	        		
        	}, this);
        	        	        	        	       	              	        	          			
		}, this);										
	};
	
	/**
	 * Draw circles
	 */
	astrology.Transit.prototype.drawCircles = function drawCircles(){
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_CIRCLES);
		var radius = this.radius + this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO;
			
		var circle;			
		circle = this.paper.circle( this.cx, this.cy, radius);
		circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CIRCLE_STRONG * astrology.SYMBOL_SCALE));
        wrapper.appendChild( circle );										
	};
	
	/**
	 * Draw cusps
	 * @param{undefined | Object} cuspsData, posible data cusps to draw
	 */
	astrology.Transit.prototype.drawCusps = function( cuspsData ){
		
		var cusps = (cuspsData == null) ? this.data.cusps : cuspsData;		
		if(cusps == null){
			return;
		}
						
		var startPosition, endPosition, lines, line;
		var universe = this.universe;
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_CUSPS);		
		var numbersRadius = this.radius + ((this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO - this.rulerRadius)/2);
		
		var AS = 0;
		var IC = 3;
		var DC = 6;
		var MC = 9;
		var mainAxis = [AS,IC,DC,MC];
		
		//Cusps
		for (var i = 0, ln = cusps.length; i < ln; i++) {
			// Lines 			 			 		 		
 			var startPosition = bottomPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius, cusps[i] + this.shift);
 			var endPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius + this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO - this.rulerRadius, cusps[i] + this.shift);
 			var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
 			line.setAttribute("stroke", astrology.LINE_COLOR);		 				 				 		
 			line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE)); 
 			
 			wrapper.appendChild( line );
 			 			 		
 			// Cup number  		 	
 		 	var deg360 = astrology.utils.radiansToDegree( 2 * Math.PI );
 		 	var startOfCusp = cusps[i];
 		 	var endOfCusp = cusps[ (i+1)%12 ];
 		 	var gap = endOfCusp - startOfCusp > 0 ? endOfCusp - startOfCusp : endOfCusp - startOfCusp + deg360;
 		 	var textPosition = astrology.utils.getPointPosition( this.cx, this.cy, numbersRadius, ((startOfCusp + gap/2) % deg360) + this.shift );
 		 	wrapper.appendChild( this.paper.getSymbol( (i+1).toString(), textPosition.x, textPosition.y )); 						
		}				
	};
		
	astrology.Transit.prototype.drawRuler = function drawRuler(){
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_RULER);
				
		var startRadius = (this.radius + (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO));		
		var rays = astrology.utils.getRulerPositions( this.cx, this.cy, startRadius, startRadius - this.rulerRadius, this.shift);
		
		rays.forEach(function( ray ){
			var line = this.paper.line( ray.startX, ray.startY, ray.endX, ray.endY);       		       		       
			line.setAttribute("stroke", astrology.CIRCLE_COLOR);		 				 				 		
			line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));       		
			wrapper.appendChild( line );				
		}, this);

		var circle;			
		circle = this.paper.circle( this.cx, this.cy, startRadius - this.rulerRadius);
		circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
        wrapper.appendChild( circle );       	       	
	};
		
	/**
	 * Draw aspects
	 * @param{Array<Object> | null} customAspects - posible custom aspects to draw;
	 */
	astrology.Transit.prototype.aspects = function( customAspects ){
		
		var aspectsList = customAspects != null && Array.isArray(customAspects) ? 
						  customAspects : 
						  new astrology.AspectCalculator( this.toPoints ).radix( this.data.planets );
							
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_ASPECTS);
																										
		for(var i = 0, ln = aspectsList.length; i < ln; i++){
														
			var startPoint = astrology.utils.getPointPosition(this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, aspectsList[i].toPoint.position + this.shift );
			var endPoint = astrology.utils.getPointPosition(this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, aspectsList[i].point.position + this.shift);
								
			var line = this.paper.line( startPoint.x, startPoint.y, endPoint.x, endPoint.y);       		       		       
			line.setAttribute("stroke", astrology.STROKE_ONLY ? astrology.LINE_COLOR : aspectsList[i].aspect.color);		 				 				 		
			line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));  
			
			line.setAttribute("data-name", aspectsList[i].aspect.name);
			line.setAttribute("data-degree", aspectsList[i].aspect.degree);				
			line.setAttribute("data-point", aspectsList[i].point.name);   		
			line.setAttribute("data-toPoint", aspectsList[i].toPoint.name);
			line.setAttribute("data-precision", aspectsList[i].precision);
						     	
			wrapper.appendChild( line );				
		}         
		         
        // this
        return context;				
	};
		
	/**
	 * Moves points to another position.
	 * 
 	 * @param {Object} data - planets target positions.
 	 * @param {Integer} duration - in seconds
 	 * @param {boolean} isReverse 	  	 
 	 * @param {Function | undefined} callbck - the function executed at the end of animation
	 */
	astrology.Transit.prototype.animate = function( data, duration, isReverse, callback ){
		// Validate data
		var status = astrology.utils.validate(data);		 		
		if( status.hasError ) {										
			throw new Error( status.messages );
		}
							
		// remove aspects
		astrology.utils.getEmptyWrapper( this.universe, astrology.ID_CHART + "-" + astrology.ID_ASPECTS);
																				
		var animator = new astrology.Animator( context );			
		animator.animate( data, duration, isReverse, (function(){
			
			// animation is finished
			this.data = data;
			this.drawPoints();		
			this.drawCusps();
			this.aspects();
			
			if(typeof callback == 'function'){
				callback();
			}
						
		}).bind(this));
																											
		 // this
        return context;				
	};
		
}( window.astrology = window.astrology || {}));
// ## Transit chart ###################################
(function( astrology ) {
		
	var context;
    
	/**
	 * Aspects calculator
	 * 
	 * @class
	 * @public
	 * @constructor 	 
	 * @param {Object} points; {"Sun":[0], "Moon":[90], "Neptune":[120], "As":[30]}
	 * @param {Object | null } settings
	 */
	astrology.AspectCalculator = function( toPoints, settings ){
		
		if(toPoints == null){
			throw new Error( "Param 'toPoint' must not be empty." );
		}
		
		this.settings = settings || {}; 		
		this.settings.aspects = settings && settings.aspects || astrology.ASPECTS;
							
		this.toPoints = toPoints;
		this.cusps4 = [];
		this.cusps4.push(settings[0]);
		this.cusps4.push(settings[3]);
		this.cusps4.push(settings[6]);
		this.cusps4.push(settings[9]);
		
		context = this; 
												 
		return this;
	};
	
	/**
	 * Getter for this.toPoints
	 * @see constructor
	 * 
	 * @return {Object} 
	 */
	astrology.AspectCalculator.prototype.getToPoints = function(){
		return this.this.toPoints;
	};
	
	/**
	 * Radix aspects
	 * 
	 * In radix calculation is the param "points" the same as param "toPoints" in constructor 
	 * , but without special points such as: As,Ds, Mc, Ic, ...
	 * 
	 * @param {Object} points; {"Sun":[0], "Moon":[90]}
	 * 
	 * @return {Array<Object>} [{"aspect":{"name":"conjunction", "degree":120}"", "point":{"name":"Sun", "position":123}, "toPoint":{"name":"Moon", "position":345}, "precision":0.5}]]
	 */
	astrology.AspectCalculator.prototype.radix = function( points ){
		if(!points){
			return []; 
		}
							
		var aspects = [];	
		var cuspsArr = ['Asc','Des','Mc','Ic'];
		points.Asc = [this.cusps4[0]];
		points.Des = [this.cusps4[2]];
		points.Mc = [this.cusps4[3]];
		points.Ic = [this.cusps4[1]];
		this.toPoints.Asc = [this.cusps4[0]];
		this.toPoints.Des = [this.cusps4[2]];
		this.toPoints.Mc = [this.cusps4[3]];
		this.toPoints.Ic = [this.cusps4[1]];
		
		for (var point in points) {
 		   if (points.hasOwnProperty( point )) {
 		   	 		   	 		   
 		   	for (var toPoint in this.toPoints) {
 		   		if (this.toPoints.hasOwnProperty( toPoint )) { 		   			 		   			 		   		
 		   			
 		   			if( point != toPoint){ 		   				 		   			 		   			 		   
	 		   			for(var aspect in this.settings.aspects){ 		   				
	 		   				if ( hasAspect( points[point][0], this.toPoints[toPoint][0], this.settings.aspects[aspect]) && 
	 		   					!(cuspsArr.indexOf(point) > -1 && cuspsArr.indexOf(toPoint) > -1) ) {
	 		   					aspects.push(
	 		   								{
	 		   								"aspect":{"name":aspect, "degree":this.settings.aspects[aspect].degree, "orbit":this.settings.aspects[aspect].orbit, "color":this.settings.aspects[aspect].color}, 	 		   								 
	 		   								"point":{"name":point, "position":points[point][0]}, 
	 		   								"toPoint":{"name":toPoint, "position":this.toPoints[toPoint][0]},
	 		   								"precision": calcPrecision(points[point][0], this.toPoints[toPoint][0], this.settings.aspects[aspect]["degree"]).toFixed(4)
	 		   								}
	 		   							)
	 		   				}
	 		   				
	 		   			}
 		   			} 		   		 		   						 
 		   		} 		   		
 		   	} 		   	 		   	 		  
 		   } 		
 		}
		
		function cuspIntersect(points, toPoints) {
			return cuspsArr.indexOf(points) > -1 && cuspsArr.indexOf(toPoints) > -1
		}
 		 		 		  		 		 
		return aspects.sort( compareAspectsByPrecision );
	}; 
			
	/**
	 * Transit aspects
	 *
	 * @param {Object} points - transiting points; {"Sun":[0, 1], "Uranus":[90, -1], "NAME":[ANGLE, SPEED]}; 
	 * @return {Array<Object>} [{"aspect":{"name":"conjunction", "degree":120}"", "point":{"name":"Sun", "position":123}, "toPoint":{"name":"Moon", "position":345}, "precision":0.5}]]
	 */
	astrology.AspectCalculator.prototype.transit = function( points ){	
		if(!points){
			return []; 
		}
		
		var aspects = [];
		
		for (var point in points) {
 		   if (points.hasOwnProperty( point )) { 		   	
 		   		for (var toPoint in this.toPoints) {
 		   			if (this.toPoints.hasOwnProperty( toPoint )) {
 		   		
 		   				for(var aspect in this.settings.aspects){ 		   				
	 		   				if(hasAspect( points[point][0], this.toPoints[toPoint][0], this.settings.aspects[aspect])){	 
	 		   					
	 		   					var precision = calcPrecision(points[point][0], this.toPoints[toPoint][0], this.settings.aspects[aspect]["degree"]);
	 		   					
	 		   					// -1 : is approaching to aspect
	 		   					// +1 : is moving away
	 		   					if(isTransitPointApproachingToAspect( this.settings.aspects[aspect]["degree"], this.toPoints[toPoint][0], points[point][0] )){
	 		   						precision *= -1;
	 		   					}
	 		   					
	 		   					// if transit has speed value && transit is retrograde
	 		   					if(points[point][1] && points[point][1] < 0 ){ 
	 		   						precision *= -1;
	 		   					}
	 		   						 		   						 		   						 		   							   				
	 		   					aspects.push(
	 		   								{
	 		   								"aspect":{"name":aspect, "degree":this.settings.aspects[aspect].degree, "orbit":this.settings.aspects[aspect].orbit, "color":this.settings.aspects[aspect].color}, 	 		   								 
	 		   								"point":{"name":point, "position":points[point][0]}, 
	 		   								"toPoint":{"name":toPoint, "position":this.toPoints[toPoint][0]},
	 		   								"precision":precision.toFixed(4)
	 		   								}
	 		   							)
	 		   				}	 		   				
	 		   			} 		   		 		   		 		   	
 		   			}
 		   		} 		   	
 		   } 		
 		}
 		 		   						
		return aspects.sort( compareAspectsByPrecision );
	};
	
	/*
	* @private
 	* @param {double} point
 	* @param {double} toPoint
 	* @param {Array} aspects; [DEGREE, ORBIT]
	 */
	function hasAspect(point, toPoint, aspect){
		var result = false;
		
		var gap = Math.abs( point - toPoint );
		
		if( gap > astrology.utils.radiansToDegree( Math.PI)){
			gap = astrology.utils.radiansToDegree( 2 * Math.PI) - gap;
		}
		
		var orbitMin = aspect["degree"] - (aspect["orbit"] / 2);
		var orbitMax = aspect["degree"] + (aspect["orbit"] / 2);
		
		if(orbitMin <= gap && gap <= orbitMax){											
			result = true;
		}
								
		return result;	
	}
	
	/*
	* @private 
 	* @param {Object} pointAngle
 	* @param {Object} toPointAngle
 	* @param {double} aspectDegree;
	 */
	function calcPrecision(point, toPoint, aspect){
		var gap = Math.abs( point - toPoint );
		
		if( gap > astrology.utils.radiansToDegree( Math.PI)){
			gap = astrology.utils.radiansToDegree( 2 * Math.PI) - gap;
		}			
		return Math.abs( gap - aspect);
	}
	
	/*
	 * Calculate direction of aspect
	 * whether the transiting planet is approaching or is falling
	 * @private
	 * 
	 * //TODO
	 * This method is tested, and for tests gives the right results. 
	 * But the code is totally unclear. It needs to be rewritten.
	 * @param {double} aspect - aspect degree; for example 90.	
	 * @param {double} toPoint - angle of standing point
	 * @param {double} point - angle of transiting planet
	 * @return {boolean}
	 */
	function isTransitPointApproachingToAspect(aspect, toPoint, point){
		
		if( (point - toPoint) > 0 ){
			
			if((point - toPoint) > astrology.utils.radiansToDegree( Math.PI)){
				point = (point + aspect) % astrology.utils.radiansToDegree( 2 * Math.PI);
			}else{
				toPoint = (toPoint + aspect) % astrology.utils.radiansToDegree( 2 * Math.PI);
			}			
		}else{
			
			if((toPoint - point) > astrology.utils.radiansToDegree( Math.PI)){
				toPoint = (toPoint + aspect) % astrology.utils.radiansToDegree( 2 * Math.PI);
			}else{
				point = (point + aspect) % astrology.utils.radiansToDegree( 2 * Math.PI);
			}										
		}
		
		var _point = point;
		var _toPoint = toPoint;
		
		var difference = _point - _toPoint;
		
		if( Math.abs( difference ) > astrology.utils.radiansToDegree( Math.PI)){			
			_point = toPoint;
			_toPoint = point;
		}
							
		return (_point - _toPoint < 0);				
	}
	
	/*
	 * Aspects comparator
	 * by precision
	 * @private
	 * @param {Object} a 
	 * @param {Object} b 
	 */
	function compareAspectsByPrecision( a , b ) {		
		return a.precision - b.precision;								
	}
		
}( window.astrology = window.astrology || {}));

// ## Zodiac ###################################
(function( astrology ) {
	
	// Zodiac
	var SIGNS_ARIES 		= 1;
	var SIGNS_TAURUS 		= 2;
	var SIGNS_GEMINI 		= 3;
	var SIGNS_CANCER 		= 4;
	var SIGNS_LEO 			= 5;
	var SIGNS_VIRGO 		= 6;
	var SIGNS_LIBRA 		= 7;
	var SIGNS_SCORPIO 		= 8;
	var SIGNS_SAGITTARIUS 	= 9;
	var SIGNS_CAPRICORN 	= 10;
	var SIGNS_AQUARIUS 		= 11;
	var SIGNS_PISCES 		= 12;
    
	/**
	 * Zodiac
	 * 
	 * Gives the position of points in the zodiac.
	 * Position of point in the zodiac.
	 * Position of point in houses.
	 * Dignities of planets.
	 * 
	 * @class
	 * @public
	 * @constructor 	
	 * @param {Array} cusps - cusprs in zodiac; [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274]
	 * @param {Object | null } settings
	 */
	astrology.Zodiac = function( cusps, settings){
		
		if(cusps == null){
			throw new Error( "Param 'cusps' must not be empty." );
		}
		
		if( !( Array.isArray(cusps) && cusps.length == 12) ){
			throw new Error( "Param 'cusps' is not 12 length Array." );
		}
		
		this.cusps = cusps;
		this.settings = settings || {}; 
						
		return this;
	};
	
	/**
	 * Get astrological sign
	 * 1 - Arise, ... , 12 - Pisces
	 * 
	 * @param {double} point - angle of point in circle
	 * @return { \[1-9] | 1[0-2]\ } 
	 */
	astrology.Zodiac.prototype.getSign = function( point ){
		var angle = point % astrology.utils.radiansToDegree( 2 * Math.PI);											
		return Math.floor((angle  / 30) + 1);			
	};
	
	/**
	 * Is retrograde
	 * 
 	 * @param {double} speed
 	 * @return {boolean}
	 */
	astrology.Zodiac.prototype.isRetrograde = function( speed ){
		return speed < 0;
	};
	 
	 /**
	 * Get house number
	 * 1 - 12
	 * 
	 * @param {double} point - angle of point in circle
	 * @return { \[1-9] | 1[0-2]\ }
	 */
	 astrology.Zodiac.prototype.getHouseNumber = function( point ){
	 	var angle = point % astrology.utils.radiansToDegree( 2 * Math.PI);	
	 	
	 	for(var i = 0, ln = this.cusps.length; i < ln; i++){
	 		if(angle >= this.cusps[i] && angle < this.cusps[ (i % (ln-1)) + 1 ]){
	 			return i + 1;
	 		}
	 	}
	 	
	 	// cusp passes over zero
	 	for(var i = 0, ln = this.cusps.length; i < ln; i++){
	 		if( this.cusps[i] > this.cusps[ (i % (ln-1)) + 1 ]){
	 			return i+1;
	 		}	
	 	}
	 		 	
		throw new Error( "Oops, serious error in the method: 'astrology.Zodiac.getHouseNumber'." );
	 };
	 
	 /**
	  * Calculate dignities of planet
	  *   
	  * r - Rulership 
	  * d - Detriment  
	  * e - Exaltation  
	  * E - Exalatation - Exact exaltation
	  * f - Fall 
	  *  
 	  * @param {Object} planet, { name:"Sun", position:60.2 }
 	  * @param {Array<Object> | null } exactExaltation - list of named angles, [{ name:"Sun", position:278, orbit:2 }, { name:"Moon", position:3, , orbit:2 }]
 	  * @return {Array<String>}
	  */
	 astrology.Zodiac.prototype.getDignities = function( planet, exactExaltation ){
	 	if(!(planet && planet.name && planet.position != null)){
	 		return [];
	 	}
	 	
	 	var result = [];	 	
	 	var sign = this.getSign(planet.position);
	 		 		 
	 	var position = planet.position % astrology.utils.radiansToDegree( 2 * Math.PI);
	 	
	 	switch ( planet.name ) {
		  case astrology.SYMBOL_SUN:
		  		
		  		if(sign == SIGNS_LEO){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_AQUARIUS){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_ARIES){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_VIRGO){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;	
		    
		    case astrology.SYMBOL_MOON:
		  		
		  		if(sign == SIGNS_CANCER){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_CAPRICORN){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_TAURUS){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_SCORPIO){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_MERCURY:
		  		
		  		if(sign == SIGNS_GEMINI){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_SAGITTARIUS){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_VIRGO){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_PISCES){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;	
		    
		    case astrology.SYMBOL_VENUS:
		  		
		  		if(sign == SIGNS_TAURUS || sign == SIGNS_LIBRA){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_ARIES || sign == SIGNS_SCORPIO){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_PISCES){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_VIRGO){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break; 
		    
		    case astrology.SYMBOL_MARS:
		  		
		  		if(sign == SIGNS_ARIES || sign == SIGNS_SCORPIO){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_TAURUS || sign == SIGNS_LIBRA){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_CAPRICORN){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_CANCER){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_JUPITER:
		  		
		  		if(sign == SIGNS_SAGITTARIUS || sign == SIGNS_PISCES){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_GEMINI || sign == SIGNS_VIRGO){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_CANCER){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_CAPRICORN){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break; 
		    
		    case astrology.SYMBOL_SATURN:
		  		
		  		if(sign == SIGNS_CAPRICORN || sign == SIGNS_AQUARIUS){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_CANCER || sign == SIGNS_LEO){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_LIBRA){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_ARIES){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_URANUS:
		  		
		  		if(sign == SIGNS_AQUARIUS ){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_LEO ){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_SCORPIO){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_TAURUS){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_NEPTUNE:
		  		
		  		if(sign == SIGNS_PISCES ){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_VIRGO ){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_LEO || sign == SIGNS_SAGITTARIUS){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_AQUARIUS || sign == SIGNS_GEMINI){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_PLUTO:
		  		
		  		if(sign == SIGNS_SCORPIO ){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_TAURUS ){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_ARIES ){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_LIBRA){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		     
		    
		    
		    
		  default:		    
		    break;
		}
									
		if( exactExaltation != null && Array.isArray(exactExaltation)){			
			for(var i = 0, ln = exactExaltation.length; i < ln; i++){
				if(planet.name == exactExaltation[i].name){					
					if( hasConjunction( planet.position, exactExaltation[i].position, exactExaltation[i].orbit)){
						result.push(astrology.DIGNITIES_EXACT_EXALTATION);		
					}								
				}				
			}
		}
			 		 		 		 		 
	 	return result;
	 };
	 
	  /*
	 * To hours:minutes:seconds
	 * @param {Double} d
	 * @return {String}
	 */
	 astrology.Zodiac.prototype.toDMS = function ( d ) {  
	 	d += 0.5/3600./10000.;	// round to 1/1000 of a second
		var deg = parseInt(d);
		d = (d - deg) * 60;
		var min = parseInt(d);
		d = (d - min) * 60;
		var sec = parseInt(d);
		
		return deg + "° " + min + "' " + sec;
	 };
	 
	 /*
	  * Has conjunction with point
	  * 
	  * @private
	  * 
	  * @param {Double} planetPosition
 	  * @param {Double} poitPosition
 	  * @param {Integer} orbit
 	  * @return {boolean}
	  */
	 function hasConjunction(planetPosition, pointPosition, orbit){
	 	var result = false;
	 		 		 		
			var minOrbit = (pointPosition - orbit/2) < 0 ?
				astrology.utils.radiansToDegree( 2 * Math.PI) - (pointPosition - orbit/2) : 
				pointPosition - orbit/2;
				
			var maxOrbit = (pointPosition + orbit/2) >= astrology.utils.radiansToDegree( 2 * Math.PI) ?
				(pointPosition + orbit/2) - astrology.utils.radiansToDegree( 2 * Math.PI) :
				(pointPosition + orbit/2);
			
			if( minOrbit > maxOrbit){ //crossing over zero
			
				if( minOrbit >= planetPosition && planetPosition <= minOrbit){
					result = true;
				}
									
			}else{
				
				if( minOrbit <= planetPosition && planetPosition <= maxOrbit){
					result = true;
				}				
			}				 						
								 		 		 	
	 	return result;
	 };
	 
	
	 					 
}( window.astrology = window.astrology || {}));

// ## Timer ###################################
(function( astrology ) {
		   
	/**
	 * Timer
	 * 
	 * Animation timer
	 * 
	 * @class
	 * @public
	 * @constructor 	
	 */
	astrology.Timer = function( callback ){
						
		if(typeof callback !== "function"){
			throw new Error( "param 'callback' has to be a function." );
		}				
						
		this.callback = callback;				
		this.boundTick_ = this.tick.bind(this); 
										
		return this;
	};
	
	astrology.Timer.prototype.start = function(){	
		if (!this.requestID_){
			this.lastGameLoopFrame = new Date().getTime();	
			this.tick();	
			if( astrology.DEBUG ) console.log("[astrology.Timer] start"); 
		}
	};
	
	astrology.Timer.prototype.stop = function(){	
		if(this.requestID_){    		
			window.cancelAnimationFrame( this.requestID_ );	
			this.requestID_ = undefined;
			if(astrology.DEBUG) console.log("[astrology.Timer] stop");
		}	
	};
	
	astrology.Timer.prototype.isRunning = function(){
		return this.requestID_ ? true : false;
	};
	
	astrology.Timer.prototype.tick = function(){	
		var now = new Date().getTime(); 				
		this.requestID_ = window.requestAnimationFrame( this.boundTick_ );		
		this.callback( now - this.lastGameLoopFrame );		
		this.lastGameLoopFrame = now;				
	};
	 					 
}( window.astrology = window.astrology || {}));
// ## Animator ###################################
(function( astrology ) {
	
	var context;
			  
	/**
	 * Transit chart animator
	 * 
	 * Animates the object on a circle.
	 * 
	 * @class
	 * @public
	 * @constructor 	
	 * @param {Object} from, {"Sun":[12], "Moon":[60]}
	 * @param {Object} to, {"Sun":[30], "Moon":[180]}
	 * @param {Object} settings, {cx:100, cy:100, radius:200, prefix:"astro-chart-"}
	 */
	astrology.Animator = function( transit ){
		
		this.transit = transit;
		
		// Copy data
		this.actualPlanetPos = {};
		for(var planet in this.transit.data.planets){
			this.actualPlanetPos[planet] = this.transit.data.planets[planet];
		}
										
		this.timer = new astrology.Timer( this.update.bind(this) );
		
		// time, passed since the start of the loop
		this.timeSinceLoopStart = 0;
		
		context = this;
									
		return this;
	};
		
	/**
	 * Animate objects
	 
	 * @param {Object} data, targetPositions 
 	 * @param {Integer} duration - seconds
 	 * @param {boolean} isReverse 
 	 * @param {Function} callbck - start et the end of animation
	 */
	astrology.Animator.prototype.animate = function( data, duration, isReverse, callback){
		this.data = data;		 			
		this.duration = duration * 1000;
		this.isReverse = isReverse || false;					
		this.callback = callback; 
		
		this.rotation = 0;				
		this.cuspsElement = document.getElementById(astrology.ID_CHART + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_CUSPS);
		
		this.timer.start();									
	};
	
	astrology.Animator.prototype.update = function( deltaTime ){
		deltaTime = deltaTime || 1; //									
		this.timeSinceLoopStart += deltaTime;					
		if (this.timeSinceLoopStart >= this.duration) {
			this.timer.stop();					
								
			if( typeof this.callback  === "function"){
				this.callback();	
			}
			
			return;					
		}
									
		var expectedNumberOfLoops = (this.duration - this.timeSinceLoopStart) < deltaTime ? 
							1 :		
		 					Math.round( (this.duration - this.timeSinceLoopStart) / deltaTime);		
						 											 
		updatePlanets( expectedNumberOfLoops );
		updateCusps( expectedNumberOfLoops );														
	};
	
	/*
	 * @private
	 */
	function updateCusps( expectedNumberOfLoops ){	
		
		var deg360 = astrology.utils.radiansToDegree( 2 * Math.PI);							
		var targetCuspAngle = context.transit.data.cusps[0] - context.data.cusps[0];					
					
		if( targetCuspAngle < 0 ){
			targetCuspAngle += deg360; 		
		}
						
		// speed
		if(  astrology.ANIMATION_CUSPS_ROTATION_SPEED > 0 ){
			targetCuspAngle += (context.isReverse)?
		 		-1 * ((astrology.ANIMATION_CUSPS_ROTATION_SPEED * deg360) + deg360) :
				astrology.ANIMATION_CUSPS_ROTATION_SPEED * deg360;
		}
																																													
		var difference = (context.isReverse) ? 
			context.rotation - targetCuspAngle : 
			targetCuspAngle - context.rotation;
								
		// zero crossing
		if( difference < 0 ){
			difference += deg360; 		
		}
			 				
		var increment = difference /  expectedNumberOfLoops;
						
		if(context.isReverse){
			increment *= -1; 				
		}						
		context.rotation += increment;
														 
		context.cuspsElement.setAttribute("transform", "rotate(" + context.rotation + " " + context.transit.cx + " " + context.transit.cy +")");
					
		if( expectedNumberOfLoops == 1){
			context.cuspsElement.removeAttribute("transform");
		}								
	};
	
	/*
	 * @private
	 */
	function updatePlanets( expectedNumberOfLoops ){
		
		for(var planet in context.data.planets){
			var actualPlanetAngle = context.actualPlanetPos[planet][0]; 		
			var targetPlanetAngle = context.data.planets[planet][0];
			var isRetrograde = context.actualPlanetPos[planet][1] != null && context.actualPlanetPos[planet][1] < 0;
								
			var difference;
			if( context.isReverse && isRetrograde){
				difference = targetPlanetAngle - actualPlanetAngle;
			
			}else if( context.isReverse || isRetrograde ){
				difference = actualPlanetAngle - targetPlanetAngle;
								
			}else{
				difference = targetPlanetAngle - actualPlanetAngle;
			}
																
			// zero crossing
			if( difference < 0 ){
				difference += astrology.utils.radiansToDegree( 2 * Math.PI); 		
			}
			
			var increment = difference /  expectedNumberOfLoops;
																																								
			if(context.isReverse){
				increment *= -1; 				
			}
			
			if(isRetrograde){
				increment *= -1; 
			}
			
			var newPos = actualPlanetAngle + increment;
			if( newPos < 0 ){
				newPos += astrology.utils.radiansToDegree( 2 * Math.PI);
			}
			
			context.actualPlanetPos[planet][0] = newPos;										
		}
								
		context.transit.drawPoints( context.actualPlanetPos );		
	}
						 		
}( window.astrology = window.astrology || {}));
// ## UTILS #############################
(function( astrology ) {
	
	astrology.utils = {};
	
	/**
	 * Calculate position of the point on the circle.
	 * 
	 * @param {int} cx - center x 
	 * @param {int} cy - center y
	 * @param {int} radius
	 * @param {double} angle - degree			
	 * 
	 * @return {Object} - {x:10, y:20}
	 */	
	astrology.utils.getPointPosition = function( cx, cy, radius, angle ){		
		var angleInRadius = (astrology.SHIFT_IN_DEGREES - angle) * Math.PI / 180;
		var xPos = cx + radius * Math.cos( angleInRadius );
		var yPos = cy + radius * Math.sin( angleInRadius );							  		  			
		return {x:xPos, y:yPos};
	};
	
	astrology.utils.degreeToRadians = function( degree ){
		return degrees * Math.PI / 180;
	};

	astrology.utils.radiansToDegree = function( radians ){
		return radians * 180 / Math.PI;
	};
	
	/**
	 * Calculates positions of the point description
	 * 
	 * @param {Object} point
	 * @param {Array<String>} texts
	 * 
	 * @return {Array<Object>} [{text:"abc", x:123, y:456}, {text:"cvb", x:456, y:852}, ...]
	 */
	astrology.utils.getDescriptionPosition = function( point, texts ){
		var RATION = 1.4;
		var result = [];		
		var posX = point.x + (astrology.COLLISION_RADIUS/RATION * astrology.SYMBOL_SCALE)  ;
		var posY = point.y - (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE);
		
		texts.forEach(function(text, idx){						
			result.push({text:text, x:posX, y:posY + (astrology.COLLISION_RADIUS/RATION * astrology.SYMBOL_SCALE * idx)});					
		}, this);
						
		return result;
	};
	
	/**
	 * Checks a source data
	 * @private
	 * 
	 * @param {Object} data
	 * @return {Object} status
	 */
	astrology.utils.validate = function( data ){
		var status = {hasError:false, messages:[]};
		
		if( data == null ){			
			status.messages.push( "Data is not set." );
			status.hasError = true;
			return status;
		}
		
		if(data.planets == null){					
			status.messages.push( "There is not property 'planets'." );
			status.hasError = true;
		}
		
		for (var property in data.planets) {
    		if (data.planets.hasOwnProperty(property)) {        		
        		if(!Array.isArray( data.planets[property] )){
        			status.messages.push( "The planets property '"+ property +"' has to be Array." );
					status.hasError = true;	
        		}
    		}
		}
					
		if(data.cusps != null && !Array.isArray(data.cusps)){
			status.messages.push( "Property 'cusps' has to be Array." );
			status.hasError = true;
		}
		
		if(data.cusps != null && data.cusps.length != 12){			
			status.messages.push( "Count of 'cusps' values has to be 12." );
			status.hasError = true;
		}
									
		return status;		
	};
	
	/**
	 * Get empty DOMElement with ID
	 * 
	 * @param{String} elementID
	 * @param{DOMElement} parent
	 * @return {DOMElement}
	 */
	astrology.utils.getEmptyWrapper = function( parent, elementID ){
		
		var wrapper = document.getElementById( elementID );		
		if(wrapper){
			astrology.utils.removeChilds( wrapper );
		}else{					
			wrapper = document.createElementNS( document.getElementById(astrology.ID_CHART).namespaceURI, "g");
			wrapper.setAttribute('id', elementID);
			parent.appendChild( wrapper );			
		} 
		
		return wrapper;
	};
	
	/**
	* Remove childs
	* 
	* @param{DOMElement} parent
	*/
	astrology.utils.removeChilds = function(parent){
		if( parent == null ){
			return;
		}
		
		var last;
    	while (last = parent.lastChild){
    		parent.removeChild(last);
    	}
	};
	
	/**
	 * Check circle collision between two objects 
	 * 
 	 * @param {Object} circle1, {x:123, y:123, r:50}
 	 * @param {Object} circle2, {x:456, y:456, r:60}
 	 * @return {boolean} 	 
	 */
	astrology.utils.isCollision = function(circle1, circle2){			
		//Calculate the vector between the circles’ center points
  		var vx = circle1.x - circle2.x;
  		var vy = circle1.y - circle2.y;
  		
  		var magnitude = Math.sqrt(vx * vx + vy * vy);
  		
  		//circle.radius has been set to astrology.COLLISION_RADIUS;
  		var totalRadii = circle1.r + circle2.r;
  		  		  		  		   		  		   	
		return magnitude <= totalRadii; 
	};
		
	/**
	 * Places a new point in the located list 
	 * 
 	 * @param {Array<Object>} locatedPoints, [{name:"Mars", x:123, y:123, r:50, ephemeris:45.96}, {name:"Sun", x:1234, y:1234, r:50, ephemeris:100.96}]
 	 * @param {Object} point, {name:"Venus", x:78, y:56, r:50, angle:15.96} 
 	 * @param {Object} universe - current universe
 	 * @return {Array<Object>} locatedPoints 	 
	 */
	astrology.utils.assemble = function( locatedPoints, point, universe){
		
		// first item
		if(locatedPoints.length == 0){
			locatedPoints.push(point);
			return locatedPoints; //================>
		}
								
		if( (2 * Math.PI * universe.r) - ( 2 * (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) * (locatedPoints.length+2))  <= 0){							
			if( astrology.DEBUG ) console.log( "Universe circumference: " + (2 * Math.PI * universe.r) + ", Planets circumference: " + ( 2 * (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) * (locatedPoints.length+2)));							
			throw new Error("Unresolved planet collision. Try change SYMBOL_SCALE or paper size.");
		}
													
		var isCollision = false;				
		locatedPoints.sort( astrology.utils.comparePoints );
		for(var i = 0, ln = locatedPoints.length; i < ln; i++ ){
			
			if(astrology.utils.isCollision(locatedPoints[i], point)){
				isCollision = true;
				var locatedButInCollisionPoint =  locatedPoints[i];
				locatedButInCollisionPoint.index = i;
				
				if( astrology.DEBUG ) console.log( "Resolve collision: " + locatedButInCollisionPoint.name + " X " + point.name); 
												
				break;
			}
		}
						
		if( isCollision ){
			
			astrology.utils.placePointsInCollision(locatedButInCollisionPoint, point);
																																																																 						 										    				  			  																													
			var newPointPosition = astrology.utils.getPointPosition(universe.cx, universe.cy, universe.r, locatedButInCollisionPoint.angle);
			locatedButInCollisionPoint.x = newPointPosition.x;
			locatedButInCollisionPoint.y = newPointPosition.y;
			
			newPointPosition = astrology.utils.getPointPosition(universe.cx, universe.cy, universe.r, point.angle);
			point.x = newPointPosition.x;
			point.y = newPointPosition.y;
																		  		
			// remove locatedButInCollisionPoint from locatedPoints									
			locatedPoints.splice(locatedButInCollisionPoint.index, 1);
																
			// call recursive	
			locatedPoints = astrology.utils.assemble(locatedPoints, locatedButInCollisionPoint, universe);	
			locatedPoints = astrology.utils.assemble(locatedPoints, point, universe);	
														
		}else{
			locatedPoints.push(point);	
		}
													
		return locatedPoints;	
	};
	
	/**
	 * Sets the positions of two points that are in collision.
	 * 
	 * @param {Object} p1, {..., pointer:123, angle:456}
	 * @param {Object} p2, {..., pointer:23, angle:56}
	 */
	astrology.utils.placePointsInCollision = function(p1, p2){
		
		var step = 1;
		
		if( 
			// solving problems with zero crossing										
			(p1.pointer <= p2.pointer && 
			Math.abs(p1.pointer - p2.pointer) <= astrology.COLLISION_RADIUS) ||
							
			(p1.pointer >= p2.pointer && 
			Math.abs(p1.pointer - p2.pointer) >= astrology.COLLISION_RADIUS)			
		){
								
			p1.angle = p1.angle - step;
			p2.angle = p2.angle + step;											
		}else{
										
			p1.angle = p1.angle + step;
			p2.angle = p2.angle - step;	
		}
							
		p1.angle = (p1.angle + 360) % 360;
		p2.angle = (p2.angle + 360) % 360;		 					
	};
		
	/**
	 * Check collision between angle and object 
	 * 
 	 * @param {double} angle
 	 * @param {Array<Object>} points, [{x:456, y:456, r:60, angle:123}, ...]
 	 * @return {boolean} 	 
	 */
	astrology.utils.isInCollision = function(angle, points){		
		var deg360 = astrology.utils.radiansToDegree(2*Math.PI);
		var collisionRadius = (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) / 2;
							
		var result = false;					
		for(var i = 0, ln = points.length; i < ln ; i++ ){
										
			if( Math.abs(points[i].angle - angle) <= collisionRadius || 
			(deg360 - Math.abs(points[i].angle - angle)) <= collisionRadius){
				result = true;
				break;
			}					
		}				
					
		return result;			
	};
		
	/**
	 * Calculates positions of the dashed line passing through the obstacle.
	 * 	* 
	 * @param {double} centerX
	 * @param {double} centerY
	 * @param {double} angle - line angle
 	 * @param {double} lineStartRadius
 	 * @param {double} lineEndRadius
 	 * @param {double} obstacleRadius 	
 	 * @param {Array<Object>} obstacles, [{x:456, y:456, r:60, angle:123}, ...]
 	 * 
 	 * @return {Array<Object>} [{startX:1, startY:1, endX:4, endY:4}, {startX:6, startY:6, endX:8, endY:8}]
	 */
	astrology.utils.getDashedLinesPositions = function( centerX, centerY, angle, lineStartRadius, lineEndRadius, obstacleRadius, obstacles){
		var startPos, endPos;
		var result = [];	
		
		if( astrology.utils.isInCollision( angle, obstacles)){
			
			startPos = astrology.utils.getPointPosition( centerX, centerY, lineStartRadius, angle);
			endPos = astrology.utils.getPointPosition( centerX, centerY, obstacleRadius - (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), angle);			
			result.push( {startX:startPos.x, startY:startPos.y, endX:endPos.x, endY:endPos.y} );
			
			// the second part of the line when is space
			if( (obstacleRadius + 2*(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE)) < lineEndRadius){
				startPos = astrology.utils.getPointPosition( centerX, centerY, obstacleRadius + 2*(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE),angle); 			
				endPos = astrology.utils.getPointPosition( centerX, centerY, lineEndRadius, angle);				
				result.push( {startX:startPos.x, startY:startPos.y, endX:endPos.x, endY:endPos.y} ); 														
			}					
								
		}else{
			startPos = astrology.utils.getPointPosition( centerX, centerY, lineStartRadius, angle);
			endPos = astrology.utils.getPointPosition( centerX, centerY, lineEndRadius, angle);
			result.push( {startX:startPos.x, startY:startPos.y, endX:endPos.x, endY:endPos.y} );	
		}	
						
		return result;		
	};
	
	/**
	 * Calculate ruler positions.
	 * 
	 * @param {Double} centerX
	 * @param {Double} centerY
	 * @param {Double} startRadius
	 * @param {Double} endRadius
	 * @param {Boolean} startAngle
	 * 
	 * @return {Array<Object>} [ {startX:1,startY:2, endX:3, endX:4 }, ...]
	 */
	astrology.utils.getRulerPositions = function( centerX, centerY, startRadius, endRadius, startAngle ){	
		var result = [];
		
		var rayRadius = endRadius;
		var halfRayRadius = (startRadius <= endRadius) ? rayRadius - (Math.abs(endRadius-startRadius)/2): rayRadius + (Math.abs(endRadius-startRadius)/2); 
		
		for( i = 0, start = 0, step = 5; i < 72; i++ ){ 
			    var angle = start + startAngle;
			    var startPos = astrology.utils.getPointPosition( centerX, centerY, startRadius, angle);
				var endPos = astrology.utils.getPointPosition( centerX, centerY, (i%2 == 0 ? rayRadius : halfRayRadius), angle);				
				result.push({startX:startPos.x,startY:startPos.y, endX:endPos.x, endY:endPos.y });				
				
				start += step;
		} 
												
		return result;		
	};
	
	/**
	* Compare two points
	* 
	* @param {Object} pointA, {name:"Venus", x:78, y:56, r:50, angle:15.96}
	* @param {Object} pointB, {name:"Mercury", x:78, y:56, r:50, angle:20.26}
	* @return 
	*/
	astrology.utils.comparePoints = function( pointA, pointB){		
		return pointA.angle - pointB.angle; 			
	};
									
}( window.astrology = window.astrology || {}));