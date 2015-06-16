Ext.define('TheOpenDoor.view.phone.AllOrderView',{
	extend : 'Ext.Container',
	requires : ['Ext.dataview.List'],
	config : {
		layout : {
			type : 'vbox'
		},
		cls : ['view-all-orders'],
		items: [{
            xtype: 'list',
			itemId: 'allMyBillsListId',
			emptyText: '<div class="listEmptyMyBillsText">'+localeString.norecordsfound+'</div>',
			store:'GetAllOrderStore',
			itemTpl: '<div class="billsListItem"><span class="monthYear">{order_id}</span><span class="amount">{slot_start_time}</span><span class="arrowicon"><img src="resources/images/icons/backIcon@2x.png"/></span></div>',
			flex: 5,
			cls : [ 'mybills-allMybillsSection-container']
		}]
	}
});