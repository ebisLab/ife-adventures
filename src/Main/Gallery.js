import React from 'react';

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
              <img src="./img/img1_ife.png" width="100%" />

          {/* </div> */}
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap',justifyContent: 'space-between'}}>
          {/* div[style={{width:'33%'}}] */}
          <div
          style={{flex: '0 32%', height: '100px', margin: '3% 5%', width: '300px', border: '5px solid white', padding: '1%',
          backgroundPosition: '50% 60%',
          backgroundImage: `url("./img/img1_ife.png")`}} 
        //   style={{width: '300px', height:'100px', padding: '1%', margin:'5%', border:'5px solid white'}}
          >Hard Cover books</div>
          <div
          style={{flex: '0 32%', height: '100px', margin: '3% 5%', width: '300px', border: '5px solid white', padding: '1%',
          backgroundPosition: '50% 50%',
          backgroundImage: `url("./img/img3_ife_edge.png")`}} 
        //   style={{width: '300px', height:'100px', padding: '1%', margin:'5%', border:'5px solid white'}}
          >Coloring Books</div>
          <div
          style={{flex: '0 32%', height: '100px', margin: '3% 5%', width: '300px', border: '5px solid white', padding: '1%',
          backgroundPosition: '50% 50%',
          backgroundImage: `url("./img/img4_ife.png")`,
        }} 
        //   style={{width: '300px', height:'100px', padding: '1%', margin:'5%', border:'5px solid white'}}
          >Merch</div>
          <div
          style={{flex: '0 32%', height: '100px', margin: '3% 5%', width: '300px', border: '5px solid white', padding: '1%',
          // backgroundPosition: '50% 50%',
          backgroundImage: `url("./img/img2_ife.png")`}} 
        //   style={{width: '300px', height:'100px', padding: '1%', margin:'5%', border:'5px solid white'}}
          >Resources</div>

      </div>

  </div>
  );
}
