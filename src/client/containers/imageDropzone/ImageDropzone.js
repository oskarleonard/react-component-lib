import React from 'react';
import PropTypes from 'prop-types';
import 'cropperjs/dist/cropper.css';
import FileDropzone from '../../components/fileDropzone/FileDropzone';
import styles from './imageDropzone.scss';

class ImageDropzone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: null,
    };
  }

  render() {
    const { children, droppedFiles, onImageDrop, onImageRemove } = this.props;

    return (
      <div className={`${styles.imageUploader}`}>
        <FileDropzone onImageDrop={onImageDrop}>{children}</FileDropzone>
        {droppedFiles &&
          droppedFiles.length > 0 &&
          droppedFiles.map((file, index) => {
            console.log('droppedFile::', file);

            return (
              <ImagePreview
                key={file.path}
                file={file}
                index={index}
                onImageRemove={onImageRemove}
              />
            );
          })}
      </div>
    );
  }
}

ImageDropzone.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  droppedFiles: PropTypes.array,
  onImageDrop: PropTypes.func,
  onImageRemove: PropTypes.func,
};

export default ImageDropzone;

function ImagePreview({ file, index, onImageRemove }) {
  const handleImageRemove = () => {
    onImageRemove(index, file);
  };

  return (
    <div className={styles.imagePreview}>
      <div className={styles.imageOptions}>
        <button onClick={handleImageRemove}>❌</button>
      </div>
      <img key={index} src={URL.createObjectURL(file)} alt="Dropped image" />
    </div>
  );
}
