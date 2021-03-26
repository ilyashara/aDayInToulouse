function validation() {
  let nameFirst = document.getElementById("firstName").value;
  let nameLast = document.getElementById("lastName").value;
  let choixSujet = document.getElementById("choix").value;
  let email = document.getElementById("mail").value;
  let msg = document.getElementById("message").value;
  let error = document.getElementById("errorMessage");

  error.style.padding = "10px";
  let text;
  if (nameFirst.length < 2) {
    text = "Il nous faut un PRÉNOM valide";
    error.innerHTML = text;
    return false;
  }
  if (nameLast.length < 2) {
    text = "Il nous faut un NOM valide";
    error.innerHTML = text;
    return false;
  }

  if (choixSujet === "") {
    text = "Choisi un sujet";
    error.innerHTML = text;
    return false;
  }

  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Renseigne ton adresse Mail";
    error.innerHTML = text;
    return false;
  }

  if (msg.length <= 5) {
    text = "N'oublie pas d'écrire ton message";
    error.innerHTML = text;
    return false;
  }
  alert("Message envoyé ! Notre équipe va traiter ta demande");
  return true;
}
