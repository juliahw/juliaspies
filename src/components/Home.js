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
          This year’s Thanksgiving special: <b>Apple Pear Cranberry Pie</b>!
          This fresh and zingy pie features Pink Lady apples, Bartlett pears,
          and cranberries spiced with orange, ginger, and vanilla. The filling
          is thickened purely with the natural pectin in the cranberries,
          producing a jammy texture with exceptional clarity of flavor.
        </p>
        <p>
          A slice is delicious on its own, but it’s even better paired with a
          generous dollop of <b>Mascarpone Brandy Cream</b>. The mascarpone is
          house made with fresh, low-temperature pasteurized cream. Whipped
          until fluffy with brown sugar and a splash of booze, it’s the ultimate
          pie pairing.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="span12 text-center">
        <Link to="/order">
          <div className="btn space2">
            <h3 className="text-white">Pre-order now</h3>
          </div>
        </Link>
      </div>
    </div>

    <Follow />
  </div>
);

export default Home;
