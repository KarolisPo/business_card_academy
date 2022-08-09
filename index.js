const createBtn = document.querySelector(".createBtn");
const userInfo = "userInfo";

createBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const userData = {};
  const cardWrap = document.querySelector(".card-wrap");
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");

  if (cardWrap.firstChild) {
    cardWrap.innerHTML = null;
  }
  cardWrap.appendChild(userCard);

  function createCardDiv(value) {
    const userCardElement = document.createElement("div");
    userCardElement.textContent = value;
    userCard.appendChild(userCardElement);
  }

  function setObject(key, value) {
    let objKey = key;
    userData[objKey] = value;
  }

  const userInput = document.querySelectorAll("input");
  for (let i = 0; i < userInput.length; i++) {
    console.log(userInput[i].value);
    createCardDiv(userInput[i].value);
    setObject(userInput[i].name, userInput[i].value);
  }

  localStorage.setItem(userInfo, JSON.stringify(userData));
});

if (localStorage.getItem(userInfo)) {
  let userObject = JSON.parse(localStorage.getItem(userInfo));
  const cardWrap = document.querySelector(".card-wrap");
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");
  cardWrap.appendChild(userCard);

  function createCardDiv(value) {
    const userCardElement = document.createElement("div");
    userCardElement.textContent = value;
    userCard.appendChild(userCardElement);
  }

  const userInput = document.querySelectorAll("input");
  for (let i = 0; i < userInput.length; i++) {
    const userInputKey = userInput[i].name;
    createCardDiv(userObject[userInputKey]);
  }
}
