import React from 'react'
import styles from "./Card.module.scss"
console.log(styles)
function Card (props) {

  const [isAdded,setIsAdded] = React.useState(false)
  const onClickPlus=() =>{
    setIsAdded(!isAdded);
  }

  // React.useEffect (()=>{
  //   console.log
  
  // })
const onPlus = () =>{
  alert(props.title)
}
  return (
    <div>
        <div className={styles.card}>
 <div className={styles.favorite}onClick={props.onFavorite}>

 <img className={styles.like}src='/img/like.svg' alt='like'/>
 </div>
  <img width={133} height={122} src={props.imageUrl}alt='snaekers'/>
  <h5>
{props.title}
  </h5>
  <div className='d-flex justify-between aligin-center'>
    <div className='d-flex flex-column '>
<span>
Цена:
</span>
<b>
{props.price} руб.
</b>
    </div>
   
      <img className={styles.plus} onClick={onClickPlus }  src={isAdded ? "/img/cheked.svg" : "/img/plus.svg"} alt=''/>
  </div>
</div>
    </div>
  )
}

export default Card
