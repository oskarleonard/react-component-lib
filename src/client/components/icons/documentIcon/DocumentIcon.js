import React from 'react';
import PropTypes from 'prop-types';
import { FragmentOrButtonWrapper } from '@client/shared/utils/dom/dom';

const DocumentIcon = ({ className, style, onClick }) => {
  return (
    <FragmentOrButtonWrapper onClick={onClick}>
      <svg
        viewBox={'0 0 1024 1024'}
        className={className ? className : ''}
        style={style}
      >
        <path
          d={
            'M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z'
          }
        />
        <path
          d={
            'M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z'
          }
        />
        <path
          d={
            'M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z'
          }
        />
        <path
          d={
            'M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z'
          }
        />
      </svg>
    </FragmentOrButtonWrapper>
  );
};

DocumentIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
export default DocumentIcon;
