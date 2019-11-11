import React from 'react';
import ImageDropzone from '../../containers/imageDropzone/ImageDropzone';
import styles from './homePage.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.homeRoute}>
        <h1 className={styles.title}>Home page</h1>
        <ImageDropzone
          onImageDrop={this.handleImageDrop}
          onImageRemove={this.handleImageRemove}
        >
          <div>DROP IMAGE HERE</div>
        </ImageDropzone>
      </div>
    );
  }
}

export default HomePage;
