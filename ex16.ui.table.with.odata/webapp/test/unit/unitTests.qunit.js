/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"syncc25/ex16.ui.table.with.odata/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
