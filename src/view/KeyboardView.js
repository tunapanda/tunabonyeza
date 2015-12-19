var PIXI = require("pixi.js");
var PixiApp = require("pixiapp");
var inherits = require("inherits");
var KeyView = require("./KeyView");

/**
 * Keyboard view class.
 */
function KeyboardView() {
	PIXI.Container.call(this);

	this.y = 350;

	var g = new PIXI.Graphics();
	g.beginFill(0x404040);
	g.drawRect(-1000, 0, 2800, 250);
	this.addChild(g);

	this.keyHolder = new PIXI.Container();
	this.addChild(this.keyHolder);

	this.keyViews = [];
}

inherits(KeyboardView, PIXI.Container);
module.exports = KeyboardView;

/**
 * Clear all highlights.
 */
KeyboardView.prototype.clearHighlight = function() {
	for (var i = 0; i < this.keyViews.length; i++)
		this.keyViews[i].setHighlight(false);
}

/**
 * Highlight keys
 */
KeyboardView.prototype.highlightKeys = function(keys) {
	this.clearHighlight();

	keys = keys.toUpperCase();

	for (var i = 0; i < this.keyViews.length; i++)
		if (keys.indexOf(this.keyViews[i].upper) >= 0 ||
			keys.indexOf(this.keyViews[i].lower) >= 0)
			this.keyViews[i].setHighlight(true);
}

/**
 * Set current.
 */
KeyboardView.prototype.setCurrent = function(key) {
	if (key)
		key = key.toUpperCase();

	for (var i = 0; i < this.keyViews.length; i++)
		if (key && ((key == this.keyViews[i].upper) ||
				(key == this.keyViews[i].lower)))
			this.keyViews[i].setCurrent(true);

		else
			this.keyViews[i].setCurrent(false);
}

/**
 * Set keyboard layout data.
 */
KeyboardView.prototype.setKeyboardLayoutData = function(keyboardLayoutData) {
	this.keyViews = [];
	this.keyHolder.removeChildren();
	var numLines = keyboardLayoutData.getNumLines();

	for (var lineIndex = 0; lineIndex < numLines; lineIndex++) {
		var datas = keyboardLayoutData.getKeyLayoutDatasByLine(lineIndex);

		for (var keyIndex = 0; keyIndex < datas.length; keyIndex++) {
			var data = datas[keyIndex];

			var keyView = new KeyView();
			keyView.setKeyLayoutData(data);

			this.keyHolder.addChild(keyView);
			this.keyViews.push(keyView);
		}
	}

	this.setCurrent(null);
}