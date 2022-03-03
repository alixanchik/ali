import React from 'react'

function Drawer (props) {
  return (
    <div >
            <div style={{display:"none"}}  className='overlay'>
     </div>
      <div className='drawer'>

<h2 className='d-flex justify-between mb-30 '>
Корзина {''}
 <img onClick={props.onClose} className='cu-p' src='/img/note.svg' alt='close'/>
</h2>
<div className='items'>

<div className='cartItem d-flex align-center mb-20  '>

<img className='mr-20' width={70} height={70} src='/img/sneakers 2.jpg' alt='sneakers'/>
    
    <div style={{backgroundImage:'url/img/sneakers 2.jpg)'}} className='cartItemimg'></div>

{/* МУЖСКИЕ КРОССОВКИ */}
<div className='mr-20'>
  <p className='mb-5'> 
  Мужские Кроссовки<br></br> Nike Air Max 270
  </p>
  <b>12 999 руб.</b>
</div>

<img className='remove-btn' src='/img/note.svg' alt='note'/>  



</div>
 {/* МУРЖСКИЕ КРОССОВКИ2 */}
<div className='cartItem d-flex align-center'>
<img className='mr-20' width={70} height={70} src='/img/sneakers 2.jpg' alt='sneakers'/>
    
    <div style={{backgroundImage:'url/img/sneakers 2.jpg)'}} className='cartItemimg'></div>


<div className='mr-20'>
  <p className='mb-5'> 
  Мужские Кроссовки<br></br> Nike Air Max 270
  </p>
  <b>12 999 руб.</b>
</div>

<img className='remove-btn' src='/img/note.svg' alt='note'/>  

</div>

{/* ИТОГО ИТОГО */}
<div className='cartTotalBlock'>
<ul >
  <li className='d-flex'>
     <span>Итого:</span>
     <div></div>
     <b>21 498 руб.</b>
     </li>
  <li className='d-flex'>
    <span>Налог 5%: </span>
    <div></div>
     <b> 1074 руб. </b>

  </li>
</ul>
<button className='Greenbutton'>Оформить Заказ <img src='/img/strelka.svg' alt='strelka'/></button>
</div>

</div>
</div>  
    </div>
  )
}

export default Drawer