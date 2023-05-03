let openModal = document.querySelector("#open-modal");
let closeModal = document.querySelector("#close-modal");
let fade = document.querySelector("#fade");
let modal = document.querySelector("#modal");
let login = document.querySelector("#login");
let openLogin = document.querySelector("#open-login");
let fadeLogin = document.querySelector("#fadeLogin");
let itensCarousel = Array.from(document.querySelectorAll(".carousel-item"));
let btnLeft = document.querySelector("#btn-left");
let btnRight = document.querySelector("#btn-right");
let interacoesDeClickModal = [fade, openModal, closeModal];
let interacoesDeClickLogin = [openLogin, fadeLogin];
let itemModal = document.querySelector("#item-modal")
let cardButton = Array.from(document.querySelectorAll(".card-button"))

let currentImg = 0;
let lastImg = itensCarousel.length - 1


let toggleItemModalBuy = () => {
  itemModal.classList.remove('hide')
  setTimeout(() => {
    itemModal.classList.add('hide')
  }, 1000)
}

cardButton.forEach((btnCard) => {
  btnCard.addEventListener("click", toggleItemModalBuy)
})

let toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

let toggleLogin = () => {
  login.classList.toggle("hide");
  fadeLogin.classList.toggle("hide");
};

let showCurrentImg = () => {
  itensCarousel.forEach((img, index) => {
    if (index === currentImg) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
};

interacoesDeClickModal.forEach((el) => {
  el.addEventListener("click", () => {
    return toggleModal();
  });
});

interacoesDeClickLogin.forEach((e) => {
  e.addEventListener("click", () => {
    return toggleLogin();
  });
});

btnRight.addEventListener("click", () => {
  currentImg = (currentImg + 1) % itensCarousel.length;
  showCurrentImg()
});

btnLeft.addEventListener("click", () => {
  currentImg--
  if (currentImg < 0) {
    currentImg = lastImg
  }
  showCurrentImg()
});


setInterval(() => {
  currentImg = (currentImg + 1) % itensCarousel.length;
  showCurrentImg()
}, 5000)
