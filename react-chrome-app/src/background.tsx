export {};
console.log('Background script running!');
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request.greeting); // "Hello from popup(index) script!"
    // Establish a connection with the popup
    const port = chrome.runtime.connect({ name: 'popup' });

    // Send a message to the popup
    port.postMessage({ message: 'Hello from background script!' });
});


