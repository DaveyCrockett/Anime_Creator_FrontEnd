import React from 'react';
import SimpleRating from './SimpleRating';
import Comments from './comments';
import DeleteVideo from './DeleteVideo';

const VideoDetail = ({ videoUrl, search_results, selectedVideo }) => {
  if (!videoUrl){
    return <div>Loading...</div>;
  }


  
  const url = `https://fast.wistia.net/embed/iframe/${videoUrl}`
  console.log(selectedVideo.id)

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
      <div className="wistia_responsive_padding" style={{padding:`56.25% 0 0 0;`, position:`relative;`}}><div className="wistia_responsive_wrapper" style={{height:`100%;`, left:`0;`, position:`absolute;`, top:`0;`, width:`100%;`}}><iframe src={url} title={selectedVideo.attributes.name} allow="autoplay; fullscreen" allowtransparency="true" frameBorder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowFullScreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
      </div><DeleteVideo hashedId={selectedVideo.id} />
      <div className="details">
        <div>{selectedVideo.attributes.name}</div>
        <div>{selectedVideo.attributes.description}</div>
        <div><SimpleRating /></div>
        <div><Comments /></div>
      </div>
    </div>
  );
};

export default VideoDetail;
