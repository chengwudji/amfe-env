;
(function(window, lib) {
    lib.env = lib.env || {};
    
    if(window.navigator.userAgent.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/)) {
        lib.env.browser = {
            name:"UC",
            version:RegExp.$1
        }
    }
    else if(window.navigator.userAgent.match(/MQQBrowser\/([\d\.]+)/)) {

        lib.env.browser = {
            name:"QQ",
            version:RegExp.$1
        }
    }
    else if((!window.navigator.userAgent.match(/Version\//) || !window.navigator.userAgent.match(/Android/) ) 
        && window.navigator.userAgent.match(/Chrome\/([\d\.]+)/)) {
        lib.env.browser = {
            name:"Chrome",
            version:RegExp.$1
        }
    }
    else if(window.navigator.userAgent.match(/Mobile Safari/) && window.navigator.userAgent.match(/Android ([\d\.]+)/)) {
        lib.env.browser = {
            name:"Android",
            version:RegExp.$1
        }
    }
    else if(window.navigator.userAgent.match(/iPhone|iPad|iPod/)) {
        if(window.navigator.userAgent.match(/Safari/)) {
            window.navigator.userAgent.match(/Version\/([\d\.]+)/)
            lib.env.browser = {
                name:"Safari",
                version:RegExp.$1
            }
        }
        else {
            window.navigator.userAgent.match(/OS ([\d_]+) like Mac OS X/);
            lib.env.browser = {
                name:"iOS Webview",
                version:RegExp.$1.split("_").join(".")
            }
        }
    }
    else {
        lib.env.browser = {
            name:"unknown",
            version:"0.0"
        }
    }
    
    if(lib.version ) {
        var Version = lib.version();
        lib.env.browser.version = new Version(lib.env.browser.version);
    }
    
})(window, window['lib'] || (window['lib'] = {}));