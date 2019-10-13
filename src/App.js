import React from "react";
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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
