
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
            mobileNumberField : 'DashboardView [itemId =mobileNumberField]',
            saveButton: 'DashboardView button[itemId = saveButton]'
        },

        control:{
            dashboardView:{
                initialize: 'handleDashboardViewInit'
            },
            saveButton:{
                tap: 'handleSaveButtonTap'
            }
        },
	},

    handleDashboardViewInit: function(){
        this.getEmailFieldId().setValue(userEmail);
    }

});
