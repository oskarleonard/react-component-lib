import React from 'react';
import PropTypes from 'prop-types';
import CrossIcon from '@client/components/icons/crossIcon/CrossIcon';
import styles from './fileCard.scss';

function FileCard({
  className,
  onClick,
  file,
  index,
  onImageRemove,
  showDetails,
}) {
  const handleImageRemove = () => {
    onImageRemove(index, file);
  };

  return (
    <div
      className={`${styles.imagePreview}${className ? ` ${className}` : ''}`}
      onClick={onClick}
    >
      <div className={styles.imageOptions}>
        <CrossIcon
          onClick={handleImageRemove}
          crossColor="white"
          style={{
            borderRadius: '50%',
            backgroundColor: 'rgba(23,113,0,0.88)',
          }}
        />
      </div>
      <img
        className={styles.imagePreviewImg}
        key={index}
        src={URL.createObjectURL(file)}
        alt="Dropped image"
      />
      {showDetails && (
        <div className={styles.detailsView}>
          <span>name: {file.name}</span>
          <span>path: {file.path}</span>
          <span>lastModified: {file.lastModified}</span>
          <span>size: {file.size}</span>
          <span>type: {file.type}</span>
        </div>
      )}
    </div>
  );
}

FileCard.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  file: PropTypes.object,
  index: PropTypes.number,
  onImageRemove: PropTypes.func,
  showDetails: PropTypes.bool,
};

export default FileCard;
