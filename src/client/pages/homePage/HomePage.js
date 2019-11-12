import React from 'react';
import DropzoneWithPreview from '../../containers/dropzoneWithPreview/DropzoneWithPreview';
import styles from './homePage.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.homeRoute}>
        <h1 className={styles.title}>Home page</h1>
        <DropzoneWithPreview
          onImageDrop={this.handleImageDrop}
          onImageRemove={this.handleImageRemove}
        >
          <div>DROP IMAGE HERE</div>
        </DropzoneWithPreview>
      </div>
    );
  }
}

export default HomePage;
