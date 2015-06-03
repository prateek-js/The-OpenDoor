Ext.define('TheOpenDoor.view.phone.order.AddressOrderService', {
    extend: 'Ext.Container',
    requires:['TheOpenDoor.view.phone.order.AddressView'],
    config: {
        itemId: 'addressServiceOrder',
        cls : ['address-service-order'],
        items : [{
            xtype: 'headerPanel',
            width: '100%',
            flex: 1
        },{
            xtype: 'image',
            src: 'resources/images/bulletpoint.jpg',
            docked: 'top',
            itemId : 'centerLogo',
            cls: 'center-logo-image',
        },{
            xtype: 'container',
            flex: 9,
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            cls: 'address-detail-container',
            items:[{
                xtype: 'button',
                ui: 'plain',
                height: '10%',
                text: 'Add New Address',
                itemId: 'addNewAddressBtn'
            },{
                xtype: 'AddressView',
                cls: 'address-dataview-view',
                height: '90%',
                width: '90%'
            }]                        
        }]
    }
});