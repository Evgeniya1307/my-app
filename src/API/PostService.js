


export default class PostService {
static async getAll(){ // статичная асинхронная функция будет возвращать список постов
const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
}
}