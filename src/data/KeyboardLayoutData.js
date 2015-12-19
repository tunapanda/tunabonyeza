var KeyLayoutData = require("./KeyLayoutData");


/**
 * Keyboard layout data.
 */
function KeyboardLayoutData(data) {
	this.keyLayoutDatas = [];

	for (var rowIndex = 0; rowIndex < data.widths.length; rowIndex++) {
		var rowData = [];
		var offset = 0;

		for (var keyIndex = 0; keyIndex < data.widths[rowIndex].length; keyIndex++) {
			var d = {
				rowIndex: rowIndex,
				keyIndex: keyIndex,
				upper: data.chars[rowIndex].upper[keyIndex],
				lower: data.chars[rowIndex].lower[keyIndex],
				width: data.widths[rowIndex][keyIndex],
				offset: offset,
				finger: data.fingers[rowIndex][keyIndex]
			};

			var keyLayoutData = new KeyLayoutData(d);
			rowData.push(keyLayoutData);

			offset += d.width;
		}

		this.keyLayoutDatas.push(rowData);
	}
}

/**
 * Get number of lines.
 */
KeyboardLayoutData.prototype.getNumLines = function() {
	return this.keyLayoutDatas.length;
}

/**
 * Get array of key layout for a given line.
 */
KeyboardLayoutData.prototype.getKeyLayoutDatasByLine = function(lineIndex) {
	return this.keyLayoutDatas[lineIndex];
}

module.exports = KeyboardLayoutData;