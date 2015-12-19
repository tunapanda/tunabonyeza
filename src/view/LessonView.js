var PIXI = require("pixi.js");
var PixiApp = require("pixiapp");
var inherits = require("inherits");
var CursorView = require("./CursorView");

/**
 * Lesson view class.
 */
function LessonView() {
	PIXI.Container.call(this);

	this.y = 100;

	var g = new PIXI.Graphics();
	g.beginFill(0xffffff);
	g.drawRect(-1000, 0, 2800, 250);
	this.addChild(g);

	var style = {
		font: "normal 40px monospace",
		fill: "#a0a0a0"
	};

	this.lessonField = new PIXI.Text("", style);
	this.lessonField.x = 20;
	this.lessonField.y = 20;
	this.addChild(this.lessonField);

	var style = {
		font: "normal 40px monospace",
		fill: "#000000"
	};

	this.typedField = new PIXI.Text("a", style);
	this.typedField.x = 20;
	this.typedField.y = 20;
	this.addChild(this.typedField);

	this.cursorView = new CursorView();
	this.addChild(this.cursorView);

	this.charWidth = this.typedField.width;
	this.charHeight = this.typedField.height;
}

inherits(LessonView, PIXI.Container);
module.exports = LessonView;

/**
 * Set lesson text.
 */
LessonView.prototype.setLessonText = function(text) {
	this.lessonField.text = text;
}

/**
 * Set typed text.
 */
LessonView.prototype.setTypedText = function(text) {
	this.typedField.text = text;

	var split = text.split("\n");
	var col = split[split.length - 1].length;
	var row = split.length - 1;

	this.cursorView.x = this.typedField.x + this.charWidth * col;
	this.cursorView.y = this.typedField.y + this.charHeight * row;
}