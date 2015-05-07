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
        cls: 'order-view',
        items:[{
            xtype: 'image',
            src: 'resources/images/download.jpeg',
            itemId: '',
            cls: 'order-view-brief-image'
        },{
            xtype: 'button',
            ui: 'plain',
            text: 'Proceed to Order',
            itemId: 'orderBtn',
            cls: 'order-btn'
        },{
            xtype: 'label',
            html: 'Rate',
            itemId: 'rateLabel',
            cls: 'rate-label'
        }]           
    }
});
