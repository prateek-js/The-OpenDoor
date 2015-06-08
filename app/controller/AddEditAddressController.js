
Ext.define('TheOpenDoor.controller.AddEditAddressController',{
	extend : 'TheOpenDoor.controller.BaseController',
	requires: [
        'TheOpenDoor.businessObject.GetAddressBO'
    ],
	config : {
        addressIdSelected: '',
        addressToEdit: '',
        clickedAddressId: '',
        btnRef : '',
        addressBO: 'TheOpenDoor.businessObject.GetAddressBO',
        addEditAddressBO: 'TheOpenDoor.businessObject.AddEditAddressBO',
        refs:{
            addressOrderService: 'AddressOrderService',
            baseNavigationView: 'BaseNavigationView',
            addressView: 'AddressView',
            addEditAddress : 'AddEditAddress',
            addressBackButton: 'AddressOrderService [itemId=headerPanel] button[itemId=backButtonId]',
            addressNextButton: 'AddressOrderService [itemId=headerPanel] button[itemId=nextButtonId]',
            addressEditCancelButton: 'AddEditAddress button[itemId=cancelButtonId]',
            addressEditSaveButton : 'AddEditAddress button[itemId=saveButtonId]',
            nameField : 'AddEditAddress [itemId=nameField]',
            addresslineOne : 'AddEditAddress [itemId=addresslineOne]',
            addresslineTwo : 'AddEditAddress [itemId=addresslineTwo]',
            landmarkField : 'AddEditAddress [itemId=landmarkField]',
            pinField : 'AddEditAddress [itemId=pinField]',
            mobileNumberField : 'AddEditAddress [itemId=mobileNumberField]',
            addNewAddressBtn: 'AddressOrderService [itemId=addNewAddressBtn]',
            addEditAddressLabel: 'AddEditAddress [itemId=addEditAddressLabel]'
        },

        control:{
             addressOrderService:{
                initialize: 'handleAddressOrderServiceInit'
            },
            addressBackButton:{
                tap: 'handleAddressBackButtonTap'
            },
            addressView:{
                itemtap:'addressViewDataItemTap'
            },
            addressNextButton:{
                tap : 'handleAddressNextButton'
            },
            addressEditCancelButton:{
                tap : 'handleAddressBackButtonTap'
            },
            addressEditSaveButton:{
                tap : 'handleAddressEditSaveButtonTap'
            },
            addEditAddress : {
                initialize : 'handleAddEditAddressInit'
            },
            addNewAddressBtn: {
                tap: 'handleAddEditAddress'
            }
        },
	},
    
    applyAddressBO: function(boName) {
        return Ext.create(boName, this);
    },
    applyAddEditAddressBO: function(boName) {
        return Ext.create(boName, this);
    },

    handleAddressOrderServiceInit: function(){
        var me = this;
        successCb = this.handleGetAddressSucess,
        failureCb = this.handleGetAddressFailure;
        this.getAddressBO().doGetAddress(successCb, failureCb);
    },
    handleGetAddressSucess: function(){
        hideSpinner();
    },
    handleGetAddressFailure: function(){
        hideSpinner();
    },
    handleAddressBackButtonTap: function(){
        this.getBaseNavigationView().onNavBack();
    },
    addressViewDataItemTap:function(dataview,index,dataitem){
        btnRef = this.getAddressView().down('#addressItemCnt').getBtnRef();
        clickedAddressId = dataitem.getRecord().getData().id;
        if(btnRef=="edit"){
            //open edit and add address field
            addressToEdit = dataitem.getRecord().getData();
            this.getBaseNavigationView().pushtoNavigationView('AddEditAddress');
            this.getAddEditAddressLabel().setHtml("Edit Existing Address");          
        }
        else if(btnRef=="delete"){
            //send data to server and refresh the view
        }
        else if(btnRef=="radio"){
            //keep the address id of clicked one
            this.addressIdSelected = clickedAddressId;
        }
        else if(btnRef==""|| btnRef==" "|| btnRef== null){

        }
    },
    handleAddressNextButton: function(){
        if(this.addressIdSelected == "" ||this.addressIdSelected == null||this.addressIdSelected == " "|| this.addressIdSelected == undefined){
            //goto next view
            alert("no address selected")
        }
        else{
            //tell user to select the address
           alert("id is selected" +this.addressIdSelected);
        }
    },
    handleAddEditAddressInit: function(){
        if(btnRef == "edit"){
            this.getNameField().setValue(addressToEdit.name);
            this.getAddresslineOne().setValue(addressToEdit.line1);
            this.getAddresslineTwo().setValue(addressToEdit.line2);
            this.getLandmarkField().setValue(addressToEdit.landmark);
            this.getPinField().setValue(addressToEdit.pincode);
            this.getMobileNumberField().setValue(addressToEdit.phone_number);
        }
        else{
            //else if open view blank
            this.getNameField().setValue();
            this.getAddresslineOne().setValue();
            this.getAddresslineTwo().setValue();
            this.getLandmarkField().setValue();
            this.getPinField().setValue();
            this.getMobileNumberField().setValue();
        }
    },
    handleAddEditAddress: function(){
        btnRef = null;
        clickedAddressId = null;
        this.getBaseNavigationView().pushtoNavigationView('AddEditAddress');
        this.getAddEditAddressLabel().setHtml("Add New Address");
    },
    handleAddressEditSaveButtonTap: function(){
            var newdAddressData = {};
            if(btnRef == "edit"){
                newdAddressData.id = clickedAddressId;
            }
            else{
                newdAddressData.id = null;
            }
            newdAddressData.newName = this.getNameField().getValue();
            newdAddressData.newLine1 = this.getAddresslineOne().getValue();
            newdAddressData.newLine2 = this.getAddresslineTwo().getValue();
            newdAddressData.newLandmark = this.getLandmarkField().getValue();
            newdAddressData.newPin = this.getPinField().getValue();
            newdAddressData.newNumber = this.getMobileNumberField().getValue();
            newdAddressData.city = "Bangalore"
            newdAddressData.state = "Karnataka";
            newdAddressData.country = "India";
            console.log(newdAddressData);
            this.getBaseNavigationView().onNavBack();

            // var me = this;
            // successCb = this.handleAddEditAddressSaveSucess,
            // failureCb = this.handleAddEditAddressSaveFailure;
            // this.getAddressBO().updateAddress(newdAddressData,successCb, failureCb);

            Ext.Ajax.request({
            url: 'stubs/getAddress.json',
            method: 'PUT',          
            headers: {'Content-Type': 'text/json'},
            waitTitle: 'Connecting',
            waitMsg: 'Sending data...',                                     
            params: {
                "id": newdAddressData.id,
                "line1": newdAddressData.line1,
                "line2": newdAddressData.line2,
                "landmark": newdAddressData.landmark,
                "city": newdAddressData.city,
                "state": newdAddressData.state,
                "country": newdAddressData.country,
                "phone_number": newdAddressData.phone_number,
                "pincode": newdAddressData.pincode,
                "name": newdAddressData.name
            },
            scope:this,
            success: this.handleAddEditAddressSuccess,                                    
            failure: this.handleAddEditAddressFailure        
        });
    },

    handleAddEditAddressSuccess: function(responseObj, opts){
        try{
            var decodedObj = (responseObj.responseText && responseObj.responseText.length) ?  Ext.decode (responseObj.responseText) : null;
            if (Ext.isObject(decodedObj)) {
                this.handleAddressOrderServiceInit();
                hideSpinner();
                        
            }else
            {
                var errorText = localeString.errorMsg_invalid_userId_password;
                this.invokeCb (this.failureCb, [null, false, false, errorText]);
            }
        }catch(e){
            var errorText = localeString.errorMsg_defaultFailure;
            hideSpinner();
            //Display Error Message
            showErrorDialog(false, false, errorText);
        }
    },
    handleAddEditAddressFailure: function(errObj, noInternetConnection, errMsg){
        hideSpinner();
    }
    
});
