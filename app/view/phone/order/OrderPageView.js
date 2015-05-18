Ext.define('TheOpenDoor.view.phone.order.OrderPageView', {
    extend: 'Ext.Container',
    requires: [
    'Ext.DataView'
    ],
    config: {
        layout : {
            type : 'vbox',
            align : 'center',
            pack : 'center'
        },
        cls: 'order-view',
        items:[{
            xtype: 'container',
            layout : {
                type : 'vbox',
                align : 'center',
                pack : 'center'
            },
            cls: 'dataview-outercontainer',
            items:[{
                xtype: 'dataview',
                itemId: 'orderServicesDataView',
                width: '50%',
                height: '100%',
                scrollable: true,
                cls: 'order-services-dataview',
                store: 'OrderServiceStore',
                itemTpl: new Ext.XTemplate('<tpl>',
                        '<div>',
                            '<div class="services-image" style="background-image: url({image})"></div>',
                            '<div><button type="button" class="order-btn" id="serviceButton">{name}</button></div>',
                            '<div class="rate-label">Rate per Hour: {price_per_hour}</div>',
                        '</div>',
                    '</tpl>')
            }]
        }]           
    }
});
