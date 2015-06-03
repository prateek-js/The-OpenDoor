Ext.define('TheOpenDoor.view.phone.order.AddressItem',{
	extend: 'Ext.dataview.component.DataItem',
    //requires: [],
    config: {
        layout: {
            type: 'vbox'
        },
        cls: '',
        height: '10rem',
        items: [{
        	xtype: 'container',
            itemId: 'addressItem',
            cls: '',
            tpl: '<div class=""><div class="">{name}</div><div class="">{address_line}</div><div class="">{address_cps} &nbsp &nbsp {phone_number}</div><div class="">{country}</div></div>',
            flex: 0.5
        },{
            xtype: 'radiofield',
            name : 'address',
            value: '',
            itemId: 'addressRadioField',
            flex: 0.1
        },{
        	xtype: 'container',
        	layout:{
        		type: 'hbox',
        		pack: 'center',
        		align: 'center'
        	},
        	flex: 0.2,
        	items:[{
        		xtype: 'button',
        		ui: 'plain',
	        	flex: 1,
	        	text: 'Edit',
	        	itemId: 'editButton',
	        	cls: ''
        	},{
	        	xtype: 'button',
	        	ui: 'plain',
	        	flex: 1,
	        	text: 'Delete',
	        	itemId: 'deleteButton',
	        	cls: ''
        	}]
	    }]
    },
    updateRecord: function(record) {
        var me = this;
        if(record !== null){
            me.down('#addressItem').setData({name: record.get('name'), address_line: record.get('address_line'),address_cps: record.get('address_cps'),country: record.get('country')});
        }
        me.callParent(arguments);
    }
});