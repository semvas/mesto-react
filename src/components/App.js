import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'

function App() {
  const[isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const[isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const[isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {;
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        name="change-ava"
        title="Обновить аватар"
        btnTitle="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input type="url" name="avatar" id="avatar-input" className="popup__input" placeholder="Ссылка на картинку" />
          <span className="popup__input-error avatar-input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="profile-edit"
        title="Редактировать профиль"
        btnTitle="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input type="text" name="name" id="name-input" className="popup__input" placeholder="Имя" minLength="2" maxLength="40" />
          <span className="popup__input-error name-input-error"></span>
        </label>
        <label className="popup__field">
          <input type="text" name="desc" id="desc-input" className="popup__input" placeholder="О себе" minlength="2" maxlength="200" />
          <span className="popup__input-error desc-input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="add-card"
        title="Новое место"
        btnTitle="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input type="text" name="name" id="place-input" className="popup__input" placeholder="Название" minLength="2" maxLength="30" />
          <span className="popup__input-error place-input-error"></span>
        </label>
        <label className="popup__field">
          <input type="url" name="link" id="url-input" className="popup__input" placeholder="Ссылка на картинку" />
          <span className="popup__input-error url-input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        btnTitle="Да"
      />
      <ImagePopup
        // card={}
        // isOpen={}
        onClose={closeAllPopups}
      />

      {/* <template className="element-template">
        <li className="element">
          <img className="element__image" src="#" alt="#" />
          <div className="element__info">
            <h3 className="element__title"></h3>
            <div className="element__like-wrapper">
              <button type="button" className="element__like-btn"></button>
              <span className="element__like-counter">0</span>
            </div>
          </div>
          <button className="btn element__del-btn" type="button"></button>
        </li>
      </template> */}
    </div>
  );
}

export default App;
