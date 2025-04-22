import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoList from '../../components/VideoList/VideoList';
import './Videos.css';

const VideosPage = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const navigate = useNavigate();

  // Dados organizados por categoria com IDs únicos
  const videosData = {
    todos: [
      {
        id: 'm1',
        title: 'Como trocar o pneu do carro',
        thumbnail: 'https://exemplo.com/pneu.jpg',
        duration: '04:48',
        channel: 'Autoesporte',
        category: 'manutencao'
      },
      {
        id: 'm2',
        title: 'Como calibrar o pneu no posto',
        thumbnail: 'https://exemplo.com/oleo.jpg',
        duration: '02:20',
        channel: 'Pensando Bem',
        category: 'manutencao'
      },
      {
        id: 'm3',
        title: 'Tudo sobre ferramentas',
        thumbnail: 'https://exemplo.com/oleo.jpg',
        duration: '40:44',
        channel: 'Manual do Mundo',
        category: 'manutencao'
      },
      {
        id: 's1',
        title: 'Como Fazer a barba com Gillette',
        thumbnail: 'https://exemplo.com/saude.jpg',
        duration: '3:49',
        channel: 'Manual do Homem Moderno',
        category: 'saude'
      },
      {
        id: 's2',
        title: 'Como lavar as mãos',
        thumbnail: 'https://exemplo.com/postura.jpg',
        duration: '2:51',
        channel: 'Drauzio Varella',
        category: 'saude'
      },
      {
        id: 's3',
        title: 'Como amarrar um tenis',
        thumbnail: 'https://exemplo.com/postura.jpg',
        duration: '1:51',
        channel: 'SALEX',
        category: 'saude'
      },
      {
        id: 'r1',
        title: 'Como Fazer arroz soltinho',
        thumbnail: 'https://exemplo.com/pao.jpg',
        duration: '2:11',
        channel: 'Gastronomismo',
        category: 'receitas'
      },
      {
        id: 'r2',
        title: 'Qual tempero usar?',
        thumbnail: 'https://exemplo.com/bolo.jpg',
        duration: '9:19',
        channel: 'Guilherme Guzela',
        category: 'receitas'
      },
      {
        id: 'r3',
        title: 'Bolo de caneca de micro-ondas',
        thumbnail: 'https://exemplo.com/bolo.jpg',
        duration: '01:07',
        channel: 'TudoGostoso',
        category: 'receitas'
      },
      {
        id: 'r4',
        title: 'Massinha de modelar de gelatina',
        thumbnail: 'https://exemplo.com/bolo.jpg',
        duration: '02:40',
        channel: 'Elenice Carneiro',
        category: 'receitas'
      },
      {
        id: 'r5',
        title: 'Doce Simples',
        thumbnail: 'https://exemplo.com/bolo.jpg',
        duration: '00:20',
        channel: 'Cozinheiro Tommy',
        category: 'receitas'
      }
    ],
    manutencao: [
      {
        id: 'm1',
        title: 'Como trocar o pneu do carro',
        thumbnail: 'https://exemplo.com/pneu.jpg',
        duration: '04:48',
        channel: 'Autoesporte'
      },
      {
        id: 'm2',
        title: 'Como calibrar o pneu no posto',
        thumbnail: 'https://exemplo.com/oleo.jpg',
        duration: '02:20',
        channel: 'Pensando Bem'
      },
      {
        id: 'm3',
        title: 'Tudo sobre ferramentas',
        thumbnail: 'https://exemplo.com/oleo.jpg',
        duration: '40:44',
        channel: 'Manual do Mundo'
      },
      {
        id: 'm3',
        title: 'Como trocar a resistencia do chuveiro',
        thumbnail: 'https://exemplo.com/oleo.jpg',
        duration: '8:15',
        channel: 'Manual do Mundo'
      }
    ],
    saude: [
      {
        id: 's1',
        title: 'Como Fazer a barba com Gillette',
        thumbnail: 'https://exemplo.com/saude.jpg',
        duration: '3:49',
        channel: 'Manual do Homem Moderno'
      },
      {
        id: 's2',
        title: 'Como lavar as mãos',
        thumbnail: 'https://exemplo.com/postura.jpg',
        duration: '2:51',
        channel: 'Drauzio Varella'
      },
      {
        id: 's3',
        title: 'Como amarrar um tenis',
        thumbnail: 'https://exemplo.com/postura.jpg',
        duration: '1:51',
        channel: 'SALEX'
      }
    ],
    receitas: [
      {
        id: 'r1',
        title: 'Como Fazer arroz soltinho',
        thumbnail: 'https://exemplo.com/pao.jpg',
        duration: '2:11',
        channel: 'Gastronomismo'
      },
      {
        id: 'r2',
        title: 'Qual tempero usar?',
        thumbnail: 'https://exemplo.com/bolo.jpg',
        duration: '9:19',
        channel: 'Guilherme Guzela'
      },
      {
        id: 'r3',
        title: 'Bolo de caneca de micro-ondas',
        thumbnail: 'https://exemplo.com/bolo.jpg',
        duration: '01:07',
        channel: 'TudoGostoso'
      },
      {
        id: 'r4',
        title: 'Massinha de modelar de gelatina',
        thumbnail: 'https://exemplo.com/bolo.jpg',
        duration: '02:40',
        channel: 'Elenice Carneiro'
      },
      {
        id: 'r5',
        title: 'Doce Simples',
        thumbnail: 'https://exemplo.com/bolo.jpg',
        duration: '00:20',
        channel: 'Cozinheiro Tommy'
      },
      {
        id: 'r6',
        title: 'Como fazer um bolo de cenoura',
        thumbnail: 'https://exemplo.com/bolo.jpg',
        duration: '20:00',
        channel: 'Cozinheiro Qualquer'
      }
    ]
  };

  const filteredVideos = activeCategory === 'todos' 
    ? videosData.todos 
    : videosData[activeCategory] || [];

  const handleSubmitVideo = () => {
    navigate('/enviar-video');
  };

  return (
    <div className="videos-container">
      <h1>Vídeos Tutoriais</h1>
      
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
          Manutenção
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
      
      <VideoList videos={filteredVideos} />
      
      <div className="submit-video-section">
        <h2>Quer compartilhar um vídeo?</h2>
        <p>Se você tem um vídeo útil que gostaria de compartilhar com nossa comunidade, envie-o para nós!</p>
        <button 
          onClick={handleSubmitVideo}
          className="submit-video-button"
        >
          Enviar um Vídeo
        </button>
      </div>
    </div>
  );
};

export default VideosPage;