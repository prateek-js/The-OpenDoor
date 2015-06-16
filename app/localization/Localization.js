/**
 * Singleton Class that will return the corresponding locale object based on 
 * locale language configuration.
 */
Ext.define('TheOpenDoor.localization.Localization', {
    singleton: true,
    alternateClassName : 'localeString',
    
    requires: [
        'TheOpenDoor.localization.LocaleAbstract',
        'TheOpenDoor.localization.LocaleEnglish',
        'TheOpenDoor.helper.AppSetting'
    ],
    /**
     * constructor
     * @returns {Object} locale object
     */
    constructor: function() {
    	//get locale value from URL if available, else get the default one from AppSetting
    	var urlLocale = getLangParamFromURL(), locale = '', localeObj = null;
    	if(!urlLocale){
    		locale = AppSetting.getAppLocaleLang();
    	}else{
    		locale = urlLocale;
    	}

        switch(locale){
        	case 'en':
        		localeObj = Ext.create('TheOpenDoor.localization.LocaleEnglish');
        		break;
        	default:
        		localeObj = Ext.create('TheOpenDoor.localization.LocaleEnglish');
        }
        return localeObj;        
    }
});