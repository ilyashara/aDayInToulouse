/*Création des Activités*/

const cards = document.querySelector(".cards-activities");

const articlesActivities = [
  {
    name: "Découverte du Canal du Midi",
    picture: 'images/Activités/Canal midi.jpg'
  },
  {
    name: "Visite AIRBUS",
    picture: 'images/Activités/A380.jpg'
  },
  {
    name: "Visite de la Cité de l'Espace",
    picture: "images/Activités/Cité espace.jpg"
  },
  {
    name: "Voir un match du Stade Toulousain",
    picture: "images/Activités/Stade toulousain.png"
  },
  {
    name: "Rencontre avec le Minotaure",
    picture: "images/Activités/Halle Machine.jpg"
  }
];

function createCard(title, imageUrl) {
  const card = document.createElement("div");
  card.classList.add("card-activities");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header-activities");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `${imageUrl}`;
  cardImg.classList.add("card-img-activities");
  cardHeader.appendChild(cardImg);

 
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body-activities");
  card.appendChild(cardBody);



  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title-activities");
  cardTitle.innerHTML = `${title}`;
  cardBody.appendChild(cardTitle);

}

for (let i = 0; i < articlesActivities.length; i++) {
  createCard(articlesActivities[i].name, articlesActivities[i].picture);
}


/*Création des Restaurants*/

const cardsRestaurant = document.querySelector(".cards-restaurant");

const articlesRestaurant = [
  {
    name: "Découverte du Canal du Midi",
    picture: 'images/Activités/Canal midi.jpg'
  },
  {
    name: "Visite AIRBUS",
    picture: 'images/Activités/A380.jpg'
  },
  {
    name: "Visite de la Cité de l'Espace",
    picture: "images/Activités/Cité espace.jpg"
  },
  {
    name: "Voir un match du Stade Toulousain",
    picture: "images/Activités/Stade toulousain.png"
  },
  {
    name: "Rencontre avec le Minotaure",
    picture: "images/Activités/Halle Machine.jpg"
  }
];

function createCardRestaurant(title, imageUrl) {
  const cardRestaurant = document.createElement("div");
  cardRestaurant.classList.add("card-restaurant");
  cardsRestaurant.appendChild(card);

  const cardHeaderRestaurant = document.createElement("div");
  cardHeaderRestaurant.classList.add("card-header-restaurant");
  cardRestaurant.appendChild(cardHeaderRestaurant);

  const cardImgRestaurant = document.createElement("div");
  cardImgRestaurant.style.backgroundImage = `${imageUrl}`;
  cardImgRestaurant.classList.add("card-img-restaurant");
  cardHeaderRestaurant.appendChild(cardImgRestaurant);

 
  const cardBodyRestaurant = document.createElement("div");
  cardBodyRestaurant.classList.add("card-body-restaurant");
  cardRestaurant.appendChild(cardBodyRestaurant);



  const cardTitleRestaurant = document.createElement("h2");
  cardTitleRestaurant.classList.add("card-title-restaurant");
  cardTitleRestaurant.innerHTML = `${title}`;
  cardBodyRestaurant.appendChild(cardTitleRestaurant);

}

for (let j = 0; j < articlesRestaurant.length; j++) {
  createCardRestaurant(articlesRestaurant[j].name, articlesRestaurant[j].picture);
}
