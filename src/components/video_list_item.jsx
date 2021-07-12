import React from 'react';

const VideoListItem = ({onVideoSelect, video, thumbnailUrl}) => {
  const videoUrl = `${thumbnailUrl}`;
  console.log(videoUrl)
  console.log(video)


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
