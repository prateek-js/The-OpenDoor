
Ext.define('TheOpenDoor.businessObject.LoginBO', {
	extend: 'TheOpenDoor.businessObject.BaseBO',
	requires: [
	           'Ext.Ajax'
	     ],

	controllerObj: null,
	successCb: null,
	failureCb: null,
	inputDetails: null,

	constructor: function (cObj) {
		if (Ext.isDefined (cObj)) {
			this.controllerObj = cObj;
		}
		return this;
	},

});
