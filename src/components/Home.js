import React from 'react'
import { Link } from 'react-router-dom'

import menuItems from '../menuItems'
import MenuItem from './MenuItem'
import Follow from './Follow'

const Home = () => (
  <div>
    <div className="row">
      <div className="span8">
        <h1>Julia’s Pies</h1>
        <p>
          We regret to inform you that Julia’s Pies is on <span className="text-red">indefinite hiatus</span>. It’s been a good run, and we’re so excited to begin a new chapter. Thanks everybody for your love and support. Don’t be a stranger. :)
        </p>
      </div>
    </div>

    <Follow />
  </div>
)

export default Home
