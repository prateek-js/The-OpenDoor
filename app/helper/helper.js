/**
 *@ ##Helper.js
 *
 *
 */
var LRM_TAG='&lrm;';
var ENABLE_SPINNER_DELAY;
var SPINNER_DELAY=500;

//tokens for google plus
var clientId = '370422909165-ti8c5r7kgnbkopm9ammp3cacibq694vi.apps.googleusercontent.com';
var apiKey = 'AIzaSyB4T96US-jRIiHUqj5LksZY6R_Fl4MsCy0';
var scopes = 'https://www.googleapis.com/auth/plus.me';
var authResponse = '';
var userName = '';
var userEmail = '';
//function for google plus

// Use a button to handle authentication the first time.
    // function handleClientLoad() {
       
    //     alert("handleClientLoad");
    //     gapi.client.setApiKey(apiKey);
    //     window.setTimeout(checkAuth,1);
    //     //this.isAvailable();
    // }

    // function isAvailable() {
    //     window.plugins.googleplus.isAvailable(function(avail) {alert(avail)});
    // }

    // function checkAuth() {
    //     alert("checkAuth");
    //     gapi.auth.authorize({client_id: '370422909165', scope: scopes, immediate: true}, handleAuthResult);
    // }
    function handleAuthResult(authResult) {
          authResponse = authResult;
          this.userDetails(authResult);
          TheOpenDoor.app.getController('TheOpenDoor.controller.LoginController').handleSignInSucess();
    }
    function userDetails(authResult){
        userName = authResult.displayName;
        userEmail = authResult.email;
        var displayImage = authResult.imageUrl;
        var userGender = authResult.gender;
    }
    // function handleAuthClick(event) {
    //     alert(event);
    //     gapi.auth.authorize({client_id: 'AIzaSyB4T96US-jRIiHUqj5LksZY6R_Fl4MsCy0', scope: scopes, immediate: false}, handleAuthResult);
    //     return false;
    // }
    // Load the API and make an API call.  Display the results on the screen.
    // function makeApiCall() {
    //     gapi.client.load('plus', 'v1', function() {
    //         var request = gapi.client.plus.people.get({
    //             'userId': 'me'
    //         });
    //         request.execute(function(resp) {
    //             console.log(resp);
    //             // var heading = document.createElement('h4');
    //             // var image = document.createElement('img');
    //             // image.src = resp.image.url;
    //             // heading.appendChild(image);
    //             // heading.appendChild(document.createTextNode(resp.displayName));
    //             // document.getElementById('content').appendChild(heading);
    //         });
    //     });
    // }
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
/*@method okTapped
* method handler for OK button tap in alert message of failure
* @param buttonId
* @param msgBox
* Navigates back to the previous tab if ok button is tapped froma failure message alert
*/
function okTapped(buttonId, opts, msgBox){ 
        var tabPanel = Ext.ComponentQuery.query('TabPanelView')[0];
        if(tabPanel !== undefined)
        	tabPanel.getTabBar().setActiveTab(tabPanel.getPreviousTab());
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
