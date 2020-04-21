import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemButtonb from './imagens/174855.png';
import Imagemlogo from './imagens/logo1.png';
import Imagemlogob from './imagens/logo2.png';
import minhafoto from './imagens/Tais.png'
import meucontato from './imagens/Icone-email.png'
import meuendereco from './imagens/1275228.svg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={minhafoto}
          nome="Tais Itoo" 
          descricao="Oi, eu sou a Tais. Sou designer. Graduada pelo Mackenzie, especializada na área de pré impressão.Para complementar fiz um curso de pré-impressão no SENAI de 2 anos, onde aprimorei meus conhecimentos em Photoshop, Coreldraw, Illustrator, offset, rotogravura, flexografia, também tive aulas de fotografia, silk screen, colorimetria dentre outras matérias. ."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Imagemlogo}
          nome="Objectivo" 
          descricao="Com uma trajetória de mais de 15 anos na área de designer gráfica, atuando com grandes empresas, como a Eletronorte, Camargo Corrêa, SABESP, Eletrobrás, identidade visual, agendas, livro, além de atendimento ao cliente, escaneamento de negativos e cromos e gerenciamento de banco de imagem para empresas." 
        />
        
        <CardGrande 
          imagem={Imagemlogob}
          nome="PERSONALIZADOS" 
          descricao="Há 6 anos trabalho na área do comércio, com atendimento ao cliente, compra e venda, criação de folhetos, folders, banners e restauração de fotos antigas. Criação e impressão de produtos personalizados." 
        />

        <CardPequeno 
          imagem={meucontato}
          nome="CONTATO" 
          descricao="E-mail: tais2001@gmail.com" 
        />

          <CardPequeno 
          imagem={meuendereco}
          nome="ENDEREÇO" 
          descricao="Rua Imbituba" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          link="https://www.facebook.com/tais.itoo.73"
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem={ImagemButtonb}
          link="https://www.instagram.com/budaparacriancas/?hl=pt-br"
          texto="Instagram" 
        />        
      </div>
    </div>
  );
}

export default App;
