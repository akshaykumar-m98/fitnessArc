// Sample user data for demo purposes
const users = [];

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        document.getElementById('home-page').style.display = 'none';
        document.getElementById('gender-page').style.display = 'block';
    } else {
        alert('Invalid username or password');
    }
}

function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {
        users.push({ username, password });
        alert('Signup successful! Please login.');
    } else {
        alert('Please enter a valid username and password');
    }
}

function selectGender(gender) {
    alert(`Gender selected: ${gender}`);
    document.getElementById('gender-page').style.display = 'none';
    document.getElementById('bmi-page').style.display = 'block';
}

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    if (height > 0 && weight > 0) {
        const bmi = weight / (height * height);
        document.getElementById('bmi-result').innerText = `Your BMI is ${bmi.toFixed(2)}`;
    } else {
        alert('Please enter valid height and weight');
    }
}
