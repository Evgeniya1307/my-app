import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";


const PostFilter =({filter, setFilter})=>{ // пропсами принимаем filter щбъект и setFilter будет изменять
return(
    <div>
        <MyInput
          value={filter.query} // value для импута получаю из   поля из объекта filter
          onChange={e => setFilter({...filter, query:e.target.value})} //управляемый инпут ,,,возвращаю все поля из этого объекта но заменяю нужное в случае инпута заменяю query
          placeholder="Поиск..."
        />
        <MySelect
          value={filter.sort}
         onChange={selectedSort=>setFilter({...filter, sort:selectedSort})}//стало селект возвращает выбраный алгоритм сортировки выбраную опцию           было  onChange={sortPosts} //вызываю функцию setSelectedSort и передаю то что приходит из селекта т,е та опция что выбрал пользователь
          defaultValue="Сортировка "
          options={[
            { value: "title", name: "По названию" }, // объект содержит 2поля это value в нашем случае с велью тайтол а второе с велью бади сортировка по заголовку и по телу и name сам текст который находится внутри опций
            { value: "body", name: "По описанию" },
          ]} // передать массив опций
        />
      </div>
)

}

export default PostFilter;