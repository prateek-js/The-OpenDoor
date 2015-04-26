
Ext.define('TheOpenDoor.controller.DashboardController',{
	extend : 'TheOpenDoor.controller.BaseController',
	requires: [
    ],
	config : {
        userProfile: '',
        refs:{
            dashboardView: 'DashboardView',
            slideNavigator: 'SlideNavigator',
            orderPageView: 'OrderPageView',
            emailFieldId : 'DashboardView [itemId=emailFieldId]',
            mobileNumberField : 'DashboardView [itemId =mobileNumberField]',
            saveButton: 'DashboardView button[itemId = saveButton]',
            emailField: 'DashboardView [itemId = emailFieldId]',
            mobileNumberField: 'DashboardView [itemId = mobileNumberField]',
            addresslineOne: 'DashboardView [itemId = addresslineOne]',
            addresslineTwo: 'DashboardView [itemId = addresslineTwo]',
            cityField: 'DashboardView [itemId = cityField]',
            stateField: 'DashboardView [itemId = stateField]',
            pinField: 'DashboardView [itemId = pinField]'
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
    },

    handleSaveButtonTap: function(){
        this.isloggedIn = true;
        localStorage.removeItem('loggedInFlag');
        localStorage.setItem('loggedInFlag', this.isloggedIn);
        var dashboardData = {};
        dashboardData.email = this.getEmailField().getValue();
        dashboardData.mobileNumberField = this.getMobileNumberField().getValue();
        dashboardData.addresslineOne = this.getAddresslineOne().getValue();
        dashboardData.addresslineTwo = this.getAddresslineTwo().getValue();
        dashboardData.cityField = this.getCityField().getValue();
        dashboardData.stateField = this.getStateField().getValue();
        dashboardData.pinField = this.getPinField().getValue();
        var dashboardStore = Ext.getStore('DashboardStore'); 
        dashboardStore.addToStore(dashboardData);
        var dashboardView = this.getDashboardView();    
        if(dashboardView){
            Ext.Viewport.remove(dashboardView, true);
        }
        this.addToViewPort({
            xtype : 'SlideNavigator'
        },true);
    }
});
