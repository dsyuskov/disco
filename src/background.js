/* eslint-disable  */
chrome.extension.onMessage.addListener(function(request, sender, f_callback) {
  if (request == "getUrl") {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tab) {
      f_callback(tab);
    });
  }
});
