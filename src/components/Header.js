import React from 'react'

function Header (props) {
 
  return (
<div> <header className='d-flex justify-between aligin-center p-40'>
    <div className="d-flex align-center">
      <img width={40} height={40} src="/img/image 4.png"/>
      <div>
      <h3  className='text-uppercase'>
      REACT SNEAKERS
      </h3>
      <p className='opacity-5'>
      Магазин лучших кроссовок
      </p>
      </div>
    </div>
   <ul className="d-flex">
     <li onClick={props.onClickCart} className='mr-30 cu-p'>
     <img width={40} height={40} src="/img/Group.svg"/>
     <span>1205 руб.</span>
 
     </li>
 <li>
 <img width={60} height={40} src="/img/user.png"/>
     </li>
   </ul>
   </header></div>
  )
}

export default Header
