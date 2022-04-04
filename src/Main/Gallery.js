import React from 'react';
import { Link } from 'react-router-dom';

export default function Gallery() {
  return (
  <div style={{display: 'inline-flex', 
  padding: '0 5%'}}>
      <div style={{
        display: 'flex', 
        // flexWrap: 'wrap',
        // justifyContent: 'space-between', 
        }}>
          <Link to="/products"
          style={{flex: '0 32%', height: '80px', margin: '3% 5%', width: '300px', border: '5px solid white', padding: '1%',
          backgroundPosition: '50% 60%',
          backgroundImage: `url("./img/img1_ife.png")`}} 
          ><span style={{background: '#ffffffb0'}}>Hard Cover books</span></Link>
          <div
          style={{
            flex: '0 32%', 
            height: '80px', 
            margin: '3% 5%', 
            width: '300px', 
            border: '5px solid white', 
            padding: '1%',
          backgroundPosition: '55% 50%',
          background: `linear-gradient(rgba(0, 0, 0, 0.927),rgba(0, 0, 0, 0.5)) ,url("./img/img3_ife_edge.png")`,
          filter: `grayscale(100%)`,
        }}
          ><span style={{background: '#ffffffb0'}}>Coloring Books</span>
          </div>
          <div
          style={{flex: '0 32%', height: '80px', margin: '3% 5%', width: '300px', border: '5px solid white', padding: '1%',
          backgroundPosition: '40% 40%',
          background: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url("./img/img4_ife.png")`,
          filter: `grayscale(100%)`,
        }} 
          ><span style={{background: '#ffffffb0'}}>Merch</span>
          </div>
      </div>

  </div>
  );
}
