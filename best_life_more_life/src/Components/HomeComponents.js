import React from "react";

class HomeComponents extends React.Component {
  state = {
    images: [
      "http://i.imgur.com/hG0rOzR.jpg",
      "https://5dwallpaper.com/download/?file_path=94114"
    ],
    activeImage: 0
  };

  nextImage = () => {
    console.log("next");
    let newIndex = this.state.activeImage + 1;

    if (this.state.activeImage < this.state.images.length - 1) {
      this.setState({
        activeImage: newIndex
      });
    } else {
      this.setState({
        activeImage: 0
      });
    }
  };
  previousImage = () => {
    console.log("previous");

    if (this.state.activeImage > 0) {
      let newIndex = this.state.activeImage - 1;
      this.setState({
        activeImage: newIndex
      });
    }
  };

  render() {
    let slides = this.state.images;
    let index = this.state.activeImage;
    let text =
      this.state.activeImage === 0 ? (
        <div className="photo-text">"Testing 1"</div>
      ) : (
        <div className="photo-text">"Testing 2"</div>
      );
    let slide;

    return (
      <div className="news-container">
        <img src={slides[index]} alt="" className="homeImage" />
        {text}
        <div class="ui buttons">
          <button
            class="ui icon left labeled button"
            role="button"
            onClick={this.previousImage}
          >
            <i aria-hidden="true" class="left chevron icon" />Back
          </button>

          <button
            class="ui icon right labeled button"
            role="button"
            onClick={this.nextImage}
          >
            <i aria-hidden="true" class="right chevron icon" />Forward
          </button>
        </div>
      </div>
    );
  }
}

export default HomeComponents;
