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
	        {name : 'address', type: 'auto'}
	   	 ],
	   	 hasOne: [
	   	 	{model: 'DashboardAddressModel', name: 'address'}
	   	 ]
   	 }

});

Ext.define('DashboardAddressModel',{
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{name: 'line1', type: 'string'},
			{name: 'line2', type: 'string'},
			{name: 'landmark', type: 'string'},
			{name: 'city', type: 'string'},
			{name: 'state', type: 'string'},
			{name: 'country', type: 'string'},
			{name: 'pincode', type: 'integer'},
			{name: 'name', type: 'string'},
			{name: 'phone_number', type: 'integer'}
		],
		belongsTo: [
			{model: 'DashboardModel', name: 'address'}
		]
	}
});
