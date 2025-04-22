import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/icons/logo.png'
import './Home.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  // Dados dos vídeos em destaque
  const featuredVideos = [
    {
      id: 'm1',
      title: 'COMO TROCAR A RESISTÊNCIA DO CHUVEIRO',
      thumbnail: 'https://assetsio.gnwcdn.com/co65za.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
      description: 'Aprenda passo a passo como substituir a resistência do seu chuveiro elétrico',
      label: 'APRENDA AQUI!'
    },
    {
      id: 'r1',
      title: 'COMO FAZER BOLO DE CENOURA',
      thumbnail: 'https://assetsio.gnwcdn.com/co65za.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
      description: 'Receita fácil e deliciosa de bolo de cenoura caseiro',
      label: 'APRENDA AQUI!'
    },
    {
      id: 'm2',
      title: 'PNEU FUROU? APRENDA A TROCAR',
      thumbnail: 'https://assetsio.gnwcdn.com/co65za.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
      description: 'Guia completo para trocar um pneu furado em poucos minutos',
      label: 'APRENDA AQUI!'
    },
    {
        id: 'm3',
        title: 'Conheça a LUPP',
        thumbnail: Logo,
        description: 'Elevando seu aprendizado, passo a passo',
        label: 'APRENDA AQUI!'
      },
  ];

  // Efeito para rotacionar os vídeos em destaque
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeaturedIndex((prevIndex) => 
        (prevIndex + 1) % featuredVideos.length
      );
    }, 15000); // 15 segundos

    return () => clearInterval(interval);
  }, [featuredVideos.length]);

  // Vídeos pequenos (todos exceto o atual em destaque)
  const smallVideos = featuredVideos.filter(
    (_, index) => index !== currentFeaturedIndex
  );

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="home-container">
      <h1>Bem-vindo a LUPP</h1>
      <p>Site onde se encontra os melhores tutoriais para resolver problemas do dia a dia</p>

      {/* Seção de destaques */}
      <div className="featured-section">
        {/* Card grande */}
        <div 
          className="featured-large-card"
          onClick={() => handleVideoClick(featuredVideos[currentFeaturedIndex].id)}
        >
          <div className="card-label">{featuredVideos[currentFeaturedIndex].label}</div>
          <img 
            src={featuredVideos[currentFeaturedIndex].thumbnail} 
            alt={featuredVideos[currentFeaturedIndex].title}
          />
          <div className="video-info">
            <h3>{featuredVideos[currentFeaturedIndex].title}</h3>
            <p>{featuredVideos[currentFeaturedIndex].description}</p>
          </div>
        </div>

        {/* Cards pequenos */}
        <div className="small-cards">
          {smallVideos.map((video) => (
            <div
              key={video.id}
              className="featured-small-card"
              onClick={() => handleVideoClick(video.id)}
            >
              <div className="card-label">{video.label}</div>
              <img src={video.thumbnail} alt={video.title} />
              <div className="video-info">
                <h3>{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botão para ver mais vídeos */}
      <button 
        className="see-more-btn"
        onClick={() => navigate('/videos')}
      >
        Ver Todos os Vídeos
      </button>
    </div>
  );
};

export default HomePage;