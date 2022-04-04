import React from 'react';
import {title, author} from '../utils';
import {Link } from 'react-router-dom';


export default function Footer() {
  return (
  <div style={{backgroundColor: 'black'}} ><div style={{backgroundColor: 'black', display: 'inline-flex'}}>
      <div style={{color: 'white', width:"33%"}}>
          {/* <ul style={{listStyleType: 'none'}}>
              <li><a href="">Privacy Policy</a></li>
              <li><a href=""></a>Terms of Use</li>
              <li><a href=""></a>Help</li>
              <li><a href=""></a>Contact Us</li>
          </ul> */}
          <ul style={{listStyleType: 'none', textAlign: 'left'}}>
            <li><Link to="/books-in-series">Books in Series</Link></li>
            <li><Link to="/about">About The Author</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>

          </ul>
      </div>
      <div style={{color: 'white'}}>
          <p>Use of this site signifies your agreement to the Terms of Use. TM ∓ © 2022 {title}. A {author} Publication. 
          All Rights Reserved. {title}.com is part of {author} Network.</p>
      </div>

  </div>
  </div>);
}
