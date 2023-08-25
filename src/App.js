import postImage from "./img/post-img.jpg";
import './App.css';
import { ChatLeftText, HandThumbsUp, Share } from "react-bootstrap-icons";

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

      <p className="para">{props.bodyText}</p>

      <img src={postImage} alt="post" className="postImg"/>

        <div className="post-footer">
          <div className="btn">
            <HandThumbsUp />
            Like
          </div>
          <div className="btn">
            <ChatLeftText /> Comment
          </div>
          <div className="btn">
            <Share /> Share
          </div>
        </div>
    </div>
  );
}

export default App;
