/*$('contactForm').submit(function(e) {
    let nameFirst = document.getElementById('firstName').value;
    let nameLast = document.getElementById('lastName').value;
    let choixSujet = document.getElementById('choix').value;
    let email = document.getElementById('mail').value;
    let msg = document.getElementById('message').value;
    let error = document.getElementById('errorMessage');

    if (!nameFirst.value || !nameLast.value || !email.value || !message.value || choixSujet.value) === {
        alert('Informations manquantes');
    } else {
        e.preventDefault();
        $(this).get(0).reset();
        alert('Envoi réussi');
    }
});*/

function validation() {
    let nameFirst = document.getElementById('firstName').value;
    let nameLast = document.getElementById('lastName').value;
    let choixSujet = document.getElementById('choix').value;
    let email = document.getElementById('mail').value;
    let msg = document.getElementById('message').value;
    let error = document.getElementById('errorMessage');

    error.style.padding = "10px";
    let text;
    if (nameFirst.length < 2) {
        text = "Please Enter valid Name";
        error.innerHTML = text;
        return false;
    }
    if (nameLast.length < 2) {
        text = "Please Enter valid Name";
        error.innerHTML = text;
        return false;
    }

    if (choixSujet === "") {
        text = "Choissisez un sujet";
        error.innerHTML = text;
        return false;
    }

    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter valid Email";
        error.innerHTML = text;
        return false;
    }

    if (msg.length <= 30) {
        text = "Please Enter More Than 30 Characters";
        error.innerHTML = text;
        return false;
    }
    alert("Message envoyé!");
    return true;
}