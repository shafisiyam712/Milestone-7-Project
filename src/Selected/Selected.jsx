
import PropTypes from 'prop-types';
import CardSelected from '../CardSelected/CardSelected';

const Selected = ({ selected,remove,isActive,handleActive}) => {
    return (
        <div className={`${isActive.cart? "hidden": "w-11/12 mx-auto mb-56" }`}>
            <div className='flex justify-between mt-5'>
                <h1 className={`${isActive.cart? "hidden": "font-extrabold mt-3" }`}>Selected Players ({selected.length}/6)</h1>
                <div className='flex gap-0 '>
            <button onClick={()=>handleActive('cart')} className={`${isActive.cart? "btn w-28 h-10 active": "btn w-28 h-10" }`}>Available</button>
            <button onClick={()=>handleActive('about')} className={`${isActive.cart? "btn w-28 h-10 active":"btn w-28 h-10 active" }`}>Selected({selected.length})</button>
           </div>
            </div>

            <div className='mt-5 w-full'>
                {
                    selected.map((cardSelected, idx) => <CardSelected key={idx} cardSelected={cardSelected}
                    remove={remove}
                    > </CardSelected>)
                }
            </div>
            <div>
            <button onClick={()=>handleActive('cart')} className={`${isActive.cart? "btn bg-[#E7FE29]": "btn bg-[#E7FE29]" }`}>Add to more</button>
            </div>
        </div>


    );
};

Selected.propTypes = {
    selected: PropTypes.array,
    remove: PropTypes.func,
    handleActive:PropTypes.func
};

export default Selected;