import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PunkraftBackgroundCtx } from './utils/hooks/backgroundContext';
import BackgroundVideo from './components/BackgroundVideo';
import ContentContainer from './components/ContentContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import Menu from './components/Pages/Menu';
import Events from './components/Pages/Events';
import Contacts from './components/Pages/Contacts';

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
