let cartSide = document.querySelector(".cart__products");
let cartStorage = JSON.parse(localStorage.getItem("cart") || "[]");

let orderSide = document.querySelector(".review");
let sum = 0;
let sumPromo = 0;

function renderCart() {
  cartSide.innerHTML = ``;
  cartStorage.forEach((el) => {
    const { title, price, imgPath, productId } = el;
    const newCard = document.createElement("div");
    newCard.innerHTML = `<div class="product" id="${productId}">
    <button class="product__button someclass" id="btn">
      <span class="material-icons-outlined"> close </span>
    </button>
    <div class="product__image">
      <img src="${imgPath}" alt="1" />
    </div>
    <div class="product__name">${title}</div>
    <div class="product__count">
      <button class="minus">
        <span class="material-icons-outlined"> remove </span>
      </button>
      <input type="number" value="1" / class="input" min="0">
      <button class="plus">
        <span class="material-icons-outlined"> add </span>
      </button>
    </div>
    <div class="product__price">$${price}</div>
  </div>`;
    cartSide.appendChild(newCard);
    sum += +price;
  });
}

function showEmptyCart() {
  const empty = document.createElement("div");
  empty.classList.add("empty");
  empty.innerHTML = `<h1>Корзина пуста</h1><span class="material-icons-outlined">
  shopping_cart
  </span><p>Перейти на <a href="home.html">Главную</a> страницу</p>`;

  cartSide.appendChild(empty);
}

function renderOrderReview() {
  orderSide.innerHTML = ``;
  if(!cartStorage.length > 0) {
    sumPromo = 0;
  } else {
    sumPromo = sum - 100;
  }
  orderSide.innerHTML = `<div class="review__title">Обзор заказа</div>
  <div class="review__block">
    <span>Цена заказа:</span>
    <span>$${sum}</span>
  </div>
  <div class="review__block">
    <span>Промокод: </span>
    <span>-$100</span>
  </div>
  <div class="review__block">
    <span>Итого к оплате:</span>
    <span>$${sumPromo}</span>
  </div>
  <a href="order.html" class="review__button btn"
    >Оформить заказ</a
  >`;
}


if (cartStorage.length) {
  renderCart();
  renderOrderReview();

  const deleteBtns = document.querySelectorAll(".product__button");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const el = btn.parentElement;
      const cartChild = el.parentElement;
      const filteredStorage = cartStorage.filter(
        (item) => item.productId != el.id
      );

      cartStorage = filteredStorage;
      localStorage.setItem("cart", JSON.stringify(cartStorage));
      cartChild.removeChild(el);

      renderOrderReview();

      if (!cartStorage.length) {
        showEmptyCart();
      }
    });
  });

  const clearBtn = document.getElementById("clear");
  clearBtn.addEventListener("click", () => {
    const a = confirm("Вы точно хотите очистить корзину?");
    if (a) {
      renderOrderReview();
      cartSide.innerHTML = ``;
      localStorage.clear();
      showEmptyCart();
    }
  });
} else {
  showEmptyCart();
  renderOrderReview();
}
