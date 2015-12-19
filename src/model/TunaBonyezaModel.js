var KeyboardLayoutData = require("../data/KeyboardLayoutData");
var swedish_layout = require("../layouts/swedish.js");

function TunaBonyezaModel() {
	this.layoutDatas = []
	this.layoutDatas.push(new KeyboardLayoutData(swedish_layout));

	this.lessonText = "hello\nworld";
	this.typedText = "";
}

module.exports = TunaBonyezaModel;

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