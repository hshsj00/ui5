/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"syncc25/student.create/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
