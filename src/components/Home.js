import React from 'react'
import { Link } from 'react-router-dom'

import MenuItem from './MenuItem'
import Follow from './Follow'

const Home = () => (
  <div>
    <div className="row">
      <div className="span8">
        <h1>Julia’s Pies</h1>
        <p>
          <span className="text-red">Julia’s Pies</span> is a pie shop serving fresh baked goods from Julia’s kitchen, with the hope that every bite will bring you <span className="text-red">happy times</span>.
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
          Our opening menu features a combination of late spring &amp; early summer produce, as well as a couple of Julia’s Pies classics.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="span6">
        <MenuItem
          name="Honey apple pie"
          description="Spiced apples with honey, dark brown sugar & meyer lemon zest in flaky all-butter crust. Serves 8-10."
          prices={[{price: 28}]}
        />

        <MenuItem
          name="Grand Marnier crème brûlée tartlette"
          description="Torched vanilla & Grand Marnier crème brûlée in sweet shortcrust, topped with caramelized oranges. Serves 1-2."
          prices={[{price: 8}]}
        />
      </div>

      <div className="span6">
        <MenuItem
          name="Mango & lime cream tart"
          description="Sweet shortcrust filled with rich mango and lime cream & fresh diced champagne mangos. Serves 8-10."
          prices={[{price: 32}]}
        />

        <MenuItem
          name="Mango & lime cream tartlette"
          description="A mini version of the mango & lime cream tart. Serves 1-2."
          prices={[{price: 8}]}
        />

        <MenuItem
          name="Pie crust biscuits"
          description="Exactly what it sounds like! 8 biscuits of flaky all-butter pie crust: 4 orginal, 4 with dark chocolate, sea salt & orange zest."
          prices={[{price: 6}]}
        />
      </div>
    </div>

    <Follow />
  </div>
)

export default Home
