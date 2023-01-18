// СОЗДАЕМ СЛАЙДЕР
var swiper = new Swiper(".mySwiper", {
  autoplay: true,
  grabCursor: true,
  speed: 900,
  loop: true,
  slidesPerView: 6,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
const closePopupBtn = document.getElementById("popup-close");
const openPopupBtn = document.querySelector(".header__user");
const popup = document.querySelector(".popup");
const body = document.body;

if(openPopupBtn && popup) {
  openPopupBtn.addEventListener('click', () => {
    popup.classList.add('open');
    body.classList.add('stop-scrolling');
  })
}

if(closePopupBtn && popup) {
  closePopupBtn.addEventListener('click', () => {
    popup.classList.remove('open');
    body.classList.remove('stop-scrolling');
  })
}


// СОЗДАНИЕ АДАПТИВНОГО МЕНЮ-БУРГЕРА
const menu = document.querySelector(".menu__body");
const menuBtn = document.querySelector(".menu__icon");
const menuLinks = document.querySelectorAll('.menu__link');


if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle('stop-scrolling');
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove('stop-scrolling');
    });
  });
}
