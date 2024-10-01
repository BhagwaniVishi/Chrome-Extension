// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Get the button element and the title box
    const btn = document.querySelector('.titleBtn');
    const titleBox = document.getElementById('titleBox'); // Select the title box

    // Check if the title box is correctly selected
    if (!titleBox) {
        console.error("Title box element not found!");
        return; // Exit if the title box is not found
    }

    // Add click event listener to the button
    btn.addEventListener('click', () => {
        // Fetch the title of the current active tab and display it in the title box
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                const tab = tabs[0];  // Get the active tab
                const title = tab.title;  // Get the title of the tab
                console.log("Tab title fetched:", title); // Log the title for debugging
                titleBox.textContent = title;  // Set the tab title in the title box
            } else {
                console.error("No active tabs found.");
            }
        });
    });
});
