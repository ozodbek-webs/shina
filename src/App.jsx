import React from 'react';
import Aside from './assets/Components/Aside';
import Footer from './assets/Components/Footer';
import Header from './assets/Components/Header/Header'
import Main from './assets/Components/Main';
import Section from './assets/Components/Section';

const App = () => {
  return (
    <div>
      <Header/>
      <Aside/>
      <Main/>
      <Section/>
      <Footer/>
    </div>
  );
};

export default App;