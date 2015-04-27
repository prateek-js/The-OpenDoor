
Ext.define('TheOpenDoor.controller.LoginController',{
	extend : 'TheOpenDoor.controller.BaseController',
	requires: [
    ],
	config : {
        userProfile: '',
        refs:{
            loginView: 'LoginView',
            googleBtnContainer : 'LoginView container[itemId = googleBtnContainer]',
            slideNavigator: 'SlideNavigator',
            dashboardView: 'DashboardView',
        },

        control:{
            slideNavigator:{
                logoutyes: 'handleLogoutYes',
                logoutno: 'handleLogoutNo'
            },
        },
	},

    handleSignInSucess: function(){
        var loginView = this.getLoginView();
        if(loginView){
            Ext.Viewport.remove(loginView, true);
        }
        this.addToViewPort({
            xtype : 'DashboardView'
        },true);
    },

    handleGoogleSignIn: function() {
        window.plugins.googleplus.login(
            {
              'iOSApiKey': '370422909165-4sr8egh09qdm62av5sh2npmi3emb076i.apps.googleusercontent.com'
            },
            function (obj) {
                console.log(obj);
            },
            function (obj1){
                console.log(obj1);
            }
        )
    },
    handleLogoutYes: function() {
        window.plugins.googleplus.logout(
            function (msg) {
                
            }
        );
        this.disconnect();
        this.isloggedIn = false;
        localStorage.removeItem('loggedInFlag');
        localStorage.setItem('loggedInFlag', this.isloggedIn);
        var slideNavigator = this.getSlideNavigator();
        if(slideNavigator){
            Ext.Viewport.remove(slideNavigator, true);
        }
        this.addToViewPort({
            xtype : 'LoginView'
        },true);
    },

    handleLogoutNo: function(){
        return false;
    },
    
    disconnect: function() {
        window.plugins.googleplus.disconnect(
            function (msg) {
            
            }
        );
    }

});
