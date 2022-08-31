const buttonInfoEdit = document.querySelector(".profile__edit-button");
const buttonPlaceAdd = document.querySelector(".profile__add-button");
const popupInfo = document.querySelector(".popup-info");
const popupPlace = document.querySelector(".popup-place");
const popupImg = document.querySelector(".popup-image");
const popupCaption = document.querySelector(".popup-image__caption");
const popupImgImage = document.querySelector(".popup-image__image");
const buttonInfoClose = document.querySelector(".popup__close");
const buttonPlaceClose = document.querySelector(".popup__close_place");
const buttonImgClose = document.querySelector(".popup__close_image");
const buttonSave = document.querySelector(".popup__save-button");
const formInfo = document.querySelector(".popup__form-info");
const formPlace = document.querySelector(".popup__form-place");
const nameInput = document.querySelector(".popup__input_type_name");
const infoInput = document.querySelector(".popup__input_type_info");
const placeNameInput = document.querySelector(".popup__input_type_place-name");
const placeLinkInput = document.querySelector(".popup__input_type_place-link");
const userName = document.querySelector(".profile__title");
const userInfo = document.querySelector(".profile__subtitle");

//функции
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
const elementsList = document.querySelector(".elements__list");
function makeNewElement(elname, ellink) {
  //функция создания карточки
  const elementTemplate = document.querySelector(".element__template").content;
  const newElement = elementTemplate
    .querySelector(".elements__item")
    .cloneNode(true);
  const buttonDelete = newElement.querySelector(".delete-button");
  newElement.querySelector(".elements__image").src = ellink;
  newElement.querySelector(".elements__image").alt = elname;
  newElement.querySelector(".elements__title").textContent = elname;

  buttonDelete.addEventListener("click", function (evt) {
    //удаляем карточку
    buttonDelete.closest(".elements__item").remove();
  });

  const elementsLike = newElement.querySelector(".elements__like"); //ставим лайки
  elementsLike.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle("elements__like_active");
  });

  const imageOpen = newElement.querySelector(".elements__image");

  imageOpen.addEventListener("click", function (evt) {
    // открываем картинку
    popupImgOpen(elname, ellink);
  });
  return newElement;
}
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userInfo.textContent = inputInfo.value;
  closePopup(popupInfo);
}

//константы с вызовом функций
const profileEdit = function () {
  nameInput.value = userName.textContent;
  infoInput.value = userInfo.textContent;
  openPopup(popupInfo);
};
const popupInfoClose = function () {
  closePopup(popupInfo);
};
const popupPlaceOpen = function () {
  openPopup(popupPlace);
};
const popupPlaceClose = function () {
  closePopup(popupPlace);
};

const popupImgOpen = function (caption, link) {
  //открываем картинку из карточки
  popupImgImage.src = link;
  popupImgImage.alt = caption;
  popupCaption.textContent = caption;
  openPopup(popupImg);
};

const popupImgClose = function () {
  closePopup(popupImg);
};

const elementAdd = function (evt) {
  //добавляем карточку сами
  evt.preventDefault();
  const elementCard = makeNewElement(
    placeNameInput.value,
    placeLinkInput.value
  );
  elementsList.prepend(elementCard);
  closePopup(popupPlace);
};

const elementDelete = function (evt) {
  //удаляем карточку по клику на урну
  evt.preventDefault();
  evt.remove(elementCard);
};

// обработчики событий
buttonInfoEdit.addEventListener("click", profileEdit); // открыть редактирование профиля
buttonInfoClose.addEventListener("click", popupInfoClose); // закрыть редактирование профиля

buttonPlaceAdd.addEventListener("click", popupPlaceOpen); // открыть добавление места
buttonPlaceClose.addEventListener("click", popupPlaceClose); // закрыть добавление места

formInfo.addEventListener("submit", handleProfileFormSubmit);
formPlace.addEventListener("submit", elementAdd);

buttonImgClose.addEventListener("click", popupImgClose); //закрыть большой экран картинки

// инициализируем все карточки
initialCards.forEach((el) => {
  newElement = makeNewElement(el.name, el.link);
  elementsList.append(newElement);
});
