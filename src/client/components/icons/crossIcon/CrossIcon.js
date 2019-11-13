import React from 'react';
import PropTypes from 'prop-types';
import styles from './crossIcon.scss';

function CrossIcon({ onClick, crossColor, style }) {
  const DivOrButton = onClick
    ? (props) => <button {...props} />
    : (props) => <div {...props} />;

  return (
    <DivOrButton
      style={style}
      onClick={onClick}
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
