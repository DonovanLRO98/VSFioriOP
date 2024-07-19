sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("dev.sapui5.controller.App", {

        onInit: function() {
        },
        
        onShowHello(){
          alert("Hola mundo");

        }
      });
    }
  );
  