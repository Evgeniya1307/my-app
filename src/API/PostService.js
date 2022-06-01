
import axios from "axios"

export default class PostService {
    static async getAll(){ // статичная асинхронная функция будет возвращать список постов
try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data // возвращаю список постов
}catch(e){
console.log(e)
}
       
}
}

