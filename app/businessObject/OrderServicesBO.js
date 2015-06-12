Ext.define('TheOpenDoor.businessObject.OrderServicesBO', {
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
	doOrderServices: function(successCb, failureCb){
        this.successCb = successCb;
        this.failureCb = failureCb;
        this.inputDetails = {
        };
        this.doOrderServicesAjaxRequest();
	},

	doOrderServicesAjaxRequest: function () {
    	/* Call Login API */
        this.doSendAjax({
            url: UrlHelper.getServerUrl().getServices,
            method:'GET',
			disableCaching: false ,
            jsonData: this.inputDetails,
            success: this.onGetServiceSuccess,
            failure: this.onGetServiceFailure,
            scope: this
        });        
    },

    onGetServiceSuccess: function(responseObj, opts){
        try{
        	var orderServiceStore = Ext.getStore('OrderServiceStore');
            orderServiceStore.removeAll();
        	var decodedObj = (responseObj.responseText && responseObj.responseText.length) ?  Ext.decode (responseObj.responseText) : null;
            if (decodedObj) {
            	orderServiceStore.addToStore(decodedObj);
                    	
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
        hideSpinner();
    },

    onGetServiceFailure: function(responseObj, opts){
    	var decodedObj = (responseObj.responseText && responseObj.responseText.length) ? 
        Ext.decode (responseObj.responseText) : null;
    	errorHandled = this.genericErrorCheck(responseObj, false);
    	if(!errorHandled){
            var errorText = "Error";
            this.invokeCb (this.failureCb, [responseObj, false, false, errorText]);
    	}
    }
});
