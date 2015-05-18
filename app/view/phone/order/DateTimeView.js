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
            flex: 1,
            width: '100%',
            itemId: 'headerPanel',
            useBackButton: true,
            useNextButton: true
        },{
            xtype: 'image',
            src: 'resources/images/bulletpoint.jpg',
            docked: 'top',
            itemId : 'centerLogo',
            cls: 'center-logo-image',
        },{
            xtype: 'container',
            cls:'timePickerCnt',
            items:[{
                xtype:'timepickerfield',
                cls:'timePickerTextFieldCls',
                pickerCls:['timePickerCls'],
                clearIcon:false,
                itemId:'endTimePickerId',
                pickerHeight:'10.5em'
            }]
        }]           
    }
});
