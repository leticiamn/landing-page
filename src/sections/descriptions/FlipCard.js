import '../../css/flip.scss';
import '../../css/style.css';

import { useState } from "react"; 
import cn from "classnames";

function FlipCard({ card,front,back }) {
  const [showBack, setShowBack] = useState(false); 

  function handleClick() { 
    if (card.variant === "click") { 
      setShowBack(!showBack); 
    } 
  } 

  return (
    <div
      className="flip-card-outer"
      onClick={handleClick} 
    >
      <div
        className={cn("flip-card-inner", {
          showBack, 
          "hover-trigger": card.variant === "hover"
        })}
      >
        <div className="card front products">
          <div className="card-product">
          {front}
          </div>
        </div>
        <div className="card back products">
          <div className="card-product card-back">
           {back}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;