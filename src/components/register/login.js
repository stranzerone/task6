// CreateAccount.js

import React from 'react';
import './account.css';
import register from "../../Images/register.png";
import fb from "../../Images/fb.png"
import search from "../../Images/search.png"

const LoginPage = ({createClicked}) => {
  return (
    <div className="createAccountContainer">
      <div className="header">
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
      </div>
<div className='d-flex'>


      <div className='left-account col-12  col-md-6'>


    

      <div className="title">Log In</div>


     

      <div className="inputContainer" id="emailInput">
        <input type="email" id="email" name="email" placeholder="Email" className="fullWidth" />
      </div>

      <div className="inputContainer" id="passwordInput">
        <input type="password" id="password" name="password" placeholder="Password" className="fullWidth" />
      </div>

     
      <div className='register-buttons'>

<button className='create-account-button' >Sign In</button>
<button className='f-button'> <img src={fb} alt='back'  /> Sign In with faceBook</button>
<button className='f-button'> <img src={search} alt='back'  />  Sign In With Google</button>


</div>


      </div>

      <div className='right-account col-0 col-md-6 '> 
      <div className='login-head'>Don't have an account yet?<span onClick={createClicked} className='create-free'>Create for Free</span></div>



<div className='register-img'>
    <img src={register}  alt='auto'  />
</div>


      </div>
      </div>



    


    </div>
  );
};

export default LoginPage;
