import React from 'react';
import { Link } from 'react-router-dom';

export default function Gallery() {
  return (
  <div style={{display: 'inline-flex', 
  padding: '5%'}}>
      <div style={{width: '43%'}}>
          {/* <img src="./img/img1_ife.png" /> */}
          {/* <div 
          style={{
            // backgroundImage: `url("./img/img1_ife.png")`, 
            // height: '100px', width: '100%'
            }}> */}
              <Link to="/shop"><img src="./img/img1_ife.png" width="100%" /></Link>

          {/* </div> */}
      </div>
      <div style={{
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
        // background: 'dodgerblue'
        }}>
          {/* div[style={{width:'33%'}}] */}
          <Link to="/shop"
          style={{flex: '0 32%', height: '100px', margin: '3% 5%', width: '300px', border: '5px solid white', padding: '1%',
          backgroundPosition: '50% 60%',
          backgroundImage: `url("./img/img1_ife.png")`}} 
        //   style={{width: '300px', height:'100px', padding: '1%', margin:'5%', border:'5px solid white'}}
          ><span style={{background: '#ffffffb0'}}>Hard Cover books</span></Link>
          <div
          style={{flex: '0 32%', height: '100px', margin: '3% 5%', width: '300px', border: '5px solid white', padding: '1%',
          backgroundPosition: '50% 50%',
          backgroundImage: `url("./img/img3_ife_edge.png")`}} 
        //   style={{width: '300px', height:'100px', padding: '1%', margin:'5%', border:'5px solid white'}}
          ><span style={{background: '#ffffffb0'}}>Coloring Books</span></div>
          <div
          style={{flex: '0 32%', height: '100px', margin: '3% 5%', width: '300px', border: '5px solid white', padding: '1%',
          backgroundPosition: '50% 50%',
          backgroundImage: `url("./img/img4_ife.png")`,
        }} 
        //   style={{width: '300px', height:'100px', padding: '1%', margin:'5%', border:'5px solid white'}}
          ><span style={{background: '#ffffffb0'}}>Merch</span></div>
          <div
          style={{flex: '0 32%', height: '100px', margin: '3% 5%', width: '300px', border: '5px solid white', padding: '1%',
          // backgroundPosition: '50% 50%',
          backgroundImage: `url("./img/img2_ife.png")`}} 
        //   style={{width: '300px', height:'100px', padding: '1%', margin:'5%', border:'5px solid white'}}
          ><span style={{background: '#ffffffb0'}}>Resources</span></div>

      </div>

  </div>
  );
}
