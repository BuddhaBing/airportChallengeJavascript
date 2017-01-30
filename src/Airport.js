'use strict';

function Airport() {
    this._hangar = [];
}

Airport.prototype.planes = function(){ return this._hangar; };

Airport.prototype.clearForLanding = function(plane) {
    this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
    if(this.isStormy()) {
        throw new Error("Can not takeoff during a storm");
    }
    this._hangar.pop();
};

Airport.prototype.isStormy = function() { return false; };

// Airport.prototype.planes = [];


//
// function Player() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
//
// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
