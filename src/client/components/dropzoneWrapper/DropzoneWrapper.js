import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

function DropzoneWrapper({ children, onImageDrop, multiple }) {
  return (
    <Dropzone multiple={multiple} onDrop={onImageDrop}>
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
  onImageDrop: PropTypes.func,
  multiple: PropTypes.bool,
};

export default DropzoneWrapper;
