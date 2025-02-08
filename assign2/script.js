document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin@123') {
        window.location.href = 'https://www.flipkart.com';
    } else {
        location.reload();
    }
});