chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "insertText") {
        const textarea = document.querySelector('textarea');
        if (textarea) {
            textarea.value = request.text;
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
            sendResponse({success: true});
        } else {
            console.error('Textarea not found');
            sendResponse({success: false, error: 'Textarea not found'});
        }
    }
    return true; // This line is necessary to use sendResponse asynchronously
});