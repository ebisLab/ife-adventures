import React from 'react'
import { Outlet } from 'react-router-dom';

import Gallery from '../../Main/Gallery'

export default function Products() {
  return (
    <div 
    // style={{height: '80vh'}}
    >
            <Gallery/>
            <Outlet />
    </div>
  )
}
