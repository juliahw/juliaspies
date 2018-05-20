import React from 'react'
import cx from 'classnames'

const FACEBOOK_LINK = 'https://www.facebook.com/juliamakespies'
const INSTAGRAM_LINK = 'https://www.instagram.com/juliamakespies/'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
              <div className="btn disabled">
                <h3 className="text-white">Opening soon</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="span12">
              <p>
                +1 (415) 215 0260 &middot; <a target="_blank" href={FACEBOOK_LINK}>Facebook</a> &middot; <a target="_blank" href={INSTAGRAM_LINK}>Instagram</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
