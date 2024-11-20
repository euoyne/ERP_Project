/*global QUnit*/

sap.ui.define([
	"cl3syncyoungfiglaccount/glaccount/controller/GLACCVIEW.controller"
], function (Controller) {
	"use strict";

	QUnit.module("GLACCVIEW Controller");

	QUnit.test("I should test the GLACCVIEW controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
