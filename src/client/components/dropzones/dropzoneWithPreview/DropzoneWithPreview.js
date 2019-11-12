import React from 'react';
import PropTypes from 'prop-types';
import 'cropperjs/dist/cropper.css';
import { imDeleteFromArray } from '@client/shared/utils/immutableUtils/immutableUtils';
import DropzoneWrapper from '../dropzoneWrapper/DropzoneWrapper';
import FileCard from '../../cards/fileCards/fileCard/FileCard';
import styles from './dropzoneWithPreview.scss';

class DropzoneWithPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
  }

  handleFileRemove = (index) => {
    this.setState((prevState) => {
      return {
        files: imDeleteFromArray(prevState.files, index),
      };
    });
  };

  getIdFromFile = (file) => {
    return file.path + file.lastModified + file.size;
  };

  handleFileDrop = (files) => {
    const alreadyDroppedFile = this.state.files.find((droppedFile) => {
      return files.find((file) => {
        const first = this.getIdFromFile(file);
        const second = this.getIdFromFile(droppedFile);
        return first === second;
      });
    });

    if (!alreadyDroppedFile) {
      this.setState((prevState) => {
        console.log([...prevState.files, ...files]);
        return {
          files: [...prevState.files, ...files],
        };
      });
    } else {
      if (this.props.onDropDuplicate) {
        this.props.onDropDuplicate(alreadyDroppedFile);
      }
    }
  };

  handlePreviewClick = (event) => {
    event.stopPropagation();
  };

  render() {
    const { children } = this.props;
    const { files } = this.state;

    return (
      <div className={`${styles.imageDropzone}`}>
        <DropzoneWrapper onFileDrop={this.handleFileDrop}>
          {children}
          {files &&
            files.length > 0 &&
            files.map((file, index) => {
              const key = this.getIdFromFile(file);

              return (
                <FileCard
                  onClick={this.handlePreviewClick}
                  key={key}
                  file={file}
                  index={index}
                  onFileRemove={this.handleFileRemove}
                />
              );
            })}
        </DropzoneWrapper>
      </div>
    );
  }
}

DropzoneWithPreview.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  files: PropTypes.array,
  onFileDrop: PropTypes.func,
  onDropDuplicate: PropTypes.func,
  onFileRemove: PropTypes.func,
};

export default DropzoneWithPreview;
