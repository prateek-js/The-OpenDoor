Ext.define('TheOpenDoor.controller.ProfileController',{
	extend : 'TheOpenDoor.controller.BaseController',
	requires: [
    ],
	config : {
        refs:{
            profileView: 'ProfileView',
            slideNavigator: 'SlideNavigator',
            mobileNumberProfileField : 'ProfileView [itemId =mobileNumberProfileField]',
            saveProfileButton: 'ProfileView button[itemId = saveProfileButton]',
            emailProfileField: 'ProfileView [itemId = emailProfileFieldId]',
            nameProfileField: 'ProfileView [itemId = nameProfileField]'
        },

        control:{
            profileView:{
                initialize: 'handleProfileViewInit'
            },
            saveProfileButton:{
                tap: 'handleSaveProfileButtonTap'
            }
        },
	},

    handleProfileViewInit: function(){
        
    },

    handleSaveProfileButtonTap: function(){
        showSpinner(localeString.loading);
        
        var dashboardAddressData = {};
        dashboardAddressData.phone_number = this.getMobileNumberField().getValue();
        dashboardAddressData.name = this.getNameField().getValue();
        dashboardAddressData.email = this.getEmailField().getValue();
        var dashboardStore = Ext.getStore('DashboardStore');
        dashboardStore.addToStore(dashboardAddressData);      
        Ext.Ajax.request({
            url: 'stubs/dashboard.json',
            method: 'PUT',          
            headers: {'Content-Type': 'text/json'},
            waitTitle: 'Connecting',
            waitMsg: 'Sending data...',                                     
            params: Ext.JSON.encode({
                "phone_number": dashboardAddressData.phone_number,
                "name": dashboardAddressData.name,
                "email": dashboardAddressData.email
            }),
            scope:this,
            success : function(responseObj) {
                try{
                    var decodedObj = (responseObj.responseText && responseObj.responseText.length) ?  Ext.decode (responseObj.responseText) : null;
                    if (Ext.isObject(decodedObj)) {
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
                    }
                }catch(e){
                    var errorText = localeString.errorMsg_defaultFailure;
                    hideSpinner();
                    //Display Error Message
                    showErrorDialog(false, false, errorText);
                }
                hideSpinner();
            },                                    
            failure : function(responseObj) {
                // var respObj = Ext.JSON.decode(response.responseText);
                // Ext.Msg.alert("Error", respObj.status.statusMessage);
                var decodedObj = (responseObj.statusText);
                errorHandled = this.genericErrorCheck(responseObj, false);
                if(!errorHandled){
                    var errorText = "Error";
                    AppMessage.showMessageBox(4,null,null,localeString.errorInGettingResponse);
                    hideSpinner();
                }
                hideSpinner();
            }     
        });
    }
});
