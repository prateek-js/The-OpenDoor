/* 
 * File Name:       DashboardModel.js
 * Description:     Model which hold data related to 
 *      
 */
Ext.define('TheOpenDoor.model.DashboardModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [
		    {name : "email", type: "string" },
		    {name : "mobileNumberField", type: "integer" },
	        {name : "addresslineOne", type: "string" },
	        {name : "addresslineTwo", type: "string"},
	        {name : "cityField", type: "string" },
	        {name : "stateField", type: "string"},
	        {name : "pinField", type: "integer" }
	   	 ]
   	 }

});
