Ext.define('TheOpenDoor.store.AddressGetStore', {
	extend : 'Ext.data.Store',
	requires: ['TheOpenDoor.model.AddressGetModel'],
	config:{
    	model: "TheOpenDoor.model.AddressGetModel",
    	storeId : 'AddressGetStore'
	},
    
    load:function()
    {
    	//console.log("loginStore Loaded");
    },
        
    addToStore : function(addressData){
    	this.removeAll(true);    	
    	this.add(addressData);
    }
});