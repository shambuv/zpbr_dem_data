/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nvidia/com/zpbr_dem_data/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});