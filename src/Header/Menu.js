import React from 'react';
import {title} from '../utils'

export default function Menu() {
  return (
  <div style={{backgroundColor: 'white', display:"inline-flex", width: '100%'}}>
      <ul style={{width: '100%', fontFamily: 'Julius Sans One, sans-serif', fontWeight: 'bolder'}}>
        <li style={{display: 'inline', fontFamily: 'Lato, sans-serif', fontSize: '30px'}}>{title}</li>
          <li style={{display: 'inline', padding: '0 5%'}}><a style={{textDecoration: 'none'}} href="">Home</a></li>
          <li style={{display: 'inline', padding: '0 5%'}}><a style={{textDecoration: 'none'}} href="">Blog</a></li>
          <li style={{display: 'inline', padding: '0 5%'}}><a style={{textDecoration: 'none'}} href="">Shop</a></li>
          <li style={{display: 'inline', padding: '0 5%'}}><a style={{textDecoration: 'none'}} href="">Contact Us</a></li>
      </ul>
  </div>
  );
}
