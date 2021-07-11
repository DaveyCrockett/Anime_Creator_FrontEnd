import React from 'react';
import VideoListItem from './video_list_item'


const VideoList = (props) => {

  return (
    <ul className="col-md-4 list-group">
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key={props.videoAttributes.id}
        video={props.videoAttributes}
        thumbnailUrl={props.thumbnailUrl}
        />
    </ul>
  )

};


export default VideoList;
