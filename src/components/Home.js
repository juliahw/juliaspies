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
          <span className="text-red">Julia’s Pies</span> is a pie shop serving fresh baked goods from Julia’s kitchen, with the hope that every bite will bring you happy times.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="span12">
        <Link to="/order">
          <div className="btn space2">
              <h3 className="text-white">Order now</h3>
          </div>
        </Link>
      </div>
    </div>

    <div className="row">
      <div className="span8">
        <h2>Menu</h2>
        <p>
          Summer is a delightful time for pie. Stone fruits are the star of our menu this season, but keep an eye out for our late summer items, which will feature berries, smoked apples & more!
        </p>
      </div>
    </div>

    <div className="row">
      <div className="span6">
        {
          menuItems.slice(0, 2).map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              description={item.description}
              prices={[{price: item.price}]}
            />
          ))
        }
      </div>
      <div className="span6">
        {
          menuItems.slice(2).map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              description={item.description}
              prices={[{price: item.price}]}
            />
          ))
        }
      </div>
    </div>

    <Follow />
  </div>
)

export default Home
