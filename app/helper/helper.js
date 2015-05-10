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

/**
    * @method handleAuthResult
    * @param {authResult}
    * sucess handler from google 
*/
function handleAuthResult(authResult) {
    this.userDetails(authResult);
    TheOpenDoor.app.getController('TheOpenDoor.controller.LoginController').handleSignInSucess();
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
