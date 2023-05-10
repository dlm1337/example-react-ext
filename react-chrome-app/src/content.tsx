export { };
alert("content is being injected.")

// Define a function to scrape all HTML on the page
function scrapeHTML(): string {
    return document.documentElement.outerHTML;
}

const port = chrome.runtime.connect();

// Send a message to the background script
port.postMessage({ type: 'contentScriptMessage', data: scrapeHTML() });

// Listen for messages from the background script
port.onMessage.addListener((message) => {
    console.log('Received message from background script:', message);
});
