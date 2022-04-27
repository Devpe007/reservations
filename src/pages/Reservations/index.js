import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import './styles.css';
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';

import { removeReserve } from '../../store/modules/reserve/actions';

function Reservations() {
  const dispatch = useDispatch();
  const reserves = useSelector(state => state.reserve);

  function handleRemove(id) {
    dispatch(removeReserve(id));
  };

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

          <div id="amount" >
            <button
              type="button"
              onClick={() => {}}
            >
              <MdRemoveCircle
                size={25}
                color="#191919"
              />
            </button>
            <input type="text" readOnly value={reserve.amount} />
            <button
              type="button"
              onClick={() => {}}
            >
              <MdAddCircle
                size={25}
                color="#191919"
              />
            </button>
          </div>

          <button
            type="button"
            onClick={() => handleRemove(reserve.id)}
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