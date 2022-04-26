import React from "react";

import './styles.css';
import { MdDelete } from 'react-icons/md';

function Reservations() {
  return(
    <div>
      <h1 className="title" >Você solicitou 1 reservas</h1>

      <div className="reservation" >
        <img 
         src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" 
         alt="Maceio" 
        />
        <strong>Viagem Maceio 7 Dias</strong>
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

      <div>

        <footer>
          <button type="button" >Solicitar Reservas</button>
        </footer>
        
      </div>
    </div>
  );
};

export default Reservations;