
Ext.define('TheOpenDoor.controller.DashboardController',{
	extend : 'TheOpenDoor.controller.BaseController',
	requires: [
        'TheOpenDoor.businessObject.DashboardBO'
    ],
	config : {
        userProfile: '',
        dashboardBO: 'TheOpenDoor.businessObject.DashboardBO',
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

    applyDashboardBO: function(boName) {
        return Ext.create(boName, this);
    },

    handleDashboardViewInit: function(){
        this.getEmailField().setValue(userEmail);
        this.getNameField().setValue(userName);
    },

    handleSaveButtonTap: function(){
        showSpinner(localeString.loading);
        
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
        
        var me = this;
        successCb = this.handleAddAddressSucess,
        failureCb = this.handleAddAddressFailure;
        this.getDashboardBO().doDashboard(dashboardAddressData, successCb, failureCb);
      
        // Ext.Ajax.request({
        //     url: 'stubs/dashboard.json',
        //     method: 'POST',          
        //     headers: {'Content-Type': 'text/json'},
        //     waitTitle: 'Connecting',
        //     waitMsg: 'Sending data...',                                     
        //     params: {
        //         "rolename" : rolename
        //     },
        //     scope:this,
        //     success: received,                                    
        //     failure: function(){console.log('failure');}
        // });
    },

    handleAddAddressSucess: function(){
        this.isloggedIn = true;
        localStorage.removeItem('loggedInFlag');
        localStorage.setItem('loggedInFlag', this.isloggedIn);
        var dashboardView = this.getDashboardView();
        if(dashboardView){
            Ext.Viewport.remove(dashboardView, true);
        }
        this.addToViewPort({
            xtype : 'SlideNavigator'
        },true);
        hideSpinner();
    },

    handleAddAddressFailure: function(errObj, noInternetConnection, errMsg){
        hideSpinner();
    }
});
