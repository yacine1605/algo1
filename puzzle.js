const start = () => {
  const icons = [
    "fa-otter",
    "fa-otter",
    "fa-horse",
    "fa-horse",
    "fa-kiwi-bird",
    "fa-kiwi-bird",
    "fa-hippo",
    "fa-hippo",
    "fa-dragon",
  ];

  let j;


  for (let i = icons.length - 1; i > 1; i--) {
    j = parseInt(Math.random() * (i + 1));
    [icons[i], icons[j]] = [icons[j], icons[i]];
  }
  let fas = document.querySelectorAll(".card_front .fas");
  for (let i = 0; i < fas.length; i++) {
    fas[i].classList.add(icons[i]);
  }
  let card = document.getElementsByClassName("card");
  let icon = [];
  for (let j = 0; j < card.length; j++) {
    card[j].addEventListener('click', () => {
      if (!card[j].classList.contains("visible")) {
        card[j].classList.add('visible');
        setTimeout(() => {
          if (icon.length == 0) {
            icon.push(card[j]);
          } else {
            let icone1 = card[j].querySelector(".card_front .fas")
            let icone2 = icon[0].querySelector(".card_front .fas")
            if (icone1.classList.value == icone2.classList.value) {
              icon[0].classList.add("matched");
              card[j].classList.add("matched");
              icon = [];
            }
            else {
              icon[0].classList.remove("visible");
              card[j].classList.remove("visible");
              icon = [];
            }
          }
        }, 1000)
      }
    })

  }







}
