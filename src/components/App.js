import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'

function App() {
  const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const[selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  function handleEditAvatarClick() {;
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function  handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
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
          <input type="text" name="desc" id="desc-input" className="popup__input" placeholder="О себе" minLength="2" maxLength="200" />
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
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;


// Здравствуйте, Геннадий! Спасибо!