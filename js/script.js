var swiper = new Swiper(".mySwiper", {
  autoplay: true,
  grabCursor: true,
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

//colors
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

//price counter
const inputEl = document.getElementById("input");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");

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

// fav
const favBtns = document.querySelectorAll(".fav");
favBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if ( btn.children[0].innerText == "favorite_border") {
      console.log('clicked');
      btn.children[0].innerText = "favorite";
    } else if( btn.children[0].innerText == "favorite") {
      console.log('clicked');
      btn.children[0].innerText = "favorite_border";
    }
  });
});
