import React, {useState, useRef, useEffect} from 'react';
export const title= "Ife's Adventures";
export const author = "RTK"

export const useResize =()=>{
    const ref = useRef(null);
    const [windowSize, setWindowSize] = useState(null)
  
  useEffect(() => {
  
    setWindowSize(ref.current.offsetWidth);
    const handleResize = () => {
    setWindowSize(ref.current.offsetWidth);
    }
  
    window.addEventListener('resize', handleResize);
    console.log('hey there inside utils')
    // return () => window.removeEventListener('resize', handleResize)
  
  }, []);
}

export const useWindowResize = () => {
    const [width, setWidth] = useState(window.innerWidth);
  
    const listener = () => {
      setWidth(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener("resize", listener);
      return () => {
        window.removeEventListener("resize", listener);
      };
    }, []);
      return {
      width
    };
  };