import './banner.css'
import banner from '../assets/banner-main.png'
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prop-types
const Banner = ({handelBalance}) => {
    return (
        <div className="bnr-img mt-5 flex flex-col justify-center items-center text-center bg-black rounded-xl gap-4 w-11/12 mx-auto">
            <div className=''>
                <img className='w-full h-full' src={banner} alt="" />
            </div>
           
            <h1 className='text-2xl font-extrabold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h2 className='font-bold text-gray-500'>Beyond Boundaries Beyond Limits</h2>
            <div className='w-40 h-14 border border-yellow-400 rounded-xl content-center '>
                <button onClick={()=>handelBalance(1000000)} className='btn bg-[#E7FE29] border border-[#E7FE29]'>Claim For Credit</button>
            </div>
            
        </div>
    );
};


Banner.propTypes = {
    setBalance: PropTypes.func
    
  }
export default Banner;