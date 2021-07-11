import React from 'react';


const VideoDetail = ({ thumbnailUrl, search_results }) => {
  if (!thumbnailUrl){
    return <div>Loading...</div>;
  }


  const url = `${thumbnailUrl}&video_still_time=10`

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
      <div className="wistia_responsive_padding" style={{padding:`56.25% 0 0 0;`, position:`relative;`}}><div className="wistia_responsive_wrapper" style={{height:`100%;`, left:`0;`, position:`absolute;`, top:`0;`, width:`100%;`}}><iframe src={url} title="Batman Video" allow="autoplay; fullscreen" allowtransparency="true" frameBorder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowFullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
      </div>
      <div className="details">
        <div>{search_results.data[0].attributes.name}</div>
        <div>{search_results.data[0].attributes.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
