document.getElementById('heartRiskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    calculateRisk();
});

function calculateRisk() {
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = parseInt(document.getElementById('gender').value);
    const ap_hi = parseInt(document.getElementById('ap_hi').value);
    const ap_lo = parseInt(document.getElementById('ap_lo').value);
    const cholesterol = parseInt(document.getElementById('cholesterol').value);
    const gluc = parseInt(document.getElementById('gluc').value);
    const smoke = parseInt(document.getElementById('smoke').value);
    const alco = parseInt(document.getElementById('alco').value);
    const active = parseInt(document.getElementById('active').value);

    const bmi = weight / Math.pow(height / 100, 2);

    let riskScore = 0;
    
    if (age >= 60) riskScore += 30;
    else if (age >= 50) riskScore += 20;
    else if (age >= 40) riskScore += 10;
    
    if (gender === 1) riskScore += 5;
    
    if (ap_hi >= 140 || ap_lo >= 90) riskScore += 25;
    else if (ap_hi >= 130 || ap_lo >= 85) riskScore += 15;
    
    if (cholesterol === 3) riskScore += 20;
    else if (cholesterol === 2) riskScore += 10;
    
    if (gluc === 3) riskScore += 15;
    else if (gluc === 2) riskScore += 8;
    
    if (smoke === 1) riskScore += 15;
    if (alco === 1) riskScore += 10;
    if (active === 0) riskScore += 10;
    
    if (bmi >= 30) riskScore += 20;
    else if (bmi >= 25) riskScore += 10;

    const riskPercentage = Math.min(100, Math.max(0, riskScore));

    const resultDiv = document.getElementById('result');
    const riskLevelDiv = document.getElementById('riskLevel');
    const riskDescriptionDiv = document.getElementById('riskDescription');

    resultDiv.style.display = 'block';
    
    if (riskPercentage >= 60) {
        riskLevelDiv.textContent = `High Risk: ${riskPercentage}%`;
        riskLevelDiv.className = 'risk-level high';
        riskDescriptionDiv.textContent = 'Your risk of cardiovascular disease is high. Please consult with a healthcare professional for a comprehensive assessment and advice on risk reduction strategies.';
    } else if (riskPercentage >= 30) {
        riskLevelDiv.textContent = `Medium Risk: ${riskPercentage}%`;
        riskLevelDiv.className = 'risk-level medium';
        riskDescriptionDiv.textContent = 'Your risk of cardiovascular disease is moderate. Consider lifestyle changes and discuss your risk factors with your doctor.';
    } else {
        riskLevelDiv.textContent = `Low Risk: ${riskPercentage}%`;
        riskLevelDiv.className = 'risk-level low';
        riskDescriptionDiv.textContent = 'Your risk of cardiovascular disease appears low. Maintain healthy habits to keep your risk low.';
    }
}