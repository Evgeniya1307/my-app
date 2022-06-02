import { useState } from "react"

export const useFetching=(callback)=> { // callback некоторый запрос перед которым крутилку показать и после выполнения скрыть   
const [isLoading, setIsLoading] =  useState(false)
// обработка ошибок базовый keys 
const [error, setError]=  useState('')

// на случай если ошибка произошла буду сюда её помещать
const fetching =async ()=> {
    try{
setIsLoading(true)// изменяю состояние чтобы появилась крутилка
}catch(e){
await callback() // вызываю коллбэк который приняла аргументом
// обрабатываю случай если произошла ошибка
setError(e.message)
}finally{
setIsLoading(false)
}
}
return[fetching, isLoading, error]// возвращаю fetching -чтобы в нужном месте вызвать её , состояние isLoading, и ошибку 
}