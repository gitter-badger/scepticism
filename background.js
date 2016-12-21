'use strict'

var sourceOne = {
  "message": "Those sites are just for development purpose!",
  "blacklist": [
    ".*disinformazione\\.it*",
    ".*dionidream\\.com",
    ".*informarexresistere\\.fr*",
    ".*sciechimiche\\.org"
  ]
};


function logURL(params) {
  //for each Entry in blacklist
  var result = sourceOne.blacklist.some( function(element){
      var tst = new RegExp(element);
      if( tst.test( params.url ) && params.frameId === 0){
        browser.tabs.sendMessage(params.tabId, { message: sourceOne.message})
      }
  });
}

browser.webNavigation.onDOMContentLoaded.addListener(
  logURL,
  {
    url: [
      {schemes: ['http', 'https']}
    ]
  }
);
