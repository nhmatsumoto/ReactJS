import { useState } from "react";
import { Tweet } from "./components/Tweet"

function App() {
  //CODE
  const [tweets, setTweets] = useState<string[]>([
    'Hello 1',
    'Hello 2',
    'Hello 3',
  ]);

  function createTweet() {
    setTweets([...tweets, 'Hello 4'])
  }

  //HTML
  return (
    <div>
      {tweets.map(t => {
        return <Tweet text={t} />
      })}

      <button
        onClick={
          createTweet
        }
        style={{
          color: '#ffd43b',
          background: '#04151c',
          border: 0,
        }}>
        Add
      </button>
    </div>
  );
}

export default App
