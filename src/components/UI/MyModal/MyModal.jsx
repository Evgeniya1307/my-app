import React from "react";
import cl from './MyModal.module.css'

function MyModal ({children, visible, setVisible}) {
    //будет управлять родит компонет где модалка используется props ожидаю visible видно или нет и setVisible будет скрывать если нажать на тёмную область
    const rootClasses = [cl.myModal]
    if(visible ){
        rootClasses.push(cl.active)
    }
    
    return(

        <div className={rootClasses.join('')} onClick={()=> setVisible(false)}> 
        <div className={cl.myModalContent} onClick={(e)=>e.stopPropagation()}>
        {children}
        </div>
        </div>
    )
}

export default MyModal;


// props children могу помещать в модальное окно что захочу

// реализую механизм который вставляет либо вскрывает модальное окно

//  <div className={rootClasses.join('')} onClick={()=> setVisible(false)}> //реализую закрытие при нажатии на тёмную область

//<div className={cl.myModalContent} onClick={(e)=>e.stopPropagation()}>// чтобы незакрывалась мадалка когда нажимаю на контектную часть чтобы предотвратить у эвента есть функция stopProgration()