import React, { useState } from 'react';
import './DownloadAudio.css';

const DownloadAudio = () => {
  const [texto, setTexto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setTexto(e.target.value);
  };

  const handleDownload = async () => {
    if (!texto) {
      alert('Por favor, insira algum texto!');
      return;
    }

    setIsLoading(true);

    try {
      // Substitua a URL abaixo pela URL da sua API
      const response = await fetch(`youTube?videoUrl=${encodeURIComponent(texto)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Falha ao buscar o áudio');
      }

      // Converte o corpo da resposta em um Blob
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      // Cria um link temporário para download do áudio
      const link = document.createElement('a');
      link.href = audioUrl;
      link.download = 'audio.mp3'; // Você pode definir o nome do arquivo conforme necessário
      link.click();

      // Libera o objeto URL para evitar vazamento de memória
      URL.revokeObjectURL(audioUrl);
    } catch (error) {
      console.error('Erro ao fazer o download:', error);
      alert('Erro ao fazer o download do áudio.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="download-container">
      <div className="download-form">
        <h2 className="download-title">Baixar Áudio</h2>
        <input 
          type="text" 
          value={texto} 
          onChange={handleChange} 
          placeholder="Digite a url do vídeo do youtube que deseja baixar"
          className="download-input"
        />
        <button 
          onClick={handleDownload} 
          className="download-button"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="download-loader"></div>
          ) : (
            'Baixar'
          )}
        </button>
      </div>
    </div>
  );
};

export default DownloadAudio;
