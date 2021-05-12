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