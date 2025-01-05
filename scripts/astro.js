const imageData = [
    {
        imageUrl: './images/Betel.png',
        title: 'Betelgeuse Star',
        description: 'This is a star located in the constellation Orion. This star is located around 640 light years from Earth and its radius is about 617 million km! Fun fact: This star is predicted to go supernova soon. This will be one of the brightest objects in the sky when it does.'
    },
    {
        imageUrl: './images/CrabNebula.jpg',
        title: 'M1 - Crab Nebula',
        description: 'Located in the constellation Taurus, we have the Crab Nebula! This nebula is located around 6500 light years from Earth. This is a supernova remnant that was actually seen by astronomers around 1000 years ago!'
    },
    {
        imageUrl: '../images/M33 Post Again.jpg',
        title: 'M33 - Triangulum Galaxy',
        description: 'My first galaxy photo! This is a spiral galaxy located around 2.73 million light years from Earth. This galaxy houses around 40 billion stars and is about 60,000 light years in diameter!'
    },
    {
        imageUrl: './images/M36.jpg',
        title: 'M36 - Star Cluster',
        description: 'Next we have the M36 star cluster! This is a open cluster of many stars. It is also known as the pinwheel cluster. It has a diameter of about 14 light years!'
    },
    {
        imageUrl: './images/M37_Edit.jpg',
        title: 'M37 - Star Cluster',
        description: 'One of the brighter star clusters in the sky. This cluster is located about 4500 light years from Earth! Its diameter is around 20-26 light years and in the middle it houses around 500 stars!'
    },
    {
        imageUrl: './images/M45 Edit.jpg',
        title: 'M45 Star Cluster - Pleiades',
        description: 'One of the most popular deep sky objects to image! It is commonly refered to as the seven sisters. Unfortunately for my photo, I was only able to capture 4 of the main stars. Located around 444 light years from Earth!'
    },
    {
        imageUrl: './images/OrionEdited.jpg',
        title: 'Orion Nebula',
        description: 'One of the most popular Nebulas in the sky! This is located in the Orion constellation and is located around 1350 light years from Earth! This objects is actually visible with the naked eye! It has a diameter of around 24 light years!'
    },
    {
        imageUrl: './images/M51.jpg',
        title: 'M51 - Whirlpool Galaxy',
        description: 'Another one of my galaxy shots! Here we have M51! This was actually the first galaxy to be classfied as spiral! This galaxy is located about 31 million light years from Earth! This means we are seeing it as it was 31 million years ago! It contains around 100 billion stars and its diameter is around 60,000 light years!'
    },
    {
        imageUrl: './images/m44.png',
        title: 'M44 - Star Cluster',
        description: 'Here is the M44 star cluster, also known as the beehive cluster! This is a open cluster in the constellation Cancer! This open cluster is one of the nearest to Earth located around 577 light years away and is about 7.5 light years long. It contains around 1000 stars but the ones to notice are the blue and orange ones! This is a big brighter since this was shot during a full moon.'
    },
    {
        imageUrl: './images/M3.jpg',
        title: 'M3 - Star Cluster',
        description: 'Messier 3 is a globular cluster of stars in the northern constellation of Canes Venatici. This star clusters radius spans about 90 light years long! It lies around 33,000 light years from Earth. This star cluster holds more than 500,000 stars like our own sun! Crazy!'
    },
    {
        imageUrl: './images/M13.jpg',
        title: 'M13 - Star Cluster',
        description: 'This is a globular cluster of stars in the constellation of Hercules. It lies around 25,000 light years from Earth and houses around 100,000 stars!'
    },
    {
        imageUrl: './images/procyon.jpg',
        title: 'Procyon Star',
        description: 'Procyon is the brightest star in the constellation of Canis Minor and usually the eighth-brightest star in the night sky! This star lies around 11 light years from Earth, which is close relatively speaking! '
    },
    {
        imageUrl: './images/markarians_chain.jpg',
        title: 'Markarians Chain (Galaxies!)',
        description: 'Markarians Chain is a stretch of galaxies that forms part of the Virgo Cluster. In this photo, we cannot see the entire chain, but we can see some of the main galaxies including M84, and M86!'
    },
    {
        imageUrl: './images/M39.jpg',
        title: 'M39 Cluster',
        description: ''
    },
    {
        imageUrl: './images/M31.png',
        title: 'M31 - Andromeda Galaxy',
        description: ''
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