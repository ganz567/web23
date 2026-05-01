document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const submitBtn = document.getElementById('submitBtn');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // visual feedback for users
        submitBtn.innerText = 'Tunggu Yaa...';
        submitBtn.disabled = true;

        const username = document.getElementById('username').value;

        // Simulate a server request
        setTimeout(() => {
            alert(`WELCOME, ${username}!`);
            window.location.href = "../portofolio/index.html";

            // Reset button state
            submitBtn.innerText = 'sign In';
            submitBtn.disabled = false;

            // Reset form
            loginForm.reset();
        }, 1200);
    });
});