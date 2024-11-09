import PropTypes from 'prop-types';

const CardSelected = ({cardSelected,remove}) => {
    //console.log(cardSelected);
    const{playerId,name,image,role}=cardSelected
    return (
        <div className='border rounded-xl p-3 mb-3 flex justify-between w-full'>
              <div className='flex justify-start gap-3'>
            <div>
                 <img className='w-24 h-24 rounded-xl' src={image} alt="" />
            </div>
            <div className='flex flex-col gap-2 justify-center'>
                <h2 className='font-bold text-2xl'>{name}</h2>
                <h4>{role}</h4>
            </div>
           
        </div>

            <div className='flex justify-center'>
                <button onClick={()=>remove(playerId)}><i class="fa-solid fa-trash"></i></button>
            </div>

        </div>
      
    );
};

export default CardSelected;
CardSelected.propTypes = {
    cardSelected: PropTypes.obj,
    remove: PropTypes.func
}