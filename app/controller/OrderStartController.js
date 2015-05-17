Ext.define('TheOpenDoor.controller.OrderStartController',{
	extend : 'TheOpenDoor.controller.BaseController',
	requires: [
    ],
	config : {
        refs:{
            slideNavigator: 'SlideNavigator',
            dateTimeView: 'DateTimeView',
            baseNavigationView: 'BaseNavigationView',
            myNavView: 'MyNavView',
            dateTimeViewBackButton: 'DateTimeView [itemId=headerPanel] button[itemId=backButtonId]',

        },

        control:{
            dateTimeView:{
                initialize: 'handledateTimeViewInit'
            },
            dateTimeViewBackButton:{
            	tap: 'handleDateTimeViewBackButtonTap'
            }
        },
	},

	handledateTimeViewInit: function(){

	},
	handleDateTimeViewBackButtonTap: function(){
		alert("HI");
		this.getBaseNavigationView().onNavBack();
	}
});
