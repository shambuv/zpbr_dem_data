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
		onExpand: function(oEvent){
			 var oSmartTable = this.getView().byId("idSmartTable");
			if(oEvent.getSource().getProperty("expanded") === true)
			 oSmartTable.setVisible(false);
			else oSmartTable.setVisible(true);
			
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
					
					this.getView().byId("idPanel").setExpanded(false);
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