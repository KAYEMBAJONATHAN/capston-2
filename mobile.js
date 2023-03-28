const speakersList = [
  {
    name: 'John Kayode',
    proffesionalism: 'Professor at School of Agric-Science',
    img: './images/speaker_01.png',
    description:
      'Cultivators of the earth are the most valuable citizens. ',
  },
  {
    name: 'Luke Sean',
    proffesionalism: 'CEO Catenx Farms',
    img: './images/speaker_02.png',
    description:
      'Future Farmers of America. Group who take ag classes and are going to inherit the farm. ',
  },
  {
    name: 'Kathy Jonas',
    proffesionalism: 'Founder: Wealth of Words',
    img: './images/speaker_03.png',
    description: 'A farmer is a magician who produces money from the mud.',
  },
  {
    name: 'May Lukas',
    proffesionalism: 'professor at Harvard Law School',
    img: './images/speaker_04.png',
    description:
      'Woods are grim places. Farmers shoot squirrels, crows, magpies,',
  },
  {
    name: 'Theresa Baker',
    proffesionalism: 'professor at West Africa School of Agriculture',
    img: './images/speaker_05.png',
    description:
      'Focusing on a collaborative approach in a networked environment, ',
  },
  {
    name: 'Logan Baker',
    proffesionalism: 'professor at Harvard Law School',
    img: './images/speaker_06.png',
    description:
      'If you can not plant trees, just imagine how much farmers are doing you a favour by giving you food to survive.',
  },
];

function Mobile(speakers) {
  const container = document.querySelector('#mobile_skpeakers');
  const speakerCards = container.querySelectorAll('.mobile_talk');
  for (let i = 0; i < speakers.length; i += 1) {
    const speakerData = speakers[i];
    const speakerCard = speakerCards[i].querySelector('img');
    speakerCard.src = speakerData.img;
    speakerCard.alt = speakerData.name;
    const content = speakerCards[i].querySelector('p');
    content.innerHTML = `
                <span class="name">${speakerData.name}</span>
                <br>
                <span class="proffesionalism">${speakerData.proffesionalism}</span>
                <br> ${speakerData.description}
              `;
  }
}

Mobile(speakersList);
