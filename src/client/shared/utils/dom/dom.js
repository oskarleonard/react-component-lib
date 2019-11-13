import React from 'react';

let scrollY = '';
export function toggleFixedBody() {
  if (typeof window === 'object') {
    const scrollElement = document.body;
    if (scrollElement.style.position === 'fixed') {
      scrollElement.style.position = 'initial';
      scrollElement.style.overflowY = 'scroll';
      window.scrollTo(0, scrollY);
    } else {
      scrollY = window.scrollY;
      scrollElement.style.position = 'fixed';
      scrollElement.style.top = `-${scrollY}px`;
      scrollElement.style.overflowY = 'hidden';
      scrollElement.style.width = '100%';
    }
  }
}

export const FragmentOrButtonWrapper = ({ onClick, children }) => {
  // eslint-disable-line
  return onClick ? (
    <button onClick={onClick}>{children}</button>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
};

export const DivOrButton = ({ onClick, ...rest }) => {
  // eslint-disable-line
  return onClick ? <button onClick={onClick} {...rest} /> : <div {...rest} />;
};
