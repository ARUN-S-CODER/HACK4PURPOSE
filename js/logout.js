// logout.js

document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');

    logoutButton.addEventListener('click', () => {
        // Clear user session data
        localStorage.removeItem('user'); // Adjust this according to your session management

        // Redirect to the login page
        window.location.href = 'login.html';
    });

    // Simulate logging out (this would typically be handled by the server)
    console.log('User logged out');
});
