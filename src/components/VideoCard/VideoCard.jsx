import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <div className="thumbnail-container">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="thumbnail"
        />
        <span className="duration">{video.duration}</span>
      </div>
      <div className="video-info">
        <div className="channel-avatar">
          <img src={video.channelAvatar} alt={video.channel} />
        </div>
        <div className="details">
          <h3 className="title">{video.title}</h3>
          <p className="channel">{video.channel}</p>
          <p className="views-and-time">{video.views} • {video.uploadTime}</p>
        </div>
      </div>
    </div>
  );
  // Se precisar de uma solução mais compatível
const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };
  
  // Uso no componente:
  <h3 className="title">{truncateText(video.title, 50)}</h3>
};

export default VideoCard;