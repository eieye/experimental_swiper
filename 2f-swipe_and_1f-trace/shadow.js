// SWIPER SHADOW DOM
// #MEMO# 
// ADJUST VIEWBOX-HEIGHT FOR OVERSHOOT DESCENDERS PROPORTIONAL TO GIVEN STROKE-WEIGHT
/* ##MEMO## SHADOW-DOM SCRIPTS ATTACHED @LINE ##46## */
/* REVIEWED 31OCT25 / COPY OF "IMAGE WEB 2025OCT29 ALPHA SWIPER SHADOW" */

console.log("SWIPER SHADOW DOM (9) \t// SAT 11-NOV-23");													// VAR "DEBUG" IN "TRACER/GLYPH_INVENTORY" IS #NOT# IN THIS SCOPE
var $DEBUG = false; 																				
//const STARTGLYPH = "galt1lc";																											// GLOBAL STARTGLYPH (##TBD## FROM UI)


																							// SELECT FOR A(B)C ALSO
				// ~~~~~~~~~~~~~~~~~~~~~~~~~~~  SHADOW ROOT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	const host = document.querySelector("#col1slide1"); // ID					// * * * * * * * * * * * * * * * * * * * * * * * *
	const shadow = host.attachShadow({ mode: "closed"} );
																	// ADD "DOCTYPE"
																	// ### UNRESOLVED ###
	let dt = document.implementation.createDocumentType("html", "", "")
/*
let docType = document.implementation.createDocumentType("html", "", "");
let myDoc = document.implementation.createDocument("", "", docType);
docType.after(document.createElement("html")); // WRONG POSITIONING
myDoc.childNodes;
*/



				// ~~~~~~~~~~~~~~~~~~~~~~~~~~~  SHADOW HEADER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// HTML
	const $html = document.createElement('html');
	$html.setAttribute('lang', 'en');

// HEAD
	const $head = document.createElement('head');
// HEAD ADD ##TBD## META
// LINKS
	const link = document.createElement('link');
	link.setAttribute('rel', 'stylesheet');
	link.setAttribute('href', './TRACER/tracer.css');
	//console.log(link);
	$head.appendChild(link);

// SCRIPTS
	let script = document.createElement('script');
	script.setAttribute('src', './TRACER/mainredux 11-NOV-23.js');
	$head.appendChild(script); // LINE ##46##
	// ASSET "GLYPHS_INVENTORY.JS" IS LOADED FROM "SWIPER.JS"
						// ##TEMP## SHAKE
// 	script = document.createElement('script');
// 	script.setAttribute('src', './TRACER/shake.js');
// 	$head.appendChild(script);





				// ~~~~~~~~~~~~~~~~~~~~~~~~~~~  SHADOW BODY ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// (WINDOW)
	window.addEventListener("load", (event) => {
		//console.log("THIS", this); // WINDOW
  	console.log("page is fully loaded");
  	console.log('====== ENTER "CLEAR()" TO ERASE TRACE/ANINMATION IN TOUCH-SIM (DESKTOP) ======');
		parseCSV(inventory[STARTGLYPH], STARTGLYPH);																	// "INIT_VIEW" IS CALLED FROM "PARSE_CSV"
	});

// BODY 
	const $body = document.createElement('body');
	$body.id = "$body";





				// ~~~~~~~~~~~~~~~~~~~~~~~~~~~  SHADOW CONTENT "SLIDE" ~~~~~~~~~~~~~~~~~~~~~~~~~~~
// MONITOR (1F-TOUCH)
	const $monitor = document.createElement("div");
	$monitor.id = "monitor";
	$monitor.classList.add('shadowmonitor');
	$monitor.innerHTML = "shadowmonitor";

	const $wrapper = document.createElement('div');
	$wrapper.id = "template_wrapper";
	$wrapper.classList.add('template_wrapper');

// SVG-ELEMENT
	const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
// XMLNS (REDUNDANT?)
	$svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

// GROUP TYPEBOX (INSERTING "INNER_HTML" FROM REDUXMAIN)
	const typebox = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	typebox.setAttribute('id', 'typebox');
	typebox.setAttribute('class', 'typebox');
	typebox.setAttribute('name', 'INITTYPEBOX');

// GROUP GLYPH
	const glyph = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	glyph.setAttribute('id', 'glyph');
	glyph.setAttribute('class', 'template');
	glyph.setAttribute('name', 'INITPATH');
	const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
// APPEND PATH
	path.setAttribute('id', 'pathdata');
	path.setAttribute('name', 'INITPATH');
	glyph.appendChild(path);

// GROUP OUTLINES
	const qupedoutlines = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	qupedoutlines.setAttribute('id', 'qupedoutlines');
	qupedoutlines.setAttribute('class', 'quped');
	qupedoutlines.setAttribute('name', 'INITQUPED');
// GROUP TRACE
	const trace = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	trace.setAttribute('id', 'trace');
	trace.setAttribute('class', 'tracing');
	trace.setAttribute('name', 'INITTRACE');
// GROUP TRACE
	const touchtrack = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	touchtrack.setAttribute('id', 'touchtrack');
	touchtrack.setAttribute('class', 'touchel');
	touchtrack.setAttribute('name', 'INITTRACK');
// GROUP TRACE
	const animation = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	animation.setAttribute('id', 'animation');
	animation.setAttribute('class', 'animation');
	animation.setAttribute('name', 'INITANIM');
// APPEND GROUPS
	$svg.appendChild(typebox);
	$svg.appendChild(glyph);
	$svg.appendChild(qupedoutlines);
	$svg.appendChild(trace);
	$svg.appendChild(touchtrack);
	$svg.appendChild(animation);





				// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	$html.addEventListener('touchmove', (e) => {
		e.preventDefault();
		let tp1 = [["X1", e.touches[0].clientX], ["Y1", e.touches[0].clientY]];
		let tp2 =  e.touches[1] ? [ ["X2", e.touches[1].clientX], ["Y2", e.touches[1].clientY] ] : [["", ""], ["", ""]];
		$monitor.innerHTML = `(SHADOW)<br>
${tp1[0][0]} ${tp1[0][1]}<br>${tp1[1][0]} ${tp1[1][1]}<br>
${tp2[0][0]} ${tp2[0][1]}<br>${tp2[1][0]} ${tp2[1][1]}`;
		//console.log($monitor.innerHTML);
		}, { passiv: false }
	);
	$html.addEventListener('touchend', (e) => {
		e.preventDefault();
		$monitor.innerHTML = "(SHADOW)<br>END";
		}, { passiv: false }
	);
	$html.addEventListener('touchstart', (e) => {
		e.preventDefault();
		$monitor.innerHTML = "(SHADOW)<br>START";
		}, { passiv: false }
	);
// REDUNDANT (ON DESKTOP)
// (CAN ALSO BE ON EL "$WRAPPER" WHEN IS FULL WIDTH/HEIGHT)
	$html.addEventListener('pointerdown', (e) => {
		//console.log("POINTER DOWN ON SHADOW");
		$monitor.innerHTML = "POINTER DOWN ON SHADOW";
	});
	$html.addEventListener('pointermove', (e) => {
		//console.log("POINTER MOVE ON SHADOW");
		$monitor.innerHTML = "POINTER MOVE ON SHADOW";
	});
	$html.addEventListener('pointerup', (e) => {
		//console.log("POINTER UP ON SHADOW");
		$monitor.innerHTML = "POINTER UP ON SHADOW";
	});





// ========================================================================================

																			// ASSEMBLE TREE
// IN SEQUENCE
	$body.appendChild($monitor);
	$body.appendChild($wrapper);
	$wrapper.appendChild($svg); // SVG AND NAMESPACE WITH ALL GROUPS
	$html.appendChild($head);
	$html.appendChild($body);
	shadow.appendChild($html); // ROOT-EL APPEND



																			// SHADOW HOOKS
const $DOM = {
	importtarget: shadow.querySelector('#template_wrapper'),
	SVGElementHook: shadow.querySelector('#template_wrapper').firstElementChild,
	metricsHook: shadow.querySelector('#typebox'),
	pathHook: shadow.querySelector('#pathdata'),
	outlineHook: shadow.querySelector('#qupedoutlines'),
	touchtrackHook: shadow.querySelector('#touchtrack'),
	traceHook: shadow.querySelector('#trace'),
	animationHook: shadow.querySelector('#animation'),
	monitor: shadow.querySelector('#monitor')
}





// ========================================================================================
																			// $DEBUG
if ($DEBUG) {
	console.log(shadow.host);
	// console.log(shadow.fullscreenElement); // #TBD# NOT YET
	// console.log(shadow.innerHTML);// OK
	console.log(shadow.mode);
	console.log(shadow.styleSheets);
	//console.log(shadow.firstElementChild); // HTML
	console.log($DOM.monitor);
	//console.log(shadow.firstElementChild.firstElementChild); // HEAD
	//console.log(shadow.getElementById('$body'));
																				// HOOKS
	console.log($DOM.importtarget);
			console.log("\t### SVG_ELEMENT_HOOK ###");
	console.log($DOM.SVGElementHook); // (ALSO SVG) LIVE HTML-COLECTION
									// "ELEMENTS_BY_TAG_NAME" IS #NOT# A FUNCTION ON "SHADOW"
											// (AVOID USING SELECTOR "ID" WHICH WILL CHANGE)
	console.log($html.getElementsByTagName('svg')[0]);

try {
	console.log(shadow.getElementById(STARTGLYPH));
  throw "Oops; this is not an Error object";
} catch (e) {
  if (!(e instanceof Error)) {
    e = new Error(e);
  }
  console.error(e.message);
}

			console.log("\t### END SVG_ELEMENT ###");
	console.log($DOM.metricsHook);
	console.log($DOM.pathHook);
	console.log($DOM.outlineHook);
	console.log($DOM.touchtrackHook);
	console.log($DOM.traceHook);
	console.log($DOM.animationHook);
}







