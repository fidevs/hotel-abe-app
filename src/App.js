import React, { useState } from 'react';
import desayunos from './images/menu abe-05.jpg';
import comidas from './images/menu abe-07.jpg';
import room from './images/menu abe-10.jpg';
import menudesayunos from './images/desayuno.jpg';
import menucomidas from './images/comida.jpg';
import menuroom from './images/roomservice.jpg';

const images = {
  desayunos: menudesayunos,
  comidas: menucomidas,
  roomservice: menuroom,
};

function App() {
  const [view, setView] = useState('main');

  const handleClick = ({ target: { id } }) => setView(id);

  return (
    <div>
      {
        view === 'main'
          ? (
            <div>
              <div className="abe-home" />
              <div className="container">
                <div className="img-abe">
                  <img onClick={handleClick} id="desayunos" src={desayunos} alt="Desayunos :)" className="abe-service" />
                </div>
                <div className="img-abe">
                  <img onClick={handleClick} id="comidas" src={comidas} alt="Comidas :)" className="abe-service" />
                </div>
                <div className="img-abe">
                  <img onClick={handleClick} id="roomservice" src={room} alt="RoomService :)" className="abe-service" />
                </div>
              </div>
            </div>
          )
          : (
            <div className="submenu">
              <img
                src={images[view]}
                alt={`${view}.jpg`} width="100%" height="100%"
                style={{ objectFit: 'contain' }} />
              <div id="main" onClick={handleClick} className="times">&times;</div>
            </div>
          )
      }
    </div>
  );
}

export default App;
