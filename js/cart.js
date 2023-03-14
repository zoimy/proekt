const cartSide = document.querySelector(".cart__products");
const cartStorage = JSON.parse(localStorage.getItem("cart")) || "[]";

cartStorage.forEach((el) => {
  console.log(el)
  const { price, title } = el;
  const newCard = document.createElement("h1");
  cartSide.appendChild(newCard);
  console.log("dqoihdoi");
});
