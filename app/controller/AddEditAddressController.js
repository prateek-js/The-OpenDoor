
Ext.define('TheOpenDoor.controller.AddEditAddressController',{
	extend : 'TheOpenDoor.controller.BaseController',
	requires: [
        'TheOpenDoor.businessObject.GetAddressBO'
    ],
	config : {
        userProfile: '',
        addressBO: 'TheOpenDoor.businessObject.GetAddressBO',
        refs:{
            addressOrderService: 'AddressOrderService',
            baseNavigationView: 'BaseNavigationView',
            addressBackButton: 'AddressOrderService [itemId=headerPanel] button[itemId=backButtonId]',
        },

        control:{
             addressOrderService:{
                initialize: 'handleAddressOrderServiceInit'
            },
            addressBackButton:{
                tap: 'handleAddressBackButtonTap'
            },
        },
	},

    applyAddressBO: function(boName) {
        return Ext.create(boName, this);
    },

    handleAddressOrderServiceInit: function(){
        var me = this;
        successCb = this.handleGetAddressSucess,
        failureCb = this.handleGetAddressFailure;
        this.getAddressBO().doGetAddress(successCb, failureCb);

    },

    handleAddressBackButtonTap: function(){
        this.getBaseNavigationView().onNavBack();
    }
    
});
