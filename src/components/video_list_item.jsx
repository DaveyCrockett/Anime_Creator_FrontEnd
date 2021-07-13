import React from 'react';


const VideoListItem = ({ video, thumbnailUrl, handleClick}) => {
  const videoUrl = `${thumbnailUrl}`;
  console.log(videoUrl)
  console.log(video)


  return (
    <li  className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" alt="searched video" src={videoUrl} onClick={() => handleClick(video)} />
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
