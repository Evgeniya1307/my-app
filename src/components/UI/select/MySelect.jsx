import React from "react";


const MySelect = ({options, defaultValue, value, onChange})=>{

    return(
        <select
         value={value}
         onChange={event=>onChange(event.target.value)}//чтобы следить за изменением селекта передаю сразу значение которое ввёл пользователь его достаю из поля target
        
    >
        <option disabled value=''>{defaultValue}</option>
        {options.map(option=>
           <option key={option.value} value={option.value}> 
           {option.name}
           </option> // объекты будут с 2мя полями name и value
            )}
        </select>
    )
}

export default MySelect;




//<option value=''>{defaultValue}</option>// сортировка по а потом уже меню

//<option value=''>{defaultValue}</option>
       // {options.map(option=>
         //  <option value={option.value}>
         //  {option.name}
         //  </option> // объекты будут с 2мя полями name и value