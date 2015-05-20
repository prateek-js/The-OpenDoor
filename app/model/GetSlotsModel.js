/* 
 * File Name:       GetSlotsModel.js
 * Description:     Model which hold data related to 
 *      
 */
Ext.define('TheOpenDoor.model.GetSlotsModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [
		    {name : 'service_id', type: 'number'},
		    {name : 'date',type: 'string'},
		    {
		    	type: 'hasMany',
                model: 'TheOpenDoor.model.StartTimesModel',
                name: 'start_times',
               	associationKey:'start_times'
            }
	   	]
   	}
});

