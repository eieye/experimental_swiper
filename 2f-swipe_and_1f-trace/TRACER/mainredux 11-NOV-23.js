// REDUX MAIN
									// FOR SCOPE "REDUXMAIN" SET "DEBUG" T/F IN GLYPHS_INVENTORY
// ## NEW ##
// (08NOV23) // USING "$DOM"-OBJ IN "SHADOW.JS" TO STORE ALL HOOKS // REF #81#
// (08NOV23) // ADJUSTED SVG-VIEWBOX HEIGHT FOR DESCENDER OVERSHOOT PROPORTIONAL STROKE_WEIGHT // REF #77#
// (09NOV23) // ADD SHAKE-LISTENER TO SHADOW-EL ONLY #NOT# TO WINDOW // REF #196# 
// (10NOV23) // FIXED TOUCHMOVE ELEMENT_FROM_POINT DOCUMENT=SHADOW
// (11NOV23) // #TBD# FIND PROPER RELATION OF FONTWEIGHT TO AMOUNT OF TYPEBOX BOTTOM/TOP OVERSHOOT // #566#
// (11NOV23) // #MEMO# USED 0.2 FOR TOUCH-EL SAMPLING (== RESPONISVNESS TO DARWING)
							// ##BUT## (USER OPTION ADJUSTABLE) MIN 0.1 FOR ANIMATION 
							// MAKE IN-DEPENDANT VALUES // TWO PASSES FOR BEZIER AND ANIM-LUT
DEBUG = true;
console.log("REDUXMAIN.JS (9) \t// SAT 11-NOV-23");
/* REVIEWED 31OCT25 / COPY OF "IMAGE WEB 2025OCT29 ALPHA SWIPER SHADOW" */

// CONTENT
// initView           #586# // MAXWIDTH 																								// #TBD# RECODE TO FIT WIDEST GLYPH
// addTouchHandlers   #581# // CALL
// getPoint           #547# (LUT)
// animate            #541# render #521#
// Class TouchTrackEl #479#
// Class Bezier       #332#
// clear              #322#
// openLineTag        #303#
// addPoint           #289#
// touchmove          #225#
// addTouchHandlers   #207# // FUNCTION
// getAnimationPause  #185#
// shake              #200#
// parseSVGstrokewise #145#
// parseSVGbezierwise #134#
// setupTouchTrack    #116#
// setupSVGNS         #86# // VIEWBOX																									// #TBD# RECODE FOR HIGHER Y-VALUE
// parseCSV           #41#


																							// GLOBAL
// GLYPH POINTDATA
	var GlyphBezPtsObj; // SCOPE? 																												// #TBD# INITIALIZE HERE "= { };" HERE TO AVOID MIX-UP?
	var TrackBezPtsObj;
	var GPRESNUM = undefined; // ACCUMULATOR STROKENUM
	var GPRELFDNR	= 0; 				// UNIQUE LFDNR IN ID // (GLOBAL_PREVIOUS_LFD_NUMBER)
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
																			// ###TBD### MAKE STARTGLYHP VARIABLE
																			// FOR OTHER PAGES ("SLIDES") SHADOWS
	const STARTGLYPH = "olc"; // galt1lc


function parseCSV(str, ltr) {// #41#
	importname = ltr; 																																		// HAS NEW FORMAT #NO# "_" LODASH
																			// (CONTINUING UNCHANGED)
	let strclone = str;
	strclone = strclone.replaceAll(' ', '');
	let temp_rows = strclone.split('\n'); 																								// LINEBREAK = #UNIX# (LF) IN CSV
	let row_values = [];
	for (const row of temp_rows) {
		if (row != "") {																																		// ##STRIP## EMPTY LINES (IF ANY)
			let columns = row.split(',');
			columns = columns.slice(1, -1);
			row_values.push(columns);
		}
	}
														// (SIGNIFICANT LINES FROM 0 TO 12 IN CSV)
														// (#MEMO# TEMP SHIFT TYPEBOX VERTICALS FROM TO CSV TO "COMPRESSED" LEADING IN SVG)
	let BoxObj = new Object();
	BoxObj.name = importname;
	BoxObj.width = row_values[3][0]; // WIDTH
	BoxObj.height = row_values[3][1] - 320; // HEIGHT
	BoxObj.baseline = row_values[5][1] - 50; // BASELINE-Y
	BoxObj.xheight = row_values[7][1] - 150; // XHEIGHT-Y
	BoxObj.capheight = row_values[9][1] - 150; // CAPHEIGHT-Y
	BoxObj.vor = row_values[11][0]; // MIN (GLYPH VORBREITE)
	BoxObj.nach = row_values[12][0]; // MAX (GLYPH NACHBREITE)
																// (STARTING FROM LINE 13 IN CSV)
	const SHIFT = 100;
	GlyphBezPtsObj = new Object();
	let count = 0;
	for (let i = 13; i < row_values.length; i += 4) {
		GlyphBezPtsObj["bez" + count] =
		{
			a1: [ parseFloat(row_values[i][0]), row_values[i][1] - SHIFT ], // POINT-VECTOR XY
			c1: [ parseFloat(row_values[i+1][0]), row_values[i+1][1] - SHIFT ],
			c2: [ parseFloat(row_values[i+2][0]), row_values[i+2][1] - SHIFT ],
			a2: [ parseFloat(row_values[i+3][0]), row_values[i+3][1] - SHIFT ]
		}
		count++;
	}
	GlyphBezPtsObj.name = importname; // ADDING NAMED OBJ-ID
	setupSVGNS(BoxObj);

	//console.log("GLYPHBEZPTSOBJ", GlyphBezPtsObj); // #####TBD#### MAKE RETURN ...
	if(DEBUG) { console.log("### END PARSE_CVS ###\n\n"); }
} // PARSE_CSV

function setupSVGNS(Box) { // #86#
	$DOM.SVGElementHook.setAttribute('id', `${Box.name}`);
	$DOM.SVGElementHook.setAttribute('viewBox', `0 0 ${Box.width} ${Box.height + ADJUSTBB}`); // ADJUST DESCENDER OVERSHOOT // REF #566#
	$DOM.metricsHook.setAttribute('class', 'typebox');
	$DOM.metricsHook.innerHTML = `
  <rect width="${Box.width}" height="${Box.height}" />
  <line x1="0" y1="${Box.capheight}" x2="${Box.width}" y2="${Box.capheight}" />
  <line x1="0" y1="${Box.xheight}" x2="${Box.width}" y2="${Box.xheight}" />
  <line x1="0" y1="${Box.baseline}" x2="${Box.width}" y2="${Box.baseline}" />`;
	$DOM.pathHook.setAttribute('d', `${svgstrokedata = parseSVGstrokewise(GlyphBezPtsObj)}`);
											// ##### ABSOLUTELY PRESERVE THIS LAYER ORDER #####
	$DOM.outlineHook.setAttribute('id', 'qupedoutlines');
	$DOM.outlineHook.setAttribute('class', 'quped');
	$DOM.traceHook.setAttribute('id', 'trace');
	$DOM.traceHook.setAttribute('class', 'tracing');
	$DOM.touchtrackHook.setAttribute('id', 'touchtrack');
	$DOM.touchtrackHook.setAttribute('class', 'touchel');
// (RE)CALCULATE (HORIZONTAL) OFFSET // ##TBD## ALSO INCLUDING SCALE?
	initView();
																	// RESET ALL VIEW_LAYERS
	clear();
	$DOM.touchtrackHook.replaceChildren('');
	$DOM.outlineHook.replaceChildren(''); // #TBD# MERGE OUTLINE/TRACK
	$DOM.animationHook.replaceChildren('');
	GPRELFDNR = 0;
	setupTouchTrack();
} // SETUP_SVGNS

function setupTouchTrack() { // #116#
	LIVE_TOUCHTRACK = [];
	SAVED_TOUCHTRACK = []; // INIT TRACK "IMMUTABLE" // ##TBD## BKUP UNUSED
	ANIMPTS_LUT = [];
	for (const [count, stroke] of Object.entries(TrackBezPtsObj)) {
		for (const [number, curve] of Object.entries(stroke)) {
			curve.updateCurve(); 																														// METHOD CALLING METHOD "RENDER_QUPEDS"
		}
	}
	if (INIT) {
		SAVED_TOUCHTRACK = LIVE_TOUCHTRACK; // "CONST" CREATED HERE WOULD NOT BE IN GLOBAL SCOPE
	}
	INIT = false;
	$DOM.touchtrackHook.children[0].setAttribute('visibility', 'visible');
} // SETUP_TT

if(DEBUG) { console.log("PARSESVG \t\t// THU 09-NOV-23 (WED 23-AUG-23)"); } 

function parseSVGbezierwise(GlyphBezPtsObj) { // #134#
	var svgbezierdata = ""; // (RESET)
	for (const [key, value] of Object.entries(GlyphBezPtsObj)) {
		if (key != "name") {
   		svgbezierdata += "M " + value.a1 + " C " + value.c1 + " " + value.c2 + " " + value.a2 + "\n"
   	}
	}
	svgbezierdata = svgbezierdata.replaceAll(',', ' ');
	return svgbezierdata;
} // PATH-WISE

function parseSVGstrokewise(GlyphBezPtsObj) { // #145#
	TrackBezPtsObj = new Object(); // RE-SET // COPY VALUES
	var svgstrokedata = ""; // (RESET)
	let currval = { };
	let prevval = { };
	prevval.a2 = [0, 0]; // PAUSE NEEDS NUMBER // SET ORIGIN
	let snum = bnum = -1;
	let pause;
	for (const [key, value] of Object.entries(GlyphBezPtsObj)) {
		if (key != "name") {
			currval.a1 = value.a1;
			currval.a2 = value.a2;
			if (currval.a1[0] != prevval.a2[0] || currval.a1[1] != prevval.a2[1]) {
										// "X #OR# Y ARE DIFFERENT === DIS-CONTINUOUS"
								// (ONE COORDINATE CAN BE ("IS ALLOWED TO BE") IDENTICAL)
	 			currval = value;
   			svgstrokedata += "M " + currval.a1 + " C " + currval.c1 + " " + currval.c2 + " " + currval.a2 + "\n"
				snum++;
				bnum = 0;
				pause = getAnimationPause(currval.a1[0], prevval.a2[0], currval.a1[1], prevval.a2[1]);
				TrackBezPtsObj[`stroke${snum}`] = {};
				TrackBezPtsObj[`stroke${snum}`][`bezier${bnum}`] = 
					new BezierCurve(currval.a1, currval.c1, currval.c2, currval.a2, snum, bnum, pause, STEP, NL);
   		} else if (currval.a1[0] === prevval.a2[0] && currval.a1[1] === prevval.a2[1]) {
										// "X #AND# Y ARE IDENTICAL === CONTINUOUS"
	 			currval = value;
   			svgstrokedata += "C " + currval.c1 + " " + currval.c2 + " " + currval.a2 + "\n"
				bnum++;
				pause = 0;
				TrackBezPtsObj[`stroke${snum}`][`bezier${bnum}`] = 
					new BezierCurve(currval.a1, currval.c1, currval.c2, currval.a2, snum, bnum, pause, STEP, NL);
   		}
   		prevval.a1 = currval.a1; // REPLACE ARRAY WITH ARRAY
   		prevval.a2 = currval.a2;
   	}
	} // END FOR 
	svgstrokedata = svgstrokedata.replaceAll(',', ' ');
	return svgstrokedata;
} // STROKEWISE
													// PAUSE (PORPORTIONAL) DISTANCE BETWEEN STROKES
													// (#MEMO#) ##TBD## CORRELATE PAUSE TO SPEED WITH DERIVED COEFFICENT
function getAnimationPause(cpx, ppx, cpy, ppy) { // #185#
	let pause = Math.sqrt(Math.pow(cpx - ppx, 2) + Math.pow(cpy - ppy, 2));
	//console.log("PAUSE", pause);
	return parseInt(pause);
}

if(DEBUG) { console.log("HANDLERS \t\t// THU 09-NOV-23 (TUE 19-SEP-23)"); }

var LASTDRAWSTATE = 0;
																					//  SHAKE TO RESET
	const myShakeEvent = new Shake({																										// INSTANTIATE FROM PROTOTYPE
		threshold: 5,
		timeout: 500
	});
	myShakeEvent.start();																																// ACTIVATE // START LISTENING TO DEVICE MOTION
																		// #200# // WAS "WINDOW"
	//$DOM.SVGElementHook.addEventListener('shake', (e) => {									// DOES NOT WORK // REGISTER EVENT // "DEVICEMOTION" LISTENER IS ON "WINDOW"
	window.addEventListener('shake', (e) => {
		clear();
	}, false);
																		// TOUCHHANDLERS DRAWING
//let arg = $DOM.SVGElementHook; // arg = $DOM.SVGElementHook
function addTouchHandlers() { // #207#
																					// TOUCHSTART
	let handletouchstart = function(e) {
		let px, py;
		for (let i = 0; i < e.changedTouches.length; i++) { 															// IGNORE MULTI-TOUCH(?)
			px = e.changedTouches[0].clientX;
			py = e.changedTouches[0].clientY;
		}
		e.preventDefault(); 																															// PREVENT LONG-TOUCH (CONTEXT MENU)
		openLineTag(LASTDRAWSTATE);
	}
																						// TOUCHEND
	let handletouchend = function(e) {
		e.preventDefault(); 																															// PREVENT OTHER POSSIBLE "CLICK" ACTIONS
	}

																					 // TOUCHMOVE

	let handletouchmove = function tm(e) { // #225# 																			// (NAMED FUNC FOR DEBUG // 10NOV23)
		e.preventDefault();
//console.log(e.target.id);
		if (e.changedTouches.length > 1) {
			monitor3.innerHTML = "2F DETECTED"; 																							// ##MEMo## FIX PRECISION HERE
			return;
		} else {
				monitor3.innerHTML = "1F DETECTED";
		let px, py, prevel;
		let P, C, N;
		let Pid, Cid, Nid;
		let startpt, exitpt, stroke;
		for (let i = 0; i < e.changedTouches.length; i++) { 																// (SHOULD ALWAYS BE 1 AFTER "RETURN")
			px = e.changedTouches[0].clientX;
			py = e.changedTouches[0].clientY;
		}
		C = shadow.elementFromPoint(px, py); // ###FIXED### DOCUMENT=SHADOW
// RETURNS SLIDE(!)
//console.log("EFP", C);
		if (C) { // NOT NULL
			Cid = Number.parseInt(C.id.split('_')[0]);
				if (Number.isNaN(Cid)) {
					addPoint(px, py, 0); 																	 													// ON TRACK = FALSE
					LASTDRAWSTATE = 0;
				} else {
					addPoint(px, py, 1);  																	 												// ON TRACK = TRUE
					LASTDRAWSTATE = 1;
					stroke = parseInt(C.id.split('_')[1]); 																					// ### MEMORIZE STROKE ###
// WAS LOG-EL INNER_HTML
// console.log(stroke);
// console.log(Cid.toString());

					P = C.previousElementSibling;
						P ? Pid = P.id.split('_')[0] : Pid = "*";
					N = C.nextElementSibling;
						N ? Nid = N.id.split('_')[0] : Nid = "*";
// DEBUGGING // CHECK CRAWL NEIGHBORS
//console.log("PCN", Pid, Cid, Nid);
				}
			} else {
				console.log(px, py, "OFF WORLD");									 																// OFF SCREEN // ONLY IN IDE
			}
// CRAWL
			if (C != P) {
				if (P) {
					P.setAttribute("visibility", "hidden");
				}
				if (N) {			
					N.setAttribute("visibility", "visible");
				} else {
					if (Cid === 23) { // IS OF TYPE NUMBER
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
								// ###TBD### GO-TO NEXT STROKE/CHAR // INCREMENT STROKE(NUM)
						if (DEBUG) { console.log("END GO TO STROKE", stroke + 1); }
					}
				}
			} // CRAWL
		} // (ELSE)
	} // TOUCHMOVE
													// ATTACH TO SVG-ELEMENT "IMPORTNAME" (FROM FILENAME)
													 // "PASSIVE TRUE" === WILL NEVER CALL "PREVENT_DEFAULT"
	$DOM.SVGElementHook.addEventListener('touchstart', handletouchstart, { passive: false } );
	$DOM.SVGElementHook.addEventListener('touchend', handletouchend, { passive: false } );
	$DOM.SVGElementHook.addEventListener('touchmove', handletouchmove, { passive: false } );
}
																				// DRAW POLYLINE
function addPoint(px, py, state) { // #289#
	if (state === LASTDRAWSTATE) {
		let newpoint = $DOM.SVGElementHook.createSVGPoint();
//console.log(hoffset, viewscale); // UNDEFINED (BEFORE PARSE_CSV)
		newpoint.x = (px - hoffset) * viewscale; 																	// VIEWSCALE AND (HORIZONTAL) H_OFFSET
		newpoint.y = py * viewscale;
		$DOM.traceHook.lastChild.points.appendItem(newpoint); // .children[0] // SVG_POINT_LIST
	} else {
		openLineTag(state); 																											// NEW LINE #ONLY# ON CHANGED STATE
	}
	LASTDRAWSTATE = state;
//console.log(LASTDRAWSTATE); // **********
}
																				// START NEW LINE
function openLineTag(ON) { // #303#
	const newline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline'); 					// NAMESPACE(!)
	$DOM.traceHook.append(newline); // .children[0]
	if (ON) {
		$DOM.traceHook.lastChild.setAttribute('class', 'ontrack'); // .children[0]
	} else {
		$DOM.traceHook.lastChild.setAttribute('class', 'offtrack'); // .children[0]
	}
}
																				// DELETE TRACE
// ON SHAKE
function clear() { // LINE #322#
// CLEAR ANIMATION (IF RENDERED)
	$DOM.animationHook.replaceChildren('');
	ptcount = 0;
// CLEAR TRACE
	$DOM.traceHook.replaceChildren('');
// RESET #TRACK#
	let tels = $DOM.touchtrackHook.children; // NODELIST 																		// ##TBD## ADD CONDITIONAL FOR INIT-STATE = EMPTY NODE
	if (tels.length) { // IS NOT ZERO
		for (let i = 0; i < tels.length; i++) { 
			tels[i].setAttribute('visibility', 'hidden'); 																		// (ONLY TWO VISIBLE AT A TIME // BUT WELL)
		}
		tels[0].setAttribute('visibility', 'visible');
	}
} // DELETE

if (DEBUG) { console.log("CLASS_BEZIER \t\t// WED 08-NOV-23 (THU 31-AUG-23)"); }
// EACH CURVE SEGMENT OF GRPHM "BSEG"
class BezierCurve { // #332#
  constructor(init_a1, init_c1, init_c2, init_a2, snum, bnum, pause, STEP, NL) {
    this.snum = snum;
    this.bnum = bnum;
// REFORMAT ARRAY TO OBJECT
    this.a1 = { x: init_a1[0], y: init_a1[1] };
    this.c1 = { x: init_c1[0], y: init_c1[1] };
    this.c2 = { x: init_c2[0], y: init_c2[1] };
    this.a2 = { x: init_a2[0], y: init_a2[1] };
    this.STEP = STEP; 																																	// "STEP" MAY HAVE PRECISON DROP-OUTS // AVOID MODULO
    this.NL = NL; 																																			// NORMAL LENGTH (STROKE-WIDTH)
    this.PAUSE = pause; 																																// FLAG STARTPOINT (IS PROPORTIONAL FACTOR)
		this.getCurvePoints();																															// "AUTO" PROPERTIES // 17-APR-23
		this.getNormals(); 																																	// COMPUTE NORMALS FROM #TANGENTS#
  }
 															// CALL RENDER FOR FIRST IMPORT
		updateCurve() {
// (RE)COMPUTE
			this.getCurvePoints();
			this.getNormals(); // RUN WITH EACH UPDATE
			this.computeTouchTrack($DOM.outlineHook, viewlayers);
		} // UPDATE
												// GET CURVE POINT AND DERIVATIVE (TANGENT VECTOR)
	getCurvePoints() {
		let bx, by, dx, dy;
		let bezpts = [];
		let derivpts = [];
		let C1 = {}, C2 = {}, C3 = {}, C4 = {};
		let PTDIST_LUT = []; // ADDITIVE
		let ANIMPT_LUT = []; // ADDITIVE
															// COMPUTE CURVE_POINTS AND DERIVATIVE
		let t, t2, t3;
		for (t = 0; t <= 1; t += this.STEP) {
			t2 = t*t;
			t3 = t2*t;
    	C1.x = this.a2.x - (3.0 * this.c2.x) + (3.0 * this.c1.x) - this.a1.x;
   		C2.x = (3.0 * this.c2.x) - (6.0 * this.c1.x) + (3.0 * this.a1.x);
   		C3.x = (3.0 * this.c1.x) - (3.0 * this.a1.x);
   		C4.x = this.a1.x;
    	C1.y = this.a2.y - (3.0 * this.c2.y) + (3.0 * this.c1.y) - this.a1.y;
   		C2.y = (3.0 * this.c2.y) - (6.0 * this.c1.y) + (3.0 * this.a1.y);
   		C3.y = (3.0 * this.c1.y) - (3.0 * this.a1.y);
   		C4.y = this.a1.y;
			bx = (    C1.x*t3 +     C2.x*t2 + C3.x*t + C4.x );
			by = (    C1.y*t3 +     C2.y*t2 + C3.y*t + C4.y );
			dx = (3.0*C1.x*t2 + 2.0*C2.x*t  + C3.x );
			dy = (3.0*C1.y*t2 + 2.0*C2.y*t  + C3.y );
    	bezpts.push( {x: bx, y: by} );
    	derivpts.push( {x: dx, y: dy} );
			PTDIST_LUT.push({ t: t, x: bx, y: by }); // 15 = MAX
    }
		this.BSEG_POINTS = bezpts;
		this.BSEG_GRADS = derivpts;
														// GET PATH DISTANCES BETWEEN INTERVALS
		let diffx, diffy;
		let n;
		for (n = 0; n < PTDIST_LUT.length - 1; n++) { // LAST PT MISSING BUT KNOWN
			diffx = PTDIST_LUT[n+1].x - PTDIST_LUT[n].x;
			diffy = PTDIST_LUT[n+1].y - PTDIST_LUT[n].y;
			PTDIST_LUT[n].diffx = diffx;
			PTDIST_LUT[n].diffy = diffy;
			PTDIST_LUT[n].dlen = Math.sqrt(diffx*diffx + diffy*diffy);
		}
		PTDIST_LUT[n].diffx = 0;
		PTDIST_LUT[n].diffy = 0;
																	// ##TBD## THIS SEEMS REDUNDANT
		PTDIST_LUT[n].dlen = 0; //this.PLEN; 																										// ("PLEN" IN CONSTRUCTOR REMOVED) // 20-AUG-23
		this.BSEG_PTDIST_LUT = PTDIST_LUT;
	} // CURVE_POINTS
																			// GENERATE NORMALS
	getNormals() {
		let l = this.NL / 2; 																																// STROKE-WIDTH "NORMAL LENGTH"
		let A, B;
		let normals = [];
		let arrlen = this.BSEG_POINTS.length; 																							// (SAME AS BSEG_GRADS LENGTH) // NUM STEP DIVISIONS
		for (let i = 0; i < arrlen; i++) {
			let gx = this.BSEG_GRADS[i].x;
			let gy = this.BSEG_GRADS[i].y;
			const q = Math.sqrt(gx * gx + gy * gy);
			const qv = { x: -gx / q, y: gy / q }; // TANGENT ROTATED BY 90 DEG
			B = { x: this.BSEG_POINTS[i].x - qv.y * l, y: this.BSEG_POINTS[i].y - qv.x * l };
			A = { x: this.BSEG_POINTS[i].x + qv.y * l, y: this.BSEG_POINTS[i].y + qv.x * l};
			normals.push({ A, B });
		} // FOR
		this.BSEG_NORMS = normals; // PUSH ARRAY TO INSTANTIATE NEW PROPERTY
	} // NORMALS
														// COMPUTE TRACK REGARDLESS OF VIEW-OPTIONS
	computeTouchTrack(hook, viewlayers) {
		let QUPED = {}; 																									// "QU(ADRU)PED" FOUR-CORNER OUTLINE-BEAST FOR INTERPOLATION DIVISION(-LENGTH)
		let TTSEG_OUTLN; 																									// TOUCHTRACK-ELEMENT-TO-BE
		let BSEG_OUTLNS = [];																							// SEGMENT (QUPED-)OUTLINES
		for (let i = 0; i <= this.BSEG_NORMS.length - 2; i++) { // (!)SMALLER  OR EQUAL
			QUPED = {
				A: {x: this.BSEG_NORMS[i].A.x, y: this.BSEG_NORMS[i].A.y },
				B: {x: this.BSEG_NORMS[i].B.x, y: this.BSEG_NORMS[i].B.y },
				C: {x: this.BSEG_NORMS[i + 1].B.x, y: this.BSEG_NORMS[i + 1].B.y },
				D: {x: this.BSEG_NORMS[i + 1].A.x, y: this.BSEG_NORMS[i + 1].A.y }
			};
			BSEG_OUTLNS.push(QUPED); // LOCAL SCOPE		
			//console.log("BSEG_OUTLNS LEN", BSEG_OUTLNS.length);														// OK ##ACCUMULATING## SEGMENT(!)
		} // FOR (NORMS)
																	// RENDER "LIVE" QUPED OUTLINES
			if (viewlayers.outlines) {
				for (let i = 0; i < BSEG_OUTLNS.length ; i++) {
				let OUTLN = BSEG_OUTLNS[i];
					const quped_elem = document.createElementNS('http://www.w3.org/2000/svg', 'path');
					const d =
`M${OUTLN.A.x},${OUTLN.A.y}L${OUTLN.B.x},${OUTLN.B.y} ${OUTLN.C.x},${OUTLN.C.y} ${OUTLN.D.x},${OUTLN.D.y}Z`; // ##TBD## MERGE WITH TOUCH_TRACK
					hook.append(quped_elem);
					quped_elem.setAttribute('d', d);
					quped_elem.setAttribute('class', 'quped');
				}
			}
																	// INSTANTIATE TOUCH_ELEMENTS
			if (viewlayers.touchtrack) {
				for (let i = 0; i < BSEG_OUTLNS.length; i++) { 																// BSEG_OUTLNS-LENGTH = STEP-DIVISIONS (REGARDLESS OF PATH_LENGTH)
					let lfdnr = GPRELFDNR ++; // (!)INCREMENTED #AFTER# ASSIGNING VALUE
					if (this.snum != GPRESNUM) {
						TTSEG_OUTLN = new TouchTrackElement(BSEG_OUTLNS[i], lfdnr, this.snum, this.PAUSE); // this.name, // #TEMP# MON 21-AUG-23 DROPPED "NAME"
						GPRESNUM = this.snum;
					} else {
						TTSEG_OUTLN = new TouchTrackElement(BSEG_OUTLNS[i], lfdnr, this.snum, 0); // this.name, // (NO PAUSE IF NOT START OF STROKE)
					}
					LIVE_TOUCHTRACK.push(TTSEG_OUTLN); // GLOBAL
				}
			} // TT_ELEMS
															// COMPUTE LUT "ANIMATION"
			if (viewlayers.animation) {
				let prevpause = 0;
				for (const pt of this.BSEG_POINTS) {
					let animPt = {
						x: pt.x,
						y: pt.y,
					}
					if (this.PAUSE != prevpause) {
						animPt.p = this.PAUSE;
						prevpause = this.PAUSE;
					} else {
						animPt.p = 0;
					}
					ANIMPTS_LUT.push(animPt); // GLOBAL
				}
			} // VIEWLAYER ANIMATION
	} // ANIMPTS_LUT
} // CLASS BEZIER

if (DEBUG) { console.log("CLASS_TOUCHEL \t\t// WED 08-NOV-23 (MON 28-AUG-23)"); }
class TouchTrackElement { // #479#
	constructor(TT_OUTLN, lfdnr, snum, pause) {
		this.TT_OUTLN = TT_OUTLN; 																												// "FOUR CORNERS" // IS ##IDENTICAL## WITH BSEG_OUTLNES[i]
		this.ttlfdnr = lfdnr; 																														// MUST HAVE FOR "GET-ELEMENT_BY_ID" TO ADD EVENT_LISTENER
		this.ttsnum = snum;
		this.ttpause = pause;  																														// (ANIMATION TIMEOUT BETWEEN STROKES)
		this.visibility = "hidden"; 
		this.renderTouchelement(this.TT_OUTLN, this.ttlfdnr);															// #TBD# STATIC METHOD(?)
	} // CONSTRUCTOR
	renderTouchelement(OUTLN, ttlfdnr) {
		const tt_elem = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		const tt_elemdata = `M${OUTLN.A.x},${OUTLN.A.y}L${OUTLN.B.x},${OUTLN.B.y} ${OUTLN.C.x},${OUTLN.C.y} ${OUTLN.D.x},${OUTLN.D.y}Z`; // ##TBD## MERGE WITH TOUCH_TRACK
		tt_elem.setAttribute('d', tt_elemdata);
		tt_elem.setAttribute('class', 'touchel');
		const tt_elemid = `${this.ttlfdnr}_${this.ttsnum}`;
		tt_elem.setAttribute('id', tt_elemid);
																// ###TBD## CONTINUE WITH STARTPOINT HERE
		if (this.ttpause && this.ttsnum === 0) { 																					// (HAS PAUSE IF NON-ZERO) // STARTPOINT FIRST STROKE
			tt_elem.setAttribute('visibility', 'visible');
		} else {
			tt_elem.setAttribute('visibility', this.visibility);
		}
		$DOM.touchtrackHook.append(tt_elem);
	} // ADD_TOUCH_EL
	displayalert(currlfdnr) {
		setTimeout( () => {
			alert(`YOUR'RE DONE (WITH) !`);
 		}, 300);
	}
} // CLASS TOUCH_EL

if(DEBUG) { console.log("ANIMATE \t\t// THU 09-NOV-23 (FRI 01-SEP-23)"); }
// (#TBD# FROM UI)
	const SpeedPresets = {
		VERYSLOW: 65,
		SLOW: 50,
		NORM: 15
	}
	var SPEED = SpeedPresets.NORM;
	var WAIT = 0;
	var ptcount = 0;

	function render() { // #521# // SEPARATED CALLBACK (09NOV23)
		if (ptcount < ANIMPTS_LUT.length) {
			if (ANIMPTS_LUT[ptcount].p) { // NOT ZERO
				let PAUSE = ANIMPTS_LUT[ptcount].p;
				if(DEBUG){console.log(`PAUSE ${PAUSE}`);}
				const animline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline'); 					// NAMESPACE(!)
				$DOM.animationHook.append(animline); // .children[0]
				TIMEOUT = PAUSE
			} else {
				TIMEOUT = SPEED;
			}
			if ($DOM.animationHook.children.length) { // NOT ZERO
				$DOM.animationHook.lastChild.points.appendItem(getPoint(ptcount)); // .children[0] // SVG_POINT_LIST
			}
			ptcount = ptcount + 1;
   		//window.requestAnimationFrame(animate);
			setTimeout(render, TIMEOUT);																					// ##TBD## NEEDS ADAPTIVE SAMPLING TO MAP TIMING PROPERLY
		} // CALLBACK
	} // RENDER

	function animate() { // #541#
		// CLEAR ANIMATION/TRACE (IF ANY)
		clear();
		render();
	} // ANIMATE

function getPoint(gframe) { // #547#
	let animpt = $DOM.SVGElementHook.createSVGPoint(); // CREATE IN ##SVG##-ELEM // IS SVGNS
	let ptx = ANIMPTS_LUT[gframe].x;
	let pty = ANIMPTS_LUT[gframe].y;
																	// VIEWSCALE "ALL INCLUSIVE"
	animpt.x = ptx;
	animpt.y = pty;
	return animpt;
}

// ============================================================================================
// ============================================================================================

if (DEBUG){ console.log("INITVIEW \t\t// SAT 11-NOV-23 (THU 21-SEP-23)"); }
																			// GLOBAL
const DEFAULT = 0.125;
const STEP = 0.2; // WAS 0.1 // SAMPLING INTERVAL // BIGGER=BETTER RESPONSIVENESS ON SLOW PHONES 
const NL = 90;
const fontweight = 100; // #566#
const ADJUSTBB = fontweight / 4; // #566# // #TEMP# FIND PROPER RELATION FONTWEIGHT TO AMOUNT OF TYPEBOX BOTTOM/TOP OVERSHOOT
document.documentElement.style.setProperty(`--svgstroke`, `${fontweight}`);
// LAYER-VISIBILITY (OPTIONS)
const viewlayers = {
	outlines: 1,
	touchtrack: 1,
	trace: 1,
	animation: 1
};
													// FULL INITIAL RUN TRU ALL BEZIER-SEGMENTS
var INIT = true;
var LIVE_TOUCHTRACK = [];
var SAVED_TOUCHTRACK = []; // BKUP ("IMMUTABLE" CLONE)
var ANIMPTS_LUT = []; // GLYPH ANIMATION
var PBR = 1; // PLAYBACKRATE

addTouchHandlers($DOM.SVGElementHook); // #581#
var hoffset;
var voffset;
var viewscale;
																		// GLYPH-SCALE PARAMETERS
function initView() { // #586#
	var maxwidth = 1000; // GLYPH #VAR#																													// "1000" (UNITS) FIXED FOR FONT // "DICKTE" LTR "W_UC"
																		// VIEW-SCALE PARAMETERS (FOR DRAWING HANDLERS)
			if (DEBUG) { console.log("SCREENWIDTH", screen.width); }
			if (DEBUG) { console.log("SCREENHEIGHT", screen.height); }
			//alert(`W ${screen.width} H ${screen.height}`); // (MOBILE)

// FIT HEIGHT TO SCREEN (#TEMP#)
	viewscale = (1160 + ADJUSTBB) / $DOM.SVGElementHook.clientHeight; 													// ("TYPEBOX"-HEIGHT "1160" IS FIXED FOR FONT)
			if (DEBUG) { console.log("SCALE (VIEW-TO-SOURCE)", viewscale); }
			if (DEBUG) { console.log("SVG_CLIENTW (=GLYPH_W)", $DOM.SVGElementHook.clientWidth); }
			if (DEBUG) { console.log("SVG_CLIENTH (=GLYPH_H)", $DOM.SVGElementHook.clientHeight); }
	hoffset = (screen.width - $DOM.SVGElementHook.clientWidth) / 2;
			if (DEBUG) { console.log("H_OFFSET", hoffset); }
			//alert(`SCALE ${viewscale} VIEWOFF ${hoffset}`); // (MOBILE)

console.log("INIT V-OFF", voffset); 																													// CURENTLY SCALED TO HEIGHT (11NOV23)
console.log("ADJUSTBB", ADJUSTBB);
console.log("FONTWEIGHT", fontweight);

			if (DEBUG) { console.log("### END INITVIEW ###\n\n"); }
} // INIT_VIEW






