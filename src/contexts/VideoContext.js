import { createContext, useState, useContext } from 'react';

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState({
    manutencao: [],
    saude: [],
    receitas: []
  });

  const addVideo = (category, video) => {
    setVideos(prev => ({
      ...prev,
      [category]: [...prev[category], video]
    }));
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideos() {
  return useContext(VideoContext);
}