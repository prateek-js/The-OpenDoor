
Ext.define('TheOpenDoor.controller.MainController',{
	extend : 'TheOpenDoor.controller.BaseController',
	requires: [
	   'Ext.fx.easing.EaseOut',
        'Ext.carousel.Item',
        'Ext.carousel.Indicator',
        'Ext.carousel.Carousel'
    ],
	config : {
        refs:{
            carouselContainer : 'Main carousel[itemId = carouselContainer]',
            mainContinueButton : 'Main button[itemId = mainContinueButton]',
            loginView: 'LoginView',
            mainView : 'Main'
        },

        control:{
            mainContinueButton : {
                tap: 'handleContinueButtonTap'
            }
        },

	},
    handleLoginViewInit: function(){
        var loginView = this.getLoginView();
        var mainView = this.getMainView();
        this.addToViewPort({
            xtype : 'LoginView'
        },true);
        Ext.Viewport.remove(mainView, true);
    }
});
