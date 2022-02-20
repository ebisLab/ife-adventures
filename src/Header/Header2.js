import React from 'react';
import Illustration2 from './Illustration2';
import Illustration3 from './Illustration3';


export default function Header() {
  return (
  <div style={{height: '90vh', width: '100%', backgroundColor: 'orangered'}}>
      
      <div style={{display: 'inline-flex', marginTop: '5%'}}>
      <Illustration2/>
      <Illustration2/>

      <Illustration2/>
      <Illustration3/>
        </div>
        <div>Work in progress, animated characters on hover</div>

   

  </div>);
}
