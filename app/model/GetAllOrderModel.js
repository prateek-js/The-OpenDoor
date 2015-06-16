/* 
 * File Name:       GetSlotsModel.js
 * Description:     Model which hold data related to 
 *      
 */
Ext.define('TheOpenDoor.model.GetAllOrderModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [
		    {name : 'order_id', type: 'string'},
		    {name : 'slot_start_time',type: 'string'},
		    {name : 'status', type: 'string'},
		    {name : 'service_name', type: 'string'}
	   	]
   	}
});

