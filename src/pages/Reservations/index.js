import React from "react";
import { useSelector } from 'react-redux';

import './styles.css';
import { MdDelete } from 'react-icons/md';

function Reservations() {
  const reserves = useSelector(state => state.reserve);

  return(
    <div>
      <h1 className="title" >Você solicitou {reserves.length} reservas</h1>

      {reserves.map(reserve => (
         <div className="reservation" key={reserve.id} >
          <img 
            src={reserve.image} 
            alt={reserve.title} 
          />
          <strong>{reserve.title}</strong>
          <span>Quantidade: 2</span>
  
          <button
            type="button"
            onClick={() => {}}
          >
            <MdDelete
              size={20}
              color="#191919"
            />
          </button>
       </div>
      ))}

      <footer>
        <button type="button" >Solicitar Reservas</button>
      </footer>
    </div>
  );
};

export default Reservations;