import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main(props) {
  const[userName, setUserName] = React.useState('');
  const[userDescription, setUserDescription] = React.useState('');
  const[userAvatar, setUserAvatar] = React.useState('');

  const[cards, setCards] = React.useState([]);

  React.useEffect(() =>{
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()
    ])
    .then((res) => {
      const [ userData, initialCards ] = res;

      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);

      setCards(initialCards);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-wrapper" onClick={props.onEditAvatar}>
          <img className="profile__image" src={userAvatar} alt="Аватарка" />
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="btn profile__edit-btn" onClick={props.onEditProfile} />
          </div>
          <p className="profile__desc">{userDescription}</p>
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