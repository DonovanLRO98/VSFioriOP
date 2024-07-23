sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller, JSONModel, formatter, Filter,FilterOperator) => {
	"use strict";

	return Controller.extend("dev.sapui5.controller.ListaFacturas", {
        formatter: formatter,
		onInit() {
			const oViewModel = new JSONModel({
				currency: "MXN"
			});
			this.getView().setModel(oViewModel, "view");
		},
        onFilterInvoices(oEvent) {
			// build filter array
			const aFilter = [];
			const sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			const oList = this.byId("listaFacturas");
			const oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
	});
});