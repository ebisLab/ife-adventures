import React from 'react';
import About from './About';
import Gallery from './Gallery';
import MailList from './MailList';

function Main() {
  return (
  <div style={{backgroundColor: '#00C3F7'}}>
      <Gallery/>
      <About/>
      <MailList/>

  </div>
  );
}

export default Main;
