const imageData = [
    {
        imageUrl: '../images/Betel.png',
        title: 'Betelgeuse Star',
        description: 'This is a star located in the constellation Orion. This star is located around 640 light years from Earth and its radius is about 617 million km! Fun fact: This star is predicted to go supernova soon. This will be one of the brightest objects in the sky when it does.'
    },
    {
        imageUrl: '../images/CrabNebula.jpg',
        title: 'M1 - Crab Nebula',
        description: 'Located in the constellation Taurus, we have the Crab Nebula! This nebula is located around 6500 light years from Earth. This is a supernova remnant that was acctually seen by astronomers around 1000 years ago!'
    },
    {
        imageUrl: '../images/M33 Post Again.jpg',
        title: 'M33 - Triangulum Galaxy',
        description: 'My first galaxy photo! This is a spiral galaxy located around 2.73 million light years from Earth. This galaxy houses around 40 billion stars and is about 60,000 light years in diameter!'
    },
    {
        imageUrl: '../images/M36.jpg',
        title: 'M36 - Star Cluster',
        description: 'Next we have the M36 star cluster! This is a open cluster of many stars. It is also known as the pinwheel cluster. It has a diameter of about 14 light years!'
    },
    {
        imageUrl: '../images/M37_Edit.jpg',
        title: 'M37 - Star Cluster',
        description: 'One of the brighter star clusters in the sky. This cluster is located about 4500 light years from Earth! Its diameter is around 20-26 light years and in the middle it houses around 500 stars!'
    },
    {
        imageUrl: '../images/M45 Edit.jpg',
        title: 'M45 Star Cluster - Pleiades',
        description: 'One of the most popular deep sky objects to image! It is commonly refered to as the seven sisters. Unfortunately for my photo, I was only able to capture 4 of the main stars. Located around 444 light years from Earth!'
    },
    {
        imageUrl: '../images/OrionEdited.jpg',
        title: 'Orion Nebula',
        description: 'One of the most popular Nebulas in the sky! This is located in the Orion constellation and is located around 1350 light years from Earth! This objects is actually visible with the naked eye! It has a diameter of around 24 light years!'
    }
];

function createCards() {
    const container = document.getElementById('container');

    imageData.forEach(data => {
      const card = document.createElement('div');
      card.classList.add('card');

      const img = document.createElement('img');
      img.src = data.imageUrl;
      img.alt = 'Image';
      card.appendChild(img);

      const cardContent = document.createElement('div');
      cardContent.classList.add('card-content');

      const title = document.createElement('h3');
      title.classList.add('card-title');
      title.textContent = data.title;
      cardContent.appendChild(title);

      const description = document.createElement('p');
      description.classList.add('card-description');
      description.textContent = data.description;
      cardContent.appendChild(description);

      card.appendChild(cardContent);

      container.appendChild(card);
    });
}

window.onload = createCards;