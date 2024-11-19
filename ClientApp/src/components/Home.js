import React, { Component } from 'react';
import './Home.css'; // Importando o arquivo CSS para estilizar

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Bem-vindo ao Extrator de Áudio do YouTube</h1>
          <p className="home-description">
            Nosso serviço permite que você extraia o áudio de vídeos do YouTube de forma rápida e fácil.
            Basta colar a URL do vídeo desejado e clicar no botão para baixar o áudio em formato MP3.
          </p>
          <div className="home-features">
            <h2 className="home-features-title">Como funciona?</h2>
            <ul className="home-features-list">
              <li><strong>Passo 1:</strong> Copie o link do vídeo do YouTube que você deseja extrair o áudio.</li>
              <li><strong>Passo 2:</strong> Cole a URL no campo de texto.</li>
              <li><strong>Passo 3:</strong> Clique em "Baixar Áudio" para iniciar o processo.</li>
              <li><strong>Passo 4:</strong> Aguarde o download do áudio em MP3.</li>
            </ul>
          </div>
          <div className="home-footer">
            <a href='/audio'>Baixar</a>
          </div>
        </div>
      </div>
    );
  }
}
