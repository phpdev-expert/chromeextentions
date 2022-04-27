chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    console.log("REQUEST FROM" + request.from);
    if (request.from === "background") {

      let chrom_id = request.chrom_id;
      alert(chrom_id)

      renderPopup(chrom_id)

    }

  }
);

function renderPopup(cid) {
  let pop_html = `
      <div id="popup_box">
    <input type="button" value="X" id="cancel_button">
    <p id="info_text">
    <iframe style="height: 440px;border:none;width:100%;" id="load_ext" src ="chrome-extension://` + cid + `/index.html"> </iframe>
    </p>
    </div>
  `;
  $('body').append(pop_html)
  $("#cancel_button").click(function() {
    hidepopup();
  });
  $("#close_button").click(function() {
    hidepopup();
  });

  showpopup();
}


function showpopup() {
  $("#popup_box").fadeToggle();
  $("#popup_box").css({
    "visibility": "visible",
    "display": "block"
  });
}

function hidepopup() {
  $("#popup_box").fadeToggle();
  $("#popup_box").css({
    "visibility": "hidden",
    "display": "none"
  });
}
