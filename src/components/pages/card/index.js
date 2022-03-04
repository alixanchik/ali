import React from 'react'
import styles from "./Card.module.scss"
console.log(styles)
function Card ({title, imageUrl,price,onFavorite,onPllus}) {

  const [isAdded,setIsAdded] = React.useState(false)
  const onClickPlus=() =>{
    onPlus({title, imageUrl,price,});
    setIsAdded(!isAdded);
  }


const onPlus = () =>{
  alert(title)
}
  return (
    <div>
        <div className={styles.card}>
 <div className={styles.favorite}onClick={onFavorite}>

 <img className={styles.like}src='/img/like.svg' alt='like'/>
 </div>
  <img width={133} height={122} src={imageUrl}alt='snaekers'/>
  <h5>
{title}
  </h5>
  <div className='d-flex justify-between aligin-center'>
    <div className='d-flex flex-column '>
<span>
Цена:
</span>
<b>
{price} руб.
</b>
    </div>
   
      <img className={styles.plus} onClick={onClickPlus }  src={isAdded ? "/img/cheked.svg" : "/img/plus.svg"} alt=''/>
  </div>
</div>
    </div>
  )
}

export default Card
