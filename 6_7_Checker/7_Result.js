document.addEventListener('DOMContentLoaded', function() {
    // Get selected symptoms from localStorage
    const selectedSymptoms = JSON.parse(localStorage.getItem('selectedSymptoms')) || [];
    
    // Display selected symptoms
    const symptomsList = document.getElementById('symptomsList');
    selectedSymptoms.forEach(symptom => {
        const li = document.createElement('li');
        li.textContent = symptom;
        symptomsList.appendChild(li);
    });
    
    // Decision tree for condition matching
    const results = analyzeSymptoms(selectedSymptoms);
    
    // Display potential causes
    const causesContainer = document.getElementById('causes');
    if (results.causes.length > 0) {
        results.causes.forEach(cause => {
            const causeElement = document.createElement('div');
            causeElement.className = 'cause-item';
            causeElement.textContent = cause;
            causesContainer.appendChild(causeElement);
        });
    } else {
        causesContainer.textContent = 'No specific causes identified based on the provided symptoms.';
    }
    
    // Display recommendations
    const recommendationsContainer = document.getElementById('recommendations');
    if (results.recommendations.length > 0) {
        results.recommendations.forEach(recommendation => {
            const recElement = document.createElement('div');
            recElement.className = 'recommendation-item';
            recElement.textContent = recommendation;
            recommendationsContainer.appendChild(recElement);
        });
    } else {
        recommendationsContainer.textContent = 'No specific recommendations available.';
    }
    
    // Back button handler
    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = '6_Checker.html';
    });
});

// Function to analyze symptoms and return potential causes and recommendations
function analyzeSymptoms(symptoms) {
    // Convert symptoms to lowercase for case-insensitive matching
    const lowerSymptoms = symptoms.map(s => s.toLowerCase());
    
    // Initialize results
    const results = {
        causes: [],
        recommendations: []
    };
    
    // Check for common cold
    if (
        (lowerSymptoms.includes('runny nose') || lowerSymptoms.includes('cough')) &&
        lowerSymptoms.includes('sore throat')
    ) {
        results.causes.push('Common Cold');
        results.recommendations.push('Rest and stay hydrated');
        results.recommendations.push('Over-the-counter cold medications may help relieve symptoms');
    }
    
    // Check for flu
    if (
        lowerSymptoms.includes('fever') &&
        (lowerSymptoms.includes('fatigue') || lowerSymptoms.includes('muscle aches')) &&
        (lowerSymptoms.includes('cough') || lowerSymptoms.includes('sore throat'))
    ) {
        results.causes.push('Influenza (Flu)');
        results.recommendations.push('Rest and stay hydrated');
        results.recommendations.push('Consider antiviral medications if diagnosed early');
        results.recommendations.push('Consult a healthcare provider if symptoms are severe');
    }
    
    // Check for allergies
    if (
        lowerSymptoms.includes('runny nose') &&
        !lowerSymptoms.includes('fever')
    ) {
        results.causes.push('Allergies');
        results.recommendations.push('Avoid known allergens');
        results.recommendations.push('Consider over-the-counter antihistamines');
    }
    
    // Check for food poisoning
    if (
        lowerSymptoms.includes('nausea') &&
        lowerSymptoms.includes('diarrhea')
    ) {
        results.causes.push('Food Poisoning or Gastroenteritis');
        results.recommendations.push('Stay hydrated with clear fluids');
        results.recommendations.push('Rest and avoid solid foods until symptoms improve');
        results.recommendations.push('Seek medical attention if symptoms are severe or persist');
    }
    
    // Check for COVID-19
    if (
        (lowerSymptoms.includes('fever') || lowerSymptoms.includes('cough')) &&
        (lowerSymptoms.includes('fatigue') || lowerSymptoms.includes('shortness of breath'))
    ) {
        results.causes.push('COVID-19');
        results.recommendations.push('Get tested for COVID-19');
        results.recommendations.push('Self-isolate until you receive test results');
        results.recommendations.push('Contact healthcare provider for guidance');
    }
    
    // Check for strep throat
    if (
        lowerSymptoms.includes('sore throat') &&
        lowerSymptoms.includes('fever') &&
        !lowerSymptoms.includes('cough')
    ) {
        results.causes.push('Strep Throat');
        results.recommendations.push('See a doctor for testing and possible antibiotics');
        results.recommendations.push('Rest and drink warm liquids');
        results.recommendations.push('Take over-the-counter pain relievers for discomfort');
    }
    
    // General recommendations for any combination of symptoms
    if (lowerSymptoms.includes('fever')) {
        results.recommendations.push('Monitor your temperature regularly');
        results.recommendations.push('Stay hydrated and rest');
    }
    
    if (lowerSymptoms.includes('cough') || lowerSymptoms.includes('sore throat')) {
        results.recommendations.push('Drink warm liquids and use throat lozenges for comfort');
    }
    
    if (lowerSymptoms.includes('fatigue')) {
        results.recommendations.push('Ensure you get adequate rest and sleep');
    }
    
    // If no specific condition matched, provide general advice
    if (results.causes.length === 0) {
        results.causes.push('Unspecified condition');
        results.recommendations.push('Monitor your symptoms');
        results.recommendations.push('Consult with a healthcare provider if symptoms persist or worsen');
        results.recommendations.push('Ensure adequate rest and hydration');
    }
    
    // Remove duplicate recommendations
    results.recommendations = [...new Set(results.recommendations)];
    
    return results;
}