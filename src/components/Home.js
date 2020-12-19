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
          Pre-orders are open for our Christmas special:{" "}
          <b>Hazelnut Coffee Cream Pie</b>! This tiramisu-inspired pie starts
          with a flaky crust coated in crunchy hazelnut praline ganache. The pie
          is filled with alternate layers of mascarpone cream and ladyfingers
          soaked in Frangelico, amaro, and{" "}
          <a href="https://www.andytownsf.com" target="_blank">
            Andytown
          </a>{" "}
          coffee. Finally, it’s topped with silky hazelnut cream and a dusting
          of cocoa.
        </p>
        <p>
          Need we mention that the mascarpone and ladyfingers are made in house?
          A lot of labor goes into this pie, so only a limited number are
          available. Reserve yours before it’s too late!
        </p>
      </div>
    </div>

    <Link to="/order">
      <div className="btn space2">
        <h3 className="text-white">Pre-order now</h3>
      </div>
    </Link>

    <Follow />
  </div>
);

export default Home;
