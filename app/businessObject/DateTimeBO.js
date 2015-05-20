
Ext.define('TheOpenDoor.businessObject.DateTimeBO', {
	extend: 'TheOpenDoor.businessObject.BaseBO',
	requires: [
	           'Ext.Ajax'
	     ],

	controllerObj: null,
	successCb: null,
	failureCb: null,
	inputDetails: null,
	authResult: null,
	inputDetails: null,

	constructor: function (cObj) {
		if (Ext.isDefined (cObj)) {
			this.controllerObj = cObj;
		}
		return this;
	},
	doGetDateTime: function(successCb, failureCb){
        this.successCb = successCb;
        this.failureCb = failureCb;
        
        this.inputDetails = {
        };
        
        this.doDateTimeAjaxRequest();
	},

	doDateTimeAjaxRequest: function () {
    	/* Call Login API */
        this.doSendAjax({
            url: UrlHelper.getServerUrl().getSlots,
            method:'GET',
			disableCaching: false ,
            jsonData: this.inputDetails,
            success: this.onDateTimeSuccess,
            failure: this.onDateTimeFailure,
            scope: this
        });        
    },

    onDateTimeSuccess: function(responseObj, opts){
    	try{
        	var getSlotsStore = Ext.getStore('GetSlotsStore');
        	var decodedObj = (responseObj.responseText && responseObj.responseText.length) ?  Ext.decode (responseObj.responseText) : null;
            if (Ext.isObject(decodedObj) && decodedObj.get_slots != null) {
            	getSlotsStore.addToStore(decodedObj.get_slots);
                getSlotsStore.load();      	
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

    onDateTimeFailure: function(responseObj, opts){
    	var decodedObj = (responseObj.responseText && responseObj.responseText.length) ? 
        Ext.decode (responseObj.responseText) : null;
    	errorHandled = this.genericErrorCheck(responseObj, false);
    	if(!errorHandled){
            var errorText = "Error";
            this.invokeCb (this.failureCb, [responseObj, false, false, errorText]);
    	}
    }
});
