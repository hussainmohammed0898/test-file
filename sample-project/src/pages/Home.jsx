import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
   
  return (
    <div className='container'>
        <div className='side-width'></div>
        <div className='content-width'>
            <div className='card'>
                <div className='card-content'>
                    <p className='card-p'>Step 1/3</p>
                    <h2>Cost Identification</h2>
                    <p>Identify and categorize the various costs influencing margins.</p>
                </div>
                <div>
                    <p className='card-sp'>4 Prompts | 5mins</p>
                    <div>
                    <Link  to={'/content'}  className='btn-card'>Get Started
                        <img className='btn-svg' src="data:image/svg+xml,<svg%20width='9'%20height='14'%20viewBox='0%200%209%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'><path%20d='M7.89461%207.9975L8.74301%207.1491L1.95461%200.360701L0.257812%202.0575L5.34821%207.1491L0.257812%2012.2407L1.95461%2013.9375L7.89461%207.9975Z'%20fill='%232E5DB0'/></svg>" alt="" />
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Home