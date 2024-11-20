/*global QUnit*/

sap.ui.define([
	"cl3syncyoungfiarapsum/arap_sum/controller/ARAPChartView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ARAPChartView Controller");

	QUnit.test("I should test the ARAPChartView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
