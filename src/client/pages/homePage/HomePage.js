import React from 'react';
import ImageDropzone from '../../containers/imageDropzone/ImageDropzone';
import {
  imArrayMerge,
  imDeleteFromArray,
} from '../../shared/utils/immutableUtils/immutableUtils';
import styles from './homePage.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
  }

  handleImageDrop = (files) => {
    this.setState((prevState) => {
      console.log([...prevState.files, ...files]);
      return {
        files: [...prevState.files, ...files],
      };
    });
  };

  handleImageRemove = (index) => {
    this.setState((prevState) => {
      return {
        files: imDeleteFromArray(prevState.files, index),
      };
    });
  };

  render() {
    return (
      <div className={styles.homeRoute}>
        <h1 className={styles.title}>Home page</h1>
        <ImageDropzone
          droppedFiles={this.state.files}
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
