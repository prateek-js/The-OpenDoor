
Ext.define('TheOpenDoor.businessObject.DashboardBO', {
	extend: 'TheOpenDoor.businessObject.BaseBO',
	requires: [
	           'Ext.Ajax'
	     ],

	controllerObj: null,
	successCb: null,
	dashboardAddressData : null,
	userId: null,
	failureCb: null,
	inputDetails: null,

	constructor: function (cObj) {
		if (Ext.isDefined (cObj)) {
			this.controllerObj = cObj;
		}
		return this;
	},
	doDashboard: function(dashboardAddressData,successCb, failureCb){
		this.dashboardAddressData = dashboardAddressData;
        this.successCb = successCb;
        this.failureCb = failureCb;
        this.inputDetails = {
        	"line1": dashboardAddressData.line1,
			"line2": dashboardAddressData.line2,
			"landmark": dashboardAddressData.landmark,
			"city": dashboardAddressData.city,
			"state": dashboardAddressData.state,
			"country": dashboardAddressData.country,
			"phone_number": dashboardAddressData.phone_number,
			"pincode": dashboardAddressData.pincode,
			"name": dashboardAddressData.name
        };
        this.doLoginAjaxRequest();
	},

	doLoginAjaxRequest: function () {
    	/* Call Login API */
        this.doSendAjax({
            url: UrlHelper.getServerUrl().addAddress,
            method:'PUT',
			disableCaching: false ,
            jsonData: this.inputDetails,
            success: this.onAddAddressSuccess,
            failure: this.onAddAddressFailure,
            scope: this
        });        
    },

    onAddAddressSuccess: function(responseObj, opts){
    	try{
        	var dashboardStore = Ext.getStore('DashboardStore');
        	var decodedObj = (responseObj.responseText && responseObj.responseText.length) ?  Ext.decode (responseObj.responseText) : null;
            if (Ext.isObject(decodedObj)) {
            	dashboardStore.addToStore(decodedObj);
                dashboardStore.load();  
                    	
    	    }else
            {
            	var errorText = localeString.errorMsg_invalid_userId_password;
            	this.invokeCb (this.failureCb, [null, false, false, errorText]);
            }
    	}catch(e){
			var errorText = localeString.errorMsg_defaultFailure;
			hideSpinner();
			//Display Error Message
			showErrorDialog(false, false, errorText);
		}
    },

    onAddAddressFailure: function(responseObj, opts){
    	var decodedObj = (responseObj.responseText && responseObj.responseText.length) ? 
        Ext.decode (responseObj.responseText) : null;
    	errorHandled = this.genericErrorCheck(responseObj, false);
    	if(!errorHandled){
            var errorText = "Error";
            this.invokeCb (this.failureCb, [responseObj, false, false, errorText]);
    	}
    }
});
