import React from 'react';
import PropTypes from 'prop-types';
import styles from './iconElementChooser.scss';

function IconElementChooser({ style, classNameBtn, iconStyle, onClick }) {
  return onClick ? (
    <button
      style={style}
      onClick={onClick}
      className={`${styles.iconBtn} ${iconStyle}${
        classNameBtn ? ` ${classNameBtn}` : ''
      }`}
    />
  ) : (
    <div style={style} className={iconStyle} />
  );
}

IconElementChooser.propTypes = {
  style: PropTypes.object,
  classNameBtn: PropTypes.string,
  iconStyle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  onClick: PropTypes.func,
};

export default IconElementChooser;
