function checkAgentAndStart(){
    if (typeof agent != 'undefined'){
        staticextension_init();
    }else{
        setTimeout(checkAgentAndStart, 100);
    }
}
checkAgentAndStart();