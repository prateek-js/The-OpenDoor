
Ext.define('TheOpenDoor.controller.DashboardController',{
	extend : 'TheOpenDoor.controller.BaseController',
	requires: [
    ],
	config : {
        userProfile: '',
        refs:{
            dashboardView: 'DashboardView',
            slideNavigator: 'SlideNavigator',
            emailFieldId : 'DashboardView [itemId=emailFieldId]',
            mobileNumberField : 'DashboardView [itemId =mobileNumberField]'
        },

        control:{
            dashboardView:{
                initialize: 'handleDashboardViewInit'
            }
        },
	},

    handleDashboardViewInit: function(){
        this.getEmailFieldId().setValue(userEmail);
    },
    logout: function() {
        window.plugins.googleplus.logout(
            function (msg) {
                
            }
        );
    }

});
