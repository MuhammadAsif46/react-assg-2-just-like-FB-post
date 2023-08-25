import postImage from "./img/post-img.jpg";
import './App.css';

function App(props) {
  return (
    <div className="post-main">
      <div className="post-header">
        <img src={props.profileImg} width={65} height={65} alt="my-image" />
        <div>
          <h1>{props.name}</h1>
          <div className="date">{props.date}</div>
        </div>
      </div>

      <p>{props.bodyText}</p>

      <img src={postImage} alt="post" className="postImg"/>
    </div>
  );
}

export default App;
