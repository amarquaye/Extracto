chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "insertText") {
        const textarea = document.querySelector('textarea');
        if (textarea) {
            textarea.value = request.text;
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }
});