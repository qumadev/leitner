import {React,useState} from 'react'


export default function Card() {

  const [clicked,setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
    console.log(clicked)
  }

  return (
    
      <div className={`flip-card${clicked ? " active" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card tarjeta">
              <div className="card-body">
                <h5 className="card-title">Portada</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link" onClick={handleClick}>
                  Card Portada
                </a>
                <a href="#" className="card-link">
                  Card Reves
                </a>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="card tarjeta">
              <div className="card-body">
                <h5 className="card-title">Reves</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link" onClick={handleClick}>
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
