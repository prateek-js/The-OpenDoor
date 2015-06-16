
Ext.define('TheOpenDoor.controller.AllOrderController',{
	extend : 'TheOpenDoor.controller.BaseController',
	requires: [
        'TheOpenDoor.businessObject.GetAllOrderBO'
    ],
	config : {
	},

	applyGetAllOrderBO: function(boName) {
        return Ext.create(boName, this);
    },

});