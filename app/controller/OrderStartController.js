Ext.define('TheOpenDoor.controller.OrderStartController',{
	extend : 'TheOpenDoor.controller.BaseController',
	requires: [
        'TheOpenDoor.businessObject.DateTimeBO'
    ],
	config : {
        dateTimeBO: 'TheOpenDoor.businessObject.DateTimeBO',
        refs:{
            slideNavigator: 'SlideNavigator',
            dateTimeView: 'DateTimeView',
            baseNavigationView: 'BaseNavigationView',
            myNavView: 'MyNavView',
            dateTimeViewBackButton: 'DateTimeView [itemId=headerPanel] button[itemId=backButtonId]',
            timePickerId: '[itemId=timePickerId]',
            datePickerId: '[itemId=datePickerId]'
        },

        control:{
            dateTimeView:{
                initialize: 'handledateTimeViewInit'
            },
            dateTimeViewBackButton:{
            	tap: 'handleDateTimeViewBackButtonTap'
            },
            datePickerId:{
                change:'showTimeFieldHandle'
            }
        },
	},

    applyDateTimeBO: function(boName) {
        return Ext.create(boName, this);
    },
	handledateTimeViewInit: function(){
        var me = this;
        successCb = this.handleGetServicesSucess,
        failureCb = this.handleGetServicesFailure;
        this.getDateTimeBO().doGetDateTime(successCb, failureCb);
	},
	handleDateTimeViewBackButtonTap: function(){
		this.getBaseNavigationView().onNavBack();
	},
    showTimeFieldHandle: function(){
        this.getTimePickerId().setHidden(false);
    }
});
