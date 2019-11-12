import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

function DropzoneWrapper({ children, onFileDrop, multiple }) {
  return (
    <Dropzone multiple={multiple} onDrop={onFileDrop}>
      {({ getRootProps, getInputProps }) => {
        return (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {children}
            </div>
          </section>
        );
      }}
    </Dropzone>
  );
}

DropzoneWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  onFileDrop: PropTypes.func,
  multiple: PropTypes.bool,
};

export default DropzoneWrapper;
