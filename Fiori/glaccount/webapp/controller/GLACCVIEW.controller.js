sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
function (Controller,MessageToast, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("cl3.syncyoung.fi.glaccount.glaccount.controller.GLACCVIEW", {
        onInit: function () {

        },

        onDisplay: function(){

            let oModel = this.getView().getModel(),                 // Service 실행개체
                oTable = this.getView().byId("glaccountList"),      // EntitySet data 
                aIndex = oTable.getSelectedIndices(),               // go_grid->get_selected_rows
                oContext = oTable.getContextByIndex(aIndex[0]),     // READ TABLE lt_roid INTO ls_roid INDEX 1. 
                oData = oContext.getObject();                       // READ TABLE gt_body INTO gs_body INDEX ls_roid-row_id 
            
            console.log( oData );
        

                    this.getView().byId('Ktopl').setValue(oData.Ktopl);
                    this.getView().byId('Gjgrp').setValue(oData.Gjgrp);
                    this.getView().byId('Glflag').setValue(oData.Glflag);
                    this.getView().byId('Saknr').setValue(oData.Saknr);
                    this.getView().byId('Txt50').setValue(oData.Txt50);
                    this.getView().byId('Bpcode').setValue(oData.Bpcode);
            
            
            // oModel.read("/GL_ACCOUNTSet(Bukrs='"   + oData.Bukrs + 
            //                          "',Ktopl='"   + oData.Ktopl + 
            //                          "',Saknr='"   + oData.Saknr +  "')",
            // {
            //     success: function(oData2){
            //         this.getView().byId('Bukrs').setValue(oData2.Bukrs);
            //         this.getView().byId('Ktopl').setValue(oData2.Ktopl);
            //         this.getView().byId('Gjgrp').setValue(oData2.Gjgrp);
            //         this.getView().byId('Glflag').setValue(oData2.Glflag);
            //         this.getView().byId('Saknr').setValue(oData2.Saknr);
            //         this.getView().byId('Txt50').setValue(oData2.Txt50);
            //         this.getView().byId('Bpcode').setValue(oData2.Bpcode);
            //     }.bind(this),
            //     error: function(){
            //         MessageToast.show("Get entity error!!");
            //     },
            // });
        },
    });
});
