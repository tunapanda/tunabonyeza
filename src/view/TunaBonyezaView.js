var PIXI = require("pixi.js");
var PixiApp = require("pixiapp");
var inherits = require("inherits");
var KeyboardView = require("../view/KeyboardView");
var LessonView = require("../view/LessonView");

/**
 * Main view class.
 */
function TunaBonyezaView() {
	PIXI.Container.call(this);

	this.keyboardView = new KeyboardView();
	this.addChild(this.keyboardView);

	this.lessonView = new LessonView();
	this.addChild(this.lessonView);
}

inherits(TunaBonyezaView, PIXI.Container);
module.exports = TunaBonyezaView;

/**
 * Keyboard view.
 */
TunaBonyezaView.prototype.getKeyboardView = function() {
	return this.keyboardView;
}

/**
 * Lesson view.
 */
TunaBonyezaView.prototype.getLessonView = function() {
	return this.lessonView;
}