import React, { PureComponent } from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Description } from './components/Description';
import { CreateGames } from './components/CreateGames';
import { TryItNow } from './components/TryItNow';
import { ForWhom } from './components/ForWhom';
import { HowDoesItWork } from './components/HowDoesItWork';
import { WhatIsPlayseek } from './components/WhatIsPlayseek';
import { Achievements } from './components/Achievements';
import { Publications } from './components/Publications';
import { Videos } from './components/Videos';
import { Cooperation } from './components/Cooperation';
import { Footer } from './components/Footer';

class App extends PureComponent {
  constructor() {
    super();

    this.howItWorkRef = React.createRef();
    this.aboutUsRef = React.createRef();
    this.headerRef = React.createRef();
  }

  onAboutUsClick = () => {
    const headerHeight = this.headerRef.current.offsetHeight;
    const aboutUsRefOffsetTop = this.aboutUsRef.current.offsetTop;
    window.scrollTo({ behavior: 'smooth', top: aboutUsRefOffsetTop - headerHeight });
  }

  onHowItWorkClick = () => {
    const headerHeight = this.headerRef.current.offsetHeight;
    const howItWorkRefOffsetTop = this.howItWorkRef.current.offsetTop;
    window.scrollTo({ behavior: 'smooth', top: howItWorkRefOffsetTop - headerHeight });
  }

  render () {
    return (
      <>
        <Header
          onHowItWorkClick={this.onHowItWorkClick}
          onAboutUsClick={this.onAboutUsClick}
          headerRef={this.headerRef}
        />
        <Main />
        <Description />
        <CreateGames />
        <TryItNow />
        <ForWhom />
        <HowDoesItWork howItWorkRef={this.howItWorkRef} />
        <TryItNow />
        <WhatIsPlayseek aboutUsRef={this.aboutUsRef} />
        <Achievements />
        <Publications />
        <Videos />
        <Cooperation />
        <Footer
          onHowItWorkClick={this.onHowItWorkClick}
          onAboutUsClick={this.onAboutUsClick}
        />
      </>
    );
  }
}

export const renderApp = () => {
  render(
    <App />,
    document.getElementById('app'),
  );
};