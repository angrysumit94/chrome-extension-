
var contextArray=["selection","link","image","page"];
for (i in contextArray){
  var context=contextArray[i];
  titlex="twitter tootkit: share this "+context+"on your twitter profile";
  chrome.contextMenus.create({
    title   :titlex,
    contexts:[context],
    onclick : runThis,
    id      : context
    });
}


  function runThis(data,tab){
    switch (data.menuItemId) {
      case "selection":
        chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(data.selectionText), type:"panel"});
        break;
      case "link":
        chrome.windows.create({url:"https://twitter.com/intent/tweet?url="+encodeURIComponent(data.linkUrl), type:"panel"});
        break;
        case "image":
          chrome.windows.create({url:"https://twitter.com/intent/tweet?url="+encodeURIComponent(data.srcUrl), type:"panel"});
          break;
        case "page":
          chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title), type:"panel"});

    }

  }
