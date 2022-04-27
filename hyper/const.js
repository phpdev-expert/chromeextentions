const errorCode = {
  101: "Client ID not match"
};

const dataKey = {
  user: "user",
  template: "qaTemplate",
  level: "level"
};

const cr = chrome.runtime,
      cs = chrome.storage.local,
      ci = chrome.identity,
      ct = chrome.tabs;

const checkEmailURL = "http://ec2-18-224-108-84.us-east-2.compute.amazonaws.com/group-funnel-ext/check-email.php?user-email=";
//const checkEmailURL = "http://localhost:8888/gf/check-email.php?user-email=";
const footerlinksUrl = "http://ec2-18-224-108-84.us-east-2.compute.amazonaws.com/group-funnel-ext/get-footer-links.php";
