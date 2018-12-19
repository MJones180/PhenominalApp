import React from 'react';
import Dropzone from 'react-dropzone';
import AvatarEditor from 'react-avatar-editor';
import { Circle as Slider } from 'components/Slider';
import styles from './index.css';

const Zoom = ({ editMode, updateScale }) => editMode && (
  <div className={styles.zoom}>
    <Slider radius={92} onChange={updateScale} />
  </div>
);

export default ({ image, editMode, scale, updateImage, updateScale, setEditorRef }) => (
  <div className={styles.container}>
    <Zoom editMode={editMode} updateScale={updateScale} />
    <div className={editMode ? styles.imageEdit : styles.imageUpload}>
      <Dropzone disabled={editMode} accept="image/*" multiple={false} onDrop={updateImage}>
        {({ getRootProps, getInputProps, isDragActive }) => (
          <div {...getRootProps()} className={`${!editMode && styles.dropContainer} ${isDragActive && styles.activeDropContainer}`}>
            <input {...getInputProps()} />
            <AvatarEditor
              ref={setEditorRef}
              image={image}
              scale={scale}
              height={160}
              width={160}
              border={0}
              borderRadius={100}
              className={styles.pic}
            />
            {!editMode && <p className={styles.uploadHover}>Upload</p>}
          </div>
        )}
      </Dropzone>
    </div>
  </div>
);
