import React from 'react'
import { Outlet } from 'react-router-dom';

import Gallery from '../../Main/Gallery'

export default function Products() {
  return (
    <div 
    style={{minHeight: '80vh'}}
    >
            <Gallery/>
            <Outlet />
    </div>
  )
}
