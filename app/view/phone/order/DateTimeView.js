Ext.define('TheOpenDoor.view.phone.order.DateTimeView', {
    extend: 'Ext.Container',
    requires: [
    ],
    config: {
        layout : {
            type : 'vbox',
            align : 'center',
            pack : 'center'
        },
        cls: 'date-view',
        items:[{
            xtype: 'headerPanel',
            width: '100%',
            useBackButton: true,
            useNextButton: true
        },{
            xtype: 'image',
            src: 'resources/images/bulletpoint.jpg',
            docked: 'top',
            itemId : 'centerLogo',
            cls: 'center-logo-image',
        }]           
    }
});
