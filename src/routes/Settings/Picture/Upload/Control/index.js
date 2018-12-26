import React from 'react';
import Dropzone from 'react-dropzone';
import AvatarEditor from 'react-avatar-editor';
import { Circle as Slider } from 'components/Slider';
import styles from './index.css';

export default ({ newPic, picture, scale, setEditorRef, updatePicture, updateZoom }) => (
  <div className={styles.rootContainer}>
    {newPic && (
      <div className={styles.zoomSlider}>
        <Slider radius={92} onChange={updateZoom} />
      </div>
    )}
    <div className={newPic ? styles.pictureEditContainer : styles.pictureUploadContainer}>
      <Dropzone disabled={newPic} accept="image/jpeg, image/png" multiple={false} onDrop={updatePicture}>
        {({ getRootProps, getInputProps, isDragActive }) => (
          <div {...getRootProps()} className={`${!newPic && styles.dropzone} ${isDragActive && styles.activeDropzone}`}>
            <input {...getInputProps()} />
            <AvatarEditor
              ref={setEditorRef}
              image={picture}
              scale={scale}
              height={160}
              width={160}
              border={0}
              borderRadius={100}
              className={styles.picture}
            />
            {!newPic && <p className={styles.uploadHover}> Upload </p>}
          </div>
        )}
      </Dropzone>
    </div>
  </div>
);
