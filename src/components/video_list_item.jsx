import React from 'react';

const VideoListItem = ({video, onVideoSelect, thumbnailUrl}) => {
  const videoUrl = `${thumbnailUrl}`;


  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" alt="searched video" src={videoUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.name}
          </div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;
