document.getElementById('lungCancerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    predictRisk();
});

function predictRisk() {

    const age = parseInt(document.getElementById('age').value);
    const gender = parseInt(document.getElementById('gender').value);
    const airPollution = parseInt(document.getElementById('air_pollution').value);
    const alcoholUse = parseInt(document.getElementById('alcohol_use').value);
    const dustAllergy = parseInt(document.getElementById('dust_allergy').value);
    const occupationalHazards = parseInt(document.getElementById('occupational_hazards').value);
    const geneticRisk = parseInt(document.getElementById('genetic_risk').value);
    const chronicLungDisease = parseInt(document.getElementById('chronic_lung_disease').value);
    const balancedDiet = parseInt(document.getElementById('balanced_diet').value);
    const obesity = parseInt(document.getElementById('obesity').value);
    const smoking = parseInt(document.getElementById('smoking').value);
    const passiveSmoker = parseInt(document.getElementById('passive_smoker').value);
    const chestPain = parseInt(document.getElementById('chest_pain').value);
    const coughingBlood = parseInt(document.getElementById('coughing_blood').value);
    const fatigue = parseInt(document.getElementById('fatigue').value);
    const weightLoss = parseInt(document.getElementById('weight_loss').value);
    const shortnessBreath = parseInt(document.getElementById('shortness_breath').value);
    const wheezing = parseInt(document.getElementById('wheezing').value);

    let riskScore = 0;

    if (age >= 60) riskScore += 30;
    else if (age >= 50) riskScore += 20;
    else if (age >= 40) riskScore += 10;
    
    if (gender === 1) riskScore += 5;

    riskScore += (airPollution - 1) * 10;
    riskScore += (dustAllergy - 1) * 5;
    riskScore += (occupationalHazards - 1) * 15;
    riskScore += (alcoholUse - 1) * 5;
    riskScore += (smoking - 1) * 20;
    riskScore += (passiveSmoker - 1) * 10;
    riskScore += (3 - balancedDiet) * 5; 
    riskScore += (obesity - 1) * 5;
    riskScore += (geneticRisk - 1) * 15;
    riskScore += (chronicLungDisease - 1) * 20;
    riskScore += (chestPain - 1) * 10;
    riskScore += (coughingBlood - 1) * 25;
    riskScore += (fatigue - 1) * 5;
    riskScore += (weightLoss - 1) * 10;
    riskScore += (shortnessBreath - 1) * 15;
    riskScore += (wheezing - 1) * 10;

    const riskPercentage = Math.min(100, Math.max(0, riskScore));

    const resultDiv = document.getElementById('result');
    const riskLevelDiv = document.getElementById('riskLevel');
    const riskDescriptionDiv = document.getElementById('riskDescription');

    resultDiv.style.display = 'block';
    
    if (riskPercentage >= 70) {
        riskLevelDiv.textContent = `High Risk: ${riskPercentage}%`;
        riskLevelDiv.className = 'risk-level high';
        riskDescriptionDiv.innerHTML = 'Your risk of lung cancer appears to be high. <strong>Please consult with a healthcare professional</strong> for a comprehensive evaluation. Early detection is crucial for successful treatment.';
    } else if (riskPercentage >= 40) {
        riskLevelDiv.textContent = `Medium Risk: ${riskPercentage}%`;
        riskLevelDiv.className = 'risk-level medium';
        riskDescriptionDiv.innerHTML = 'Your risk of lung cancer is moderate. Consider making lifestyle changes to reduce your risk factors and discuss screening options with your doctor.';
    } else {
        riskLevelDiv.textContent = `Low Risk: ${riskPercentage}%`;
        riskLevelDiv.className = 'risk-level low';
        riskDescriptionDiv.innerHTML = 'Your risk of lung cancer appears to be low. Maintain healthy habits to keep your risk low. Regular check-ups are still recommended.';
    }
}