const fetchRedditPosts = (selectedSubreddit, setPosts, setError) => {
  const asyncFetch = async () => {
    if (!selectedSubreddit) {
      selectedSubreddit = "404";
    }
    try {
      const response = await fetch(
        `https://www.reddit.com/r/${selectedSubreddit}.json`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      const posts = json.data.children.map((post) => post.data);
      posts.sort((a, b) => (a.score < b.score) - (a.score > b.score));
      setPosts(posts);
    } catch (error) {
      setError(error.message);
    }
  };
  asyncFetch();
};

export default fetchRedditPosts;
