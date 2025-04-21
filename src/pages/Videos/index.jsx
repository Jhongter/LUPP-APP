import React, { useState } from 'react';
import VideoList from '../../components/VideoList/VideoList';
import './Videos.css';

const VideosPage = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  // Dados organizados por categoria com IDs únicos
  const videosData = {
    manutencao: [
      {
        id: 'm1', // Prefixo 'm' para manutenção
        title: 'Como trocar um pneu passo a passo',
        thumbnail: 'https://exemplo.com/pneu.jpg',
        duration: '08:45',
        channel: 'AutoHelp',
      },
      {
        id: 'm2',
        title: 'Troca de óleo do motor',
        thumbnail: 'https://exemplo.com/oleo.jpg',
        duration: '10:20',
        channel: 'AutoHelp',
      },
      // ... mais vídeos de manutenção
    ],
    saude: [
      {
        id: 's1', // Prefixo 's' para saúde
        title: 'Alongamentos para dor nas costas',
        thumbnail: 'https://exemplo.com/saude.jpg',
        duration: '12:30',
        channel: 'Saúde em Casa',
      },
      {
        id: 's2',
        title: 'Exercícios para postura',
        thumbnail: 'https://exemplo.com/postura.jpg',
        duration: '15:10',
        channel: 'Saúde em Casa',
      },
      // ... mais vídeos de saúde
    ],
    receitas: [
      {
        id: 'r1', // Prefixo 'r' para receitas
        title: 'Pão caseiro fácil sem glúten',
        thumbnail: 'https://exemplo.com/pao.jpg',
        duration: '15:20',
        channel: 'Cozinha Prática',
      },
      {
        id: 'r2',
        title: 'Bolo de chocolate vegano',
        thumbnail: 'https://exemplo.com/bolo.jpg',
        duration: '25:00',
        channel: 'Cozinha Prática',
      },
      // ... mais vídeos de receitas
    ]
  };

  // Função de filtro corrigida
  const filteredVideos = activeCategory === 'todos' 
    ? Object.values(videosData).flat() 
    : videosData[activeCategory] || [];

  return (
    <div className="videos-container">
      <div className="categories-nav">
        <button 
          className={activeCategory === 'todos' ? 'active' : ''}
          onClick={() => setActiveCategory('todos')}
        >
          Todos
        </button>
        <button 
          className={activeCategory === 'manutencao' ? 'active' : ''}
          onClick={() => setActiveCategory('manutencao')}
        >
          Manutenções
        </button>
        <button 
          className={activeCategory === 'saude' ? 'active' : ''}
          onClick={() => setActiveCategory('saude')}
        >
          Saúde
        </button>
        <button 
          className={activeCategory === 'receitas' ? 'active' : ''}
          onClick={() => setActiveCategory('receitas')}
        >
          Receitas
        </button>
      </div>
      <h1>Vídeos</h1>
      <VideoList videos={filteredVideos} />
    </div>
  );
};

export default VideosPage;