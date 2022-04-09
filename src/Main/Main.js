import React from 'react';
import About from './About';
import Gallery from './Gallery';
import MailList from './MailList';
import { useWindowResize } from '../utils';

function Main() {
  const {width} = useWindowResize()
  return (
  <div style={{backgroundColor: '#a8cb7a', 
  clipPath: `path("M 0 8 C 71.3 8 142.6 20 356.5 20 C 570.4 20 641.7 0 855.6 0 C 1069.5 0 1140.8 50 ${width} 16 V 1134 H 0 Z")`,
}}>
      {/* <MailList/> */}
      {/* <Gallery/> */}
      <About/>
  </div>
  );
}

export default Main;
