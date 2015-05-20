Ext.define('TheOpenDoor.store.GetSlotsStore', {
	extend : 'Ext.data.Store',
	requires: ['TheOpenDoor.model.GetSlotsModel'],
	config:{
    	model: "TheOpenDoor.model.GetSlotsModel",
    	storeId : 'GetSlotsStore'
	},
    
    load:function()
    {
    },
        
    addToStore : function(getSlots){
    	this.removeAll(true);    	
    	this.add(getSlots);
    }
});


