import React from "react";
import { Link } from "react-router-dom";
import InstagramFeed from "./InstagramFeed";

function Home() {
  return (
    <div>
      <div className="content">
        <header>
          <div className="container">
            <h1>Julia’s Pies</h1>
          </div>
        </header>

        <main className="container">
          <div className="row">
            <div className="span12">
              <p>
                Julia’s Pies is a pie shop for family and friends. My recipes
                are inspired by California produce, food culture, food science,
                and personal nostalgia. Sometimes I hold giveaways and sales; in
                the past I have also catered for{" "}
                <a href="https://www.seedandsoulclub.org/" target="_blank">
                  Seed & Soul Club
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
              <p>
                My goal is always the same: to serve you the best pie possible.
              </p>
              <p>Interested in pie? Techniques? Recipes? Reach out anytime!</p>
            </div>
          </div>

          <InstagramFeed />
        </main>

        <footer className="container">
          <div className="footer-item">
            <div className="heading-sm">Instagram</div>
            <div>
              <a
                href="https://www.instagram.com/juliamakespies"
                target="_blank"
              >
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
}

export default Home;
