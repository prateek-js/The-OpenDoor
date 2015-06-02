
Ext.define('TheOpenDoor.controller.AddEditAddressController',{
	extend : 'TheOpenDoor.controller.BaseController',
	requires: [
        'TheOpenDoor.businessObject.GetAddressBO'
    ],
	config : {
        userProfile: '',
        dashboardBO: 'TheOpenDoor.businessObject.GetAddressBO',
        refs:{
            
        },

        control:{

        },
	},

    applyDashboardBO: function(boName) {
        return Ext.create(boName, this);
    },

    
});
