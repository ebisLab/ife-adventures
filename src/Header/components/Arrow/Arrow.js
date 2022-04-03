import React from 'react'
import arrow from '../Arrow/arrow.css'
export default function Arrow() {
  return (
    <div class="things" style={{zIndex: '0'}}>
  <div class="content">
    <div class="arrow">
      <div class="curve"></div>
      <div class="point"></div>
    </div>
  </div> 
  {/* <div class="content">
    <h1>sign the mailing list</h1>
  </div> */}

    <div class="content">
    <h1
    style={{    
      left: '-44px',
      top: '177px',
      width: '200px',
      height: '50px',
      fontSize: '20px',
    }}
    >
      <span style={{background: '#00b4ff'}}>sign the mailing list</span></h1>
  </div>

{/* <div id='warped'>
                     <span class='w0'>S</span><span class='w1'>i</span><span class='w2'>g</span><span class='w3'>n</span><span class='w4'> </span><span class='w5'>t</span><span class='w6'>h</span><span class='w7'>e</span><span class='w8'> </span><span class='w9'>M</span><span class='w10'>a</span><span class='w11'>i</span><span class='w12'>l</span><span class='w13'>i</span><span class='w14'>n</span><span class='w15'>g</span><span class='w16'> </span><span class='w17'>L</span><span class='w18'>i</span><span class='w19'>s</span><span class='w20'>t</span>
              </div> */}
</div>
  )
}
