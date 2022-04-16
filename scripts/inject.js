(function() {
	try {
        var l = window.location.toString();
        if(l.startsWith("discord:///invite") || l.includes("discord.com/invite")) {
			var _ = document.createElement('script');
		    _.src = chrome.runtime.getURL('scripts/disable.js');
			console.log(_.src);
		    (document.head || document.documentElement).appendChild(_);
		    _.onload = function() {
		    	_.parentNode.removeChild(_);
		    };
        }
	} catch {}
})();
