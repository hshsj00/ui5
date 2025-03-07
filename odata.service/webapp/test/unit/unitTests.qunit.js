/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"syncc25/odata.service/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
