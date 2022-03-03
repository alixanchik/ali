import React from 'react'
function Card (props) {
  console.log(props);
  return (
    <div>
        <div className='card'>
 <div className='favorite'>
 <img src='/img/like.svg' alt='like'/>
 </div>
  <img width={133} height={122} src='/img/sneakers1.jpg' alt=''/>
  <h5>
  Мужские Кроссовки<br></br> Nike Blazer Mid Suede
  </h5>
  <div className='d-flex justify-between aligin-center'>
    <div className='d-flex flex-column '>
<span>
Цена:
</span>
<b>
12 999 руб.
</b>
    </div>
    <button className='button' ><img width={11} height={11} src='/img/plus.svg' alt=''/></button>
  </div>
</div>
    </div>
  )
}

export default Card