import React, { useState } from 'react'
import "./Hero.css"
import CreateAccount from '../register/CreateAccoun'
import LoginPage from '../register/login'
export default function HeroPage() {
  const [open,setOpen] =useState(false)
  const [signin,setsignin] =useState(false)

  const opner2=()=>{
setOpen(true)

  }

  const closer =()=>{
    setOpen(false)
    setsignin(false)
  }


  const nextOpen =() =>{

    setsignin(true)
    setOpen(false)
  }
  return (
    <div className='heroPage'>

    <div className='py-4'>
    <button className='joinGrup-button' onClick={opner2}>Join Group</button>
{open?<div  className='MobileOpen'>  <i className="bi bi-x-circle-fill m-cross " onClick={closer}></i><CreateAccount onSignInClick={nextOpen} /></div>:null}
{signin?<div className='MobileOpen'><LoginPage  /></div>:null}

    </div>

<div className='heroPage-text mx-md-5 '>
    <h1>Computer Engineering</h1>
    <p>142,765 Computer Engineers follow this</p>
</div>
    </div>
  )
}
