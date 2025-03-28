document.addEventListener('DOMContentLoaded', function() {
    const symptoms = [
        'Fever','Headache','Cough','Fatigue','Sore throat','Runny nose','Nausea','Diarrhea','Muscle aches','Shortness of breath'
    ];
    const dropdowns = [
        document.getElementById('symptom1'),
        document.getElementById('symptom2'),
        document.getElementById('symptom3')
    ];
    dropdowns.forEach(dropdown => {
        symptoms.forEach(symptom => {
            const option = document.createElement('option');
            option.value = symptom;
            option.textContent = symptom;
            dropdown.appendChild(option);
        });
    });
    const form = document.getElementById('symptomForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const selectedSymptoms = [
            document.getElementById('symptom1').value,
            document.getElementById('symptom2').value,
            document.getElementById('symptom3').value
        ];
        localStorage.setItem('selectedSymptoms', JSON.stringify(selectedSymptoms));
        window.location.href = '7_result.html';
    });
});