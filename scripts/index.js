const editButtonInfo = document.querySelector(".profile__edit-button");
const addButtonPlace = document.querySelector(".profile__add-button");
const popupInfo = document.querySelector(".popup-info");
const popupPlace = document.querySelector(".popup-place");
const popupImg = document.querySelector(".popup-image");
const popupCaption = document.querySelector(".popup-image__caption");
const popupImgImage = document.querySelector(".popup-image__image");
const closeButtonInfo = document.querySelector(".popup__close");
const closeButtonPlace = document.querySelector(".popup__close_place");
const closeButtonImg = document.querySelector(".popup__close_image");
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
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
function write(a) {
  console.log(a);
}
const elementsList = document.querySelector(".elements__list");
function makeNewElement(elname, ellink) {
  //функция создания карточки
  const elementTemplate = document.querySelector(".element__template").content;
  const newElement = elementTemplate
    .querySelector(".elements__item")
    .cloneNode(true);
  const deleteButton = newElement.querySelector(".delete-button");
  newElement.querySelector(".elements__image").src = ellink;
  newElement.querySelector(".elements__image").alt = elname;
  newElement.querySelector(".elements__title").textContent = elname;

  deleteButton.addEventListener("click", function (evt) {
    deleteButton.closest(".elements__item").remove();
  });

  const elementsLike = newElement.querySelector(".elements__like");
  elementsLike.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle("elements__like_active");
  });

  const openImage = newElement.querySelector(".elements__image");

  openImage.addEventListener("click", function (evt) {
    openPopupImg(elname, ellink);
  });
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
};
const closePopupInfo = function () {
  closePopup(popupInfo);
};
const openPopupPlace = function () {
  openPopup(popupPlace);
};
const closePopupPlace = function () {
  closePopup(popupPlace);
};

const openPopupImg = function (caption, link) {
  //открываем картинку из карточки
  popupImgImage.src = link;
  popupImgImage.alt = caption;
  popupCaption.textContent = caption;
  openPopup(popupImg);
};

const closePopupImg = function () {
  closePopup(popupImg);
};

const addElement = function (evt) {
  //добавляем карточку сами
  evt.preventDefault();
  const elementCard = makeNewElement(
    inputPlaceName.value,
    inputPlaceLink.value
  );
  elementsList.prepend(elementCard);
  closePopup(popupPlace);
};

const deleteElement = function (evt) {
  //удаляем карточку по клику на урну
  evt.preventDefault();
  evt.remove(elementCard);
};

// обработчики событий
editButtonInfo.addEventListener("click", editProfile); // открыть редактирование профиля
closeButtonInfo.addEventListener("click", closePopupInfo); // закрыть редактирование профиля

addButtonPlace.addEventListener("click", openPopupPlace); // открыть добавление места
closeButtonPlace.addEventListener("click", closePopupPlace); // закрыть добавление места

formInfo.addEventListener("submit", formSubmitHandler); 
formPlace.addEventListener("submit", addElement);

closeButtonImg.addEventListener("click", closePopupImg); //закрыть большой экран картинки

// инициализируем все карточки
initialCards.forEach((el) => {
  newElement = makeNewElement(el.name, el.link);
  elementsList.append(newElement);
});
