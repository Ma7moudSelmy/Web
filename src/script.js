const mascot = document.querySelector('.bear-mascot');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const roleOptions = document.querySelectorAll('.role-option');
let selectedRole = 'student';

// 1. تفاعل إظهار/إخفاء الباسورد مع الدب
togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // تغيير شكل الأيقونة
    this.innerText = type === 'password' ? '👁️' : '🙈';
    
    // تفاعل الدب: لو الباسورد اتكشف الدب "يتحرج" ويغطي وشه أكتر
    if (type === 'text') {
        mascot.classList.add('peek-mode');
        mascot.classList.remove('cover-eyes');
    } else {
        mascot.classList.remove('peek-mode');
        mascot.classList.add('cover-eyes');
    }
});

// 2. حركة الدب عند الـ Focus (لو مخفي يغطي عينه)
passwordInput.addEventListener('focus', () => {
    if (passwordInput.getAttribute('type') === 'password') {
        mascot.classList.add('cover-eyes');
    }
});

passwordInput.addEventListener('blur', () => {
    mascot.classList.remove('cover-eyes');
    mascot.classList.remove('peek-mode');
});

// 3. اختيار الرتبة (طالب / دكتور)
roleOptions.forEach(option => {
    option.addEventListener('click', function() {
        roleOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        selectedRole = this.getAttribute('data-role');
    });
});

// 4. معالجة تسجيل الدخول والتحويلات
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = passwordInput.value;

    // حالة الأدمن (أولوية قصوى)
    if (email === "SelmiAdmin@gmail.com" && password === "12345678910") {
        window.location.href = 'admin_dashboard.html';
        return;
    }

    // حالة الدكتور
    if (selectedRole === 'doctor') {
        if (email === "Selmi@gmail.com" && password === "123456789") {
            window.location.href = 'doctor_dashboard.html';
        } else {
            alert("بيانات الدكتور غير صحيحة!");
        }
    } 
    // حالة الطالب (الافتراضية)
    else {
        // يمكنك إضافة شرط إيميل وباسورد للطالب هنا لو حابب
        window.location.href = 'student_home.html';
    }
});