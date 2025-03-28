function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    if (weight === "" || height === "") {
        document.getElementById("result").innerHTML = 
            "<span style='color: red;'>Please enter both values!</span>";
        return;
    }
    height = height / 100;
    let bmi = (weight / (height * height)).toFixed(2);
    let category = "";
    let colorClass = "";
    if (bmi < 18.5) {
        category = "Underweight";
        colorClass = "underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight";
        colorClass = "normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        colorClass = "overweight";
    } else {
        category = "Obese";
        colorClass = "obese";
    }
    document.getElementById("result").innerHTML = 
        `Your BMI is <strong>${bmi}</strong> <br> <span class="${colorClass}">${category}</span>`;
}