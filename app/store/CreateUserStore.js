Ext.define('TheOpenDoor.store.CreateUserStore', {
	extend : 'Ext.data.Store',
	requires: ['TheOpenDoor.model.CreateUserModel'],
	config:{
    	model: "TheOpenDoor.model.CreateUserModel",
    	storeId : 'CreateUserStore'
	},
    
    load:function()
    {
    	//console.log("loginStore Loaded");
    },
        
    addToStore : function(createUserData){
    	this.removeAll(true);    	
    	this.add(createUserData);
    }
});