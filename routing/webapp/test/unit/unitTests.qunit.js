/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"syncc25/routing/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
