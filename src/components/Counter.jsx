import React, {useState} from 'react';

const Counter = function() {
const [count, setCount] = useState(0) // создала состояние 
    
function increment(){
    setCount(count +1)
}

function dicrement(){
    setCount(count-1)
}

    return (
         <div>
         <h1>{count}</h1>
         <button onClick={increment}>increment</button>
         <button onClick={dicrement}>decrement</button>
    </div>
    )   
   
}



export default Counter;

