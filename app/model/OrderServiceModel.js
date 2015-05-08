/* 
 * File Name:       DashboardModel.js
 * Description:     Model which hold data related to 
 *      
 */
Ext.define('TheOpenDoor.model.OrderServiceModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [
		    {name : 'service_id', type: 'number'},
		    {name : 'name', type: 'string' },
	        {name : 'image', type: 'string'},
	        {name : 'rate_per_hour', type: 'number'}
	   	]
   	}
});

