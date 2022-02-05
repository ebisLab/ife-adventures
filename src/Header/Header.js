import React from 'react';
import Illustration2 from './Illustration2';
import Illustration3 from './Illustration3';

import Menu from './Menu';

export default function Header() {
  return (
  <div style={{height: '90vh', width: '100%', backgroundColor: 'orangered'}}>
      <Menu/>
      {/* <img style={{marginTop:'3%', width: '70%'}} src="./img/img6_ife-nobg1.png"/> */}
      
      <div style={{display: 'inline-flex', marginTop: '5%'}}>
      <Illustration2/>
      <Illustration2/>

      <Illustration2/>
      <Illustration3/>
        </div>
   

  </div>);
}
