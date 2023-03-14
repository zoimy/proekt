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
const colors = document.querySelectorAll(".color");
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

// ЦЕНА ТОВАРА
const inputEl = document.querySelector(".input");
const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");

if (minusBtn) {
  minusBtn.addEventListener("click", () => {
    if (inputEl.getAttribute("value") > 0) {
      inputEl.stepDown();
    }
  });
}

if (plusBtn) {
  plusBtn.addEventListener("click", (e) => {
    inputEl.stepUp();
  });
}

// ДОБАВЛЕНИЕ ТОВАРА В ИЗБРАННЫЕ
const favBtns = document.querySelectorAll(".fav");
favBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.children[0].innerText == "favorite_border") {
      console.log("clicked");
      btn.children[0].innerText = "favorite";
    } else if (btn.children[0].innerText == "favorite") {
      console.log("clicked");
      btn.children[0].innerText = "favorite_border";
    }
  });
});

// ОТКРЫТИЕ ВКЛАДКИ РЕГИСТРАЦИИ
const closePopupUserBtn = document.getElementById("popup-close");
const openPopupUserBtn = document.querySelector(".header__user");
const popupUser = document.querySelector(".popup");
const body = document.body;

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

// СОЗДАНИЕ АДАПТИВНОГО МЕНЮ-БУРГЕРА
const menu = document.querySelector(".menu__body");
const menuBtn = document.querySelector(".menu__icon");
const menuLinks = document.querySelectorAll(".menu__link");

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

function myFunction1() {
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

const snackbarBtnsCart = document.querySelectorAll(".snackbar-btn-cart");

snackbarBtnsCart.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    var x = document.querySelector(".snackbar-cart");

    // Добавляем контейнеру класс "show"
    // x.className = "show";
    x.classList.add('show')

    // Через 3 секунды удаляем класс "show" у контейнера с сообщением
    setTimeout(function () {
      x.classList.remove('show')
    }, 3000);
  });
});



const snackbarBtnsSub = document.querySelectorAll(".snackbar-btn-sub");
const subForm = document.getElementById('subForm');
snackbarBtnsSub.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    subForm.reset();

    var x = document.querySelector(".snackbar-sub");

    // Добавляем контейнеру класс "show"
    // x.className = "show";
    x.classList.add('show')

    // Через 3 секунды удаляем класс "show" у контейнера с сообщением
    setTimeout(function () {
      x.classList.remove('show')
    }, 3000);
  });
});



const products = document.querySelectorAll('.card');

products.forEach((el, id) => {
  const price = el.childNodes[5].innerText;
  const title = el.childNodes[3].innerText;
  const btn = el.childNodes[7];
  
  btn.addEventListener('click', () => {
    const cartStorage = localStorage.getItem('cart') || '[]';
    const cart = JSON.parse(cartStorage);
    const product = {title, price};
    localStorage.setItem('cart', JSON.stringify([...cart, product]))
    
  })
})
