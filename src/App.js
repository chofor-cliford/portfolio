import React from 'react';
import GlobalStyle, { AppContainer, Container } from './globalStyles';
import { About, Header, Skills, Work, Testimonials, Footer } from './containers';
import { Navbar } from './components';

const App = () => {
  return (
  <AppContainer>
  <Navbar />
  <GlobalStyle/>
  <Header />
  <Container>
  <About />
  </Container>
  <Work />
  <Container>
  <Skills />
  </Container>
  <Testimonials />
  <Container>
  <Footer />
  </Container>
  </AppContainer>
  );
}

export default App;