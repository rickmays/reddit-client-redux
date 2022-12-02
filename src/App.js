import Header from "./Header";
import Reddit from "./Reddit";
import { useState } from "react";

const App = () => {
  // Initialize state to hold the posts
  const [posts, setPosts] = useState([]);
  // Initialize state to hold fetch error
  const [error, setError] = useState(null);
  // Initialize state to hold the input value
  const [searchTerm, setSearchTerm] = useState("");
  // Initialize state to hold the current subreddit
  const [selectedSubreddit, setSelectedSubreddit] = useState('reactjs');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedSubreddit(searchTerm);
  };

  return (
    <div className="container">
      <Header />
      <Reddit
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={(e) => handleSubmit(e)}
        posts={posts}
        setPosts={setPosts}
        error={error}
        setError={setError}
        selectedSubreddit={selectedSubreddit}
      />
    </div>
  );
};

export default App;
