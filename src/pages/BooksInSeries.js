import {useEffect, useRef, useState} from 'react';
import butterfly from '../styles/butterfly.css'
import { useResize, useWindowResize } from '../utils';
import imgseries from '../img/image_series.png'
export default function BooksInSeries() {
  const ref = useRef(null);
  const [windowSize, setWindowSize] = useState(null)
  const {width} = useWindowResize()


useEffect(() => {

  setWindowSize(ref.current.offsetWidth);
  const handleResize = () => {
  setWindowSize(ref.current.offsetWidth);
  }

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize)

}, []);

  return (
    <div style={{
      // position: 'relative', 
    // minHeight: '70vh'
    }}>


           <div 
           style={{
             position: 'relative', 
             margin: '2%',
           zIndex:1
           }}>
           <img src={imgseries} width="45%" border="10px" style={{border:'10px solid white'}}/>
           </div> 
    <div ref={ref} style={{backgroundColor: '#00b4ff', marginTop: '-15%'}}>

        <div
            style={{
              background:'rgb(168, 203, 122)',
              height: '200px',
              clipPath: `path("M 0 8 C 71.3 8 142.6 20 356.5 20 C 570.4 20 641.7 0 855.6 0 C 1069.5 0 1140.8 50 ${width} 16 V 1134 H 0 Z")`,
            }}
            >

        </div>
    </div>
    </div>
  )
}


