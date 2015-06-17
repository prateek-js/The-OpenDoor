Ext.define('TheOpenDoor.store.GetAllOrderStore', {
	extend : 'Ext.data.Store',
	requires: ['TheOpenDoor.model.GetAllOrderModel'],
	config:{
    	model: "TheOpenDoor.model.GetAllOrderModel",
    	storeId : 'GetAllOrderStore',
        autoSync: true,
        autoLoad: true,
        sorters: 'slot_start_time',
        grouper: {
            groupFn: function(record) {
                return (record.get('slot_start_time')[0]).toUpperCase();
            }
        },
	},
    
    load:function()
    {
    	
    },
        
    addToStore : function(allOrderData){
    	this.removeAll(true);    	
    	this.add(allOrderData);
    }
});