import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PunkraftBackgroundCtx } from './utils/hooks/backgroundContext';
import BackgroundVideo from './components/BackgroundVideo';
import ContentContainer from './components/ContentContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import Events from './components/pages/Events';
import Contacts from './components/pages/Contacts';

const App = () => {
  const [video, setVideo] = useState(true);
  const [lines, setLines] = useState(true);

  return (
    <PunkraftBackgroundCtx.Provider
      value={{
        video,
        lines,
        toggleVideo: (value) => {
          setVideo(value);
        },
        toggleLines: (value) => {
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
}

export default App;
