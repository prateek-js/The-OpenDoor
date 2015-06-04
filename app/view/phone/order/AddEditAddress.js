Ext.define('TheOpenDoor.view.phone.order.AddEditAddress', {
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
            xtype: 'container',
            layout : {
                type : 'vbox',
                align : 'center',
                pack : 'center'
            },
            cls: 'dashboard-view-container',
            items:[{
                xtype: 'textfield',
                itemId: 'nameField',
                placeHolder: 'Name',
                cls: 'other-textfield'
            },{
                xtype: 'textfield',
                itemId: 'addresslineOne',
                placeHolder: 'Address Line 1',
                cls: 'address-textfield'
			},{
                xtype: 'textfield',
                itemId: 'addresslineTwo',
                placeHolder: 'Address Line 2',
                cls: 'other-textfield'
            },{
                xtype: 'textfield',
                itemId: 'landmarkField',
                placeHolder: 'LandMark',
                cls: 'other-textfield'
            },{
                xtype: 'numberfield',
                itemId: 'pinField',
                placeHolder: 'Pin',
                cls: 'other-textfield'
            },{
                xtype: 'button',
                ui: 'plain',
                text: 'Save',
                itemId: 'saveButton',
                cls: 'save-button'
            },{
                xtype: 'numberfield',
                name: 'mobNumber',
                cls: 'mobile-number-field',
                minValue: 10,
                maxValue: 15,
                itemId : 'mobileNumberField'
            }]
        }]           
    }
});
