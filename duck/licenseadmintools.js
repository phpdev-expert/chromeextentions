function displayActivation(activations){
    $("#duxsouplicenseadmin").jsGrid({
        width: "100%",
        height: "679px",

        controller:{
            loadData: filterActivations,
            insertItem: $.noop,
            updateItem: $.noop,
            deleteItem: removeActivation
        },

        filtering: true,
        editing: false,
        sorting: false,
        paging: true,
    
        data: activations,
    
        fields: [
            { title: chrome.i18n.getMessage("key"), name: "key", type: "text", width: 200 , filtering: true},
            { title: chrome.i18n.getMessage("expires"), name: "validto", type: "text", width: 200 , filtering: false},
            { title: chrome.i18n.getMessage("max"), name: "maxseats", type: "number", width: 75 , filtering: false},
            { title: chrome.i18n.getMessage("user"), name: "username", type: "text", width: 250 , filtering: true},
            { title: chrome.i18n.getMessage("email"), name: "useremail", type: "text", width: 200 , filtering: true},
            { 
                type: "control",
                itemTemplate: function(value, item) {
                    var $result = $([]);
        
                    if(item.id) {
                        $result = $result.add(this._createDeleteButton(item));
                    }
        
                    return $result;
                }
            }
        ],

        loadStrategy: function() {
            return new MyCustomDirectLoadStrategy(this);
        },

    });
}

sendMessage({command: "db.getActivations" }, function(activations){
    for ( var i=0;i<activations.length; i++){
        activations[i].validto=new Date(activations[i].validto).toLocaleString();
    }
    cachedactivations = activations;
    if (activations.length>0){
        displayActivation(activations);
    }else{
        
        sendMessage({command: "getConfigMap" }, function(config){
            message(chrome.i18n.getMessage("notAnAdmin")
                .replace(/\[ID\]/g, config.userid)
                .replace(/__supportEmailLink__/g, chrome.i18n.getMessage("supportEmailLink"))
                .replace(/__appName__/g, chrome.i18n.getMessage("appName"))
            );
        });
    }
});

function removeActivation(item){
    if (!!item.id){
        sendMessage({command: "db.removeActivation" , activationid:item.id});
        removeCachedActivation(item);
    }
}

function message(text){
    $("#dsmessage").html(text);
}

// stop reloading on data removal ( http://js-grid.com/docs/#custom-loadstrategy )
var MyCustomDirectLoadStrategy = function(grid) {
    jsGrid.loadStrategies.DirectLoadingStrategy.call(this, grid);
};
 
MyCustomDirectLoadStrategy.prototype = new jsGrid.loadStrategies.DirectLoadingStrategy();
 
MyCustomDirectLoadStrategy.prototype.finishDelete = function(deletedItem, deletedItemIndex) {
    var grid = this._grid;
    grid.option("data").splice(deletedItemIndex, 1);
    grid.refresh();
};

// client side filtering
function filterActivations(filter){
    return $.grep(cachedactivations, function(entry) {
        return (!filter.key || entry.key.toLowerCase().indexOf(filter.key.toLowerCase()) > -1)
            && (!filter.username || entry.username.toLowerCase().indexOf(filter.username.toLowerCase()) > -1)
            && (!filter.useremail || entry.useremail.toLowerCase().indexOf(filter.useremail.toLowerCase()) > -1);
    });
};

// update  the cached activations , removes the matching item  from the list
function removeCachedActivation(item){
    cachedactivations = $.grep(cachedactivations, function(entry) {
        return (entry.id != item.id);
    });
};

var cachedactivations = [];