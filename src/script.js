const bear = document.querySelector('.bear');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
let selectedRole = 'student';

// Mascot Logic
passwordInput.addEventListener('focus', () => bear.classList.add('cover-eyes'));
passwordInput.addEventListener('blur', () => bear.classList.remove('cover-eyes'));

// Role Switch
document.querySelectorAll('.role-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.role-option').forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        selectedRole = this.getAttribute('data-role');
    });
});

// Login Execution
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('loginBtn');
    const text = btn.querySelector('.btn-text');
    const loader = document.getElementById('loader');

    text.style.opacity = '0';
    if(loader) loader.style.display = 'block';

    setTimeout(() => {
        const email = emailInput.value;
        const password = passwordInput.value;

        if (selectedRole === 'doctor') {
            if (email === "Selmi@gmail.com" && password === "123456789") {
                window.location.href = 'doctor_dashboard.html';
            } else {
                alert("ACCESS DENIED: Invalid Doctor Credentials");
                resetBtn(text, loader);
            }
        } else {
            window.location.href = 'student_home.html';
        }
    }, 1500);
});

function resetBtn(text, loader) {
    text.style.opacity = '1';
    if(loader) loader.style.display = 'none';
}