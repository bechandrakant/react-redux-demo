import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/posts/postActions";

const PostContainer = (props) => {
  const { posts, fetchPost } = props;
  console.log(posts);

  return (
    <div>
      <h2>PostContainer</h2>
      <button onClick={fetchPost}>Fetch Post</button>
      {posts &&
        posts.map((post) => {
          return (
            <div
              style={{
                padding: 16,
                borderRadius: 6,
                boxShadow: "0px 2px 8px #666",
                width: "50%",
                margin: "24px auto",
              }}
            >
              <h3 style={{ textTransform: "capitalize" }}>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
