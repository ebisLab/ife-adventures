import React from 'react';
import Shop from '../pages/Shop';
import Flower from './Flower';
import Sky from './Sky';
import Input from './Input';


export default function Header() {
  return (
  <div style={{height: '89.2vh', width: '100%'}}>
    {/* <Flower /> */}
    <Shop />
    {/* <Input /> */}
    <Sky/>

  </div>);
}
