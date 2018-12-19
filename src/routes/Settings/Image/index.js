import React from 'react';
import Container from './container';
import Control from './Control';
import Directions from './Directions';
import Reset from './Reset';
import styles from './index.css';

export default Container(({ image, editMode, scale, updateImage, updateScale, reset, setEditorRef }) => (
  <div className={styles.container}>
    <div className={styles.align}>
      <Control image={image} editMode={editMode} scale={scale} updateImage={updateImage} updateScale={updateScale} setEditorRef={setEditorRef} />
      <Directions editMode={editMode} />
    </div>
    <Reset editMode={editMode} reset={reset} />
  </div>
));
