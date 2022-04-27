var env = 'prod';
var appTitle = chrome.i18n.getMessage("appTitle");
// sandbox doesn't work at all :(
//var env = 'sandbox';

var currentbalance;
// cache all purchaes that have beeen completed
var recentpurchases={};

function populateSKUs(){
    google.payments.inapp.getSkuDetails({
    'parameters': {'env': env},
    'success': onSkuDetails,
    'failure': populateSKUs
    });
    addTradeToUI();
}
function onSkuDetails(skus) {
  var products = skus.response.details.inAppProducts;
  var count = products.length;
   for (var i = 0; i < count; i++) {
     addProductToUI(products[i]);
   }
}
function addProductToUI(product){
    var row = document.getElementById(product.sku);
    row.querySelector(".dstitle").innerText = product.localeData[0].title;
    row.querySelector(".dsbuy").value=chrome.i18n.getMessage("buyFor")+" "+formatPrice(product.prices[0].currencyCode, product.prices[0].valueMicros);
    row.querySelector(".dsbuy").onclick=function(){buyPoints(product.sku)};
    //row.querySelector(".dsdesc").innerText = product.localeData[0].description;
}
function addTradeToUI(){
    var row = document.getElementById("trade");
    row.querySelector(".dstitle").innerText = chrome.i18n.getMessage("tradeForAction").replace(/__appTitle__/g, appTitle);
    row.querySelector(".dsbuy").value=chrome.i18n.getMessage("freePoints");
    row.querySelector(".dsbuy").onclick=function(){tradeContacts()};
    row.querySelector(".dsdesc").innerText = chrome.i18n.getMessage("tradeForInfo").replace(/__appTitle__/g, appTitle);
}
function formatPrice(currencycode, value){
    var amount = (parseInt(value)/10000)/100;
    return amount.toLocaleString(window.navigator.language, { style: 'currency', currency: currencycode, maximumFractionDigits: 2 });
}
function onPurchase(sku){
    // consume the purchase.
    google.payments.inapp.consumePurchase({
        'parameters': {'env': env},
        'sku': sku,
        'success': onConsume,
        'failure': onPurchaseFailed
    });
    console.log(result);
}
function onConsume(sku){
    // update backend credit count 
    google.payments.inapp.consumePurchase({
        'parameters': {'env': env},
        'sku': sku,
        'success': onCreditsAdded,
        'failure': onPurchaseFailed
    });
}
function consumeAllSKUs(){
    consume1PointSKU();
}
function consume1PointSKU(){
    google.payments.inapp.consumePurchase({
        'parameters': {'env': env},
        'sku': "1_point",
        'success': consume100PointSKU,
        'failure': consume100PointSKU
    });    
}
function consume100PointSKU(){
    google.payments.inapp.consumePurchase({
        'parameters': {'env': env},
        'sku': "100_points",
        'success': consume250PointSKU,
        'failure': consume250PointSKU
    });    
}
function consume250PointSKU(){
    google.payments.inapp.consumePurchase({
        'parameters': {'env': env},
        'sku': "250_points",
        'success': consume600PointSKU,
        'failure': consume600PointSKU
    });    
}
function consume600PointSKU(){
    google.payments.inapp.consumePurchase({
        'parameters': {'env': env},
        'sku': "600_points",
        'success': function(){
            loadRecentPurchases(displayBalance);
         },
        'failure': function(){
            loadRecentPurchases(displayBalance);
         },
    });    
}

// 
function onPurchaseFailed(msg){
    var usermsg = chrome.i18n.getMessage("purchaseFailed");
    if (msg != null){
        usermsg = usermsg + "("+ msg +")";
    }
    vex.dialog.alert(usermsg);
}
function onPurchaseCancelled(){
    vex.dialog.alert(chrome.i18n.getMessage("purchaseCancelled"));
}
function onPurchaseTimeout(next){
    vex.dialog.alert({
        message  : chrome.i18n.getMessage("purchaseTimeout"),
        callback : function(){
            next();
        }
    })
}
function onPurchaseSucceeded(next){
    vex.dialog.alert({
        message  : chrome.i18n.getMessage("purchaseSucces"),
        callback : function(){
            next();
        }
    })
}
function onCreditsAdded(result){
    loadRecentPurchases();
    sendMessage({command:"getpointsbalance", updateledger:true}, function(result){
        // result can be null when initialisation is ongoing, or has failed.
        displayBalance();
    });
}
function tradeContacts(){
    vex.dialog.open({unsafeMessage:"The Points Trader is temporarily unavailable due to <a href='https://www.linkedin.com/help/linkedin/forum/question/700648' target='_blank'>recent changes in LinkedIn</a>."});
    // DISABLED, no more emails in download
    // if (document.getElementById("accepttandcs").checked == true){
    //     document.location.href='https://www.linkedin.com/mynetwork/invite-connect/connections/#convert'
    // }else{
    //     vex.dialog.alert(
    //         { 
    //             unsafeMessage: chrome.i18n.getMessage("readAndAgree").replace(/__appTitle__/g, appTitle),
    //         callback:function(){
    //             document.getElementById("accepttandcs").focus();
    //         }});
    // }
}
function buyMailClicked(){
    if (document.getElementById("accepttandcs").checked == true || document.getElementById("buymail").checked == false){
        return true;
    }else{
        vex.dialog.alert(
            { 
                unsafeMessage: chrome.i18n.getMessage("readAndAgree").replace(/__appTitle__/g, appTitle),
            callback:function(){
                document.getElementById("accepttandcs").focus();
            }});
        return false;
    }
}
function processPurchase(response , sku, success){ 
    console.log(new Date());
    console.log(response);
    console.log(sku);
    console.log(success);

    if  (response && response.checkoutOrderId ){
        // success
        onPurchaseSucceeded(function(){
            checkPurchase(sku);
        })
    }else if ( response && response.response && response.response.errorType){
        // cancelled by user
        onPurchaseFailed(response.response.errorType);
    } else {
        // failed or timedout.
        onPurchaseTimeout(function(){
            checkPurchase(sku);
        })
    }
}
function buyPoints(sku){
    if (document.getElementById("accepttandcs").checked==true){
        google.payments.inapp.buy({
            'parameters': {'env': env},
            'sku': sku,
            'success': function(res){
                    processPurchase(res, sku, true);
            },
            'failure': function(res){
                    processPurchase(res, sku, false);
            },
        });
    }else{
        vex.dialog.alert(
            { 
                unsafeMessage: chrome.i18n.getMessage("readAndAgree").replace(/__appTitle__/g, appTitle),
            callback:function(){
                document.getElementById("accepttandcs").focus();
            }});
    }
};

function displayBalance(){
    // updateledger to false in production, this is just for development
    sendMessage({command:"getpointsbalance", updateledger:true}, function(result){
        // result can be null when initialisation is ongoing, or has failed.
        if (result!=null){
            if (result.pointsbalance < 1000000){
                setElementProperty(
                    "currentmailbalance", 
                    "textContent", 
                    chrome.i18n.getMessage("currentBalance")+
                    ": "+
                    result.pointsbalance+
                    (
                        result.pointsbalance==1?(" "+appTitle+" "+chrome.i18n.getMessage("point")):(" "+appTitle+" "+chrome.i18n.getMessage("points"))
                    )
                );            
                currentbalance = result.pointsbalance;
            }else{
                setElementProperty("currentmailbalance", "innerHTML",chrome.i18n.getMessage("currentBalance")+": <span style='font-size:24px;margin-bottom:-12px'>∞</span> "+appTitle+" "+chrome.i18n.getMessage("points"));                        
            }
            if ( currentbalance !=null && currentbalance != result.pointsbalance){
                vex.dialog.alert(chrome.i18n.getMessage("thankYouForPurchase").replace(/__X__/g,(result.pointsbalance - currentbalance)));
            }

        }
    });
}
/* 
 * checkPurchase loads current purchases from the google server . It will keep trying to look for purchases until one is found that
 * - isn't in the list of cached purchases
 * - is ACTIVE or PAYMENT_DECLINED
 * 
*/
function checkPurchase(sku){
    google.payments.inapp.getPurchases({
        'parameters': {'env': env,  projection:"PLAY_STORE"},
        'success': function(result){
            // we always get all the last purchases of all skus
            for (var i=0; i<result.response.details.length; i++){
                var newp = result.response.details[i];
                newp.paymentData = JSON.parse(newp.paymentData);
                if (newp.sku == sku){
                    //  this is the SKU we're after, see if the purchase is new.
                    var oldp = recentpurchases[newp.sku];
                    // flag to indicate if we have checked the purchase 
                    var purchasechecked = false;

                    if (!oldp || ( oldp && oldp.paymentData &&  newp.paymentData && newp.paymentData.orderId && newp.paymentData.orderId != oldp.paymentData.orderId  )){
                        // found a new purchase! check what state it is in
                        if  (newp.state == "ACTIVE"){
                            purchasechecked = true;
                            recentpurchases[newp.sku] = newp;
                            onConsume(sku);
                        }else if (newp.state == "PAYMENT_DECLINED" ){
                            purchasechecked = true;
                            recentpurchases[newp.sku] = newp;
                            onPurchaseFailed(p.state)
                        }else{
                            // transaction "PENDING", wait and try again.
                        }
                    }
                    if ( !purchasechecked){
                        setTimeout(function(){
                            checkPurchase(sku);
                        }, 1000);
                    }
                }
            }
        },
        'failure': function(result){
            onPurchaseFailed(result.response.errorType);
        }
    });
}
function loadRecentPurchases(next){
     google.payments.inapp.getPurchases({
        'parameters': {'env': env,  projection:"PLAY_STORE"},
        'success': function(result){
            for (var i=0; i<result.response.details.length; i++){
                var p = result.response.details[i];
                if (p.paymentData){
                    p.paymentData = JSON.parse(p.paymentData);
                }
                recentpurchases[p.sku]=p;
            };
            if (next){
                next();
            }
        },
        failure: function(){
            // something went wrong, just try again.
            setTimeout(function(){
                loadRecentPurchases(next)
            }, 1000);
        }
    });
}
function logit(data){
    console.log(JSON.stringify(data));
}
populateSKUs();
consumeAllSKUs();
displayBalance();

document.querySelector("#buymail").onclick=buyMailClicked;

