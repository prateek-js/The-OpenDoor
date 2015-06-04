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
            dateTimeViewNextButton: 'DateTimeView [itemId=headerPanel] button[itemId=nextButtonId]',
            timePickerId: '[itemId=timePickerId]',
            datePickerId: '[itemId=datePickerId]',
            timePickerContainer : '[itemId=timePickerContainer]'
        },

        control:{
            dateTimeView:{
                initialize: 'handledateTimeViewInit'
            },
            dateTimeViewBackButton:{
            	tap: 'handleDateTimeViewBackButtonTap'
            },
            dateTimeViewNextButton:{
                tap: 'handleDateTimeViewNextButtonTap'
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
    handleDateTimeViewNextButtonTap: function(){
        if(this.getDatePickerId().getValue()!= "" && this.getTimePickerId().getValue()!= ""){
           this.getBaseNavigationView().pushtoNavigationView('AddressOrderService'); 
        }
        else{
            alert("Pls select date and time");
        }
        
    },
    showTimeFieldHandle: function(){
        this.getTimePickerContainer().setHidden(false);
    }
});
