import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { fauser} from "@fortawesome/free-solid-svg-icons";
import Card from "./components/Card.js"
import Header from "./components/Header.js"
import Drawer from "./components/Drawer.jsx"
const arr =[
 
{ title:"Мужские Кроссовки Nike Blazer Mid Suede",
 price:"12999",
 imageUrl:"/img/sneakers1.svg"},

{title:"Мужские Кроссовки Nike Air Max 270",
 price:"12999",
 imageUrl:"/img/sneakers 2.svg"},

{title:"Мужские Кроссовки Nike Blazer Mid Suede",
 price:"8 499",
 imageUrl:"/img/sneakers3.svg"},


{title:"Кроссовки Puma X Aka Boku Future Rider",
 price:"8 999 ",
 imageUrl:"/img/sneakers 4.svg"},
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
 <Header/>

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


<div className='d-flex'>
{arr.map((obj)=>(
<Card title ={obj.title} price={obj.price} imageUrl={obj.imageUrl}/>
))}


</div>


</div>
    </div>
  );
}

export default App;
