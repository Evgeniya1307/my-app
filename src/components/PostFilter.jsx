import React from "react";


const PostFilter =({filter, setFilter})=>{ // пропсами принимаем filter щбъект и setFilter будет изменять
return(
    <div>
        <MyInput
          value={setsearchQuery}
          onChange={(e) => setsearchQuery(e.target.value)} //управляемый инпут
          placeholder="Поиск..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts} //вызываю функцию setSelectedSort и передаю то что приходит из селекта т,е та опция что выбрал пользователь
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