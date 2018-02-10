import React from 'react'

const ORDER_FORM_LINK = 'https://goo.gl/forms/Y4frf17BTXoitG9E3'

const Menu = () => (
  <div>
    <div className="row">
      <div className="col-2"></div>
      <div className="col-4 center">
        <img src="public/angel.png" />
        <h3>Angel's Tart - $7</h3>
        <p>
          Almond frangipane, macerated strawberries, strawberry compote, vanilla shortcrust, slivered almonds, a dusting of powdered sugar.
        </p>
      </div>
      <div className="col-4 center">
        <img src="public/devil.png" />
        <h3>Devil's Tart - $7</h3>
        <p>
          Dark chocolate, cream infused with bergamot black tea, cocoa crumb crust, whipped cream, olive oil, sea salt. <span className="text-red">Gluten free.</span>
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-2"></div>
      <div className="col-8 center">
        <div className="btn">
          <h2 className="text-white">Sold Out</h2>
        </div>

        <p>
          4" whole tarts. Pickup only.*
          <br />
          Cash on pickup or Venmo @juliahw
          <br />
          855 Brannan St, San Francisco, CA 94103
          <br />
        </p>

        <p className="text-small">
          *I work at Airbnb in SoMa. If you work at Airbnb, I can deliver to your desk!
        </p>
        <br />
      </div>
    </div>
  </div>
)

export default Menu
