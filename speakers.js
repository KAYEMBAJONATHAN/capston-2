const speakersData = [
  {
    name: 'John Kayode',
    proffesionalism: 'Professor at University of Pretoria',
    img: './images/speaker_01.png',
    description:
      'Cultivators of the earth are the most valuable citizens. They are the most vigorous, the most independent, the most virtuous,',
  },
  {
    name: 'Luke Sean',
    proffesionalism: 'CEO at Retro Rabbit',
    img: './images/speaker_02.png',
    description:
      'Future Farmers of America. Group who take ag classes and are going to inherit the farm. Hot shit around here,',
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
      'Woods are grim places. Farmers shoot squirrels, crows, magpies, and hang them up on trees to warn Mother Nature to get it together or else.',
  },
  {
    name: 'Theresa Baker',
    proffesionalism: 'professor at Wit university',
    img: './images/speaker_05.png',
    description:
      'Focusing on a collaborative approach in a networked environment, she created the concept of mixed and rotational farming.',
  },
  {
    name: 'Logan Baker',
    proffesionalism: 'professor at Harvard unisa',
    img: './images/speaker_06.png',
    description:
      'If you can not plant trees, just imagine how much farmers are doing you a favour by giving you food to survive.',
  },
];
function populateSpeakersCards(speakers) {
  const container = document.querySelector('#desktop_speakers');
  const speakerCards = container.querySelectorAll('.col-6');

  for (let i = 0; i < speakers.length; i += 1) {
    const speakerData = speakers[i];
    const speakerCard = speakerCards[i];
    const img = speakerCard.querySelector('img');
    img.src = speakerData.img;
    img.alt = speakerData.name;
    const content = speakerCard.querySelector('p');
    content.innerHTML = `
        <span class="name">${speakerData.name}</span>
        <br>
        <span class="proffesionalism">${speakerData.proffesionalism}</span>
        <br> ${speakerData.description}
      `;
  }
}

populateSpeakersCards(speakersData);
