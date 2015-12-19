var PIXI = require("pixi.js");
var PixiApp = require("pixiapp");
var inherits = require("inherits");

/**
 * Cursor view class.
 */
function CursorView() {
	PIXI.Container.call(this);

	this.g = new PIXI.Graphics();
	this.g.beginFill(0x000000);
	this.g.drawRect(0, 0, 2, 40);

	this.addChild(this.g);

	setInterval(this.onFlashInterval.bind(this), 500);
}

inherits(CursorView, PIXI.Container);
module.exports = CursorView;

/**
 * Flash interval.
 */
CursorView.prototype.onFlashInterval = function() {
	this.g.visible = !this.g.visible;
}