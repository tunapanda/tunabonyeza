var PIXI = require("pixi.js");
var PixiApp = require("pixiapp");
var inherits = require("inherits");

/**
 * Keyboard view class.
 */
function KeyView() {
	PIXI.Container.call(this);
}

inherits(KeyView, PIXI.Container);
module.exports = KeyView;

/**
 * Set highlight.
 */
KeyView.prototype.setHighlight = function(value) {
	if (value)
		this.alpha = 1;

	else
		this.alpha = .25;
}

/**
 * Set highlight.
 */
KeyView.prototype.setCurrent = function(value) {
	this.currentHighlight.visible = value;
}

/**
 * Set key layout data.
 */
KeyView.prototype.setKeyLayoutData = function(keyLayoutData) {
	this.x = 7 + keyLayoutData.offset * 53;
	this.y = 5 + keyLayoutData.rowIndex * 50;

	if (this.background)
		this.removeChild(this.background);

	var color = 0xc0c0c0;

	switch (keyLayoutData.finger) {
		case "L1":
			color = 0xffff80;
			break;

		case "L2":
			color = 0x80ff80;
			break;

		case "L3":
			color = 0x8080ff;
			break;

		case "L4":
			color = 0xff8080;
			break;

		case "R1":
			color = 0xff80ff;
			break;

		case "R2":
			color = 0x80ff80;
			break;

		case "R3":
			color = 0x8080ff;
			break;

		case "R4":
			color = 0xff8080;
			break;
	}

	if (this.currentHighlight)
		this.removeChild(this.currentHighlight);

	this.currentHighlight = new PIXI.Graphics();
	this.currentHighlight.beginFill(0xffffff);
	this.currentHighlight.drawRoundedRect(-5, -5, 53 * keyLayoutData.width - 10 + 10, 50, 10);
	this.addChild(this.currentHighlight);

	this.background = new PIXI.Graphics();
	this.background.lineStyle(2, 0x000000, 1);
	this.background.beginFill(color);
	this.background.drawRoundedRect(0, 0, 53 * keyLayoutData.width - 10, 40, 10);
	this.addChild(this.background);

	if (this.upperField)
		this.removeChild(this.upperField)

	if (this.lowerField)
		this.removeChild(this.upperField)

	var style = {
		font: "normal 15px Sans"
	};

	if (keyLayoutData.upper) {
		this.upperField = new PIXI.Text(keyLayoutData.upper, style);
		this.upperField.x = 5;
		this.upperField.y = 2;
		this.addChild(this.upperField);
	}

	if (keyLayoutData.lower) {
		this.lowerField = new PIXI.Text(keyLayoutData.lower, style);
		this.lowerField.x = 5;
		this.lowerField.y = 20;
		this.addChild(this.lowerField);
	}

	this.upper = keyLayoutData.upper;
	this.lowe = keyLayoutData.lower;
}