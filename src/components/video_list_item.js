import React from 'react';
const VideoListItem = ({video,onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    //このliコンポーネントがクリックされた際に、onVideoSelect()が呼び出される。引数はこのvideo
    <li onClick={ ()=> onVideoSelect(video)} className="list-group-item" >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>

      </div>
    </li>
  );
};

export default VideoListItem;