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
			timeArray=[],
			stringArray,
            timePicker = this,
			pickerCls=config.pickerCls,
			pickerHeight=config.pickerHeight;

        this.picker = Ext.create("Ext.Picker", {
            hidden: true,
            zIndex: 9999,
			cls:pickerCls,
			height:pickerHeight,
			useTitles: true,
			hideOnMaskTap:true,
			showAnimation:'',
			hideAnimation:'',
			id:'timeCustomPicker',
    		slots : [{
	             name:'time',
	             store: Ext.getStore('TimeStore'),
	             displayField: 'start_time',
	             valueField:'start_time',
	             align:'center',
	             title: 'Time'
    		}],

            listeners: {
				
				painted:function(){
					var value=timePicker.getValue();
					this.setValue(value);
				},
                change: function (picker, values) {
                	
					timePicker.setValue(values.time);

                }
            }
        });
		
		var viewportPicker=Ext.Viewport.add(this.picker); 
		config.picker=viewportPicker;
		var me=this;
        this.callParent(arguments);
    }
});