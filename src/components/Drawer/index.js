// import React from 'react'

// function Drawer ({onClose, items =[]}) {
//   return (
//     <div >
//             <div style={{display:"none"}}  className='overlay'>
//      </div>
//       <div className='drawer'>

// <h2 className='d-flex justify-between mb-30 '>
// Корзина {''}
//  <img onClick={onClose} className='cu-p' src='/img/note.svg' alt='close'/>
// </h2>
// <div className='items'>
//   {items.map((obj)=>(
//     <div className='cartItem d-flex align-center mb-20  '>

// <img className='mr-20' width={70} height={70} src='/img/sneakers 2.jpg' alt='sneakers'/>
    
//     <div
//      style={{backgroundImage: `url(${obj.imageUrl})`}} className='cartItemimg'></div>

// <div className='mr-20'>
//   <p className='mb-5'> 
//   {obj.title}
//   </p>
//   <b>{obj.price}</b>
// </div>

// <img className='remove-btn' src='/img/note.svg' alt='note'/>  

// </div>
//   ))}

// </div>



// {/* ИТОГО ИТОГО */}
// <div className='cartTotalBlock'>
// <ul >
//   <li className='d-flex'>
//      <span>Итого:</span>
//      <div></div>
//      <b>21 498 руб.</b>
//      </li>
//   <li className='d-flex'>
//     <span>Налог 5%: </span>
//     <div></div>
//      <b> 1074 руб. </b>

//   </li>
// </ul>
// <button className='Greenbutton'>Оформить Заказ <img src='/img/strelka.svg' alt='strelka'/></button>
// </div>


// </div>  
//     </div>
//   )
// }

// export default Drawer


import React from 'react';
import axios from 'axios';

import Info from '../Info';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка при создании заказа :(');
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина <img onClick={onClose} className="cu-p" src="img/note.svg" alt="Close" />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="img/note.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб. </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} руб. </b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                Оформить заказ <img src="img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={isOrderComplete ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;