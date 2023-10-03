import React from 'react';

const Menu = () => {
  const cardStyle = {
    width: '18rem',
    margin: '1rem',
    marginLeft: '2.6rem',
    marginBottom: '-1rem',
    marginTop: '-1.2rem',
    border: '0px solid',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  };
  

  return (
    <div>
      {/* Lunch Menu */}
      <h2>Lunch Menu:</h2>
      <h6>11am-5pm</h6>
      <div className="row mx-auto">
        <div className="col-md-4">
          <div className="card" style={cardStyle}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"style={{ borderColor: 'black' }}>Cocido Madrileño</li>
              <li className="list-group-item"style={{ borderColor: 'black' }}>Garbanzos, morcillo, tocino, patatas, zanahoria</li>
              <li className="list-group-item"style={{ borderColor: 'black' }}>30</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={cardStyle}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"style={{ borderColor: 'black' }}>Tortilla De Patatas </li>
              <li className="list-group-item"style={{ borderColor: 'black' }}>Huevos, patatas, y aceite de oliva</li>
              <li className="list-group-item"style={{ borderColor: 'black' }}>16</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={cardStyle}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{ borderColor: 'black' }}>Paella Valenciana</li>
              <li className="list-group-item"style={{ borderColor: 'black' }}>Arroz, caldo de gallina, camarones crudos</li>
              <li className="list-group-item"style={{ borderColor: 'black' }}>20</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dinner Menu */}
      <h2>Dinner Menu:</h2>
      <h6>5pm-Close</h6>
      <div className="row mx-auto">
        <div className="col-md-4">
          <div className="card" style={cardStyle}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"style={{ borderColor: 'black' }}>Rabo De Toro</li>
              <li className="list-group-item"style={{ borderColor: 'black' }}>Rabo de toro, harina, cebollas, patatas, puerro</li>
              <li className="list-group-item"style={{ borderColor: 'black' }}>30</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={cardStyle}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"style={{ borderColor: 'black' }}>Fabada Asturiana</li>
              <li className="list-group-item"style={{ borderColor: 'black' }}>Judías, chorizo, morcilla, tocino y oreja de cerdo</li>
              <li className="list-group-item"style={{ borderColor: 'black' }}>24</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={cardStyle}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"style={{ borderColor: 'black' }}>Pulpo A La Gallega</li>
              <li className="list-group-item"style={{ borderColor: 'black' }}>Pulpo, patatas gallegas y aceite de oliva</li>
              <li className="list-group-item"style={{ borderColor: 'black' }}>22</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
