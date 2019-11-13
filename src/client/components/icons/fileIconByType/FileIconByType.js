import React from 'react';
import PropTypes from 'prop-types';
import styles from './fileIconByType.scss';
import fileIcons from './selection.json';

const FileIconByType = ({ type, fill = 'black' }) => {
  const getIconName = (type) => {
    if (type.includes('audio/')) {
      return 'file-music';
    } else if (type.includes('video/')) {
      return 'file-video';
    } else {
      return 'file-text2';
    }
  };

  const iconName = getIconName(type);

  const icon = fileIcons.icons.find((icon) => {
    if (icon.properties.name === iconName) {
      return icon;
    }
  });

  const paths = icon.icon.paths;

  return (
    <>
      {paths && (
        <svg
          style={{ fill: fill }}
          className={`${styles.icon}`}
          viewBox={'0 0 1024 1024'}
        >
          {paths.map((path) => {
            return <path d={path} key={path} />;
          })}
        </svg>
      )}
    </>
  );
};

FileIconByType.propTypes = {
  type: PropTypes.string,
  fill: PropTypes.string,
};

export default FileIconByType;
