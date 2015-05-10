/* 
 * File Name:       BaseBO.js
 * Description:     Base Business Logic class to handle common functionalities to 
                    all Business objects.  All BOs derives from this Base BO
 *
 * Copyrights:      
 */
Ext.define('TheOpenDoor.businessObject.BaseBO', {

	//requires: ['TheOpenDoor.helper.BaseUrl'],
	
	ajaxRequestInProcess : false,
	
	getInputHeaderReqParams : function(userId){
		var inp_req_params = { 
			'Content-Type': 'application/json',
            'Cache-Control' : 'no-cache,no-store'
		};
		// if(userId != null && userId != undefined){
		// 	inp_req_params.access_token = sessionId;
		// }
		return inp_req_params;
	},
	
    invokeCb: function (cbFunction, args) {
        if (this.controllerObj && cbFunction) {
            cbFunction.apply (this.controllerObj, args);
        }
        else {
            
        }
    },
    
    ajaxRequestException: function(conn, response, options, e){
    	
    	if(response.status != null && (response.status == 505 || response.status == 500 || response.status == 503 || response.status == 400)){
    		hideSpinner();
    		//console.log('response',response);
        	//console.log('options',options);
    		delete options.failure;
    		delete options.callback;
    		//Display Error Message
    		//if(!this.ajaxRequestInProcess){
	    	if(response.status == 505){
	           	if(response.responseText){
	          		var decodedObj = Ext.decode(response.responseText, true);
	           		if(decodedObj && decodedObj.error_description){
	           			var errorText = decodedObj.error_description;
	           			showErrorDialog(false, false, errorText);
	           		    return false;
	           		}
	            }            	
	        }
	    	var errorText = localeString.unable_process_error;
	    	showErrorDialog(false, false, errorText);
	        this.ajaxRequestInProcess = true;
	        return false;  		
    	}
    },
        
    doSendAjax: function (requestObj) {
    	//console.log('doSendAjax');
        if (isOnLine()) {
        	Ext.Ajax.on('requestexception',this.ajaxRequestException, this);
        	Ext.Ajax.request(requestObj);
        }
        else {
        	this.invokeCb (this.failureCb, [null, false, localeString.errorMsg_noInternetConnection]);
        }
    },
    
    genericErrorCheck: function (responseObj, memberLoginRequest, bypassDefaultErrorCheck) {
        var errorHandled = false,
            errorText = localeString.unable_process_error;
       
        if(!isLogin){
        	errorText = localeString.errorMsg_invalid_userId_password;
        	errorHandled = true;
        }else if (responseObj.status != null && responseObj.status == 401) {
            errorText = localeString.session_timeout_error;
            errorHandled = true;
            sessionTimeout = true;
        }else if(typeof bypassDefaultErrorCheck === "undefined" || !bypassDefaultErrorCheck){
        	errorText = localeString.unable_process_error;
        	errorHandled = true;
        }
        
        
        if (errorHandled) {
            this.invokeCb (this.failureCb, [errorText, sessionTimeout, false, errorText]);
        }
        
        return errorHandled;
    }
    
});
