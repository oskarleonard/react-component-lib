import React from 'react';
import PropTypes from 'prop-types';
import CrossIcon from '@rc-lib-client/components/icons/crossIcon/CrossIcon';
import DocumentIcon from '@rc-lib-client/components/icons/documentIcon/DocumentIcon';
import VideoFileIcon from '@rc-lib-client/components/icons/videoFileIcon/VideoFileIcon';
import AudioFileIcon from '@rc-lib-client/components/icons/audioFileIcon/AudioFileIcon';
import styles from './fileCard.scss';

function FileCard({
  className,
  onClick,
  file,
  index,
  onFileRemove,
  showDetails = true,
}) {
  const getIcon = (type, style) => {
    if (type.includes('audio/')) {
      return <AudioFileIcon style={style} />;
    } else if (type.includes('video/')) {
      return <VideoFileIcon style={style} />;
    } else {
      return <DocumentIcon style={style} />;
    }
  };

  const handleFileRemove = () => {
    onFileRemove(index, file);
  };

  const isImage = file.type.includes('image/');
  const icon = getIcon(file.type, { fill: 'black', height: '64px' });

  return (
    <div
      className={`${styles.imagePreview}${className ? ` ${className}` : ''}`}
      onClick={onClick}
    >
      <div className={styles.imageOptions}>
        <CrossIcon
          onClick={handleFileRemove}
          crossColor="white"
          style={{
            borderRadius: '50%',
            backgroundColor: 'rgba(46,46,46,0.85)',
          }}
        />
      </div>
      {isImage ? (
        <img
          className={styles.imagePreviewImg}
          key={index}
          src={URL.createObjectURL(file)}
          alt="Dropped image"
        />
      ) : (
        <div className={styles.icon}>{icon}</div>
      )}
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
  onFileRemove: PropTypes.func,
  showDetails: PropTypes.bool,
};

export default FileCard;
