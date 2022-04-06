import React from 'react';
import butterfly from '../styles/butterfly.css'

export default function BooksInSeries() {
  return (
    <div style={{backgroundColor: '#00b4ff'}}>
        <div style={{minHeight: '50vh'}}>
            <h1 style={{padding: '5% 15% 5%'}}>Coming Soon ..</h1>
          
            <div class="butterfly-rotate">
              <div class="butterfly-box">
                <div class="butterfly">
                  <div class="wing wing-left"></div>
                  <div class="main"></div>
                  <div class="wing wing-right"></div>
                </div>
              </div>    
            </div>


        </div>
        <div
            style={{
              background:'rgb(168, 203, 122)',
              height: '200px',
              clipPath: 'path("M 0 8 C 71.3 8 142.6 20 356.5 20 C 570.4 20 641.7 0 855.6 0 C 1069.5 0 1140.8 50 1426 16 V 1134 H 0 Z")',
            }}
            >

        </div>
    </div>
  )
}
