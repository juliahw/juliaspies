import React from "react";
import { Link } from "react-router-dom";

import menuItems from "../menuItems";
import MenuItem from "./MenuItem";
import Follow from "./Follow";

const Home = () => (
  <div>
    <div className="row text-center">
      <div className="span1"></div>
      <div className="span10">
        <h3>
          <span className="text-red">JULIA’S PIES</span> presents:
        </h3>
        <h1>Quality Stuff: a Thanksgiving special</h1>
        <p>
          They can’t ask you about Blockchain if their mouths are full of pie.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="span8">
        <h2>Menu</h2>
      </div>
    </div>

    <div className="row">
      <div className="span6">
        {menuItems.slice(0, 2).map(item => (
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description}
            prices={[{ price: item.price }]}
          />
        ))}
      </div>
    </div>

    <div className="row">
      <div className="span12">
        <Link to="/order">
          <div className="btn space2">
            <h3 className="text-white">Order Now</h3>
          </div>
        </Link>
      </div>
    </div>

    <Follow />
  </div>
);

export default Home;
