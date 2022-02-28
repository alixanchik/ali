import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { fauser} from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    <div className="wrapper clear">
 <header className='d-flex justify-between'>
   <div className="d-flex align-center">
     <img width={40} height={40} src="/img/image 4.png"/>
     <div>
     <h3>
     REACT SNEAKERS
     </h3>
     <p>
     Магазин лучших кроссовок
     </p>
     </div>
   </div>
  <ul className="header2">
    <li>
    <img width={40} height={40} src="/img/Group.svg"/>
    <span>1205 руб.</span>

    </li>
<li>
<img width={60} height={40} src="/img/user.png"/>
    </li>
  </ul>
  </header>
<div className="sneaker">
  <h1>
Всем Кроссовки
  </h1>
.....
</div>
    </div>
  );
}

export default App;
