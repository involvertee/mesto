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
const formInfo = document.querySelector(".popup__form-info");
const formPlace = document.querySelector(".popup__form-place");
const nameInput = document.querySelector(".popup__input_type_name");
const infoInput = document.querySelector(".popup__input_type_info");
const placeNameInput = document.querySelector(".popup__input_type_place-name");
const placeLinkInput = document.querySelector(".popup__input_type_place-link");
const userName = document.querySelector(".profile__title");
const userInfo = document.querySelector(".profile__subtitle");
const buttonSumbitInfo = document.querySelector(".popup__submit-button-info");
const buttonSumbitPlace = document.querySelector(".popup__submit-button-place");

//функции
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupByEscape);
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupByEscape);

}

function disableButton(buttonSumbit) {
  buttonSumbit.classList.add('popup__submit-button_disabled');
  buttonSumbit.setAttribute('disabled', 'disabled');
}

const elementsList = document.querySelector(".elements__list");

function makeNewElement(elName, elLink) {
  //функция создания карточки
  const elementTemplate = document.querySelector(".element__template").content;
  const newElement = elementTemplate
    .querySelector(".elements__item")
    .cloneNode(true);
  const buttonDelete = newElement.querySelector(".delete-button");
  const elImage = newElement.querySelector(".elements__image");
  const elTitle = newElement.querySelector(".elements__title")
  elImage.src = elLink;
  elImage.alt = elName;
  elTitle.textContent = elName;

  buttonDelete.addEventListener("click", function (evt) {
    //удаляем карточку
    buttonDelete.closest(".elements__item").remove();
  });

  const elementsLike = newElement.querySelector(".elements__like"); //ставим лайки
  elementsLike.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle("elements__like_active");
  });

  const imageOpen = elImage;

  imageOpen.addEventListener("click", function (evt) {
    // открываем картинку
    openPopupImg(elName, elLink);
  });
  return newElement;
}

/* для инфо*/
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userInfo.textContent = infoInput.value;
  closePopup(popupInfo);
}

function closePopupByEscape(evt) {
  if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
  }
}

function closePopupByBackgroundClick(popup) {
  popup.addEventListener('click', (evt) => {
      if (popup.classList.contains('popup_opened') && evt.target === evt.currentTarget) {
          closePopup(popup);
      }
  })
}

const popupsList = Array.from(document.querySelectorAll('.popup'));
popupsList.forEach(closePopupByBackgroundClick);

//константы с вызовом функций
const editProfile = function () {
  nameInput.value = userName.textContent;
  infoInput.value = userInfo.textContent;
  openPopup(popupInfo);
};

const closePopupInfo = function () {
  closePopup(popupInfo);
};

const openPopupPlace = function () {
  openPopup(popupPlace);
};

const closePopupPlace = function () {
  placeNameInput.value = '';
  placeLinkInput.value = '';
  closePopup(popupPlace);
  disableButton(buttonSumbitPlace);
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
    placeNameInput.value,
    placeLinkInput.value
  );
  elementsList.prepend(elementCard);
  closePopup(popupPlace);
  evt.target.reset();
};


// обработчики событий
buttonInfoEdit.addEventListener("click", editProfile); // открыть редактирование профиля
buttonInfoClose.addEventListener("click", closePopupInfo); // закрыть редактирование профиля

buttonPlaceAdd.addEventListener("click", openPopupPlace); // открыть добавление места
buttonPlaceClose.addEventListener("click", closePopupPlace); // закрыть добавление места

formInfo.addEventListener("submit", handleProfileFormSubmit);
formPlace.addEventListener("submit", addElement);

buttonImgClose.addEventListener("click", closePopupImg); //закрыть большой экран картинки

// инициализируем все карточки
initialCards.forEach((el) => {
  const newElement = makeNewElement(el.name, el.link);
  elementsList.append(newElement);
});


