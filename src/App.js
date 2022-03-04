import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { fauser} from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import Card from "./components/pages/card"
import Header from "./components/Header.js"
import Drawer from "./components/Drawer.jsx"


function App() {
  const [items,setItems] = React.useState ([])
  const [cartItems,setCartItems] = React.useState ([])
  const [cartOpened, setCartOpened] = React. useState (false);
  React.useEffect (()=>{
    fetch("https://6220bd7bafd560ea699ba1ad.mockapi.io/items")
    .then ((res) =>{
      return res.json();
    })
    .then ((json)=>{
      setItems(json);
    });
  },[]);
const onAddToCart =(obj) =>{
  setCartItems([cartItems, obj])


}
  return (
    <div className="wrapper clear">
   {cartOpened &&  <Drawer items={cartItems} onClose={()=> setCartOpened(false)}/>}
 <Header onClickCart={() => setCartOpened (true)}/>

<div className="sneaker p-40">
<div className='d-flex justify-between aligin-center mb-40'>
<h1 >
Всем Кроссовки
  </h1>
 
  <div className='Search d-flex'>
  <img src='/img/search.svg' alt='Search'/>
  <input placeholder='Поиск...' />
  </div>
</div>


<div className='d-flex flex-wrap'>
{items.map((item)=>(
<Card title ={item.title} 
price={item.price}
 imageUrl={item.imageUrl}
 onFavorite={()=> console.log ("Добавили загладки")}
 onPlus={(obj)=> onAddToCart(item)}
 />
))}


</div>


</div>
    </div>
  );
}

export default App;
