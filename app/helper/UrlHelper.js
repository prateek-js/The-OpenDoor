/*
 * File Name:       UrlHelper.js
 * Description:     Url Helper File for managing Ajax Request URL's 
 *
 * Copyrights:
 */
Ext.define('TheOpenDoor.helper.UrlHelper', {
	singleton : true,
	alternateClassName : 'UrlHelper',

	requires: ['TheOpenDoor.helper.BaseUrl'],
	config:{
		
		kAjaxRequestTimeout : 30000, /* 30 seconds */
		
		/* TO BE:: modified by Jenkins Job with appropriate build no */
		buildVersion: "1.0.0",
		

		//mode: 'production',
		mode: 'development',

		/**
		 * This serverUrl property will bind _productionUrl or _developmentUrl based on mode
		 * don't enter url's here, please add it either in _productionUrl, _developmentUrl property
		 */
		serverUrl : {},
		/**
		 * not allowed to access _productionUrl property
		 * instead use the above serverUrl property 
		 */
		_productionUrl : {
			createUser: BaseUrl.baseUrl+'users',
			addAddress: BaseUrl.baseUrl+'users'+user_Id+'address',
			getServices: BaseUrl.baseUrl+'services'
		},
		/**
		 * not allowed to access _developmentUrl property
		 * instead use the above serverUrl property 
		 */
		_developmentUrl : {
			createUser: 'stubs/createUser.json',
			addAddress: 'stubs/dashboard.json',
			getServices: 'stubs/services.json'
		}

	},
	
	constructor : function(config) {
        this.initConfig(config);
        this.callParent([config]);
     },
	
    applyServerUrl : function(){
    	
    	if(this.config.mode == 'development'){
    		return this.config._developmentUrl;
    	}else if(this.config.mode == 'production'){
    		return this.config._productionUrl;
    	}else{
    		return null;
    	}
    },
    /**
     * not allowed to access _developmentUrl getter property,
     * instead use getServerUrl()
     */
    get_developmentUrl : function(){
    	
    	return null;
    },
    /**
     * not allowed to access _productionUrl getter property,
     * instead use getServerUrl()
     */
    get_productionUrl : function(){
    	
    	return null;
    },
    
	updateToStore : function(name, value) {
		localStorage.setItem(name, Ext.encode(value));
	},

	removeFromStore : function(name) {
		localStorage.removeItem(name);
	},

	getFromStore : function(name) {
		var stringVal = localStorage.getItem(name);

		if (stringVal == null) {
			return null;
		} else {
			return Ext.decode(stringVal);
		}
	}
});
