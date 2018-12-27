import 'blueimp-canvas-to-blob';
import React from 'react';
import Mutation from 'utils/graphql/mutation';
import { image } from 'utils/endpoints';
import { updatableAlert } from 'components/Alert';
import mutation from './mutation.graphql';

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
        picture: this.props.picture ? image(this.props.picture) : image('assets/Random/DefaultUserPicture.png'),
        scale: 1,
      };
    }
    // Gain access to the image canvas
    setEditorRef(editor) { this.editor = editor; }
    updatePicture([picture]) {
      // Ensure a picture format was uploaded
      if (picture) {
        // Set the new picture in the state
        this.setState({
          newPic: true,
          picture,
          scale: 1,
        });
      }
    }
    // Update the zoom level of the image
    updateZoom(zoom) {
      // Zoom ranges from 0 - 100, so scales from 1x - 2x
      this.setState({
        scale: 1 + (zoom * 0.01),
      });
    }
    // Upload the new picture
    submit() {
      // Alert the user that their picture is being updated
      const updateAlert = updatableAlert('Updating your picture.');
      // Set back to upload mode
      this.setState({
        newPic: false,
      });
      // Send the picture for upload
      this.editor.getImage().toBlob(picture => (
        Mutation({
          mutation,
          variables: { picture },
          success: () => {
            // Alert success
            updateAlert({
              updatedText: 'Your picture has been updated.',
            });
          },
          error: () => {
            // Alert failure
            updateAlert({
              type: 'error',
              updatedText: 'An error has occured, please try again soon.',
            });
          },
        })
      ));
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
