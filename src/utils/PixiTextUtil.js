/**
 * Pixi test util.
 */
function PixiTextUtil() {}
module.exports = PixiTextUtil;

/**
 * Get the width of a text.
 */
PixiTextUtil.getTextWidth = function(text, style) {
	if (!text || text == "")
		return 0;

	if (!PixiTextUtil.tmpField)
		PixiTextUtil.tmpField = new PIXI.Text(text, style);

	PixiTextUtil.tmpField.text = text;
	PixiTextUtil.tmpField.style = style;

	return PixiTextUtil.tmpField.width;
}