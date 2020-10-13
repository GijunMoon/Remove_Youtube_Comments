function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url.indexOf('www.youtube.com/watch') > -1) {
    // 현재 페이지에 PageAction 적용
    chrome.pageAction.show(tabId);
    chrome.tabs.executeScript(tab.id, { file: 'remove.js' });
  }
}

// 탭이나 URL 변경될 때 발생
chrome.tabs.onUpdated.addListener(checkForValidUrl);
