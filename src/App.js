import React from 'react'
import cx from 'classnames'
// import { Link, Route, Switch } from 'react-router-dom'

import Menu from './components/Menu'
// import Contact from './components/Contact'

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.linkClass = this.linkClass.bind(this);
  // }

  // linkClass(to) {
  //   const currentPath = window.location.hash.slice(1)
  //   return cx("nav-link", { current: currentPath === to })
  // }

  render() {
    return (
      <div className="container">
{/*        <div className="row">
          <div className="col-2-sm"></div>
          <div className="col-4-sm center">
            <Link className={this.linkClass('/')} to="/">Menu</Link>
          </div>
          <div className="col-4-sm center">
            <Link className={this.linkClass('/contact')} to="/contact">Contact</Link>
          </div>
        </div>*/}

        <div className="row">
          <div className="col-12 center">
            <img id="logo" src="public/logo.png" />
            <h1>Julia's Pies</h1>
            <h2>- Valentine's Day Pop-up -</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 center">
            <p>
              Roses are so 2017. This Valentine's Day, give the gift of <span className="text-red">Julia's Pies</span> Valentine's Day tarts. They're beautiful, delicious, and won't leave sad petals all over your kitchen table in 3 days.
            </p>
          </div>
        </div>

        <Menu />

{/*        <Switch>
          <Route exact path="/" component={Menu}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>*/}
      </div>
    )
  }
}

export default App
