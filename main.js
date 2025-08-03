
// window.onload = function () {

let username = "Na****"; // username
let password = "Bdx***"; // password

let api_key = "K88472494188957";


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function stop(ms){
	await wait(ms);
}


// extract text from image 
async function extractTextFromImageAPI(xpath) {
	let imageBase64 = '';
	    let element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (element && element.tagName.toLowerCase() === "img") {
        imageBase64 =  element.src; // Returns the image URL
    } else {
        console.error("Image not found for XPath:", xpath);
        return null;
    }
	
	
	    if (!imageBase64) {
            console.error("Captcha image not found!");
            return;
        }
	
	
    let formData = new FormData();
    formData.append("apikey", api_key); // Free API key
    formData.append("base64Image", imageBase64);
    formData.append("language", "eng"); // Supports multiple languages
    formData.append("isOverlayRequired", "false");
    formData.append("detectOrientation", "true");
    formData.append("scale", "true");
    formData.append("OCREngine", "2"); // Advanced OCR engine

    let response = await fetch("https://api.ocr.space/parse/image", {
        method: "POST",
        body: formData
    });

    let result = await response.json();
    return result.ParsedResults ? result.ParsedResults[0].ParsedText : "No text found";
}







// [ress enter ]

async function pressEnter() {
    return new Promise((resolve) => {
        let activeElement = document.activeElement;
        if (activeElement) {
            let event = new KeyboardEvent("keydown", {
                key: "Enter",
                code: "Enter",
                keyCode: 13,
                which: 13,
                bubbles: true,
                cancelable: true
            });

            activeElement.dispatchEvent(event);
            console.log("Enter key pressed!");
        } else {
            console.error("No active element found.");
        }
        resolve(); // Ensures function execution completes before moving forward
    });
}














async function clickElement(xpath) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (element) {
                element.click();
                console.log("Clicked element at:", xpath);
            } else {
                console.error("Element not found for XPath:", xpath);
            }
            resolve();
        }, 400); // Ensures execution delay
    });
}


  




async function typeInXPath(xpath, text, delay = 80) {
    return new Promise((resolve) => {
        let element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (element) {
            element.focus();
            element.value = "";

            let i = 0;
            function typeCharacter() {
                if (i < text.length) {
                    element.value += text[i];
                    element.dispatchEvent(new Event("input", { bubbles: true }));
                    i++;
                    setTimeout(typeCharacter, delay);
                } else {
                    resolve();
                }
            }
            typeCharacter();
        } else {
            console.error("Element not found for XPath:", xpath);
            resolve();
        }
    });
}



























 
async function bookingStart() {
	
	// // from
 //   await typeInXPath("/html/body/app-root/app-home/div[3]/div/app-main-page/div/div/div[1]/div[1]/div[1]/app-jp-input/div/form/div[2]/div[1]/div[1]/p-autocomplete/span/input", "PUNE");

 //   // Click on From first list
 //   await clickElement('/html/body/app-root/app-home/div[3]/div/app-main-page/div/div/div[1]/div[1]/div[1]/app-jp-input/div/form/div[2]/div[1]/div[1]/p-autocomplete/span/div/ul/li[1]');
    
 //   // To typing
 //   await typeInXPath('/html/body/app-root/app-home/div[3]/div/app-main-page/div/div/div[1]/div[1]/div[1]/app-jp-input/div/form/div[2]/div[1]/div[2]/p-autocomplete/span/input', 'Danapur');
    
 //   // fist list click
 //   await clickElement('/html/body/app-root/app-home/div[3]/div/app-main-page/div/div/div[1]/div[1]/div[1]/app-jp-input/div/form/div[2]/div[1]/div[2]/p-autocomplete/span/div/ul/li[1]');
    
    
 //    //await pressEnter();
 //   // click on date
 //   await clickElement('/html/body/app-root/app-home/div[3]/div/app-main-page/div/div/div[1]/div[1]/div[1]/app-jp-input/div/form/div[2]/div[2]/div[1]/p-calendar/span/input');
    
 //   // type on date
 //   await typeInXPath('/html/body/app-root/app-home/div[3]/div/app-main-page/div/div/div[1]/div[1]/div[1]/app-jp-input/div/form/div[2]/div[2]/div[1]/p-calendar/span/input', '19/04/2025');
    
    
    
    
 //   // ac Seclection 
 //       await clickElement('/html/body/app-root/app-home/div[3]/div/app-main-page/div/div/div[1]/div[1]/div[1]/app-jp-input/div/form/div[2]/div[2]/div[2]/p-dropdown/div/div[2]');
        
 //       // selct 3A
 //       await clickElement('/html/body/app-root/app-home/div[3]/div/app-main-page/div/div/div[1]/div[1]/div[1]/app-jp-input/div/form/div[2]/div[2]/div[2]/p-dropdown/div/div[4]/div/ul/p-dropdownitem[8]');
        
 //       // search
 //       await clickElement('/html/body/app-root/app-home/div[3]/div/app-main-page/div/div/div[1]/div[1]/div[1]/app-jp-input/div/form/div[5]/div[1]/button');
        
        
    
    
    // booking train;
    // varient selecton 3A
       await clickElement('/html/body/app-root/app-home/div[3]/div/app-train-list/div[4]/div/div[5]/div[3]/div[1]/app-train-avl-enq/div[1]/div[5]/div[1]/table/tr/td[2]/div');
           
           
           stop(2000);
            // Date selection 
        await clickElement('/html/body/app-root/app-home/div[3]/div/app-train-list/div[4]/div/div[5]/div[3]/div[1]/app-train-avl-enq/div[1]/div[7]/div[1]/div[3]/table/tr/td[2]/div');
            
              // book button click
        await clickElement('/html/body/app-root/app-home/div[3]/div/app-train-list/div[4]/div/div[5]/div[3]/div[1]/app-train-avl-enq/div[2]/div/span/span[1]/button[1]');
        
        
        
        
     await new Promise(resolve => setTimeout(resolve, 2000));
        // usename 
        await typeInXPath('/html/body/app-root/app-home/div[3]/app-login/p-dialog[1]/div/div/div[2]/div[2]/div/div[2]/div/div[2]/form/div[2]/input', 'NajrudinAn');
       
       //password 
        await typeInXPath('/html/body/app-root/app-home/div[3]/app-login/p-dialog[1]/div/div/div[2]/div[2]/div/div[2]/div/div[2]/form/div[3]/input', password);
        
        
 // Function to check if "Invalid Captcha" error exists
    async function isCaptchaInvalid(xpath1) {
        let errorElement = document.evaluate(xpath1, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        return errorElement && errorElement.innerText.includes("Invalid Captcha");
    }


  



    // Retry loop for captcha
    let inv = false;
    let captchaCorrect = false;
    while (!captchaCorrect) {
        // Wait for Captcha to Load
        await new Promise(resolve => setTimeout(resolve, 1000));



        
        // Extract Text from Image
        let text = await extractTextFromImageAPI('/html/body/app-root/app-home/div[3]/app-login/p-dialog[1]/div/div/div[2]/div[2]/div/div[2]/div/div[2]/form/div[5]/div/app-captcha/div/div/div[2]/span[1]/img');
        console.log("Extracted Captcha:", text);
        
        // Enter Captcha
        await typeInXPath('/html/body/app-root/app-home/div[3]/app-login/p-dialog[1]/div/div/div[2]/div[2]/div/div[2]/div/div[2]/form/div[5]/div/app-captcha/div/div/input', text);
        
        // Click Login Button
        await clickElement('/html/body/app-root/app-home/div[3]/app-login/p-dialog[1]/div/div/div[2]/div[2]/div/div[2]/div/div[2]/form/span/button');
        
        // Wait for response
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Check if captcha is still invalid
        captchaCorrect = !(await isCaptchaInvalid('/html/body/app-root/app-home/div[3]/app-login/p-dialog[1]/div/div/div[2]/div[2]/div/div[2]/div/div[2]/form/div[1]'));
        


  
        inv = captchaCorrect;

        if (!captchaCorrect) {
            console.log("Invalid Captcha detected, retrying...");
        }
    }
    
    
    await new Promise(resolve => setTimeout(resolve, 500));
    if(inv){
    	await clickElement('/html/body/app-root/app-home/div[3]/div/app-train-list/div[4]/div/div[5]/div[3]/div[1]/app-train-avl-enq/div[2]/div/span/span[1]/button[1]');
    }
    
    
    
    
     await new Promise(resolve => setTimeout(resolve, 1000));
     
     
     
     
     
     
     
    // await typeInXPath('/html/body/app-root/app-home/div[3]/div/app-passenger-input/div[6]/form/div/div[1]/div[6]/p-panel/div/div[2]/div/div[1]/div[2]/div/app-passenger/div/div[1]/span/div[1]/p-autocomplete/span/input', 'Najrudin Ansari');
    
    
    // await typeInXPath('/html/body/app-root/app-home/div[3]/div/app-passenger-input/div[6]/form/div/div[1]/div[6]/p-panel/div/div[2]/div/div[1]/div[2]/div/app-passenger/div/div[1]/span/div[2]/input', '21');
     
     
     
    //   await clickElement('/html/body/app-root/app-home/div[3]/div/app-passenger-input/div[6]/form/div/div[1]/div[6]/p-panel/div/div[2]/div/div[1]/div[2]/div/app-passenger/div/div[1]/span/div[3]/select');
     
    // //gender selection
    // await clickElement('/html/body/app-root/app-home/div[3]/div/app-passenger-input/div[6]/form/div/div[1]/div[6]/p-panel/div/div[2]/div/div[1]/div[2]/div/app-passenger/div/div[1]/span/div[3]/select/option[2]');
     
     
     
    // //click on berth selection
    //   await clickElement('/html/body/app-root/app-home/div[3]/div/app-passenger-input/div[6]/form/div/div[1]/div[6]/p-panel/div/div[2]/div/div[1]/div[2]/div/app-passenger/div/div[1]/div[1]/select');
      
    //   // lower
    //   await clickElement('/html/body/app-root/app-home/div[3]/div/app-passenger-input/div[6]/form/div/div[1]/div[6]/p-panel/div/div[2]/div/div[1]/div[2]/div/app-passenger/div/div[1]/div[1]/select/option[2]');
      
     
     
 async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}






async function addPassengers(maxPassengers = 6) {
    function getElementByXPath(xpath) {
        return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    function getAvailablePassengerCount() {
        let listXPath = `/html/body/app-root/app-home/div[3]/div/app-passenger-input/div[6]/form/div/div[1]/div[6]/p-panel/div/div[2]/div/div`;
        let rows = document.evaluate(listXPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        return rows.snapshotLength; // Returns the current number of passenger rows
    }

    maxPassengers = getAvailablePassengerCount();

    async function processPassenger(passengerIndex) {
        if (passengerIndex > maxPassengers) {
            console.log("✅ Max passengers reached or no more passengers available.");
            return;
        }

        let inputXPath = `/html/body/app-root/app-home/div[3]/div/app-passenger-input/div[6]/form/div/div[1]/div[6]/p-panel/div/div[2]/div/div[${passengerIndex}]/div[2]/div/app-passenger/div/div[1]/span/div[1]/p-autocomplete/span/input`;
        
        let inputField = getElementByXPath(inputXPath);

        if (!inputField) {
            let addPassengerXPath = `//a[span[contains(text(), '+ Add Passenger')]]`;
            let addPassengerButton = getElementByXPath(addPassengerXPath);

            if (addPassengerButton) {
                addPassengerButton.click();
                console.log(`🚀 Clicked "+ Add Passenger" for Passenger ${passengerIndex}`);

                await new Promise(resolve => setTimeout(resolve, 500));
                return await processPassenger(passengerIndex); // Retry after adding
            } else {
                console.log("❌ No 'Add Passenger' button found, stopping.");
                return;
            }
        }

        if (inputField) {
            inputField.focus();
            console.log(`🎯 Focused on Passenger ${passengerIndex} name input.`);

            await new Promise(resolve => setTimeout(resolve, 100));

            let listItemsXPath = `/html/body/app-root/app-home/div[3]/div/app-passenger-input/div[6]/form/div/div[1]/div[6]/p-panel/div/div[2]/div/div[${passengerIndex}]/div[2]/div/app-passenger/div/div[1]/span/div[1]/p-autocomplete/span/div/ul/li`;
            let listItems = document.evaluate(listItemsXPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

            if (listItems.snapshotLength === 0) {
                console.log("⚠️ No passengers available in the list, stopping.");
                return;
            }

            let listItem = listItems.snapshotItem(0); // Select the first available passenger

            if (listItem) {
                listItem.click();
                console.log(`✅ Selected Passenger ${passengerIndex} from autocomplete.`);
            } else {
                console.log(`⚠️ No passenger found in autocomplete for row ${passengerIndex}.`);
                return;
            }

            await new Promise(resolve => setTimeout(resolve, 600)); // Wait before adding next
            return await processPassenger(passengerIndex + 1);
        } else {
            console.log(`❌ Passenger input field for row ${passengerIndex} not found.`);
        }
    }

    await processPassenger(1);
}







addPassengers()




// Create a button element
const button1 = document.createElement("button");
button1.textContent = "Fill Pass";
button1.style.position = "fixed";
button1.style.top = "100px";
button1.style.right = "10px";
button1.style.padding = "10px 15px";
button1.style.backgroundColor = "#007bfe";
button1.style.color = "#fff";
button1.style.border = "none";
button1.style.borderRadius = "5px";
button1.style.cursor = "pointer";
button1.style.zIndex = "1000"; // Ensures it's above other elements

// Add click event
button1.addEventListener("click", () => {
    addPassengers();
});

// Append button to body
document.body.appendChild(button1);
    
    
  
await new Promise(resolve => setTimeout(resolve, 3000));
  
  
  
  
  
  
  

// select payment option

	await clickElement(`/html/body/app-root/app-home/div[3]/div/app-passenger-input/div[6]/form/div/div[1]/div[14]/p-panel/div/div[2]/div/table/tr[2]/label/p-radiobutton/div/div[1]/input`)

// submit
	await clickElement('/html/body/app-root/app-home/div[3]/div/app-passenger-input/div[6]/form/div/div[1]/div[16]/div/button[2]')






function waitForElementAndProceed(elementXPath) {

    let maxWaitTime = 5000; // 5 seconds
    let intervalTime = 300; // Check every 500ms
    let elapsedTime = 0;

    let checkInterval = setInterval(() => {
        let element = document.evaluate(elementXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (element) {
            clearInterval(checkInterval);
            console.log("✅ Element found! Proceeding further...");
            proceedFurther(); // Call the next function when element is found
        } else {
            elapsedTime += intervalTime;
            console.log("⏳ Waiting for element...");

            if (elapsedTime >= maxWaitTime) {
                clearInterval(checkInterval);
                console.log("❌ Element not found within 5 seconds. Stopping.");
            }
        }
    }, intervalTime);
}

    
    waitForElementAndProceed(`/html/body/app-root/app-home/div[3]/div/app-review-booking/div[5]/div/div[1]/div[3]/div/app-psgn-detail/p-panel/div/div[1]/p-header/div/span`);








//await new Promise(resolve => setTimeout(resolve, 1000));

  
  
  
      // Retry loop for captcha

    let captchaCorrect1 = false;
    while (!captchaCorrect1) {
        // Wait for Captcha to Load
        await new Promise(resolve => setTimeout(resolve, 500));



                // Extract Text from Image
        let text1 = await extractTextFromImageAPI('/html/body/app-root/app-home/div[3]/div/app-review-booking/div[5]/div/div[1]/form/div[1]/div/div/app-captcha/div/div/div[2]/span[1]/img');
        
        console.log("Extracted Captcha:", text1);
 
  
    await typeInXPath('/html/body/app-root/app-home/div[3]/div/app-review-booking/div[5]/div/div[1]/form/div[1]/div/div/app-captcha/div/div/input', text1);
     
     
     
    await clickElement('/html/body/app-root/app-home/div[3]/div/app-review-booking/div[5]/div/div[1]/form/div[3]/div/button[2]');
 
        
        // Wait for response
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Check if captcha is still invalid
        captchaCorrect1 = !(await isCaptchaInvalid('/html/body/app-root/app-home/div[3]/div/app-review-booking/p-toast/div/p-toastitem[1]/div/div'));


        if (!captchaCorrect1) {
            console.log("Invalid Captcha detected, retrying...");
        }
    }
     
     
     
    waitForElementAndProceed('/html/body/app-root/app-home/div[3]/div/app-payment-options/div[5]/div[1]/div[2]/span');
     
     
    await clickElement('/html/body/app-root/app-home/div[3]/div/app-payment-options/div[5]/div[2]/div[1]/div[1]/app-payment/div[2]/button[2]');
     
  
  
  
  
  
  
  
  
  
  
    
    console.log("All steps completed!");
};











// Create a button element
const button = document.createElement("button");
button.textContent = "Click Me";
button.style.position = "fixed";
button.style.top = "10px";
button.style.right = "10px";
button.style.padding = "10px 15px";
button.style.backgroundColor = "#007bff";
button.style.color = "#fff";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.zIndex = "1000"; // Ensures it's above other elements

// Add click event
button.addEventListener("click", () => {
    bookingStart();
});


// Append button to body
document.body.appendChild(button);
