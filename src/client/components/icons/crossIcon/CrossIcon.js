import React from 'react';
import PropTypes from 'prop-types';
import { DivOrButton } from '@rc-lib-client/shared/utils/dom/dom';
import styles from './crossIcon.scss';

function CrossIcon({ onClick, crossColor, style }) {
  return (
    <DivOrButton
      onClick={onClick}
      style={style}
      className={`${styles.crossIcon} ${styles[crossColor]}`}
    />
  );
}

CrossIcon.propTypes = {
  onClick: PropTypes.func,
  crossColor: PropTypes.string,
  style: PropTypes.object,
};

export default CrossIcon;
