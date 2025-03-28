const doctors = [
    { name: "Dr. Vishal Reddy", specialty: "Pediatrician", location: "Lucknow", rating: 4.5},
    { name: "Dr. Arjun Mehta", specialty: "Cardiologist", location: "Delhi", rating: 4.8},
    { name: "Dr. Rajiv Kapoor", specialty: "Neurologist", location: "Hyderabad", rating: 4.2},
    { name: "Dr. Priya Sharma", specialty: "Dermatologist", location: "Hyderabad", rating: 4.6},
    { name: "Dr. Rekha Naidu", specialty: "Dermatologist", location: "Delhi", rating: 4.1},
    { name: "Dr. Pooja Bansal", specialty: "Neurologist", location: "Lucknow", rating: 3.5},
    { name: "Dr. Meera Choudhary", specialty: "Cardiologist", location: "Lucknow", rating: 4.6},
    { name: "Dr. Anjali Verma", specialty: "Pediatrician", location: "Hyderabad", rating: 3.8},
    { name: "Dr. Neha Joshi", specialty: "Dermatologist", location: "Lucknow", rating: 4.7},
    { name: "Dr. Tarun Aggarwal", specialty: "Neurologist", location: "Hyderabad", rating: 3.9},
    { name: "Dr. Aditya Singh", specialty: "Neurologist", location: "Delhi", rating: 4.4},
    { name: "Dr. Rohan Khanna", specialty: "Cardiologist", location: "Hyderabad", rating: 4.0},
    { name: "Dr. Kavita Iyer", specialty: "Pediatrician", location: "Delhi", rating: 4.9},
    { name: "Dr. Sandeep Malhotra", specialty: "Cardiologist", location: "Delhi", rating: 3.9},
    { name: "Dr. Bhavya Narang", specialty: "Dermatologist", location: "Hyderabad", rating: 4.8}
];

const doctorList = document.getElementById("doctor-list");
const searchInput = document.getElementById("search");
const specialtyFilter = document.getElementById("specialty-filter");
const locationFilter = document.getElementById("location-filter");
const ratingFilter = document.getElementById("rating-filter");

function displayDoctors(filteredDoctors) {
    doctorList.innerHTML = "";
    filteredDoctors.forEach(doctor => {
        const card = document.createElement("div");
        card.classList.add("doctor-card");
        card.innerHTML = `
            <h2>${doctor.name}</h2>
            <p><strong>Specialty:</strong> ${doctor.specialty}</p>
            <p><strong>Location:</strong> ${doctor.location}</p>
            <p><strong>Rating:</strong> ${doctor.rating}</p>
        `;
        doctorList.appendChild(card);
    });
}

function filterDoctors() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedSpecialty = specialtyFilter.value;
    const selectedLocation = locationFilter.value;
    const selectedRating = parseFloat(ratingFilter.value);

    const filteredDoctors = doctors.filter(doctor => {
        return (
            (doctor.name.toLowerCase().includes(searchTerm) || searchTerm === "") &&
            (doctor.specialty === selectedSpecialty || selectedSpecialty === "") &&
            (doctor.location === selectedLocation || selectedLocation === "") &&
            (doctor.rating >= selectedRating || isNaN(selectedRating))
        );
    });
    displayDoctors(filteredDoctors);
}

// Event listeners for filtering
searchInput.addEventListener("input", filterDoctors);
specialtyFilter.addEventListener("change", filterDoctors);
locationFilter.addEventListener("change", filterDoctors);
ratingFilter.addEventListener("change", filterDoctors);

// Display all doctors on load
displayDoctors(doctors);