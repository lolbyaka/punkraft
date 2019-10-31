import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer.jsx";
import { Home } from "./components/pages/Home/Home";
import { Menu } from "./components/pages/Menu/Menu";
import { Events } from "./components/pages/Events/Events";
import { Contacts } from "./components/pages/Contacts/Contacts";

export const PunkraftContext = React.createContext(null);

function App() {
  const [video, setVideo] = useState(true);
  const [lines, setLines] = useState(true);

  const toggleVideo = value => {
    setVideo(value);
  };

  const toggleLines = value => {
    setLines(value);
  };

  return (
    <PunkraftContext.Provider
      value={{ video, lines, toggleVideo, toggleLines }}
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
    </PunkraftContext.Provider>
  );
}

export default App;
