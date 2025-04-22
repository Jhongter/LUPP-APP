import React, { useEffect, useState } from 'react';
import videoService from '../../../services/videoService';
import './AprovarVideos.css';

const AprovarVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const data = await videoService.getPendingVideos();
        setVideos(data);
      } catch (error) {
        console.error('Erro ao carregar vídeos:', error);
      } finally {
        setLoading(false);
      }
    };
    loadVideos();
  }, []);

  const handleApprove = async (id) => {
    try {
      await videoService.approveVideo(id);
      setVideos(videos.filter(v => v.id !== id));
    } catch (error) {
      console.error('Erro ao aprovar vídeo:', error);
    }
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="approval-page">
      <h1>Vídeos Pendentes</h1>
      {videos.length === 0 ? (
        <p>Nenhum vídeo pendente</p>
      ) : (
        <ul className="video-list">
          {videos.map(video => (
            <li key={video.id} className="video-item">
              <h3>{video.title}</h3>
              <p>Enviado por: {video.author}</p>
              <button onClick={() => handleApprove(video.id)}>
                Aprovar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AprovarVideos;