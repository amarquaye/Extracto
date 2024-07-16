<!-- ![Extracto Logo](img/logo.png) -->

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/amarquaye/extracto)](https://github.com/amarquaye/extracto/releases)
[![GitHub license](https://img.shields.io/github/license/amarquaye/extracto)](https://github.com/amarquaye/extracto/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/amarquaye/extracto)](https://github.com/amarquaye/extracto/issues)
[![GitHub stars](https://img.shields.io/github/stars/amarquaye/extracto)](https://github.com/amarquaye/extracto/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/amarquaye/extracto)](https://github.com/amarquaye/extracto/network)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Famarquaye%2Fextracto)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Famarquaye%2Fextracto)

## 📚 Table of Contents

- [About](#🎯-about)
- [Features](#✨-features)
- [Installation](#🛠️-installation)
- [Usage](#🖱️-usage)
- [For Developers](#👨‍💻-for-developers)
- [Contributing](#🤝-contributing)
- [License](#📄-license)

## 🎯 About

Extracto is a powerful Chrome extension that streamlines your workflow by allowing you to easily upload PDF files and insert their contents directly into an AI chatbot's input box, such as ChatGPT so you can query the chatbot based on the content of the PDF. Say goodbye to manual copy-pasting and hello to efficiency!

<!-- ![Extracto Demo](path/to/demo.gif) -->

## ✨ Features

- 📁 Upload PDF files directly from your browser.
- 📄 Extract text content from PDFs.
- 📝 Automatically insert extracted text into chatbot input boxes.
- 🎨 Clean and intuitive user interface.
- 🚀 Fast and efficient processing.

## 🛠️ Installation

1. Clone this repository or download the ZIP file.
2. Open Google Chrome and navigate to `chrome://extensions` or your browser's extensions page.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the directory containing the extension files.
5. **Extracto** should now appear in your Chrome extensions!

## 🖱️ Usage

1. Navigate to a chatbot page (e.g., ChatGPT).
2. Click on the **Extracto** icon in your Chrome toolbar.
3. In the popup, click *Choose File* and select a PDF.
4. Click *Upload and Insert*.
5. Watch as the PDF content magically appears in the chatbot input box!

<!-- ![Usage Steps](usage.png) -->

## 👨‍💻 For Developers

Extracto is built using the following technologies:

- HTML5
- CSS3
- JavaScript (ES6+)
- Chrome Extension API
- PDF.js library

### Project Structure

```
extracto/
│
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── styles.css
│
├── lib/
│   ├── pdf.mjs
│   └── pdf.worker.mjs
│
└── icons/
├── icon16.png
├── icon48.png
├── icon128.png
│
└── README.md
```

### Key Components

- `manifest.json`: Defines the extension's properties and permissions.
- `popup.html` & `popup.js`: Handle the extension's user interface and PDF processing.
- `content.js`: Injects the extracted text into the chatbot input box.
- `styles.css`: Styles the popup for a pleasant user experience.

## 🤝 Contributing

We welcome contributions to Extracto! Here's how you can help:

1. Fork the repository.
2. Create a new branch: `git checkout -b <feature-name>`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin <feature-name>`.
5. Submit a pull request.

## 📄 License

Extracto is released under the Apache-2.0 License. See the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Jesse Amarquaye](https://linkedin.com/in/amarquaye "Reach out via Linkedin").
