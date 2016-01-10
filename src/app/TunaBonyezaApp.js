var PIXI = require("pixi.js");
var PixiApp = require("pixiapp");
var inherits = require("inherits");
var TunaBonyezaView = require("../view/TunaBonyezaView");
var TunaBonyezaModel = require("../model/TunaBonyezaModel");
var TunaBonyezaController = require("../controller/TunaBonyezaController");

/**
 * Main app class.
 */
function TunaBonyezaApp() {
	PixiApp.call(this, 800, 600);

	this.backgroundColor = 0x000000;

	this.tunaBonyezaModel = new TunaBonyezaModel();
	this.tunaBonyezaModel.on(TunaBonyezaModel.READY, this.onModelReady.bind(this));
}

inherits(TunaBonyezaApp, PixiApp);
TunaBonyeza = TunaBonyezaApp;

/**
 * Load exercise from url.
 */
TunaBonyezaApp.prototype.loadExercise = function(url) {
	this.tunaBonyezaModel.loadExercise(url);
}

/**
 *
 */
TunaBonyezaApp.prototype.onModelReady = function() {
	this.tunaBonyezaView = new TunaBonyezaView();
	this.addChild(this.tunaBonyezaView);

	this.tunaBonyezaController =
		new TunaBonyezaController(
			this.tunaBonyezaView,
			this.tunaBonyezaModel
		);
}