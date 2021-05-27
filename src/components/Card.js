function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  
  return (
    <li className="element">
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <div className="element__info">
        <h3 className="element__title">{props.card.name}</h3>
        <div className="element__like-wrapper">
          <button type="button" className="element__like-btn" />
          <span className="element__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
      <button className="btn element__del-btn" type="button"></button>
    </li>
  );
}

export default Card;