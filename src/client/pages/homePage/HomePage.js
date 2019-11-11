import React from 'react';
import ImageCropper from '@client/components/imageCropper/ImageCropper';
import styles from './homePage.scss';

class HomePage extends React.Component {
  handleImageDrop = (file) => {
    console.log(file);
  };

  getRefCropper = (cropper) => {
    this.cropper = cropper;
  };

  onSelect = (selectEvent) => {
    console.log('selectEvent', selectEvent);
    console.log('this.cropper', this.cropper.getCroppedCanvas().toDataURL());
  };

  render() {
    return (
      <div className={styles.homeRoute}>
        <h1 className={styles.title}>Home page</h1>
        <ImageCropper
          refFunc={this.getRefCropper}
          imageUrl={
            'https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/very_big_1/public/feature/images/why_you_should_go_mountain_climbing_1.jpg?itok=wYnlNZir'
          }
          onSelectingArea={this.onSelect}
        />
      </div>
    );
  }
}

export default HomePage;
