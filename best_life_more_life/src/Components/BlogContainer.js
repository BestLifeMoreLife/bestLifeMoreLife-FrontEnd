import React from "react";

class BlogContainer extends React.Component {
  state = {
    blogs: []
  };

  componentDidMount() {
    this.fetchBlogs();
  }

  fetchBlogs = () => {
    fetch(`http://localhost:3000/api/v1/entries`)
      .then(resp => resp.json())
      .then(blogs => {
        this.setState({
          blogs
        });
      });
  };
  render() {
    console.log("BLOG", this.state.blogs);
    let blogs = this.state.blogs.map(blog => {
      let date = blog.updated_at.split("T")[0];
      let content = blog.content;
      return (
        <div className="blog-container">
          <div role="listitem" className="blog-item" id={blog.id} key={blog.id}>
            <div className="blog-content" id={blog.id}>
              <div className="blog-header" id={blog.id}>
                {date}
              </div>
              <div className="blog-description" id={blog.id}>
                {content}
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div> {blogs}</div>;
  }
}

export default BlogContainer;
