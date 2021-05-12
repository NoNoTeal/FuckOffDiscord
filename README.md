# FuckOffDiscord
*Deletes the WebSocket to make Discord stop opening the desktop app from a browser invite.*

Open any of these links in your browser:

- https://discord.gg/test
- https://discord.com/invite/test
- https://canary.discord.com/invite/test
- https://ptb.discord.com/invite/test

If you open these links with your Discord desktop client open, you get fucking **beamed** against your will to your Discord Desktop client. 

**Chrome Only**

## 💉💉💉 ~~Euthanize time!~~

Using injections (💉) and only 2 Javascript files, You can tell Discord to fuck off and to stop beaming you to the desktop client. 

## Download

Go to https://github.com/NoNoTeal/FuckOffDiscord/releases/latest for the **Latest** download.

Go to https://github.com/NoNoTeal/FuckOffDiscord/releases for **all** downloads.

Download `source.zip`

### Installation

1. Unzip the zip file.
2. Go to chrome://extensions
3. Turn on Developer mode
4. Click `Load Unpacked`
5. Find the unzipped folder directory.
6. You should see a new extension called 'Fuck Off Discord!'

## Technical Nerd Shit

```js
(function(){
    if(window){
        delete window.WebSocket;
        if('WebSocket' in window) {
            window.WebSocket=undefined;
        }
    }
    delete WebSocket;
    WebSocket=undefined;
})();
```
*Self triggering function that removes the usage of the `WebSocket` interface.*

```js
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
```
*Self triggering function that takes `WebSocket` removal file and injects it to sites that match the regex:*

- `*://*.discord.com/invite/*`
- `*://discord.com/invite/*`

### Passes Regex:

- `https://canary.discord.com/invite/pp`
- `https://ptb.discord.com/invite/pp`
- `https://discord.com/invite/pp`
- `https://test.discord.com/invite/`
- `https://notareallink.discord.com/invite/29848983998428932894893289824898294`

### Fails Regex:

- `https://pornhub.com` (NSFW SITE)
- `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- `https://discord.com/channels/@me`
