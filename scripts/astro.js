const imageData = [
    {
        imageUrl: '../images/Betel.png',
        title: 'Betelgeuse Star',
        description: ''
    },
    {
        imageUrl: '../images/CrabNebula.jpg',
        title: 'Crab Nebula',
        description: ''
    },
    {
        imageUrl: '../images/M33 Post Again.jpg',
        title: 'M33 - Triangulum Galaxy',
        description: ''
    },
    {
        imageUrl: '../images/M36.jpg',
        title: 'M36 Star Cluster',
        description: ''
    },
    {
        imageUrl: '../images/M37_Edit.jpg',
        title: 'M37 Star Cluster',
        description: ''
    },
    {
        imageUrl: '../images/M45 Edit.jpg',
        title: 'M45 Star Cluster - Pleiades',
        description: ''
    },
    {
        imageUrl: '../images/OrionEdited.jpg',
        title: 'Orion Nebula',
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