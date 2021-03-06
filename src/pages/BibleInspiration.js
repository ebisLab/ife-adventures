import React from 'react'
import { useWindowResize } from '../utils';
import flower from '../styles/flower.css'
export default function BibleInspiration() {
  const {width} = useWindowResize()

  return (
    <div style={{backgroundColor: '#00b4ff'}}>
    <div style={{minHeight: '50vh'}}>
        {/* <h1 style={{padding: '5% 15% 5%'}}>Coming Soon ..</h1> */}

        <section style={{padding: '5% 15% 5%', textAlign: 'left'}}>
            <a href="https://ifesinsightsandadventures.blogspot.com/2022/04/biblical-inspiration-testimony-time.html">
        <h2>Diary entry #2:</h2> 
        <p>
        Biblical Inspiration: TESTIMONY TIME!!!! Interview with the Author Dr. Tee-Tee        </p>
        </a>
        </section>
{/*                   
            <div class="butterfly-rotate">
              <div class="butterfly-box">
                <div class="butterfly">
                  <div class="wing wing-left"></div>
                  <div class="main"></div>
                  <div class="wing wing-right"></div>
                </div>
              </div>    
            </div> */}
    </div>
    <div
    className='flower_container'
        style={{
          background:'rgb(168, 203, 122)',
          height: '200px',
          clipPath: `path("M 0 8 C 71.3 8 142.6 20 356.5 20 C 570.4 20 641.7 0 855.6 0 C 1069.5 0 1140.8 50 ${width} 16 V 1134 H 0 Z")`,
        }}
        >
          <div class="flower"><div class="stem"><span></span></div></div>

          <div class="flower two"><div class="stem"><span></span></div></div>
     <div class="flower three"><div class="stem"><span></span></div></div>
     <div class="flower four"><div class="stem"><span></span></div></div>
     <div class="flower five"><div class="stem"><span></span></div></div>
     <div class="flower six"><div class="stem"><span></span></div></div>
     <div class="flower seven"><div class="stem"><span></span></div></div>

        </div>
</div>
    // <div style={{padding: '5% 15% 5%', background: 'white'}}>
    //     <div style={{display: 'inline-flex', padding: '1%'}}>
    //         <div style={{width: '200px', height: '250px', background: 'grey', border:'5px solid limegreen'}}></div>
    //         <div style={{width: '350px'}}>
    //             <h1>Title of Post</h1>
    //             <p style={{paddingTop: '25%'}}>Put details here</p></div>
    //     </div>
    //     <div style={{display: 'inline-flex'}}>
    //         <div style={{width: '200px', height: '250px', background: 'grey', border:'5px solid limegreen'}}></div>
    //         <div style={{width: '350px', paddingTop: '25%'}}>Put details here</div>
    //     </div>
    //     </div>
  )
}
