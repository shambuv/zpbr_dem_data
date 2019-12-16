sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/export/Spreadsheet",
	"sap/m/SearchField"
], function (Controller,JSONModel,Spreadsheet,SearchField) {
	"use strict";

	return Controller.extend("nvidia.com.zpbr_dem_data.controller.App", {

		onInit: function(){
			
			this.getOwnerComponent().getModel().setSizeLimit(200);
			var that = this;
			var oTable = this.getView().byId("idSmartTable").getTable();
			oTable.onAfterRendering = function () {
				if (sap.ui.table.Table.prototype.onAfterRendering) {
					sap.ui.table.Table.prototype.onAfterRendering.apply(this);
				}
				//that.setDefaultWidth();
				if (oTable.getGroupBy() === null) {
					that.getView().byId("btnUnGroup").setVisible(false);
				} else {
					that.getView().byId("btnUnGroup").setVisible(true);
				}
			};	
		
		},
		onUnGroup: function (oEvent) {
			var oTable = this.getView().byId("idSmartTable").getTable();
			oTable.setGroupBy("");
		},			
		filterChanged:function(oEvent){
			var count =0;
			var oFilter = this.getView().byId("idSmartFilterBar");
			if(oFilter.isVisibleInFilterBarByName("SkuId") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("ZzpbrChipCode") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("ZzskuCode") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("BuildAct") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("TsDescription") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("ZzpbrCode") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("ZzrefBom") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Targetbom") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Planningbom") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("EstdDelDate") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("EstdCost") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("OpsLock") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Bpm") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Opspm") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Spm") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Swpm") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Lde") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Lve") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Pde") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("UserStatText") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Head") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Parentteam") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("PtTeamlead") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Deptname") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("TeamName") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("TeamLead") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Recipient") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Kostl") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Costcenter") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Location") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Text") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Dtlcode") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("DellocText") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("DeliveryType") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Logrecpt") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("LogLocation") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Custconfig") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Inactive") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("NoTest") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("NvidiaChip0") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("NvidiaChip0Txt") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("NvidiaChip1") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("NvidiaChip1Txt") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Memory") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("MemoryTxt") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Cooler") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("CoolerTxt") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Mechanical") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("MechanicalTxt") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("DrId") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("ReqQty") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("ApprovedQty") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("DeliveredQty") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("ConstrainedQty") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("PrioritizedQty") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("DemandState") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("DrNoTest") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("ProjectId") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("ZzprojType") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("ZzprojClass") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("ZprojclassDesc") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Description") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("ZzpbrPoski") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Post1") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("ZzbaseBom") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("ZzprojGrp") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("Maktx") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("FgYield") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("PfgYield") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("CumYield") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("PfgStrtQty") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("FgStrtQty") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("StrtCost") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("YieldUnitCost") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("PfgBuildLoc") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("FgBuildLoc") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("PfgLt") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("FgLt") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("DcProcTime") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("ReqStrtDate") == true) count = count + 1;
			if(oFilter.isVisibleInFilterBarByName("PfgMaterial") == true) count = count + 1;
			
			var oSmartTable = this.getView().byId("idSmartTable");
			if(count > 60){
				if(oFilter.getFilterBarExpanded() == false) oSmartTable.setVisible(true);		
				else oSmartTable.setVisible(false);
			} 
			else{ oSmartTable.setVisible(true); }

		},
		onSearch: function(oEvent){
			var oFilterData = oEvent.getSource().getFilterData();
			for (var property in oFilterData) {
				if (oFilterData.hasOwnProperty(property)) {
					if (oFilterData[property].value !== null && oFilterData[property].value !== "") {
						var aRanges = [];
						aRanges.exclude = false;
						aRanges.keyField = property;
						aRanges.operation = "Contains";
						aRanges.tokenText = "*" + oFilterData[property].value.toUpperCase() + "*";
						aRanges.value1 = oFilterData[property].value.toUpperCase();
						oFilterData[property].ranges.push(aRanges);
						oFilterData[property].value = null;
					}else if(property === "ZzrefBom"		||
					         property === "TsDescription"	||
					         property === "Location"		||
					         property === "LogLocation" 	||
					         property === "NvidiaChip0" 	||
					         property === "NvidiaChip0Txt"	||
					         property === "NvidiaChip1" 	||
					         property === "NvidiaChipTxt"	||
					         property === "Memory"			||
					         property === "MemoryTxt"		||
					         property === "Cooler"		    ||
					         property === "CoolerTxt"       ||
					         property === "Mechanical"      ||
					         property === "MechanicalTxt"   ||
							 property === "DrId"			||
							 property === "Post1"   		||
							 property === "Maktx"           ||
							 property === "Description"     ||
							 property === "ZzpbrPoski")
						 for( var i=0; i < oFilterData[property].ranges.length; i++){
						   if(oFilterData[property].ranges[i].operation === "EQ"){
						     oFilterData[property].ranges[i].low = "*" + oFilterData[property].ranges[i].low 
						                                           + "*";
						     oFilterData[property].ranges[i].operation = "Contains";
						   }
						 }
				    }
				}
			
			
			oEvent.getSource().setFilterData(oFilterData);
			sap.ui.core.BusyIndicator.show(100);
			this.getView().getModel().read("/DemandDataSet", {
				filters: oEvent.getSource().getFilters(),
				success: function (oData) {
					var oModelHeader = new sap.ui.model.json.JSONModel();
					for (var i = 0; i < oData.results.length; i++) {
						oData.results[i].EstdCost = parseFloat(oData.results[i].EstdCost);
						oData.results[i].ReqQty = parseFloat(oData.results[i].ReqQty);
						oData.results[i].ApprovedQty = parseFloat(oData.results[i].ApprovedQty);
						oData.results[i].DeliveredQty = parseFloat(oData.results[i].DeliveredQty);
						oData.results[i].ConstrainedQty = parseFloat(oData.results[i].ConstrainedQty);
						oData.results[i].PrioritizedQty = parseFloat(oData.results[i].PrioritizedQty);						
						oData.results[i].FgYield = parseFloat(oData.results[i].FgYield);						
						oData.results[i].PfgYield = parseFloat(oData.results[i].PfgYield);						
						oData.results[i].CumYield = parseFloat(oData.results[i].CumYield);						
						oData.results[i].PfgStrtQty = parseFloat(oData.results[i].PfgStrtQty);						
						oData.results[i].FgStrtQty = parseFloat(oData.results[i].FgStrtQty);						
						oData.results[i].StrtCost = parseFloat(oData.results[i].StrtCost);						
						oData.results[i].YieldUnitCost = parseFloat(oData.results[i].YieldUnitCost);
						oData.results[i].PfgLt = parseFloat(oData.results[i].PfgLt);
						oData.results[i].FgLt = parseFloat(oData.results[i].FgLt);
					}
					
					oModelHeader.setData(oData.results);
					this.getView().setModel(oModelHeader, "oModelHeader");
					
					sap.ui.core.BusyIndicator.hide();
					if(oData.results.length === 0){
						sap.m.MessageToast.show("No Data Found");
						return;
					}	
					var count =0;
					var oFilter = this.getView().byId("idSmartFilterBar");
					if(oFilter.isVisibleInFilterBarByName("SkuId") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("ZzpbrChipCode") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("ZzskuCode") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("BuildAct") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("TsDescription") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("ZzpbrCode") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("ZzrefBom") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Targetbom") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Planningbom") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("EstdDelDate") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("EstdCost") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("OpsLock") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Bpm") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Opspm") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Spm") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Swpm") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Lde") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Lve") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Pde") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("UserStatText") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Head") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Parentteam") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("PtTeamlead") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Deptname") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("TeamName") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("TeamLead") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Recipient") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Kostl") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Costcenter") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Location") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Text") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Dtlcode") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("DellocText") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("DeliveryType") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Logrecpt") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("LogLocation") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Custconfig") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Inactive") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("NoTest") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("NvidiaChip0") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("NvidiaChip0Txt") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("NvidiaChip1") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("NvidiaChip1Txt") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Memory") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("MemoryTxt") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Cooler") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("CoolerTxt") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Mechanical") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("MechanicalTxt") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("DrId") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("ReqQty") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("ApprovedQty") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("DeliveredQty") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("ConstrainedQty") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("PrioritizedQty") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("DemandState") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("DrNoTest") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("ProjectId") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("ZzprojType") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("ZzprojClass") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("ZprojclassDesc") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Description") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("ZzpbrPoski") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Post1") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("ZzbaseBom") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("ZzprojGrp") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("Maktx") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("FgYield") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("PfgYield") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("CumYield") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("PfgStrtQty") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("FgStrtQty") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("StrtCost") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("YieldUnitCost") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("PfgBuildLoc") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("FgBuildLoc") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("PfgLt") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("FgLt") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("DcProcTime") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("ReqStrtDate") == true) count = count + 1;
					if(oFilter.isVisibleInFilterBarByName("PfgMaterial") == true) count = count + 1;
					
					if( count > 60)
					   this.getView().byId("idSmartFilterBar").setFilterBarExpanded(false);

					//this.getView().byId("idPanel").setExpanded(false);
					var oSmartTable = this.getView().byId("idSmartTable");
					if(oData.results.length > 0) oSmartTable.setVisible(true);
					else oSmartTable.setVisible(false);
					
					//var oSmartTable = this.getView().byId("idSmartTable");
					//if (oSmartTable) {
							//var oPage = this.getView().getContent()[0].getAggregation("pages")[0];
							//oPage.scrollToElement(oSmartTable, 1000);
					//	}		
					
				}.bind(this),
				error: function (oResponse) {
					sap.m.MessageToast.show("OData call failed");
					sap.ui.core.BusyIndicator.hide();
				}
			});			
		},
		onInitialise: function(oEvent){
/*			var oTable = oEvent.getSource().getTable();
			oTable.setEnableColumnFreeze(true);
			var aColumns = oTable.getColumns();
			for (var i = 0; i < aColumns.length; i++) {
				var sPath = "oModelHeader>" + aColumns[i].data("p13nData").columnKey;
				if(aColumns[i].data("p13nData").columnKey === "EstdCost" ||
				   aColumns[i].data("p13nData").columnKey === "ReqQty" ||
				   aColumns[i].data("p13nData").columnKey === "ApprovedQty" ||
				   aColumns[i].data("p13nData").columnKey === "DeliveredQty" ||
				   aColumns[i].data("p13nData").columnKey === "ConstrainedQty" ||
				   aColumns[i].data("p13nData").columnKey === "PrioritizedQty" ||
				   aColumns[i].data("p13nData").columnKey === "PfgStrtQty" ||
				   aColumns[i].data("p13nData").columnKey === "FgStrtQty" ||
				   aColumns[i].data("p13nData").columnKey === "FgStrtQty" ||
				   aColumns[i].data("p13nData").columnKey === "StrtCost" ||
				   aColumns[i].data("p13nData").columnKey === "YieldUnitCost" ||
				   aColumns[i].data("p13nData").columnKey === "DcProcTime"){
					//aColumns[i].getTemplate().getItems()[0].bindText(sPath);
				}else if(aColumns[i].data("p13nData").columnKey === "EstdDelDate" ||
						aColumns[i].data("p13nData").columnKey === "ReqStrtDate"){
					aColumns[i].getTemplate().bindText({
						path: sPath,
						type: "sap.ui.model.type.Date",
						formatOptions: {
							pattern: "MM/dd/yyyy",
							style: "medium",
							strictParsing: true,
							UTC: true
						}
					});
				}				
				else
			    aColumns[i].getTemplate().bindText(sPath);		
			}
			
			oTable.bindRows("oModelHeader>/");*/
		},
		onInitialized: function(e){
			//debugger;
/*		    var oSmartTable = this.getView().byId("idSmartTable");
			if(oSmartTable.getCurrentVariantId() === ""){
				oSmartTable.setCurrentVariantId("id_1572397589224_72_table");
			}*/
			
			//this.setDefaultWidth();
		},
		onDownload: function(oEvent){
			var aContexts = [];
			var aDownload = [];
			aContexts = this.getView().byId("idSmartTable").getTable().getBinding("rows").getContexts();
			if (aContexts.length === 0) {
				this.showMessage("No data to download", "E");
				return;
			}
			var oModel = this.getView().getModel("oModelHeader");
			for (var i = 0; i < aContexts.length; i++) {
				var sPath = aContexts[i].getPath();
				var oData = oModel.getProperty(sPath);
				aDownload.push(oData);

			}
			var aCols = [];
			var aColumns = this.getView().byId("idSmartTable").getTable().getColumns();
			for (i = 0; i < aColumns.length; i++) {
				if (aColumns[i].getVisible()) {
					var obj = {};
					obj.property = aColumns[i].data("p13nData").columnKey;
					obj.label = aColumns[i].getLabel().getText();
					if (aColumns[i].data("p13nData").columnKey === "EstdCost" ||
							   aColumns[i].data("p13nData").columnKey === "ReqQty" ||
							   aColumns[i].data("p13nData").columnKey === "ApprovedQty" ||
							   aColumns[i].data("p13nData").columnKey === "DeliveredQty" ||
							   aColumns[i].data("p13nData").columnKey === "ConstrainedQty" ||
							   aColumns[i].data("p13nData").columnKey === "PrioritizedQty" ||
							   aColumns[i].data("p13nData").columnKey === "PfgStrtQty" ||
							   aColumns[i].data("p13nData").columnKey === "FgStrtQty" ||
							   aColumns[i].data("p13nData").columnKey === "FgStrtQty" ||
							   aColumns[i].data("p13nData").columnKey === "StrtCost" ||
							   aColumns[i].data("p13nData").columnKey === "YieldUnitCost" ||
							   aColumns[i].data("p13nData").columnKey === "DcProcTime" ) {
						obj.type = "number";

					} else if (aColumns[i].data("p13nData").columnKey === "EstdDelDate" || aColumns[i].data("p13nData").columnKey === "ReqStrtDate") {
						obj.type = "date";
					} else {
						obj.type = aColumns[i].data("p13nData").type;
					}
					aCols.push(obj);
				}
			}
			var oSettings = {
				workbook: {
					columns: aCols,
					context: {
						title: "Demand",
						sheetName: "Data"
					}
				},
				dataSource: aDownload,
				fileName: "Demand Data",
				showProgress: true
			};
			var oSheet = new Spreadsheet(oSettings);

			oSheet.build()
				.then(function () {})
				.finally(function () {
					oSheet.destroy();
				});			
		},
		onAfterVariantInitialise: function(e){
			//debugger;
		},
		onAfterVariantApply: function(e){
			//debugger;
			
		
		
		},
		onBeforeRendering: function(oEvent){
		
		}
	});

});