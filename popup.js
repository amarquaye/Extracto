import * as pdfjsLib from './lib/pdf.mjs';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'lib/pdf.worker.mjs';

document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const status = document.getElementById('status');

    uploadButton.addEventListener('click', async function() {
        const file = fileInput.files[0];
        if (file) {
            status.textContent = 'Processing PDF...';
            try {
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
                let text = '';
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const content = await page.getTextContent();
                    const pageText = content.items.map(item => item.str).join(' ');
                    text += pageText + '\n\n';
                }

                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, {action: "insertText", text: text}, function(response) {
                        if (chrome.runtime.lastError) {
                            console.error(chrome.runtime.lastError);
                            status.textContent = 'Error: ' + chrome.runtime.lastError.message;
                        } else if (response && response.success) {
                            status.textContent = 'PDF content inserted successfully!';
                        } else {
                            status.textContent = 'Failed to insert PDF content. Make sure you\'re on the ChatGPT page.';
                        }
                    });
                });
            } catch (error) {
                console.error('Error processing PDF:', error);
                status.textContent = 'Error processing PDF: ' + error.message;
            }
        } else {
            status.textContent = 'Please select a PDF file first.';
        }
    });
});