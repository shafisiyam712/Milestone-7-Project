
//import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Card from '../Card/Card';
import './toggle.css'

const Available = ({ChosePlayer,selected,handleActive,isActive}) => {
    const [cards,setCards]=useState([]);

    useEffect(()=>{
        fetch('player.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    } ,[])
   console.log(cards);
    
    return (
        <div  className={`${isActive.cart? "w-11/12 mx-auto mb-56": "hidden" }`}>
             <div className='flex justify-between mt-5 mb-5'>
           <h1 className={`${isActive.cart? "font-extrabold mt-3": "hidden" }`}>Available Players</h1> 
           <div className='flex gap-0 '>
            <button onClick={()=>handleActive('cart')} className={`${isActive.cart? "btn w-28 h-10 active": "btn w-28 h-10" }`}>Available</button>
            <button onClick={()=>handleActive('about')} className={`${isActive.cart? "btn w-28 h-10":"btn w-28 h-10 active" }`}>Selected({selected.length})</button>
           </div>
        </div>
        <div className={`${isActive.cart? " grid grid-cols-1 md:grid-cols-3 gap-3": "hidden" }`}>
            {/* {
                 Available.map(card => <Card key={Card.playerId} card={card}></Card>)
                 grid grid-cols-1 md:grid-cols-3 gap-3
            } */}
               {
                cards.map(card => <Card
                    key={card.playerId}
                    card={card}
                    ChosePlayer={ChosePlayer}
                ></Card>)
            }
          
           
        </div>
        </div>
       
    );
};

// Available.propTypes = {
    
// };

export default Available;