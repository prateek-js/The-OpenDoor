
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
			allOrderList : 'AllOrderView [itemId=allOrderList]'
		},
		control:{
			allOrderView: {
				initialize : 'handleAllOrderViewInit'
			},
			allOrderList: {
				itemtap : 'handleOrderListTap'
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
    },
    handleOrderListTap: function(list, index, target, record){
    	var orderId = record.data.order_id;
    }
});