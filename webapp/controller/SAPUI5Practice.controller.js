sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],
function (Controller,MessageToast,JSONModel,ResourceModel) {
    "use strict";

    return Controller.extend("dev.sapui5.controller.SAPUI5Practice", {
        onInit: function () {

            const oData = {
                recipient : {
                   name : "Mundo"
                }
             };
             const oModel = new JSONModel(oData);
             this.getView().setModel(oModel);

             const i18nModel = new ResourceModel({
                bundleName: "dev.sapui5.i18n.i18n"
             });
             this.getView().setModel(i18nModel, "i18n");

        },

        onShowHello(){

            /**alert("Hola mundo");**/
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);
            
            MessageToast.show("Hola mundo");
        }
    });
});
