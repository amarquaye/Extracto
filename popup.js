document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const status = document.getElementById('status');

    uploadButton.addEventListener('click', function() {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const typedarray = new Uint8Array(e.target.result);

                pdfjsLib.getDocument(typedarray).promise.then(function(pdf) {
                    let text = '';
                    const numPages = pdf.numPages;
                    let promises = [];

                    for (let i = 1; i <= numPages; i++) {
                        promises.push(pdf.getPage(i).then(function(page) {
                            return page.getTextContent().then(function(textContent) {
                                return textContent.items.map(item => item.str).join(' ');
                            });
                        }));
                    }

                    Promise.all(promises).then(function(pageTexts) {
                        text = pageTexts.join('\n\n');
                        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                            chrome.tabs.sendMessage(tabs[0].id, {action: "insertText", text: text});
                        });
                        status.textContent = 'PDF content inserted successfully!';
                    });
                });
            };
            reader.readAsArrayBuffer(file);
        } else {
            status.textContent = 'Please select a PDF file first.';
        }
    });
});