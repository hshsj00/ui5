sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageBox",
    ],
    (Controller, JSONModel, MessageBox) =>{
        "use strict";

        return Controller.extend("sync.c25.gateway.crud.controller.Create",{
            onInit(){
                var oData = {
                    carrier: {
                        Carrid:"",
                        Carrname:"",
                        Currcode:"",
                        Url:"",
                    },
                };
                var oModel= new JSONModel(oData); 
                this.getView().setModel(oModel, "new");
            },
            onSave(){
                var oNewModel = this.getView().getModel("new");
                var oData = oNewModel.getData();
                var oNewData ={
                        Carrid: oData.carrier.Carrid,
                        Carrname: oData.carrier.Carrname,
                        Currcode: oData.carrier.Currcode,
                        Url: oData.carrier.Url
                };

                var oModel = this.getView().getModel();

                oModel.create(
                    "/CarrierSet",
                    oNewData,
                    {
                        success:function(oData, oResponse){
                            MessageBox.success(
                                "입력하신 항공사가 생성되었습니다."
                            );
                        },
                        error: function (oError) {
                            MessageBox.error(
                                "입력하신 항공사 생성에 실패했습니다."
                            );
                        },
                    }
                )
            },
            onClear(){
                var oModel = this.getView().getModel("new");
                oModel.setData({carrier: {} });
            }
        })
    }
)