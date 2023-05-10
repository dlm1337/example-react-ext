export { };
console.log('Background script running!');

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.popupStart) {

        const popupPort = chrome.runtime.connect();
        popupPort.postMessage({ message: 'Hello from background script!' });
        console.log(request.popupStart); // "Hello from popup(index) script!"
    }
 
});

chrome.runtime.onConnect.addListener((port) => {
    console.log('Connected to content script');

    // Listen for messages from the content script
    port.onMessage.addListener((message) => {
        console.log('Received message from content script:', message);
    });

    // Send a message to the content script
    port.postMessage({ type: 'backgroundScriptMessage', data: 'Hello from background script!' });
});


