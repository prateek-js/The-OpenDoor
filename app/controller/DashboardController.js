
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
            mobileNumberField : 'DashboardView [itemId =mobileNumberField]',
            saveButton: 'DashboardView button[itemId = saveButton]',
            emailField: 'DashboardView [itemId = emailFieldId]',
            nameField: 'DashboardView [itemId = nameField]',
            mobileNumberField: 'DashboardView [itemId = mobileNumberField]',
            addresslineOne: 'DashboardView [itemId = addresslineOne]',
            addresslineTwo: 'DashboardView [itemId = addresslineTwo]',
            pinField: 'DashboardView [itemId = pinField]',
            landmarkField: 'DashboardView [itemId = landmarkField]'
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
        this.getEmailField().setValue(userEmail);
        this.getNameField().setValue(userName);
    },

    handleSaveButtonTap: function(){
        this.isloggedIn = true;
        localStorage.removeItem('loggedInFlag');
        localStorage.setItem('loggedInFlag', this.isloggedIn);
        var dashboardData = {};
        var dashboardAddressData = {};
        dashboardAddressData.line1 = this.getAddresslineOne().getValue();
        dashboardAddressData.line2 = this.getAddresslineTwo().getValue();
        dashboardAddressData.landmark = this.getLandmarkField().getValue();
        dashboardAddressData.city = "Bangalore"
        dashboardAddressData.state = "Karnataka";
        dashboardAddressData.country = "India";
        dashboardAddressData.phone_number = this.getMobileNumberField().getValue();
        dashboardAddressData.pincode = this.getPinField().getValue();
        dashboardAddressData.name = this.getNameField().getValue();
        dashboardData.address = dashboardAddressData;
        dashboardData.email = this.getEmailField().getValue();
        dashboardData.gender = userGender;
       
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
