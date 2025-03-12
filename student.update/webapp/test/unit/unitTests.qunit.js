/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"syncc25/student.update/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
