// CreateAccount.js

import React from 'react';
import './account.css';
import register from "../../Images/register.png";
import fb from "../../Images/fb.png"
import search from "../../Images/search.png"

const CreateAccount = ({onSignInClick}) => {
  return (
    <div className="createAccountContainer">
      <div className="header">
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
      </div>
<div className=' d-md-flex '>


      <div className='left-account   col-md-6'>


    

      <div className="title">Create Account
      
     
      </div>


      <div className="inputContainer" >
        <input type="text" id="firstName" name="firstName" placeholder="First Name" className="halfWidth" />
        <input type="text" id="lastName" name="lastName" placeholder="Last Name" className="halfWidth" />
      </div>

      <div className="inputContainer" id="emailInput">
        <input type="email" id="email" name="email" placeholder="Email" className="fullWidth" />
      </div>

      <div className="inputContainer" id="passwordInput">
        <input type="password" id="password" name="password" placeholder="Password" className="fullWidth" />
      </div>

      <div className="inputContainer" id="confirmPasswordInput">
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="fullWidth"
        />
      </div>
      <div className='register-buttons'>

<button className='create-account-button' >  Create Account</button>
<button className='f-button'> <img src={fb} alt='back'  /> Sign Up with faceBook</button>
<button className='f-button'> <img src={search} alt='back'  />  Sign Up With Google</button>
<div className="signInLinkMobile">Already had an account?<span onClick={onSignInClick} className='in-span'>Sign In</span></div>


</div>


      </div>

      <div className='right-account col-0 col-md-6 '> 
      <div className="signInLink"> Already had an account?<span onClick={onSignInClick} className='in-span'>Sign In</span></div>



<div className='register-img'>
    <img src={register}  alt='auto'  />
</div>


      </div>
      </div>



      <div className='below-text'>
By signing up, you agree to our Terms & conditions, Privacy policy
    
</div>



    </div>
  );
};

export default CreateAccount;
