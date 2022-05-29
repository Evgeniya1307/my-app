import React from 'react'
import classes from './MyButton.module.css'

const MyButton = ({children,...props})=>{
    return(
      <button{...props} className={classes.myBtn}>
        {children}
        </button>
    )
}

export default MyButton








//  children,...props деструктуризация выцепила от туда пропс чисдрен а все остальные как есть 
 //{children} сразу на кнопке появилась запись создать кнопку

 //<button{...props} className={classes.myBtn}> весь объект разворачиваем в button так образом все пропсы которые будем передавать mybutton будут улетать в эту кнопку 