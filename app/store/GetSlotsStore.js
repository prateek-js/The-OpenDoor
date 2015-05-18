Ext.define('TheOpenDoor.store.GetSlotsStore', {
	extend : 'Ext.data.Store',
	requires: ['TheOpenDoor.model.GetSlotsModel'],
	config:{
    	model: "TheOpenDoor.model.GetSlotsModel",
    	storeId : 'GetSlotsStore'
	},
    
    load:function()
    {
    	//console.log("loginStore Loaded");
    },
        
    addToStore : function(dashboardUserData){
    	this.removeAll(true);    	
    	this.add(dashboardUserData);
    }
});


