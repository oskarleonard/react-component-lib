import React from 'react';
import PropTypes from 'prop-types';
import styles from './syncLoader.scss';

function SyncLoader({ className }) {
  return (
    <div className={styles.loader}>
      <div
        className={`${styles.loaderContent}${className ? ` ${className}` : ''}`}
      >
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

SyncLoader.propTypes = {
  className: PropTypes.string,
};

export default SyncLoader;
