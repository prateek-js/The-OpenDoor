Ext.define('TheOpenDoor.store.DummyStore', {
	extend : 'Ext.data.Store',
	//requires: ['TheOpenDoor.model.GetSlotsModel'],
	config:{
    //	model: "TheOpenDoor.model.GetSlotsModel",
    	storeId : 'DummyStore',
    	fields: [
            {name: 'text', type: 'string'},
            {name: 'value',  type: 'string'}
         
        ],
    	data:[{
    		text:'date',
    		value:'20-10-2015'
    	},{
    		text:'date',
    		value:'22-10-2015'
    	},{
    		text:'date',
    		value:'23-10-2015'
    	}]
	
	}
});

