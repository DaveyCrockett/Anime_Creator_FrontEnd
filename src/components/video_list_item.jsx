import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const videoUrl = `${video.url}`;


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
