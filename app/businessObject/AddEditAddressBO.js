Ext.define('TheOpenDoor.businessObject.AddEditAddressBO', {
	extend: 'TheOpenDoor.businessObject.BaseBO',
	requires: [
	           'Ext.Ajax'
	     ],

	controllerObj: null,
	successCb: null,
	newdAddressData : null,
	userId: null,
	failureCb: null,
	inputDetails: null,

	constructor: function (cObj) {
		if (Ext.isDefined (cObj)) {
			this.controllerObj = cObj;
		}
		return this;
	},
	updateAddress: function(newdAddressData,successCb, failureCb){
		this.newdAddressData = newdAddressData;
        this.successCb = successCb;
        this.failureCb = failureCb;
        this.inputDetails = {
        	"id": newdAddressData.id,
        	"line1": newdAddressData.line1,
			"line2": newdAddressData.line2,
			"landmark": newdAddressData.landmark,
			"city": newdAddressData.city,
			"state": newdAddressData.state,
			"country": newdAddressData.country,
			"phone_number": newdAddressData.phone_number,
			"pincode": newdAddressData.pincode,
			"name": newdAddressData.name
        };
        this.doAddNewEditAddressAjaxRequest();
	},

	doAddNewEditAddressAjaxRequest: function () {
    	/* Call Login API */
        this.doSendAjax({
            url: UrlHelper.getServerUrl().updateAddress,
            method:'PUT',
			disableCaching: false ,
            jsonData: this.inputDetails,
            success: this.onAddEditAddressSuccess,
            failure: this.onAddEditAddressFailure,
            scope: this
        });        
    },

    onAddEditAddressSuccess: function(responseObj, opts){
    	try{
        	var dashboardStore = Ext.getStore('DashboardStore');
        	var decodedObj = (responseObj.responseText && responseObj.responseText.length) ?  Ext.decode (responseObj.responseText) : null;
            if (Ext.isObject(decodedObj)) {
            	dashboardStore.addToStore(decodedObj);  
                    	
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

    onAddEditAddressFailure: function(responseObj, opts){
    	var decodedObj = (responseObj.responseText && responseObj.responseText.length) ? 
        Ext.decode (responseObj.responseText) : null;
    	errorHandled = this.genericErrorCheck(responseObj, false);
    	if(!errorHandled){
            var errorText = "Error";
            this.invokeCb (this.failureCb, [responseObj, false, false, errorText]);
    	}
    }
});
