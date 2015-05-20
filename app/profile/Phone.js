/*
	* Here we will define the views required for phone profile
	* and on detecting phone OS we are acknowledging flag as true
	* still phone profile not required for the application so no views to be added
*/

Ext.define('TheOpenDoor.profile.Phone', {
    extend: 'Ext.app.Profile',
    config: {
    	name: 'Phone',
        views: [
            'Main',
            'LoginView',
            'Ext.ux.slidenavigation.View',
            'SlideNavigator',
            'DashboardView',
            'order.OrderPageView',
            'order.DateTimeView',
            'BaseNavigationView',
            'order.MyNavView'
        ]
    },
	isActive: function() {
		//console.log('Phone: '+ Ext.os.is.Phone);
		if(Ext.os.is.Desktop) {
			//console.log('Desktop: '+ Ext.os.is.Desktop);
			return true;
		}
		//console.log('Phone return : '+ Ext.os.is.Phone);
		return true;
	},
	launch: function() {
		//console.log('Phone: launch');
		//screen.lockOrientation('portrait');
		TheOpenDoor.view.phone.Main.addXtype('Main');
		TheOpenDoor.view.phone.LoginView.addXtype('LoginView');
		TheOpenDoor.view.phone.DashboardView.addXtype('DashboardView');
		TheOpenDoor.view.phone.order.OrderPageView.addXtype('OrderPageView');
		TheOpenDoor.view.phone.SlideNavigator.addXtype('SlideNavigator');
		TheOpenDoor.view.phone.order.DateTimeView.addXtype('DateTimeView');
		TheOpenDoor.view.phone.BaseNavigationView.addXtype('BaseNavigationView');
		TheOpenDoor.view.phone.order.MyNavView.addXtype('MyNavView');
		if(localStorage.loggedInFlag == "true"){
			Ext.Viewport.add(Ext.create('TheOpenDoor.view.phone.order.DateTimeView'));
		}
		else{	
			//Ext.Viewport.add(Ext.create('TheOpenDoor.view.phone.Main'));
			//Ext.Viewport.add(Ext.create('TheOpenDoor.view.phone.LoginView'));
			Ext.Viewport.add(Ext.create('TheOpenDoor.view.phone.DashboardView'));
		}
    }    
});