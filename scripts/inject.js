(function() {
	try {
        var l = window.location.toString();
        if(l.startsWith("discord:///invite") || l.includes("discord.com/invite")) {
		    var _ = document.createElement('script');
		    _.src = chrome.extension.getURL('scripts/disable.js');
		    (document.head || document.documentElement).appendChild(_);
		    _.onload = function() {
		    	_.parentNode.removeChild(_);
		    };
        }
	} catch{}
})();
