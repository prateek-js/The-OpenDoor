Ext.define('TheOpenDoor.view.phone.DashboardView', {
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
            xtype: 'textfield',
            itemId: 'nameField',
            placeHolder: 'Name',
            cls: 'other-textfield'
        },{
            xtype: 'container',
            itemId: 'emailContainer',
            cls: 'emailfield-container',
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
            },
            items:[{
                xtype: 'image',
                src: '',
                cls: '',
                itemdId: ''
            },{
                xtype: 'emailfield',
                name: 'email',
                cls: 'email-field',
                itemId: 'emailFieldId'
            }]
                
        },{
            xtype: 'container',
            itemId: 'numberContainer',
            cls: 'emailfield-container',
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
            },
            items:[{
                xtype: 'image',
                src: '',
                cls: ''
            },{
                xtype: 'numberfield',
                name: 'mobNumber',
                cls: 'mobile-number-field',
                minValue: 10,
                maxValue: 15,
                itemId : 'mobileNumberField'
            }]
        },{
            xtype: 'container',
            itemId: 'addressContainer',
            cls: 'emailfield-container',
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
            },
            items:[{
                xtype: 'image',
                src: '',
                cls: ''
            },{
                xtype: 'textfield',
                itemId: 'addresslineOne',
                placeHolder: 'Address Line 1',
                cls: 'address-textfield'
            }]
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
        }]           
    }
});
