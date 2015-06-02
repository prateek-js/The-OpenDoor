Ext.define('TheOpenDoor.view.phone.order.AddressView', {
	extend: 'Ext.dataview.DataView',
	//requires:['TheOpenDoor.view.phone.order.AddressItem'],
    // config: {
    // 	itemId: 'addressView',
    // 	defaultType: 'AddressItem',
    //     useComponents: true,
    //     store: '',
    //     scrollable: null
    // }
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
                itemId: 'addressDataView',
                width: '100%',
                height: '100%',
                scrollable: true,
                cls: '',
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
