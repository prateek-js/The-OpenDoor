Ext.define('TheOpenDoor.view.phone.order.OrderPageView', {
    extend: 'Ext.Container',
    requires: [
    ],
    config: {
        layout : {
            type : 'vbox',
            align : 'center',
            pack : 'start'
        },
        cls: 'dashboard-view',
        items:[{
            xtype: 'image',
        },{
            xtype: 'button',
            ui: 'plain',
            text: '',
            itemId: 'order-start-button',
            cls: 'order-button-cls'
        },{
            xtype: 'label',
        }]           
    }
});
