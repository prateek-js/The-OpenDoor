
Ext.define('TheOpenDoor.controller.OrderController',{
	extend : 'TheOpenDoor.controller.BaseController',
	requires: [
    ],
	config : {
        refs:{
            slideNavigator: 'SlideNavigator',
            dashboardView: 'DashboardView',
            orderPageView: 'OrderPageView',
            dateTimeView: 'DateTimeView',
            orderBtn: 'OrderPageView button[itemId = orderBtn]'
        },

        control:{
            orderBtn:{
                tap: 'handleOrderBtnTap'
            }
        },
	},

    handleOrderBtnTap: function(){
        var slideNavigator = this.getSlideNavigator();    
        if(slideNavigator){
            Ext.Viewport.remove(slideNavigator, true);
        }
        this.addToViewPort({
            xtype : 'DateTimeView'
        },true);
    }
});
