import React from 'react';
import { image } from 'utils/endpoints';

export default Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.onClickSave = this.onClickSave.bind(this);
      this.setEditorRef = this.setEditorRef.bind(this);
      this.updateImage = this.updateImage.bind(this);
      this.updateScale = this.updateScale.bind(this);
      this.reset = this.reset.bind(this);
      // Initial State
      this.state = {
        editMode: false,
        image: image('MichaelJones.jpg'),
        scale: 1,
      };
    }
    onClickSave = () => {
      if (this.editor) {
        // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
        // drawn on another canvas, or added to the DOM.
        // const canvas = this.editor.getImage();
        // If you want the image resized to the canvas size (also a HTMLCanvasElement)
        // const canvasScaled = this.editor.getImageScaledToCanvas();
      }
    }
    setEditorRef = (editor) => { this.editor = editor; }
    updateImage([image]) {
      if (image) {
        this.setState({
          editMode: true,
          image,
        });
      }
    }
    updateScale(val) {
      this.setState({
        scale: 1 + (val * 0.01),
      });
    }
    reset() {
      this.setState({
        scale: 1,
        editMode: false,
      });
    }
    render() {
      return (
        <Component {...this.state} reset={this.reset} updateImage={this.updateImage} updateScale={this.updateScale} setEditorRef={this.setEditorRef} />
      );
    }
  }
);
