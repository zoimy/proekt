const toTopBtn = document.getElementById("to-top");
const slides = document.querySelectorAll(".slide");
const colors = document.querySelectorAll(".color");
const inputEl = document.querySelector(".input");
const closePopupUserBtn = document.getElementById("popup-close");
const openPopupUserBtn = document.querySelector(".header__user");
const registerPopupBtn = document.querySelector(".popup__button");
const popupUser = document.querySelector(".popup");
const body = document.body;
const menu = document.querySelector(".menu__body");
const menuBtn = document.querySelector(".menu__icon");
const menuLinks = document.querySelectorAll(".menu__link");
const products = document.querySelectorAll(".card");
const snackbar = document.getElementById("snackbar");
const snackbarBtnsSub = document.querySelectorAll(".snackbar-btn-cart");
// ЗАГРУЗКА СТРАНИЦЫ
window.onload = function () {
  window.setTimeout(fadeout, 1000);
};

function fadeout() {
  document.querySelector(".preloader").style.opacity = "0";
  document.querySelector(".preloader").style.display = "none";
}

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    toTopBtn.style.visibility = "visible";
  } else {
    toTopBtn.style.visibility = "hidden";
  }
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

function showLessMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var showText = document.getElementById("showText");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    showText.innerHTML = "Показать";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    showText.innerHTML = "Скрыть";
    moreText.style.display = "inline";
  }
}

function openSnackbar(text) {
  snackbar.innerText = text;
  snackbar.classList.add("show");

  setTimeout(() => {
    snackbar.classList.remove("show");
  }, 2000);
}

// СКРОЛЛ НАВЕРХ

window.onscroll = function () {
  scrollFunction();
};

// АНИМАЦИЯ КОЛЛЕКЦИИ
for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
  });
}

// СОЗДАЕМ СЛАЙДЕР
var swiper = new Swiper(".mySwiper", {
  autoplay: true,
  grabCursor: true,
  speed: 900,
  loop: true,
  slidesPerView: 6,
  spaceBetween: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// СМЕНА ЦВЕТА ПРОДУКТА
colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    colors.forEach((el) => el.classList.remove("active"));

    let styles = window.getComputedStyle(color);
    let style;
    style = styles.getPropertyValue("background-color");

    e.target.classList.add("active");
    e.target.style.outlineColor = style;
  });
});


// ОТКРЫТИЕ ВКЛАДКИ РЕГИСТРАЦИИ
if (openPopupUserBtn && popupUser) {
  openPopupUserBtn.addEventListener("click", () => {
    popupUser.classList.add("open");
    body.classList.add("stop-scrolling");
  });
}

if (closePopupUserBtn && popupUser) {
  closePopupUserBtn.addEventListener("click", () => {
    popupUser.classList.remove("open");
    body.classList.remove("stop-scrolling");
  });
}

if (registerPopupBtn && popupUser) {
  registerPopupBtn.addEventListener("click", () => {
    popupUser.classList.remove("open");
    body.classList.remove("stop-scrolling");
    openSnackbar("Вы успешно зарегестрировались");
  });
}

// СОЗДАНИЕ АДАПТИВНОГО МЕНЮ-БУРГЕРА

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("stop-scrolling");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("stop-scrolling");
    });
  });
}

// РЕАЛИЗАЦИЯ КОРЗИНЫ
if (products) {
  products.forEach((el) => {
    const imgPath = el.childNodes[1].children[0].src;
    const title = el.childNodes[3].innerText;
    const price =  +el.childNodes[5].childNodes[1].innerText;
    const productId = Math.random();
    const btn = el.childNodes[7];

    btn.addEventListener("click", () => {
      const cartStorage = localStorage.getItem("cart") || "[]";
      const cart = JSON.parse(cartStorage);
      const product = { title, price, imgPath, productId, count: 1};
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    });
  });
}

// УВЕДОМЛЕНИЕ
if(snackbarBtnsSub) {
  snackbarBtnsSub.forEach((btn) => {
    btn.addEventListener("click", () => {
      openSnackbar("Товар добавлен в корзину");
    });
  });
}