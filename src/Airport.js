'use strict';

function Airport(weather) {
    this._hangar = [];
    this._weather = typeof weather !== 'undefined' ? weather : new Weather();
}

Airport.prototype.planes = function(){ return this._hangar; };

Airport.prototype.clearForLanding = function(plane) {
    if(this._weather.isStormy()) {
        throw new Error("Cannot land during a storm");
    }
    this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
    if(this._weather.isStormy()) {
        throw new Error("Cannot takeoff during a storm");
    }
    this._hangar.pop();
};
