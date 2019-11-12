import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PunkraftBackgroundCtx } from './utils/hooks/backgroundContext';
import BackgroundVideo from './Components/BackgroundVideo';
import ContentContainer from './Components/ContentContainer';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';
import Menu from './Components/Pages/Menu';
import Events from './Components/Pages/Events';
import Contacts from './Components/Pages/Contacts';

const App = () => {
  const [video, setVideo] = useState(true);
  const [lines, setLines] = useState(true);

  return (
    <PunkraftBackgroundCtx.Provider
      value={{
        video,
        lines,
        toggleVideo: value => {
          setVideo(value);
        },
        toggleLines: value => {
          setLines(value);
        },
      }}
    >
      <ContentContainer>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/events" component={Events} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
        <Footer />
      </ContentContainer>
      <BackgroundVideo />
    </PunkraftBackgroundCtx.Provider>
  );
};

export default App;
