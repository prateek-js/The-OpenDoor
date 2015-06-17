
Ext.define('TheOpenDoor.controller.AllOrderController',{
	extend : 'TheOpenDoor.controller.BaseController',
	requires: [
        'TheOpenDoor.businessObject.GetAllOrderBO'
    ],
	config : {
		allOrderBO: 'TheOpenDoor.businessObject.GetAllOrderBO',
		refs:{
			allOrderView : 'AllOrderView',
			baseNavigationView: 'BaseNavigationView',
			slideNavigator: 'SlideNavigator',
		},
		control:{
			allOrderView: {
				initialize : 'handleAllOrderViewInit'
			}
		},
	},


	applyAllOrderBO: function(boName) {
        return Ext.create(boName, this);
    },

    handleAllOrderViewInit: function(){
    	var me = this;
        successCb = this.handleGetAllOrderSucess,
        failureCb = this.handleGetAllOrderFailure;
        this.getAllOrderBO().doGetAllOrder(successCb, failureCb);
    },
    handleGetAllOrderSucess: function(){
    	hideSpinner();
    },
    handleGetAllOrderFailure: function(){
    	hideSpinner();
    }
});