import React from 'react'
import arrow from '../Arrow/arrow.css'
export default function Arrow() {
  return (
    <div className="things" style={{zIndex: '0'}}>
  <div className="content">
    <div className="arrow" style={{zIndex: '-1'}}>
      <div className="curve"></div>
      <div className="point"></div>
    </div>
  </div> 
  {/* <div className="content">
    <h1>sign the mailing list</h1>
  </div> */}

    <div className="content">
    <h1
    style={{    
      left: '-44px',
      top: '177px',
      width: '200px',
      height: '50px',
      fontSize: '20px',
    }}
    >
      <span style={{background: '#00b4ff', fontFamily: "'Shadows Into Light Two', cursive", fontSize: '25px'}}>sign the mailing list for updates</span></h1>
  </div>

{/* <div id='warped'>
                     <span className='w0'>S</span><span className='w1'>i</span><span className='w2'>g</span><span className='w3'>n</span><span className='w4'> </span><span className='w5'>t</span><span className='w6'>h</span><span className='w7'>e</span><span className='w8'> </span><span className='w9'>M</span><span className='w10'>a</span><span className='w11'>i</span><span className='w12'>l</span><span className='w13'>i</span><span className='w14'>n</span><span className='w15'>g</span><span className='w16'> </span><span className='w17'>L</span><span className='w18'>i</span><span className='w19'>s</span><span className='w20'>t</span>
              </div> */}
</div>
  )
}
