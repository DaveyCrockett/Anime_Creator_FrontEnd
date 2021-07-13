import React from 'react';
import VideoListItem from './video_list_item'


const VideoList = (props) => {

  return (
    <ul className="col-md-4 list-group">
      <VideoListItem
        key={props.video.data.attributes.id}
        video={props.video}
        thumbnailUrl={props.thumbnailUrl}
        handleClick={props.handleClick}
        />
    </ul>
  )

};


export default VideoList;
