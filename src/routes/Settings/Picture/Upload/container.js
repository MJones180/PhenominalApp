import React from 'react';
import { image } from 'utils/endpoints';

export default Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.setEditorRef = this.setEditorRef.bind(this);
      this.updatePicture = this.updatePicture.bind(this);
      this.updateZoom = this.updateZoom.bind(this);
      this.submit = this.submit.bind(this);
      // Initial State
      this.state = {
        newPic: false,
        picture: this.props.picture || image('MichaelJones.jpg'),
        scale: 1,
      };
    }
    // Gain access to the image canvas
    setEditorRef(editor) { this.editor = editor; }
    updatePicture([picture]) {
      // Ensure a picture was uploaded
      if (picture) {
        // Set the new picture in the state
        this.setState({
          newPic: true,
          picture,
        });
      }
    }
    // Update the zoom level of the image
    updateZoom(zoom) {
      // Zoom ranges from 0 - 100, so scale ranges from 1x - 2x
      this.setState({
        scale: 1 + (zoom * 0.01),
      });
    }
    // Upload the new picture
    submit() {
      console.log(this.editor.getImageScaledToCanvas());
    }
    render() {
      return (
        <Component
          {...this.state}
          setEditorRef={this.setEditorRef}
          updatePicture={this.updatePicture}
          updateZoom={this.updateZoom}
          submit={this.submit}
        />
      );
    }
  }
);
