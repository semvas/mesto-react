function ImagePopup() {
  return (
    <div className="popup popup-img">
      <div className="popup__image-container">
        <figure className="popup__figure">
          <img className="popup__image" src="#" alt="#" />
          <figcaption className="popup__caption"></figcaption>
        </figure>  
        <button type="button" className="btn popup__close-btn"></button>
      </div>
    </div>
  );
}

export default ImagePopup