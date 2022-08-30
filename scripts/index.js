const editButtonInfo = document.querySelector(".profile__edit-button");
const addButtonPlace = document.querySelector(".profile__add-button");
const popupInfo = document.querySelector(".popup_info");
const popupPlace = document.querySelector(".popup_place");
const closeButtonInfo = document.querySelector(".popup__close");
const closeButtonPlace = document.querySelector(".popup__close_place");
const saveButton = document.querySelector(".popup__save-button");
const formInfo = document.querySelector(".popup__form-info");
const formPlace = document.querySelector(".popup__form-place");
const inputName = document.querySelector(".popup__input_type_name");
const inputInfo = document.querySelector(".popup__input_type_info");
const inputPlaceName = document.querySelector(".popup__input_type_place-name");
const inputPlaceLink = document.querySelector(".popup__input_type_place-link");
const userName = document.querySelector(".profile__title");
const userInfo = document.querySelector(".profile__subtitle");

//функции
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup){
  popup.classList.remove('popup_opened');
}
const elementsList = document.querySelector(".elements__list");
function makeNewElement(elname, ellink) {  //функция создания карточки
  const elementTemplate = document.querySelector(".element__template").content;
  // клонируем содержимое тега template
  const newElement = elementTemplate
    .querySelector(".elements__item")
    .cloneNode(true);
  // наполняем содержимым
  newElement.querySelector(".elements__image").src = ellink;
  newElement.querySelector(".elements__image").alt = elname;
  newElement.querySelector(".elements__title").textContent = elname;
  // отображаем на странице
  return newElement;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userInfo.textContent = inputInfo.value;
  closePopup(popupInfo);
}

//константы с вызовом функций
const editProfile = function () {
  inputName.value = userName.textContent;
  inputInfo.value = userInfo.textContent;
  openPopup(popupInfo);
}
const closePopupInfo = function(){
  popupInfo.classList.remove('popup_opened');
}
const openPopupPlace = function () {
  openPopup(popupPlace);
}
const closePopupPlace = function(){
  popupPlace.classList.remove('popup_opened');
}

const addElement = function (evt){ //добавляем карточку сами
  evt.preventDefault();
  const elementCard = makeNewElement(inputPlaceName.value, inputPlaceLink.value);
  elementsList.prepend(elementCard);
  closePopup(popupPlace);
}

// метро люблино работаем
editButtonInfo.addEventListener("click", editProfile); // открыть редактирование профиля
closeButtonInfo.addEventListener("click", closePopupInfo); // закрыть редактирование профиля

addButtonPlace.addEventListener("click", openPopupPlace); // открыть добавление места
closeButtonPlace.addEventListener("click", closePopupPlace); // закрыть добавление места

formInfo.addEventListener("submit", formSubmitHandler);
formPlace.addEventListener('submit', addElement);

// инициализируем все карточки
initialCards.forEach((el) => {
  newElement = makeNewElement(el.name, el.link);
  elementsList.append(newElement);
});
