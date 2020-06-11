import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { PostContainer, PostHeader, PostPhoto, PostPerfil, Imglogo } from './styles'
import logo from './components/imagem/logo.png'


function App(props) {
  const [profile, setProfile] = useState({});


  useEffect(() => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:tais/person")
      .then(response =>
        setProfile(response.data.profile)
      ).catch(err => {
        console.log(err)
      })
  }, [])


  const newProfile = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:tais/matches")
      .then(response => {
        setProfile(response.data.profile);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <PostContainer>
      <PostHeader>
        <Imglogo src={logo} alt={'logo'} />
      </PostHeader>
      <PostPerfil>
        <PostPhoto src={profile.photo} alt={'Imagem do match'} />
        <p>Idade: {profile.age}</p>
        <p>Nome: {profile.name}</p>
        <p>Bio: {profile.bio}</p>
        <button onClick={newProfile}>Apagar</button>
      </PostPerfil>
    </PostContainer>
  )
}

export default App
