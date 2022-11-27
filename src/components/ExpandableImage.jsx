import React, { Suspense } from "react";
import "./ExpandableImage.css"

class ExpandableImage extends React.Component {
  constructor(props) {
    super(props);
    let state = {
      initialWidth: props.width,
      fullWidth: props.fullWidth !== undefined ? props.fullWidth : "100%",
      width: props.width,
      src: props.src,
      alt: props.alt
    }
    this.state = state;
    this.setWidth = this.setWidth.bind(this);
  }

  setWidth(event) {
    this.setState((prevState, props) => ({
      width: prevState.width === prevState.fullWidth ? prevState.initialWidth : prevState.fullWidth
    }));
  }

  render() {
    return (
      <img className="clickable" width={this.state.width} onClick={this.setWidth} src={this.state.src} alt={this.state.alt}></img> 
    );
  }
}

export default ExpandableImage;
