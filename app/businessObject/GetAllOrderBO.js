Ext.define('TheOpenDoor.businessObject.GetAllOrderBO', {
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
	doGetAllOrder: function(successCb, failureCb){
        this.successCb = successCb;
        this.failureCb = failureCb;
        this.inputDetails = {
        };
        this.doGetAllOrderAjaxRequest();
	},

	doGetAllOrderAjaxRequest: function () {
    	/* Call Login API */
        this.doSendAjax({
            url: UrlHelper.getServerUrl().allOrder,
            method:'GET',
			disableCaching: false ,
            jsonData: this.inputDetails,
            success: this.doGetAllOrderSuccess,
            failure: this.doGetAllOrderFailure,
            scope: this
        });        
    },

    doGetAllOrderSuccess: function(responseObj, opts){
        try{
        	var allOrderStore = Ext.getStore('GetAllOrderStore');
            allOrderStore.removeAll();
        	var decodedObj = (responseObj.responseText && responseObj.responseText.length) ?  Ext.decode (responseObj.responseText) : null;
            if (decodedObj) {
            	allOrderStore.addToStore(decodedObj);
                    	
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

    doGetAllOrderFailure: function(responseObj, opts){
    	var decodedObj = (responseObj.responseText && responseObj.responseText.length) ? 
        Ext.decode (responseObj.responseText) : null;
    	errorHandled = this.genericErrorCheck(responseObj, false);
    	if(!errorHandled){
            var errorText = "Error";
            this.invokeCb (this.failureCb, [responseObj, false, false, errorText]);
    	}
    }
});
