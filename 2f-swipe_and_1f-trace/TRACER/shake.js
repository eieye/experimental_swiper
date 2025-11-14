/*
 * Author: Alex Gibson
 * https://github.com/alexgibson/shake.js
 * License: MIT license
 */




console.log("SHAKE CUSTOM EVENT (9) \t// FRI 10-NOV-23 (13-JUN-23)");
/* REVIEWED 31OCT25 / COPY OF "IMAGE WEB 2025OCT29 ALPHA SWIPER SHADOW" */
// BUBBLES // REF #63#
// ADD LISTENER WINDOW // REF #88#
										// ##TBD## // CLEAR DRAWING WITH SHAKE ON ACTIVE PAGE ONLY


(function(global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return factory(global, global.document);
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory(global, global.document);
    } else {
        global.Shake = factory(global, global.document);
    }
} (typeof window !== 'undefined' ? window : this, function (window, document) {

    'use strict';

    function Shake(options) {
        //feature detect
        this.hasDeviceMotion = 'ondevicemotion' in window; 																					// "IN" RETURNS T/F FOR PROP IN PROTO/CHAIN

        									// (SETTINGS CAN BE OVERWRITTEN IN MAIN-SCRIPT)
				// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        this.options = {
            threshold: 5, //#default# velocity threshold for shake to register
            timeout: 500  //#default# interval between events
        };
				// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        if (typeof options === 'object') {
            for (var i in options) {
                if (options.hasOwnProperty(i)) {
                    this.options[i] = options[i];																										// ASSIGN TO INSTANCE-PROPERTY="OPTIONS"
                }
            }
					//console.log(options); 																																	// USING ARG="OPTIONS" FROM HTML
        }

        //use date to prevent multiple shakes firing
        this.lastTime = new Date();

        //accelerometer values
        this.lastX = null;
        this.lastY = null;
        this.lastZ = null;

        //create custom event
        if (typeof document.CustomEvent === 'function') {
            this.event = new document.CustomEvent('shake', {
                bubbles: true,																																			// #63#
                cancelable: true
            });
        } else if (typeof document.createEvent === 'function') {
            this.event = document.createEvent('Event');
            this.event.initEvent('shake', true, true);
        } else {
            return false;
        }
    }

    //reset timer values
    Shake.prototype.reset = function () {
        this.lastTime = new Date();
        this.lastX = null;
        this.lastY = null;
        this.lastZ = null;
    };

    //start listening for devicemotion
    Shake.prototype.start = function () {
        this.reset();
        if (this.hasDeviceMotion) {
        		//console.log("SHAKE", this);
        		        		//console.log("SHAKE", $DOM.SVGElementHook);
            //$DOM.SVGElementHook.addEventListener('devicemotion', this, false);						// NO WORK // #88# // WAS LISTENER ON WINDOW
            // ##TBD## TRY // document.dispatchEvent(this); (?)
            window.addEventListener('devicemotion', this, false);
        }
    };

    //stop listening for devicemotion
    Shake.prototype.stop = function () {
        if (this.hasDeviceMotion) {
        	//$DOM.SVGElementHook.removeEventListener('devicemotion', this, false);						// NO WORK // WAS LISTENER ON WINDOW
          window.removeEventListener('devicemotion', this, false);
          	
          	
        }
        this.reset();
    };

    //calculates if shake did occur
    Shake.prototype.devicemotion = function (e) {
        var current = e.accelerationIncludingGravity;
        var currentTime;
        var timeDifference;
        var deltaX = 0;
        var deltaY = 0;
        var deltaZ = 0;

        if ((this.lastX === null) && (this.lastY === null) && (this.lastZ === null)) {
            this.lastX = current.x;
            this.lastY = current.y;
            this.lastZ = current.z;
            return;
        }

        deltaX = Math.abs(this.lastX - current.x);
        deltaY = Math.abs(this.lastY - current.y);
        deltaZ = Math.abs(this.lastZ - current.z);

        if (((deltaX > this.options.threshold) && (deltaY > this.options.threshold)) 
        		|| ((deltaX > this.options.threshold) && (deltaZ > this.options.threshold)) 
       					|| ((deltaY > this.options.threshold) && (deltaZ > this.options.threshold))) {
            //calculate time in milliseconds since last shake registered
            currentTime = new Date();
            timeDifference = currentTime.getTime() - this.lastTime.getTime();

            if (timeDifference > this.options.timeout) {
                window.dispatchEvent(this.event);
                this.lastTime = new Date();
                // ####
                /*console.log("FLASH");*/
                // ####
            }
        }

        this.lastX = current.x;
        this.lastY = current.y;
        this.lastZ = current.z;

    };

    //event handler
    Shake.prototype.handleEvent = function (e) {
        if (typeof (this[e.type]) === 'function') {
            return this[e.type](e);
        }
    };

    return Shake;
}));


				// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
															// DEBUG SHAKE-EVENT (TRIGGER ON BTN)
															// (WAS ON BTN "DOCUMENT DISPATCH_EVENT(SHAKEEVT)")
//const shakeevt = new Event("shake", { bubbles: true, cancelable: false });

