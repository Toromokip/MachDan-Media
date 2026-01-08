function sendMail(event) {
    event.preventDefault();
    
    const params = {
        name: document.getElementById("name").value,
        number: document.getElementById("number").value,
        event: document.getElementById("event").value,
        details: document.getElementById("details").value
    };

    emailjs.send("service_l57rlog", "template_zrkupci", params)
        .then(() => {
            alert("Thank you for contacting us. We'll get back to you shortly!");
            document.querySelector(".contact-form").reset();
        })
        .catch((error) => {
            console.error("Email send error:", error);
            alert("Sorry, there was an error sending your message. Please try again.");
        });
}