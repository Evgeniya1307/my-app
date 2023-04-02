import { useState } from "react"

 const useFetching=(callback)=> { // callback некоторый запрос перед которым крутилку показать и после выполнения скрыть   
const [isLoading, setIsLoading] =  useState(false)
// обработка ошибок базовый keys 
const [error, setError]=  useState('')

// in case an error occurs
const fetching =async (...args)=> {
    try{
setIsLoading(true)// изменяю состояние чтобы появилась крутилка
await callback(...args) // I call the callback that took the argument
}catch(e){

// handle the case if an error occurs
setError(e.message)
}finally{
setIsLoading(false)
}
}
return[fetching, isLoading, error]// возвращаю fetching -чтобы в нужном месте вызвать её , состояние isLoading, и ошибку 
}

export default useFetching