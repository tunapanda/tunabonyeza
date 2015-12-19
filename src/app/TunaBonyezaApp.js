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
	this.tunaBonyezaView = new TunaBonyezaView();
	this.addChild(this.tunaBonyezaView);

	this.tunaBonyezaController =
		new TunaBonyezaController(
			this.tunaBonyezaView,
			this.tunaBonyezaModel
		);
}

inherits(TunaBonyezaApp, PixiApp);

new TunaBonyezaApp();