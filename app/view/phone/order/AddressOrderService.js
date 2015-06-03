Ext.define('TheOpenDoor.view.phone.order.AddressOrderService', {
    extend: 'Ext.Container',
    requires:['TheOpenDoor.view.phone.order.AddressView'],
    config: {
        itemId: 'addressServiceOrder',
        cls : ['address-service-order'],
        items : [{
            xtype: 'AddressView',
            cls: 'address-dataview-view'
        }]
    }
});