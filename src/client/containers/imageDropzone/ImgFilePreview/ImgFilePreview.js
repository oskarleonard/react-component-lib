import React from 'react';
import PropTypes from 'prop-types';
import CrossIcon from '@client/components/icons/crossIcon/CrossIcon';
import styles from './imgFilePreview.scss';

function ImgFilePreview({ file, index, onImageRemove }) {
  console.log('file: ', file);

  const handleImageRemove = () => {
    onImageRemove(index, file);
  };

  return (
    <div className={styles.imagePreview}>
      <div className={styles.imageOptions}>
        <CrossIcon
          onClick={handleImageRemove}
          crossColor="white"
          style={{
            borderRadius: '50%',
            backgroundColor: '#232323e0',
          }}
        />
      </div>
      <img
        className={styles.imagePreviewImg}
        key={index}
        src={URL.createObjectURL(file)}
        alt="Dropped image"
      />
    </div>
  );
}

ImgFilePreview.propTypes = {
  file: PropTypes.object,
  index: PropTypes.number,
  onImageRemove: PropTypes.func,
};

export default ImgFilePreview;
