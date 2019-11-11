import React from 'react';
import FileDropzone from '@client/components/fileDropzone/FileDropzone';
import styles from './homePage.scss';

class HomePage extends React.Component {
  handleImageDrop = (file) => {
    console.log(file);
  };

  render() {
    return (
      <div className={styles.homeRoute}>
        <h1 className={styles.title}>Home page</h1>
        <FileDropzone onImageDrop={this.handleImageDrop}>
          <div>HELLO</div>
        </FileDropzone>
      </div>
    );
  }
}

export default HomePage;
