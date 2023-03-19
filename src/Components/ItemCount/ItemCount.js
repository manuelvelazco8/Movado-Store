import "./style.css";
import { useState } from 'react';

const ItemCount = ({count, setCount}) => {
    
    const onAdd = () => {
      setCount(count + 1);
    };
    const restar = () => {
       if (count === 0) {
         return;
        }
      setCount(count - 1);
};



  return (
    <div>
    <div className="counter">
    <div className="controllers">
    <button disaible={count === 0} onClick={restar}>-</button>
    </div>
    <span>{count}</span>
    </div>
    <button disaible={count === 0} onClick={onAdd}>+</button>
    </div>
  );
};

export default ItemCount;