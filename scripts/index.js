let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__close");
let saveButton = document.querySelector(".popup__save-button");
let form = document.querySelector(".popup__form");
let inputName = document.querySelector(".popup__input_type_name");
let inputInfo = document.querySelector(".popup__input_type_info");
let userName = document.querySelector(".profile__title");
let userInfo = document.querySelector(".profile__subtitle");

function editProfile() {
  popup.classList.add("popup_opened");
  inputName.value = userName.textContent;
  inputInfo.value = userInfo.textContent;
}
editButton.addEventListener("click", editProfile);

function closePopup() {
  popup.classList.remove("popup_opened");
}
closeButton.addEventListener("click", closePopup);

function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userInfo.textContent = inputInfo.value;
  closePopup();
}
form.addEventListener("submit", formSubmitHandler);
