import PropTypes from 'prop-types';



const Card = ({card,ChosePlayer}) => {
    const{playerId,name,country,image,role,battingType,bowlingType,rating,biddingPrice}=card
   console.log(card);
   
    return (
        <div className='card border border-rounded-xl p-4'>
            <div className='mb-2  space-y-4 '>
        <img className='w-full h-60 border rounded-xl' src={image} alt={`Cover picture of the title`} />
    </div>  
      <div className='flex gap-2'>
      <i class="fa-solid fa-user mt-1"></i>
      <h4 className='font-extrabold text-xl'>{name}</h4>
      </div>
      <div className='flex justify-between mt-2 text-center mb-3'>
            <div className='flex gap-2 mt-3'>
            <i class="fa-solid fa-flag mt-1"></i>
            <h5 className='font-bold'>{country}</h5>
            </div>
            <button className='btn font-bold'>{role}</button>
      </div>
      <hr />

      <div className='mt-3'>
                <h5 className='font-bold'>Rating: {rating}</h5>
            </div>


            <div className='mt-3 flex justify-between'>
                <h5 className='font-bold'>{battingType}</h5>
                <h5 className='font-bold'>{bowlingType}</h5>
            </div>

            <div className='mt-3 flex justify-between mb-2'>
                
                <h5 className='font-bold mt-2'>Price : ${biddingPrice}</h5>
                <button className='btn font-bold' onClick={()=>ChosePlayer(card,playerId)}>Chose Player</button>
            </div>
       
       
       
       
       
       
        </div>






        

    );
};
Card.propTypes={
    card: PropTypes.object.isRequired,
}

export default Card;