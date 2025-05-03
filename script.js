// DOM Elements
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const emailInput= document.getElementById('email');
const messageElement = document.getElementById('message');
const mainTitle = document.getElementById('main-title');
const loginTitle = document.getElementById('login-title');
const changeStyleBtn = document.getElementById('change-style-btn');
const dynamicElementsContainer = document.getElementById('dynamic-elements');
const logInBtn = document.getElementById('login-btn');

// Real-time validation feedback
usernameInput.addEventListener('input', () => {
    if (usernameInput.value.trim() === '') {
        usernameInput.style.borderColor = 'red';
    } else {
        usernameInput.style.borderColor = 'green';
    }
});

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
        passwordInput.style.borderColor = 'red';
    } else {
        passwordInput.style.borderColor = 'green';
    }

    if (passwordInput.style.borderColor= 'green'){
        logInBtn.innerText='Log out'
    }else {
        logInBtn.innerText='Log in' 
    }

    if(logInBtn.innerText='Log out'){
        logInBtn.addEventListener('click',()=>{
            showMessage('Logged out successfully')
        })
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() === '') {
        emailInput.style.borderColor = 'red';
    } else {
        emailInput.style.borderColor = 'green';
    }
});

// Login Form Submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
        showMessage('All fields are required.', 'error');
        return;
    }

    if (!validateEmail(username)) {
        showMessage('Invalid email format.', 'error');
        return;
    }

    if (password.length < 8) {
        showMessage('Password must be at least 8 characters.', 'error');
        return;
    }

    if (username === 'admin@example.com' && password === 'password123') {
        showMessage('Login successful!', 'success');
        loginTitle.textContent = `Welcome, ${username}!`;
    } else {
        showMessage('Invalid username or password', 'error');
    }
});

// Change Page Style
changeStyleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        changeStyleBtn.textContent = 'Light Mode';
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        document.querySelector('header').style.backgroundColor = '#222';
        document.querySelector('footer').style.backgroundColor = '#222';
        loginTitle.style.color = '#35424a';
    } else {
        changeStyleBtn.textContent = 'Dark Mode';
        document.body.style.backgroundColor = '#f4f4f4';
        document.body.style.color = '#333';
        document.querySelector('header').style.backgroundColor = '#35424a';
        document.querySelector('footer').style.backgroundColor = '#35424a';
    }
});


// Button hover effect
changeStyleBtn.addEventListener('mouseover', () => {
    changeStyleBtn.style.backgroundColor = '#666';
});
changeStyleBtn.addEventListener('mouseout', () => {
    changeStyleBtn.style.backgroundColor = '';
});

// Helper: Email format validator
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Helper function to show messages
function showMessage(message, type) {
    messageElement.textContent = message;
    messageElement.className = type;

    setTimeout(() => {
        messageElement.textContent = '';
        messageElement.className = '';
    }, 3000);
}

// Initial dynamic content
mainTitle.textContent = 'LOGIN FORM';
