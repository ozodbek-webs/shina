import React from 'react';
import Aside from './Components/Aside';
import Footer from './Components/Footer';
import Header from './Components/Header/Header'
import Main from './Components/Main';
import Section from './Components/Section';

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