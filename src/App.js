import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { fauser} from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    <div className="wrapper clear">
 <header className='d-flex justify-between aligin-center p-40'>
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
    <li>
    <img width={40} height={40} src="/img/Group.svg"/>
    <span>1205 руб.</span>

    </li>
<li>
<img width={60} height={40} src="/img/user.png"/>
    </li>
  </ul>
  </header>
<div className="sneaker p-40">
<div className='d-flex justify-between aligin-center mb-40'>
<h1 className=''>
Всем Кроссовки
  </h1>
  <div className='Search d-flex'>
  <img src='/img/search.svg' alt='Search'/>
  <input placeholder='Поиск...' />
  </div>
</div>
<div className='d-flex'>
<div className='card'>
  <div className='favorite'>
  <img src='/img/unliked.svg' alt='unliked'/>
  </div>
  <img width={133} height={112} src='/img/sneakers1.jpg' alt='Sneakers'/>
  <h5>
  Мужские Кроссовки <br></br>Nike Blazer Mid Suede
  </h5>
  <div className='d-flex justify-between  aligin-center'>
    <div className='d-flex flex-column' >
      <span>
        Цена:
      </span>
      <b>12 999 руб.</b>
    </div>
    <button className='button' ><img width={11} height={11} src='/img/plus.svg' alt=''/></button>
  </div>
</div>
<div className='card'>
  <img width={133} height={112} src='/img/sneakers 2.jpg' alt='Sneakers'/>
  <h5>
  Мужские Кроссовки <br></br>Nike Blazer Mid Suede
  </h5>
  <div className='d-flex justify-between  aligin-center'>
    <div className='d-flex flex-column'>
      <span>
        Цена:
      </span>
      <b>12 999 руб.</b>
    </div>
    <button className='button' ><img width={11} height={11} src='/img/plus.svg' alt=''/></button>
  </div>
</div>
<div className='card'>
  <img width={133} height={112} src='/img/sneakers3.jpg' alt='Sneakers'/>
  <h5>
  Мужские Кроссовки <br></br>Nike Blazer Mid Suede
  </h5>
  <div className='d-flex justify-between  aligin-center'>
    <div className='d-flex flex-column'>
      <span>
        Цена:
      </span>
      <b>12 999 руб.</b>
    </div>
    <button className='button' ><img width={11} height={11} src='/img/plus.svg' alt=''/></button>
  </div>
</div>
<div className='card'>
  <img width={133} height={112} src='/img/sneakers 4.jpg' alt='Sneakers'/>
  <h5>
  Мужские Кроссовки <br></br>Nike Blazer Mid Suede
  </h5>
  <div className='d-flex justify-between  aligin-center'>
    <div className='d-flex flex-column'>
      <span>
        Цена:
      </span>
      <b>12 999 руб.</b>
    </div>
    <button className='button' ><img width={11} height={11} src='/img/plus.svg' alt=''/></button>
  </div>
</div>
</div>
</div>
    </div>
  );
}

export default App;
