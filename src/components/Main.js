import React from 'react';

import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import Card from './Card';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.toggleLike(card._id, isLiked).then(newCard => {
      setCards(state => state.map(c => c._id === card._id ? newCard : c));
    });
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-wrapper" onClick={props.onEditAvatar}>
          <img className="profile__image" src={currentUser.avatar} alt="Аватарка" />
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button type="button" className="btn profile__edit-btn" onClick={props.onEditProfile} />
          </div>
          <p className="profile__desc">{currentUser.about}</p>
        </div>
        <button type="button" className="btn profile__add-btn" onClick={props.onAddPlace} />
      </section>
      <section className="photo-cards">
        <ul className="elements">
          {cards.map(card => (
            <Card
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main