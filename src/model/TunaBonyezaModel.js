var KeyboardLayoutData = require("../data/KeyboardLayoutData");
var swedish_layout = require("../layouts/swedish.js");
var Xhr = require("../utils/Xhr");
var EventDispatcher = require("yaed");
var inherits = require("inherits");

function TunaBonyezaModel() {
	this.layoutDatas = []
	this.layoutDatas.push(new KeyboardLayoutData(swedish_layout));

	this.lessonText = "hello\nworld";
	this.typedText = "";
}

module.exports = TunaBonyezaModel;
inherits(TunaBonyezaModel, EventDispatcher);

TunaBonyezaModel.READY = "ready";

TunaBonyezaModel.prototype.getKeybordLayoutDataByName = function() {
	return this.layoutDatas[0];
}

TunaBonyezaModel.prototype.getLessonText = function() {
	return this.lessonText;
}

TunaBonyezaModel.prototype.getNextChar = function() {
	return this.lessonText[this.typedText.length];
}

TunaBonyezaModel.prototype.getTypedText = function() {
	return this.typedText;
}

TunaBonyezaModel.prototype.typeChar = function(typedChar) {
	this.typedText += typedChar;
}

TunaBonyezaModel.prototype.untypeChar = function() {
	if (this.typedText.length)
		this.typedText = this.typedText.substr(0, this.typedText.length - 1);
}

TunaBonyezaModel.prototype.isCorrect = function() {
	return this.lessonText.substr(0, this.typedText.length) == this.typedText;
}

TunaBonyezaModel.prototype.loadExercise = function(url) {
	this.exerciseXhr = new Xhr(url);
	this.exerciseXhr.setResponseEncoding(Xhr.JSON);
	this.exerciseXhr.send().then(
		function(response) {
			this.lessonText = response.text;
			this.trigger(TunaBonyezaModel.READY);
		}.bind(this)
	);
}