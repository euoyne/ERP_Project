/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cl3syncyoungfiglaccount/glaccount/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
