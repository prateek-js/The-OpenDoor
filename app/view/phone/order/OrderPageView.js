Ext.define('TheOpenDoor.view.phone.order.OrderPageView', {
    extend: 'Ext.Container',
    requires: [
    ],
    config: {
        layout : {
            type : 'vbox',
            align : 'center',
            pack : 'center'
        },
        cls: 'order-view',
        items:[{
            xtype: 'image',
            cls: 'order-view-brief-image'
        },{
            xtype: 'button',
            ui: 'plain',
            itemId: 'orderBtn',
            cls: 'order-btn'
        },{
            xtype: 'label',
            text: 'Rate',
            cls: 'rate-label'
        }]           
    }
});
