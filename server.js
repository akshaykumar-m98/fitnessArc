const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Mock data for demonstration (replace with actual ChatGPT integration)
const recommendationsByCategory = {
    'Underweight': [
        { title: 'High-Calorie Diet Plan', description: 'Description of high-calorie diet plan...' },
        { title: 'Strength Training Exercises', description: 'Description of strength training exercises...' }
    ],
    'Normal weight': [
        { title: 'Balanced Diet Plan', description: 'Description of balanced diet plan...' },
        { title: 'Cardio Exercises', description: 'Description of cardio exercises...' }
    ],
    'Overweight': [
        { title: 'Low-Calorie Diet Plan', description: 'Description of low-calorie diet plan...' },
        { title: 'Interval Training Exercises', description: 'Description of interval training exercises...' }
    ],
    'Obese': [
        { title: 'Medical Consultation Required', description: 'You should consult with a medical professional for personalized advice.' }
    ]
};

// Endpoint to fetch recommendations based on BMI category
app.get('/api/recommendations', (req, res) => {
    // Replace with actual logic to fetch recommendations from ChatGPT or database
    const bmiCategory = req.query.category;

    if (recommendationsByCategory[bmiCategory]) {
        res.json(recommendationsByCategory[bmiCategory]);
    } else {
        res.status(404).json({ error: 'Recommendations not found for this category' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
