import React from 'react';
import {title} from '../utils';
import menu from './menu.css'
import {Link } from 'react-router-dom';

export default function Menu() {
  const menu = [
    {id: 2, name: 'About The Author', url: '/about'},
    {id: 3, name: 'Series', url: '/books-in-series'},
    {id: 4, name: 'Biblical Inspiration', url: '/biblical-inspiration'},
    {id: 5, name: 'Ife Journal Entries', url: 'https://ifesinsightsandadventures.blogspot.com/'},
    {id: 6, name: 'Products', url: '/products'},
    {id: 7, name: 'Contact', url: '/contact'}
  ]
  return (
    <div class="menu" style={{backgroundColor: 'white', width: '100%'}}> 
              <Link to="/" style={{textDecoration: 'none', color: 'black',fontFamily: 'Lato, sans-serif', fontSize: '30px'}} >{title}</Link>
          {menu && menu.map(item=>item.id==5? (      
          <a href={item.url} class="menu__link">
        {item.name}
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" >
        <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/>
          </svg>
        </a>):(      <Link to={item.url} class="menu__link">
        {item.name}
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" >
        <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/>
          </svg>
        </Link>))}
      {/* {menu.map(item=>(
      <Link to={item.url} class="menu__link">
        {item.name}
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" >
        <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/>
          </svg>
        </Link>
      ))} */}
    </div>
  );
}


{/* <div class="menu">
  <a href="#" class="menu__link menu__link--active">
    Home
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" >
      <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/>
    </svg>
  </a><br/>
  <a href="#" class="menu__link">
    About
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" >
    <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/>

</svg>
  </a><br/>
  <a href="#" class="menu__link">
    Projects
  </a><br/>
  <a href="#" class="menu__link">
    Contact
  </a>
</div> */}