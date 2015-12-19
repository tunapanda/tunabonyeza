/**
 * Key layout data.
 */
function KeyLayoutData(data) {
	this.upper = data.upper;
	this.lower = data.lower;
	this.keyIndex = data.keyIndex;
	this.rowIndex = data.rowIndex;
	this.width = data.width;
	this.offset = data.offset;
	this.finger = data.finger;

	if (!this.upper)
		this.upper="";

	if (!this.lower)
		this.lower="";
}

module.exports = KeyLayoutData;