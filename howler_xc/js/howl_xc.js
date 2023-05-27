document.addEventListener('DOMContentLoaded', () => {
  let titles = document.getElementsByClassName('animalTitle');
  let animalTitleObj = {};
  

  Array.from(titles).forEach(title => {

    animalTitleObj[title.nextElementSibling.id] = title.textContent;
  });

  for (let id in animalTitleObj) {
    let imgElement = document.getElementById(id);

    imgElement.addEventListener('click', () => {
      playAnimal(animalTitleObj[id]);
    });

    imgElement.addEventListener('mouseover', function() {
      this.style.border = '3px solid red';
    });

    imgElement.addEventListener('mouseout', function() {
      this.style.border = '0px';
    });
  }
});

function playAnimal(animalSound) {
  var sound = new Howl({
    src: [`media/${animalSound}.mp3`, `media/${animalSound}.webm`],
    sprite: {
      Cow: [0, 3000],
      Duck: [0, 3000],
      Horse: [0, 3000],
      Fox: [37500, 7000],
    }
  });
  sound.play(animalSound);
}

