const mascot = document.querySelector('.bear-mascot');
const passwordInput = document.getElementById('password');
let selectedRole = 'student';

// Mascot Hide & Seek
passwordInput.addEventListener('focus', () => mascot.classList.add('cover-eyes'));
passwordInput.addEventListener('blur', () => mascot.classList.remove('cover-eyes'));

// Role Switch
document.querySelectorAll('.role-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.role-option').forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        selectedRole = this.getAttribute('data-role');
    });
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = passwordInput.value;
    
    // التحويل المباشر بدون /src/
    if (selectedRole === 'doctor') {
        if (email === "Selmi@gmail.com" && password === "123456789") {
            window.location.href = 'doctor_dashboard.html';
        } else {
            alert("بيانات الدكتور غير صحيحة!");
        }
    } else {
        window.location.href = 'student_home.html';
    }
});