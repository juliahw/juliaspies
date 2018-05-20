import React from 'react'
import cx from 'classnames'

import MenuItem from './components/MenuItem'

const FACEBOOK_LINK = 'https://www.facebook.com/juliamakespies'
const INSTAGRAM_LINK = 'https://www.instagram.com/juliamakespies'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="span12">
            <img id="logo" src="public/logo.png" alt="Julia's Pies"/>
          </div>
        </div>

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
            <div className="btn disabled space2">
              <h3 className="text-white">Opening soon</h3>
            </div>
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
              description="Spiced apples with honey, dark brown sugar & meyer lemon zest in flaky all-butter crust"
              prices={[{price: 28, size: 9}]}
            />

            <MenuItem
              name="Grand Marnier crème brûlée tart"
              description="Torched vanilla & Grand Marnier crème brûlée in sweet shortcrust, topped with caramelized oranges"
              prices={[{price: 8, size: 4}]}
            />
          </div>

          <div className="span6">
            <MenuItem
              name="Mango & lime cream tart"
              description="Sweet shortcrust filled with rich mango and lime cream & fresh diced champagne mangos"
              prices={[{price: 32, size: 9}, {price: 8, size: 4}]}
            />

            <MenuItem
              name="Pie crust biscuits (8 pcs.)"
              description="Exactly what it sounds like! Flaky all-butter crust, 4 pcs. orginal, 4 pcs. with dark chocolate, sea salt & orange zest"
              prices={[{price: 6}]}
            />
          </div>
        </div>

        <div className="row">
          <div className="span12">
            <h2>Follow Julia</h2>
          </div>
        </div>

        <div className="row" id="instafeed" />

        <div className="row">
          <div className="span12">
            <p>
              +1 (415) 215 0260 &middot; <a target="_blank" href={FACEBOOK_LINK}>Facebook</a> &middot; <a target="_blank" href={INSTAGRAM_LINK}>Instagram</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
