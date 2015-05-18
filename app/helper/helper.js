/**
 *@ ##Helper.js
 *
 *
 */
var LRM_TAG='&lrm;';
var ENABLE_SPINNER_DELAY;
var SPINNER_DELAY=500;


var userName = '';
var userEmail = '';
var userGender = '';
var isloggedIn = '';
var user_Id = 'abc';
var serviceIdSelected = '';
/**
    * @method handleAuthResult
    * @param {authResult}
    * sucess handler from google 
*/
function handleAuthResult(authResult) {
    this.userDetails(authResult);
    TheOpenDoor.app.getController('TheOpenDoor.controller.LoginController').handleSignInDataSend(authResult);
}
/**
    * @method userDetails
    * @param {authResult}
    * details from google
*/
function userDetails(authResult){
    userName = authResult.displayName;
    userEmail = authResult.email;
    var displayImage = authResult.imageUrl;
    userGender = authResult.gender;
}

/**
 * @method showSpinner
 * show loading spinner
 * @param {String} msg The loading message.
 */
function showSpinner(msg) {
    function doShowSpinner(msg) {
    	var messageToDisplay;
    	if (msg === 'undefined' || msg === null){
    		messageToDisplay = 'Loading';
    	} else {
    		messageToDisplay = msg;
    	}
        Ext.Viewport.setMasked({
            xtype : 'loadmask',
            message : messageToDisplay,
            indicator : true,
            zIndex : 2000
        });
    }
    
    // JN: For Android a certain delay is enforced to allow the keyboard to be dismissed before the loading view kicks in
    if (ENABLE_SPINNER_DELAY ==='undefined'){
        ENABLE_SPINNER_DELAY = Ext.os.is.Android;        
    }
    if(ENABLE_SPINNER_DELAY) {
        Ext.defer(function(){
            doShowSpinner(msg); 
        },SPINNER_DELAY);
    } else {
        doShowSpinner(msg);
    }
}
/**
 * check for internet connection
 * @returns {boolean} 
 */
function isOnLine() {
    if(Ext.device.Connection !== undefined)
        return Ext.device.Connection.isOnline();   
    else return navigator.onLine;       
}

/**
 * hide loading spinner
 */
function hideSpinner() {
	//console.log('hideSpinner');
    // JN: The delay is also enforced on the hiding of the mask to avoid situation where the mask is hidden before it is shown (due to the delay) 
    if(ENABLE_SPINNER_DELAY) {
        Ext.defer(function(){
            Ext.Viewport.setMasked(false); 
        },SPINNER_DELAY);
    } else {
        Ext.Viewport.setMasked(false);
    }
}

/**
 * Display the Error popup dialog
 * @param errMsg
 * @param sessionTimeout
 * @param noInternetConnection
 * @param redirectToLogin
 */
function showErrorDialog(errMsg, redirectToLogin,noInternetConnection){
    var alertMsg = '';
    if(typeof redirectToLogin === "undefined"){
        redirectToLogin = false;
    }
    if(typeof noInternetConnection == "undefined"){
        noInternetConnection = false;
    }

    if(typeof errMsg !== "undefined" && errMsg !==''){
            //param errMsg message
            alertMsg = errMsg;
        }/*else if(noInternetConnection){
        alertMsg = localeString.errorMsg_noInternetConnection;
        redirectToLogin = true;
    }else if(sessionTimeout){
        alertMsg = localeString.session_timeout_error;
        redirectToLogin = true;
    }*/else{
        //default error message
        alertMsg = localeString.errorGenericMessage;
    }
    
    Ext.Msg.show({
        title: '',
        message: alertMsg,
        buttons: Ext.MessageBox.OK,
        cls: 'confirmation_box',
    });
    
}

/**
 * Native Android Back Button event handler
 * @param {Object} e event object 
 * @returns {Boolean}
 */
function onNativeBackKeyDown(e) {
      Ext.Msg.show({
            title: 'Exit',
            message: localeString.appExitErrorMessage,
            buttons: [{
                text: 'NO',
                ui: 'null'
            },{
                html: '<b>YES</b>',
                ui: 'null',
                text: 'YES'
            }],
            fn: function(buttonId) {
                buttonId = buttonId.toLowerCase();
                if(buttonId === 'no'){
                    //do nothing
                }else{
                    navigator.app.exitApp();
                }
            }
       });

      e.preventDefault();
      e.stopPropagation();
      return false;
}
