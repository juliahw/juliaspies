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
          <b>
            Update: I’m currently sick (most likely just a cold), so Free Pie
            Sunday is canceled this week to keep everyone safe. Fingers crossed
            we’ll be back next week! Hope you have a wonderful weekend.
          </b>
        </p>
        <p>
          <b>Free Pie Sunday</b> is a weekly event where I bake pies with
          seasonal fruits from some of my favorite local farms, and you pick up
          a slice (or a few slices) for free!
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
