import React from 'react';
import PropTypes from 'prop-types';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

class ImageCropper extends React.PureComponent {
  render() {
    const {
      refFunc,
      onSelectingArea,
      imageUrl,
      aspectRatio,
      guides,
    } = this.props;

    return (
      <Cropper
        ref={refFunc}
        src={imageUrl}
        style={{ height: '100%', width: '100%' }}
        aspectRatio={aspectRatio}
        guides={guides}
        crop={onSelectingArea}
      />
    );
  }
}

ImageCropper.propTypes = {
  refFunc: PropTypes.func,
  onSelectingArea: PropTypes.func,
  imageUrl: PropTypes.string,
  aspectRatio: PropTypes.number,
  guides: PropTypes.bool,
};

export default ImageCropper;
