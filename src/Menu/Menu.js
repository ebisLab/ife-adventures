import React from 'react';
import {title} from '../utils';
import { Route, Switch, Link } from 'react-router-dom';

export default function Menu() {
  return (
  <div style={{backgroundColor: 'white', display:"inline-flex", width: '100%'}}>
      <ul style={{width: '100%', fontFamily: 'Julius Sans One, sans-serif', fontWeight: 'bolder'}}>
        <li style={{display: 'inline', fontFamily: 'Lato, sans-serif', fontSize: '30px'}}>
          <Link to="/" style={{textDecoration: 'none', color: 'black'}} >{title}</Link>
          </li>
          {/* <li style={{display: 'inline', padding: '0 5%'}}>
            <Link to="/" style={{textDecoration: 'none'}}> Home</Link>
            </li> */}
          {/* <li style={{display: 'inline', padding: '0 5%'}}><a style={{textDecoration: 'none'}} href="">Blog</a></li> */}
          {/* <li style={{display: 'inline', padding: '0 5%'}}>
          <Link to="/shop" style={{textDecoration: 'none'}}> Shop </Link>
            </li> */}
          {/* <li style={{display: 'inline', padding: '0 5%'}}>
            <a style={{textDecoration: 'none'}} href="">Contact Us</a></li> */}
      </ul>
  </div>
  );
}
