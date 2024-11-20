/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cl3syncyoungfiarapsum/arap_sum/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
