import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    // статичная асинхронная функция будет возвращать список постов

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          // вторым параметром в функцию гет перадаю опции указываю поле params : и нужные значения
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }
// вернёт нужный пост
static async getById(id) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  return response;
    }

    static async getCommentsByPostId(id) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments` 
      );
      return response;
    }
  }
