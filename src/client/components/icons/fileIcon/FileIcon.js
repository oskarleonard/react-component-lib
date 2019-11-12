import React from 'react';
import DocumentIcon from '@client/components/icons/fileIcon/documentIcon/DocumentIcon';
import VideoIcon from '@client/components/icons/fileIcon/videoIcon/VideoIcon';
import AudioIcon from '@client/components/icons/fileIcon/audioIcon/AudioIcon';

const FileIcon = ({ type }) => {
  if (type.includes('audio/')) {
    return <AudioIcon />;
  } else if (type.includes('video/')) {
    return <VideoIcon />;
  } else {
    return <DocumentIcon />;
  }
};

export default FileIcon;
