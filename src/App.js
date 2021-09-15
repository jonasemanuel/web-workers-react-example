import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [facebookLikeCount, setFacebookLikeCount] = useState(0);
  const [instagramLikeCount, setInstagramLikeCount] = useState(0);
  const [workerInstance, setWorkerInstance] = useState();

  useEffect(() => {
    setWorkerInstance(new Worker("/workers/worker-1.js"));
  }, []);

  if (workerInstance) {
    workerInstance.onmessage = (event) => {
      setInstagramLikeCount(event.data);
    };
  }

  return (
    <div className="App">
      <h1>Web Workers API (With WEB Worker)</h1>
      <div className="actions">
        <button
          className="btn facebook"
          onClick={() => {
            setFacebookLikeCount((prevState) => prevState + 1);
          }}
        >
          Facebook Like {facebookLikeCount}
        </button>
        <button
          className="btn instagram"
          onClick={() => {
            workerInstance.postMessage({
              message: "instagramLikes",
              currentValue: instagramLikeCount,
            });
          }}
        >
          Instagram Like: {instagramLikeCount}
        </button>
      </div>
    </div>
  );
}

export default App;
