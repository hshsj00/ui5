sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("sync.c25.gateway.crud.controller.Main", {
        onInit() {
            var oData = {
                carrier:{
                    Carrid:"",
                    Carrname:"",
                    Currcode:"",
                    Url:""
                },
            };
            var oModel = new JSONModel(oData)
            var oModel =this.getView().setModel(oModel,"update");
        },
        onSave(oEvent){
            
        },
        onClose(oEvent){

        }
    });
});