import React from 'react';
import butterfly from '../styles/butterfly.css'
import comingsoon from '../img/image_series.png'
export default function BooksInSeries() {
  return (
    <div style={{
      // backgroundColor: '#00b4ff',
      background: 'rgb(109, 58, 34)',
    textAlign:'-webkit-center',
      }}>
        <div style={{height: '100vh', 
        backgroundImage: `url(${comingsoon})`, 
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgb(109, 58, 34)',
        boxShadow: '25px 25px 50px 0 rgb(109 58 34) inset, -54px -25px 50px 0 rgb(109 58 34) inset',
        width: '50%',
        }}>
          {/* <img src={comingsoon} width="50%" /> */}
          
            {/* <div class="butterfly-rotate">
              <div class="butterfly-box">
                <div class="butterfly">
                  <div class="wing wing-left"></div>
                  <div class="main"></div>
                  <div class="wing wing-right"></div>
                </div>
              </div>    
            </div> */}


        </div>
        {/* <div
            style={{
              background:'rgb(168, 203, 122)',
              height: '200px',
              clipPath: 'path("M 0 8 C 71.3 8 142.6 20 356.5 20 C 570.4 20 641.7 0 855.6 0 C 1069.5 0 1140.8 50 1426 16 V 1134 H 0 Z")',
            }}
            >

        </div> */}
    </div>
  )
}
