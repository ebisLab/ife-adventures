import React from 'react';
import {title} from '../utils';
import { Route, Switch, Link } from 'react-router-dom';

export default function Menu() {
  return (
  <div style={{backgroundColor: 'white', display:"inline-flex", width: '100%'}}>
      <ul style={{width: '100%', fontFamily: 'Julius Sans One, sans-serif', fontWeight: 'bolder', zIndex: 1}}>
        <li style={{display: 'inline', fontFamily: 'Lato, sans-serif', fontSize: '30px'}}>
          <Link to="/" style={{textDecoration: 'none', color: 'black'}} >{title}</Link>
          </li>
          <li style={{display: 'inline', padding: '0 2%'}}>
            <Link to="/about" style={{textDecoration: 'none'}}> About the Author</Link>
            </li>
            <li style={{display: 'inline', padding: '0 2%'}}>
            <Link to="/books-in-series" style={{textDecoration: 'none'}}> Series</Link>
            </li>
            <li style={{display: 'inline', padding: '0 2%'}}>
            <Link to="/biblical-inspiration" style={{textDecoration: 'none'}}> Biblical Inspiration</Link>
            </li>
            <li style={{display: 'inline', padding: '0 2%'}}>
            <a href="https://ifesinsightsandadventures.blogspot.com" style={{textDecoration: 'none'}}> Ife Journal Entries</a>
            </li>
            <li style={{display: 'inline', padding: '0 2%'}}>
            <Link to="/about" style={{textDecoration: 'none'}}> Products</Link>
            </li>
            {/* <li style={{display: 'inline', padding: '0 2%'}}>
            <Link to="/about" style={{textDecoration: 'none'}}> DrTeeTee on Youtube</Link>
            </li> */}
          {/* <li style={{display: 'inline', padding: '0 2%'}}><a style={{textDecoration: 'none'}} href="">Blog</a></li>
          <li style={{display: 'inline', padding: '0 2%'}}>
          <Link to="/shop" style={{textDecoration: 'none'}}> Shop </Link>
            </li>
          <li style={{display: 'inline', padding: '0 2%'}}>
            <a style={{textDecoration: 'none'}} href="">Contact Us</a></li> */}
      </ul>
  </div>
  );
}
