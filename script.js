function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        number : document.getElementById("number").value,
        event: document.getElementById("event").value,
        details : document.getElementById("details").value,
    }
    
    event.preventDefault();

    emailjs.send("service_l57rlog","template_zrkupci",parms).then(alert("Thank for contacting us. We'll get back to you shortly!"));
}