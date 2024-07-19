/*global QUnit*/

sap.ui.define([
	"dev/sapui5/controller/SAPUI5Practice.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SAPUI5Practice Controller");

	QUnit.test("I should test the SAPUI5Practice controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
