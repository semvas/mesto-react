import React from 'react';
import { api } from '../utils/api'

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-wrapper" onClick={props.onEditAvatar}>
          <img className="profile__image" src="#" alt="Аватарка" />
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name"></h1>
            <button type="button" className="btn profile__edit-btn" onClick={props.onEditProfile} />
          </div>
          <p className="profile__desc"></p>
        </div>
        <button type="button" className="btn profile__add-btn" onClick={props.onAddPlace} />
      </section>
      <section className="photo-cards">
        <ul className="elements">

        </ul>
      </section>
    </main>
  );
}

export default Main