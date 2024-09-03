// Function to toggle the menu visibility
function toggleMenu() {
    var menu = document.querySelector('nav');
    var menuBar = document.querySelector('.menu-bar');
    
    if (menu.style.display === 'block' || getComputedStyle(menu).display === 'block') {
        menu.style.display = 'none';
        menuBar.classList.remove('active');
    } else {
        menu.style.display = 'block';
        menuBar.classList.add('active');
    }
}

// Attach event listener to the menu bar for toggling the menu
document.querySelector('.menu-bar').addEventListener('click', toggleMenu);

function copyToClipboard(codeId, messageId) {
    // Get the code element
    const codeElement = document.getElementById(codeId);
    // Create a temporary textarea to hold the code
    const textarea = document.createElement('textarea');
    textarea.value = codeElement.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Show a message indicating the code has been copied
    const messageElement = document.getElementById(messageId);
    messageElement.textContent = 'Copied';
    messageElement.style.display = 'inline'; // Show the message
    
    // Hide the message after a few seconds
    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 3000);
}
