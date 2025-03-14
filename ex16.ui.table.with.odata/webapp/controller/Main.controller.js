sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sync.c25.ex16.ui.table.with.odata.controller.Main", {
        onInit() {
        },
        onSelection(oEvent) {
            // alert('a');
            var oContext = oEvent.getParameter("rowContext");
            var sPath = oContext.getPath();
            //alert(sPath);

            //모델에 등록된 URL http://61.97.134.34:8000/sap/opu/odata/sap/ux_travel_srv
            //sPaht는 현재 클릭한 행의 모델 경로
            // /UX_C_Flight_TP(Carrid='AA',Connid='0017',Fldate=datetime'2024-04-25T00%3A00%3A00')
            var oBookTable = this.byId("idBookTable");
            oBookTable.bindElement(sPath);

            //oBookTable에서는 {to_Booking}만 적어도 내가 클릭한 비행일정의 예약정보를 볼 수 있다. 
        }
    });
});