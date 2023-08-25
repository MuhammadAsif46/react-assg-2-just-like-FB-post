
import './App.css';

function App(props) {
  return (
    <div className="post-main">
      <h1>{props.name}</h1>
      <p>{props.date}</p>
      <p>{props.bodyText}</p>
    </div>
  );
}

export default App;
