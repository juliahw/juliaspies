import React from "react";
import { Link } from "react-router-dom";
import InstagramFeed from "./InstagramFeed";

const Home = () => (
  <div className="container">
    <div className="content">
      <header>
        <h1>Julia’s Pies</h1>
      </header>

      <main>
        <div className="row">
          <div className="span8">
            <p>
              Julia’s Pies is the product of my lifelong obsession with pie. I
              develop my own recipes to share with family and friends inspired
              by food science, seasonality, and flavors. Sometimes I hold
              giveaways and seasonal sales. In the past I have catered pie for{" "}
              <a href="https://www.seedandsoulclub.org/" target="_blank">
                Seed and Soul Club
              </a>{" "}
              and{" "}
              <a
                href="https://www.facebook.com/groups/sfbayareahoya"
                target="_blank"
              >
                Bay Area Hoya
              </a>{" "}
              events.
            </p>
            <p>Interested in pie? Techniques? Recipes? Reach out anytime!</p>
          </div>
        </div>

        <InstagramFeed />
      </main>

      <footer>
        <div className="footer-item">
          <div className="heading-sm">Instagram</div>
          <div>
            <a href="https://www.instagram.com/juliamakespies" target="_blank">
              @juliamakespies
            </a>
          </div>
        </div>
        <div className="footer-item">
          <div className="heading-sm">Email</div>
          <div>juliawang240@gmail.com</div>
        </div>
        <div className="footer-item">
          <div className="heading-sm">Location</div>
          <div>San Francisco, CA</div>
        </div>
      </footer>
    </div>
  </div>
);

export default Home;
