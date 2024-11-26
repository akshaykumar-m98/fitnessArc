// Save users in localStorage
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Load users from localStorage
function loadUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const users = loadUsers();
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // alert('Login successful!');
        window.location.href = 'gender.html';
    } else {
        alert('Invalid username or password');
    }
}

function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {
        const users = loadUsers();
        users.push({ username, password });
        saveUsers(users);
        alert('Signup successful! Please login.');
        window.location.href = 'login.html';
    } else {
        alert('Please enter a valid username and password');
    }
}

function selectGender(gender) {
    // alert(`Gender selected: ${gender}`);
    window.location.href = 'bmi.html';
}

function calculateBMI() {
    const feet = parseInt(document.getElementById('feet').value);
    const inches = parseInt(document.getElementById('inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (feet > 0 && inches >= 0 && weight > 0) {
        const heightInMeters = (feet * 0.3048) + (inches * 0.0254);
        const bmi = weight / (heightInMeters * heightInMeters);
        const bmiCategory = getBMICategory(bmi);
        const bmiResult = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory})`;

        // Display BMI result
        document.getElementById('result').innerText = bmiResult;

        // Show the result section and Next button
        document.getElementById('bmi-result').style.display = 'block';

        // Store BMI category in session storage
        sessionStorage.setItem('bmiCategory', bmiCategory);
    } else {
        alert('Please enter valid height and weight');
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 45) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

function redirectToRecommendations() {
    const bmiCategory = sessionStorage.getItem('bmiCategory');

    if (bmiCategory === 'Underweight') {
        window.location.href = 'underweight.html';
    } else if (bmiCategory === 'Overweight') {
        window.location.href = 'overweight.html';
    } else {
        // Default redirect if category not specified
        window.location.href = 'recommendations.html';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const categoryTitles = document.querySelectorAll('.category-title');

    categoryTitles.forEach(title => {
        title.addEventListener('click', function() {
            const exerciseContainer = this.nextElementSibling;
            exerciseContainer.classList.toggle('expand');
            this.querySelector('.toggle-icon').textContent = exerciseContainer.classList.contains('expand') ? '▲' : '▼';
        });
    });
});

