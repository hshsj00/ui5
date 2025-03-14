sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sync.c25.ex11.element.binding.controller.Main", {
        onInit() {
        },
        onPress(oEvent){
            // alert('text');
            //디버깅을 하기 위해 DEBUGGER;를 작성
            //이 문장은 개발자 도구가 켜졌을때만, 작동한다. 
            debugger;

            var oSelectedItem = oEvent.getSource();
            var oContext = oSelectedItem.getBindingContext();
            // var oData = oContext.getProperty();
            // alert(oDATA.CARRID = "," + oDATA.CARRNAME);

            var sPath = oContext.getPath();
            var oConnTable = this.byId("idConnTable");
            oConnTable.bindElement(sPath);

        }
    });
});