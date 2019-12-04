sap.ui.define(
	['sap/ui/comp/smartvariants/SmartVariantManagement'],
	function (SmartVariantManagement) {

		return SmartVariantManagement.extend("nvidia.com.zpbr_dem_data.controls.SmartVariantManagement", {
			metadata: {
				properties: {
					fallbackDefaultVariant: {
						type: "string"
					}
				}
			},
			renderer: function (oRm, oControl) {
				SmartVariantManagement.getMetadata().getRenderer().render(oRm, oControl);
			},
			_getDefaultVariantKey:function () {
				var defaultVariant = "";
				if (this._oPersoControl) {
					defaultVariant = this._oPersoControl.getDefaultVariantKey();
					if (defaultVariant === "*standard*" || defaultVariant === "") {  //No default variant was set by the user
						defaultVariant = this.getFallbackDefaultVariant();
					}
				}
				return defaultVariant;
			}
		});
	}
);