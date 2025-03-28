const faqResponses = {
    "What is MediConnect?": "MediConnect is an online platform that connects patients with healthcare providers for consultations, appointments, and health management.",
    "How do I book an appointment?": "To book an appointment, visit our website, choose a doctor, select a time slot, and confirm your booking.",
    "Is MediConnect available 24/7?": "Yes, MediConnect provides 24/7 access to health consultations with available doctors.",
    "Are online consultations secure?": "Absolutely! We use encrypted connections to ensure your medical information remains confidential and secure.",
    "How do I contact support?": "You can contact our support team through the Help section on our website or email us at support@mediconnect.com."
};

function askQuestion(question) {
    const chatHistory = document.getElementById("chat-history");

    // Append User Message
    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.innerText = question;
    chatHistory.appendChild(userMessage);

    // Append Bot Response
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.className = "message bot-message";
        botMessage.innerText = faqResponses[question];
        chatHistory.appendChild(botMessage);

        // Scroll to bottom
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }, 500);
}