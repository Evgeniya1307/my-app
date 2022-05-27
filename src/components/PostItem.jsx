const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post_content">
        <strong>{props.post.id}.{props.post.title}</strong>
        <div>
        {props.post.body} 
        </div>
      </div>
      <div className="post_btns">
        <button>Удалить</button>
      </div>
    </div>
  );
};

export default PostItem;







// так вытягиваю данные с ппропс переданные в app/> смотри там

// <strong>{props.post.id}.{props.post.title}</strong>
// <div>
// {props.post.body} 