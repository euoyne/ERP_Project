sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("cl3.syncyoung.fi.arapsum.arapsum.controller.ARAPChartView", {
        onInit: function () {

        // ODataModel 초기화
        var oAPModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZC302FICDS0004_CDS");

        // 페이터 읽기 (GET 요청)
        oAPModel.read("/APSet", {
            // filters: [new sap.ui.model.Filter("Field", sap.ui.model.FilterOperator.EQ, "Value")],
            success: function(oData) {
                console.log("데이터 읽기 성공:", oData);
            },
            error: function(oError) {
                console.error("오류 발생:", oError);
            }
        }); 

        this.getView().setModel(oAPModel, "AP");

        },

        
        // onSearch: function() {
        //     // 입력된 연도 값을 가져옵니다
        //     var sYear = this.byId("Year").getValue();
            
        //     if (sYear) {
        //         // AR 데이터 필터링
        //         var oARFilter = new Filter("year", FilterOperator.EQ, sYear);
        //         var oARBinding = this.getView().byId("idVizFrame").getDataset().getBinding("data");
        //         oARBinding.filter([oARFilter]);

        //         // AP 데이터 필터링
        //         var oAPFilter = new Filter("year", FilterOperator.EQ, sYear);
        //         var oAPBinding = this.getView().byId("idVizFrame2").getDataset().getBinding("data");
        //         oAPBinding.filter([oAPFilter]);
        //     } else {
        //         // 연도 입력이 없을 때 모든 데이터 표시
        //         this.getView().byId("idVizFrame").getDataset().getBinding("data").filter([]);
        //         this.getView().byId("idVizFrame2").getDataset().getBinding("data").filter([]);
        //     }
        // },

        onSearch: function (event) {
			var oItem = event.getParameter("suggestionItem");
			if (oItem) {
				MessageToast.show("Search for: " + oItem.getText());
			} else {
				MessageToast.show("Search is fired!");
			}
		},
        

});

});