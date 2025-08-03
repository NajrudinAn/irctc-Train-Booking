# 🚅 IRCTC Auto Booker Chrome Extension

This is a **Chrome Extension** powered by **User JavaScript and CSS** that automates train ticket booking on the [IRCTC website](https://www.irctc.co.in/), including:

- Station entry
- Date selection
- Train and class selection
- Login with captcha bypass (OCR-based)
- Passenger auto-fill
- Payment initiation

> ⚠️ For educational purposes only. Automating real-world ticketing systems may violate their Terms of Service.

---

## 🔧 Features

- 🖱️ Auto-fills "From", "To", and Date fields
- 🚉 Selects available trains and travel class (e.g., 3A)
- 🔐 Logs in using provided credentials with automated captcha solving via [OCR.space API](https://ocr.space/)
- 👥 Adds passenger details from the saved list
- 💳 Auto-selects payment method and navigates to payment
- 🧠 Intelligent captcha retry logic

---

## 🧩 Requirements

- **Chrome Extension:** [User JavaScript and CSS](https://chromewebstore.google.com/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld)
- **IRCTC account credentials**
- A free [OCR.space](https://ocr.space/ocrapi) API key

---

## 🧪 How to Use

### 1. Install Prerequisite

Install the Chrome Extension:  
🔗 [User JavaScript and CSS (Chrome Web Store)](https://chromewebstore.google.com/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld)

### 2. Paste the Script

1. Open [https://www.irctc.co.in/](https://www.irctc.co.in/)
2. Click the extension icon → **"Add JS for this host"**
3. Paste the entire `autoBooking.js` code from this repo
4. Save and refresh the page

---

## 🧠 Logic Overview

```js
// Core Functions:
typeInXPath(xpath, text)         // Simulates typing
clickElement(xpath)              // Clicks DOM elements
extractTextFromImageAPI(xpath)  // Reads captcha via OCR.space
addPassengers()                  // Auto-fills passenger info
bookingStart()                   // Master function to run automation
```

Additionally, custom UI buttons like “Click Me” and “Fill Pass” are added to the page for manual triggering.

---

## 🔐 Configuration

Update these in the script:

```js
let username = "NajrudinAn";
let password = "YourPasswordHere";
let api_key = "Your_OCR_API_Key";
```

---

## ⚠️ Disclaimers

- ❌ This automation is **not officially affiliated** with IRCTC.
- 🧪 May break if IRCTC's UI structure (XPaths) change.
- 🛑 Bypass logic for captchas or automating login can be against IRCTC's usage policy.
- Use responsibly and at your own risk.

---

## 📂 File Structure

```
📁 irctc-auto-booker
├── README.md
└── autoBooking.js   <-- Main script to paste into User JavaScript and CSS
```

---

## 🧠 Tip

Want to make it more modular? Break the script into utility files or port it to **Puppeteer** or **Playwright** for full automation outside the browser.
