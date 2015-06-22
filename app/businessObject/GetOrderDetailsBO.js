Ext.define('TheOpenDoor.businessObject.GetOrderDetailsBO', {
	extend: 'TheOpenDoor.businessObject.BaseBO',
	requires: [
	    'Ext.Ajax'
    ],

	controllerObj: null,
	successCb: null,
	orderId : null,
	failureCb: null,
	inputDetails: null,

	constructor: function (cObj) {
		if (Ext.isDefined (cObj)) {
			this.controllerObj = cObj;
		}
		return this;
	},
	doGetOrderDetail: function(orderId,successCb, failureCb){
		this.orderId = orderId;
        this.successCb = successCb;
        this.failureCb = failureCb;
        this.inputDetails = {
        };
        this.doGetDetailOrderAjaxRequest();
	},

	doGetDetailOrderAjaxRequest: function () {
    	/* Call Login API */
        this.doSendAjax({
            url: UrlHelper.getServerUrl().orderDetail+this.orderId,
            method:'GET',
			disableCaching: false ,
            jsonData: this.inputDetails,
            success: this.doGetOrderDetailSuccess,
            failure: this.doGetOrderDetailFailure,
            scope: this,
            timeout: 30000
        });        
    },

    doGetOrderDetailSuccess: function(responseObj, opts){
        try{
        	var orderDetailStore = Ext.getStore('OrderDetailStore');
            orderDetailStore.removeAll();
        	var decodedObj = (responseObj.responseText && responseObj.responseText.length) ?  Ext.decode (responseObj.responseText) : null;
            if (decodedObj) {
            	orderDetailStore.addToStore(decodedObj);
                TheOpenDoor.app.getController('AllOrderController').handleOrderDetailViewShow();
                hideSpinner();
                    	
    	    }else
            {
            	var errorText = localeString.errorMsg_invalid_userId_password;
            	this.invokeCb (this.failureCb, [null, false, false, errorText]);
                hideSpinner();
            }
    	}catch(e){
			var errorText = localeString.errorMsg_defaultFailure;
			hideSpinner();
			//Display Error Message
			showErrorDialog(false, false, errorText);
            hideSpinner();
		}
        hideSpinner();
    },

    doGetOrderDetailFailure: function(responseObj, opts){
        debugger;
    	var decodedObj = (responseObj.statusText) ? 
        Ext.decode (responseObj.statusText) : null;
    	errorHandled = this.genericErrorCheck(responseObj, false);
    	if(!errorHandled){
            var errorText = "Error";
            this.invokeCb (this.failureCb, [responseObj, false, false, errorText]);
            hideSpinner();
    	}
        hideSpinner();
    }
});
