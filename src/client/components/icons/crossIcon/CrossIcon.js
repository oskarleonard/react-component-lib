import React from 'react';
import PropTypes from 'prop-types';
import IconElementChooser from '@client/components/icons/iconElementChooser/IconElementChooser';
import styles from './crossIcon.scss';

function CrossIcon({ onClick, crossColor, style }) {
  return (
    <IconElementChooser
      style={style}
      onClick={onClick}
      iconStyle={`${styles.crossIcon} ${styles[crossColor]}`}
    />
  );
}

CrossIcon.propTypes = {
  onClick: PropTypes.func,
  crossColor: PropTypes.string,
  style: PropTypes.object,
};

export default CrossIcon;
