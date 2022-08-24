let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let saveButton = document.querySelector('.popup__save-button');
let form = document.querySelector('.popup__form');
let formName = document.querySelector('.popup__input_type_name');
let formInfo = document.querySelector('.popup__input_type_info');
let nameInput = document.querySelector('.profile__title');
let jobInput = document.querySelector('.profile__subtitle');

function editProfile () {
 popup.classList.add('popup_opened');
 formName.value = nameInput.textContent;
 formInfo.value = jobInput.textContent;
}
editButton.addEventListener('click', editProfile);

function closePopup () {
    popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.textContent = formName.value;
    jobInput.textContent = formInfo.value;
    closePopup();
    
}
saveButton.addEventListener('click', formSubmitHandler);