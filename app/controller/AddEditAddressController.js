
Ext.define('TheOpenDoor.controller.AddEditAddressController',{
	extend : 'TheOpenDoor.controller.BaseController',
	requires: [
        'TheOpenDoor.businessObject.GetAddressBO'
    ],
	config : {
        userProfile: '',
        addressBO: 'TheOpenDoor.businessObject.GetAddressBO',
        refs:{
            addressOrderService: 'AddressOrderService'
        },

        control:{
             addressOrderService:{
                initialize: 'handleAddressOrderServiceInit'
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

    }
    
});
