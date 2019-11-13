import React from 'react';
import MultipleFilesIcon from '@rc-lib-client/components/icons/filesEmptyIcon/FilesEmptyIcon';
import DropzoneWithPreview from '../../components/dropzones/dropzoneWithPreview/DropzoneWithPreview';
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
          <div>DROP FILES HERE</div>
        </DropzoneWithPreview>
      </div>
    );
  }
}

export default HomePage;
