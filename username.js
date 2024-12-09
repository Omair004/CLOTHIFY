// Function to toggle the visibility of the logout button when the user container is clicked
function toggleButtons() {
    // Toggle the 'show-buttons' class on user-container
    const userContainer = document.querySelector('.user-container');
    userContainer.classList.toggle('show-buttons');
    
    // Set username from local storage (if available)
    var storedUsername = localStorage.getItem("username");
    var usernameElement = document.getElementById("username");  // Ensure we have a reference to the username element

    // Check if the username is stored in local storage
    if (storedUsername) {
        usernameElement.textContent = storedUsername; // Display stored username
    } else {
        usernameElement.textContent = "Guest"; // Default to 'Guest' if no username is stored
    }
}

// Initialize the username on page load
window.addEventListener('DOMContentLoaded', (event) => {
    var storedUsername = localStorage.getItem("username");
    var usernameElement = document.getElementById("username");

    // Set the username or default to 'Guest'
    if (storedUsername) {
        usernameElement.textContent = storedUsername;
    } else {
        usernameElement.textContent = "Guest";
    }
});

// Function to handle the logout process
function logout() {
    // Clear user session from local storage
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    
    // Redirect to login page after logout
    window.location.href = "login_clothify.html";
}
