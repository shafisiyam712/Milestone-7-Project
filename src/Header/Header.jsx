import profile from '../assets/logo.png'
import coin from '../assets/coin.png'
// import PropTypes from 'prop-types';
//import { useState } from 'react';

const Header = ({balance}) => {
   
    return (
        <div className='w-11/12 mx-auto'>
            <div className="bg-base-100 mt-3 flex justify-between">
  <div className="navbar-start">
     <img src={profile} alt="" />
  </div>
        
  <div className='flex'>
 <div className="hidden md:flex gap-0">
    <ul className="menu menu-horizontal">
      <li><a>Home</a></li>
      <li className='md:hidden lg:block'><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li className='md:hidden lg:block'><a>Schedule</a></li>
    </ul>
  </div>
  <div className="">
    <a className="btn">{balance} coin <img src={coin} alt="" /></a>
  </div>
  </div>
 

</div>
        </div>
    );
};

// Header.propTypes = {
  
  
// }
export default Header;