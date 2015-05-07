/* 
 * File Name:       DashboardModel.js
 * Description:     Model which hold data related to 
 *      
 */
Ext.define('TheOpenDoor.model.DashboardModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [
		    {name : 'email', type: 'string' },
		    {name : 'gender', type: 'string' },
	        {
                type: 'hasMany',
                model: 'TheOpenDoor.model.DashboardAddressModel',
                name: 'address',
                associationKey:'address'
            },
	   	 ]
   	 }

});
