import React from 'react';


const VideoDetail = ({ video }) => {
  if (!video){
    return <div>Loading...</div>;
  }


  const videoId = video.id.videoId;
  const url = `http://127.0.0.1:8000/Anime_Creator_App/videos/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" title="Searched Video" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
