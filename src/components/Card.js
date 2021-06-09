import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardDeleteButtonClassName = (
    `btn element__del-btn ${isOwn ? '' : 'element__del-btn_hidden'}`
  );
  const cardLikeButtonClassName = (
    `element__like-btn ${isLiked ? 'element__like-btn_act' : ''}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }
  
  return (
    <li className="element">
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <div className="element__info">
        <h3 className="element__title">{props.card.name}</h3>
        <div className="element__like-wrapper">
          <button type="button" className={cardLikeButtonClassName} />
          <span className="element__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
      <button className={cardDeleteButtonClassName} type="button"></button>
    </li>
  );
}

export default Card;