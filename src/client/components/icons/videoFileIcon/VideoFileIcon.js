import React from 'react';
import PropTypes from 'prop-types';
import { FragmentOrButtonWrapper } from '@rc-lib-client/shared/utils/dom/dom';

const VideoFileIcon = ({ className, style, onClick }) => {
  return (
    <FragmentOrButtonWrapper onClick={onClick}>
      <svg
        viewBox={'0 0 1024 1024'}
        className={className ? className : ''}
        style={style}
      >
        <path
          d={
            'M917.806 229.076c-22.208-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.594-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.882 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924v0 0zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.98 17.78 50.678 41.878 81.374 72.572v0 0zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.32 32 32 32h224v624z'
          }
        />
        <path d={'M256 512h320v320h-320v-320z'} />
        <path d={'M576 640l192-128v320l-192-128z'} />
      </svg>
    </FragmentOrButtonWrapper>
  );
};

VideoFileIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
export default VideoFileIcon;
