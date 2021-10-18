import React from "react";
// import axios from "axios";

export default class classComponentFetchData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ posts: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let { posts } = this.state;
    return (
      <>
        List of Post
        {posts.length
          ? posts.map((post) => (
              <div key={post.id}>
                <img src={post.thumbnailUrl} alt={post.title} />
                {post.id}
              </div>
            ))
          : null}
      </>
    );
  }
}
