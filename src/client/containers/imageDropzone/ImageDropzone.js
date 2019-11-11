import React from 'react';
import PropTypes from 'prop-types';
import 'cropperjs/dist/cropper.css';
import ImgFilePreview from '@client/containers/imageDropzone/ImgFilePreview/ImgFilePreview';
import FileDropzone from '@client/components/fileDropzone/FileDropzone';
import styles from './imageDropzone.scss';

class ImageDropzone extends React.Component {
  getIdFromFile = (file) => {
    return file.path + file.lastModified + file.size;
  };

  handleImageDrop = (files) => {
    const alreadyDroppedFile = this.props.droppedFiles.find((droppedFile) => {
      return files.find((file) => {
        const first = this.getIdFromFile(file);
        const second = this.getIdFromFile(droppedFile);
        return first === second;
      });
    });

    if (!alreadyDroppedFile) {
      this.props.onImageDrop(files);
    } else {
      if (this.props.onDropDuplicate) {
        this.props.onDropDuplicate(alreadyDroppedFile);
      }
    }
  };

  render() {
    const { children, droppedFiles, onImageRemove } = this.props;

    return (
      <div className={`${styles.imageDropzone}`}>
        <FileDropzone onImageDrop={this.handleImageDrop}>
          {children}
        </FileDropzone>
        {droppedFiles &&
          droppedFiles.length > 0 &&
          droppedFiles.map((file, index) => {
            const key = this.getIdFromFile(file);

            return (
              <ImgFilePreview
                key={key}
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
  onDropDuplicate: PropTypes.func,
  onImageRemove: PropTypes.func,
};

export default ImageDropzone;
