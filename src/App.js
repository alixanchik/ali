// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { fauser} from "@fortawesome/free-solid-svg-icons";
// import React from 'react'
// import Card from "./components/card"
// import Header from "./drawer/Header.js"
// import Drawer from "./drawer/Drawer.jsx"


// function App() {
//   const [items,setItems] = React.useState ([])
//   const [cartItems,setCartItems] = React.useState ([])
//   const [cartOpened, setCartOpened] = React. useState (false);
//   React.useEffect (()=>{
//     fetch("https://6220bd7bafd560ea699ba1ad.mockapi.io/items")
//     .then ((res) =>{
//       return res.json();
//     })
//     .then ((json)=>{
//       setItems(json);
//     });
//   },[]);


// const onAddToCart =(obj) =>{
//   setCartItems([...cartItems, obj])


// }
//   return (
//     <div className="wrapper clear">
//    {cartOpened &&  <Drawer items={cartItems} onClose={()=> setCartOpened(false)}/>}
//  <Header onClickCart={() => setCartOpened (true)}/>

// <div className="sneaker p-40">
// <div className='d-flex justify-between aligin-center mb-40'>
// <h1 >
// Всем Кроссовки
//   </h1>
 
//   <div className='Search d-flex'>
//   <img src='/img/search.svg' alt='Search'/>
//   <input placeholder='Поиск...' />
//   </div>
// </div>


// <div className='d-flex flex-wrap'>
// {items.map((item)=>(
// <Card title ={item.title} 
// price={item.price}
//  imageUrl={item.imageUrl}
//  onFavorite={()=> console.log ("Добавили загладки")}
//  onPluss={(obj)=> onAddToCart(obj)}
//  />
// ))}


// </div>


// </div>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import AppContext from './context';

import Home from './pages/Home';
import Favorites from './pages/Favorite';
import Orders from './pages/Order';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get(''),
          axios.get(''),
          axios.get('https://6220bd7bafd560ea699ba1ad.mockapi.io/items'),
        ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных ;(');
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://60d62397943aa60017768e77.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://60d62397943aa60017768e77.mockapi.io/cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
      console.error(error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://60d62397943aa60017768e77.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Ошибка при удалении из корзины');
      console.error(error);
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://60d62397943aa60017768e77.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post(
          'https://60d62397943aa60017768e77.mockapi.io/favorites',
          obj,
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}>
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

        <Header onClickCart={() => setCartOpened(true)} />

        <Route path="" exact>
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />
        </Route>

        <Route path="favorites" exact>
          <Favorites />
        </Route>

        <Route path="orders" exact>
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;

