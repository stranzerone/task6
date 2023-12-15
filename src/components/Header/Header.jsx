import React, { useState } from 'react';
import './Header.css';
import whole from "../../Images/whole.svg"
import CreateAccount from '../register/CreateAccoun';
import LoginPage from '../register/login';
const Header = () => {
  const [open,setOpen] =useState(false)
  const [isSignInClicked, setIsSignInClicked] = useState(false);

  const openSignIn = () => {
    setIsSignInClicked(!isSignInClicked);
   setOpen(false)
  };

  const handlecreate=()=>{
setIsSignInClicked(false)
setOpen(true)


  }
const closer =()=>{
setOpen(false)
setIsSignInClicked(false)

}
const register =()=>{

setOpen(!open)

}

  return (
    <div>


  <div className='d-flex header-coin'>
  <div className='logo col-3'>
  <img src={whole} alt='logo-img ' className='logo-img'   />

  </div>
  <div className='header-input col-6'   >
  <div className="input-container">
  <i className="bi bi-search search-icon"></i>
      <input className="header-in" placeholder="Search for group at ATG" />
    </div>

  </div>
  <div className='link col-3'>
  <h1 >Create account.<span style={{ color: '#2F6CE5',fontWeight:'500' }}>It's free</span><i onClick={register} className="bi bi-caret-down-fill d-icon"></i> </h1>

  </div>


  </div>
<div className='z-index  '>
{open?<div className='z-div'>
<i  onClick={closer}  className="bi bi-x-circle-fill cross"></i>

<CreateAccount onSignInClick={openSignIn} /></div>:null}
{isSignInClicked?<div className='z-div login-div'> <i onClick={closer}   className="bi bi-x-circle-fill cross"></i>
<LoginPage createClicked={handlecreate}  /></div>:null}

</div>

  </div>
  );
};

export default Header;
