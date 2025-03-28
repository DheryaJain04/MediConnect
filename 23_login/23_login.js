document.getElementById("continue").addEventListener("click", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let number = document.getElementById("number").value.trim();
    let email = document.querySelector("input[type='email']").value.trim();
    let password = document.querySelector("input[type='password']").value.trim();

    let nameRegex = /^[A-Za-z\s]{3,50}$/;
    let phoneRegex = /^[0-9]{10}$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^.{6,}$/;

    if (!nameRegex.test(name)) {
        alert("Please enter a valid name (only letters, min 3 characters).");
        return;
    }
    if (!phoneRegex.test(number)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    alert("Form submitted successfully!");
});