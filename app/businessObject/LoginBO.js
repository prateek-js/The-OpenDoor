
Ext.define('TheOpenDoor.businessObject.LoginBO', {
	extend: 'TheOpenDoor.businessObject.BaseBO',
	requires: [
	           'Ext.Ajax'
	     ],

	controllerObj: null,
	successCb: null,
	failureCb: null,
	inputDetails: null,
	authResult: null,
	googleDetails: null

	constructor: function (cObj) {
		if (Ext.isDefined (cObj)) {
			this.controllerObj = cObj;
		}
		return this;
	},
	doUserLogin: function(authResult, successCb, failureCb){
		this.authResult = authResult;
        this.successCb = successCb;
        this.failureCb = failureCb;
        
        this.googleDetails = {
       			"emailId": authResult.email,
       			"gender": authResult.gender,
       			"name": authResult.displayName
        };
        
        this.doLoginAjaxRequest();
	},

	doLoginAjaxRequest: function () {
    	/* Call Login API */
        this.doSendAjax({
            url: UrlHelper.getServerUrl().memberLogin,
            method:'POST',
			disableCaching: false ,
            jsonData: this.loginDetails,
            success: this.onLoginSuccess,
            failure: this.onLoginFailure,
            scope: this
        });        
    },
});
