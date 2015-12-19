function TunaBonyezaController(view, model) {
	this.tunaBonyezaView = view;
	this.tunaBonyezaModel = model;

	var keyboardLayoutData = model.getKeybordLayoutDataByName("swedish");
	var keyboardView = view.getKeyboardView();
	keyboardView.setKeyboardLayoutData(keyboardLayoutData);

	keyboardView.highlightKeys(this.tunaBonyezaModel.getLessonText());
	keyboardView.setCurrent(this.tunaBonyezaModel.getNextChar());

	var lessonView = view.getLessonView();
	lessonView.setLessonText(this.tunaBonyezaModel.getLessonText());
	lessonView.setTypedText(this.tunaBonyezaModel.getTypedText());

	window.addEventListener("keypress", this.onWindowKeypress.bind(this));
}

module.exports = TunaBonyezaController;

TunaBonyezaController.prototype.onWindowKeypress = function(ev) {
	var typedChar = String.fromCharCode(ev.charCode);
	this.tunaBonyezaModel.typeChar(typedChar);

	var lessonView = this.tunaBonyezaView.getLessonView();
	lessonView.setTypedText(this.tunaBonyezaModel.getTypedText());

	var keyboardView = this.tunaBonyezaView.getKeyboardView();
	keyboardView.setCurrent(this.tunaBonyezaModel.getNextChar());
}