Ext.define("TheOpenDoor.view.component.TimePicker", {
    extend: "Ext.field.Text",
    xtype: "timepickerfield",
	config:{
			value:'',
			picker:'',
			readOnly:true,
			allowTap:true,
			listeners:{
				element:'element',
				tap:function(me, e, eOpts){
					if(this.getAllowTap()){
					 this.getPicker().showBy(this,'tr-br?');
					}
					
				}
				
			}
	},
    constructor: function (config) {

        var i,
            stringVal,
			hoursArray=[],
			minuteArray=[],
			meridianArray=[{
                text: "AM",
                value: "AM"
            },{
                text:"PM",
                value: "PM"
            }],
			stringArray,
            timePicker = this,

            minuteincrement = parseInt(config.minuteincrement, 10) || 15,
			pickerCls=config.pickerCls,
			pickerHeight=config.pickerHeight;

	for (i = 1; i <=12; i++) {
            var text;
            text = (i < 10) ? ('0' + i) : i; //Add leading zero
            hoursArray.push({text:i, value:text});
        }
		for (var j = 0; j < 60; j += minuteincrement) {
            var textValue;
            textValue = (j < 10) ? ('0' + j) : j; //Add leading zero
            minuteArray.push({text:textValue, value:textValue});
        }

        this.picker = Ext.create("Ext.Picker", {
            hidden: true,
            zIndex: 9999,
			cls:pickerCls,
			height:pickerHeight,
			useTitles: true,
			hideOnMaskTap:true,
			showAnimation:'',
			hideAnimation:'',
            slots: [{
                name: "hour",
                title: "Hour",
                data: hoursArray
            },{
                name: "minute",
                title: "Minute",
                data: minuteArray
            },{
                name: "meridian",
                title: "AM/PM",
                data: meridianArray
            }],

            listeners: {
				
				painted:function(){
					var value=timePicker.getValue();
					var time=value.split(' ');
					var meridian=time[1];
					var timeArray=time[0].split(':'); 
					var minute=parseInt(timeArray[1]);
					var hour=parseInt(timeArray[0])<10?'0'+parseInt(timeArray[0]):parseInt(timeArray[0]);
					var dateObj={
						hour:hour,
						minute:minute,
						meridian:meridian
					};
					this.setValue(dateObj);
				},
                change: function (picker, values) {
				
                    if (values ) {
						var timeValue=""+values.hour+":"+values.minute+" "+values.meridian;
                        timePicker.setValue(timeValue);
                    } else {
                        timePicker.setValue(values);
                    }
                }
            }
        });
		
		var viewportPicker=Ext.Viewport.add(this.picker); 
		config.picker=viewportPicker;
		var me=this;
        this.callParent(arguments);
    }
});