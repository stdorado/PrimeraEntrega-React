<<<<<<< HEAD
import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';

function DetailContainer({ products }) { 
return (
    <div className="cardInfo">
      <div>
        <img width={300} src={products.imagen} alt="imagen" />
      </div>
      <div className="cardInfoDetails">
        <div>
          <h3 className="cardInfoTitle">{products.nombre}</h3>
          <p className="cardInfoDesc">{products.descripcion}</p>
        </div>
        <div>
          <h5 className="cardInfoPrice">Price: $ {products.precio}</h5>
        </div>
        <ItemCount stock={products.stock} />
      </div>
    </div>
  );
}

=======
import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';

function DetailContainer({ products }) { 
return (
    <div className="cardInfo">
      <div>
        <img width={300} src={products.imagen} alt="imagen" />
      </div>
      <div className="cardInfoDetails">
        <div>
          <h3 className="cardInfoTitle">{products.nombre}</h3>
          <p className="cardInfoDesc">{products.descripcion}</p>
        </div>
        <div>
          <h5 className="cardInfoPrice">Price: $ {products.precio}</h5>
        </div>
        <ItemCount stock={products.stock} />
      </div>
    </div>
  );
}

>>>>>>> 639f766c2e6a6f932472f55206d3f8d2caa46c1e
export default DetailContainer;