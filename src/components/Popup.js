import React from "react";
import { Link } from "react-router-dom";

import Follow from "./Follow";
import MenuItem from "./MenuItem";

import Logo from "../images/logo.png";

const Popup = () => (
  <div>
    <div className="row">
      <div className="span12">
        <Link to="/">
          <img id="logo" src={Logo} alt="Julia's Pies" />
        </Link>
      </div>
    </div>

    <div className="row text-center">
      <div className="span12">
        <p>
          <em>
            <span className="text-red">Julia’s Pies</span> presents:
          </em>
        </p>
        <h1>“Quality Stuff”</h1>
        <p>
          <em>A Thanksgiving special</em>
        </p>
      </div>
    </div>

    <div className="row popup-contents">
      <div className="span2"></div>
      <div className="span8">
        <p>
          This Thanksgiving, bring home a dessert the whole family will love:
          our <span className="text-red">Intensely Pumpkin Pie</span>.
        </p>
        <p>
          It starts with the pie dough, which we laminate to create 36 flaky
          layers. Then, we roast the pumpkin to concentrate its flavor before
          combining with brown butter, maple syrup, cream, and warm spices. The
          finished pie gets a bourbon glaze coating before it's topped with
          cacao nib whipped cream.
        </p>
        <p>
          Pick up your pie on{" "}
          <span className="text-red">
            Wednesday, November 27 between 1 and 7 PM
          </span>{" "}
          from <span className="text-red">33 Tehama St</span>. Each pie is{" "}
          <span className="text-red">$32</span> and feeds 6-8.
        </p>
        <div className="text-center"></div>
      </div>
    </div>

    <div className="row">
      <div className="span12 text-center">
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

export default Popup;
