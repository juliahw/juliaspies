import React from "react";
import { Link } from "react-router-dom";

import menuItems from "../menuItems";
import MenuItem from "./MenuItem";
import Follow from "./Follow";

const Home = () => (
  <div>
    <div className="row">
      <div className="span8">
        <h1>Julia’s Pies</h1>
        <p>
          <b>Free Pie Sunday</b> is a weekly event where I bake pies with
          seasonal fruits from some of my favorite local farms, and you pick up
          a slice (or a few slices) for free!
        </p>
        <p>
          Last week we gave away slices of <b>Apricot Custard Pie</b>: oat
          crumble crust and a tangy, cheesecake-like filling dappled with ripe
          apricots from{" "}
          <a href="https://www.instagram.com/kashiwasefarms/" target="_blank">
            Kashiwase Farms
          </a>{" "}
          and{" "}
          <a href="https://blossombluff.com/" target="_blank">
            Blossom Bluff Orchards
          </a>
          . Stay tuned for this week’s pie.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="span12 text-center">
        <div className="btn disabled space2">
          <h3 className="text-white">Reservations closed</h3>
        </div>
      </div>
    </div>

    <Follow />
  </div>
);

export default Home;
