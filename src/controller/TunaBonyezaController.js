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

	window.addEventListener("keypress", this.onWindowKey.bind(this));
	window.addEventListener("keydown", this.onWindowKey.bind(this));
}

module.exports = TunaBonyezaController;

TunaBonyezaController.prototype.onWindowKey = function(ev) {
	if (ev.keyCode == 8) {
		ev.preventDefault();
		this.tunaBonyezaModel.untypeChar();
	} else if (ev.type != "keypress") {
		return;
	} else {
		var typedChar = String.fromCharCode(ev.charCode);

		if (ev.charCode == 13)
			typedChar = "\n";

		this.tunaBonyezaModel.typeChar(typedChar);
	}

	var lessonView = this.tunaBonyezaView.getLessonView();
	lessonView.setTypedText(this.tunaBonyezaModel.getTypedText());

	var keyboardView = this.tunaBonyezaView.getKeyboardView();

	if (this.tunaBonyezaModel.isCorrect())
		keyboardView.setCurrent(this.tunaBonyezaModel.getNextChar());

	else
		keyboardView.setCurrent("Back");
}