import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import menuItems from "../menuItems";
import Follow from "./Follow";
import QuantityPicker from "./QuantityPicker";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxLsg2RVdZjtPLyKPzOKO1d5fKd0DKq5b33bbsDaiss35r8qgeP/exec";

class Form extends React.Component {
  constructor(props) {
    super(props);

    const items = {};
    menuItems.forEach(i => {
      items[i.id] = 0;
    });

    this.state = {
      name: "",
      email: "",
      items: items,
      pickupTime: "",
      comments: "",
      submitting: false,
      submitted: false,
      agreedToWearMask: false,
      agreedToBringTupperware: false,
      validationError: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.incrementFunction = this.incrementFunction.bind(this);
  }

  handleChange(e) {
    let state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleCheckbox(e) {
    let state = {};
    state[e.target.name] = e.target.checked;
    this.setState(state);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.submitting) {
      return;
    }

    const validationError = this.validate();
    this.setState({ validationError: validationError });

    if (validationError) {
      return;
    }

    this.setState({ submitting: true });

    const params = Object.assign(this.state, this.state.items);
    params.timestamp = new Date().toString();

    let url = new URL(GOOGLE_SCRIPT_URL);
    url.search = new URLSearchParams(params);

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          submitting: false,
          submitted: true
        });
      });
  }

  validate() {
    if (!this.state.email.trim()) {
      return "Please specify your email address!";
    }

    const total = Object.entries(this.state.items).reduce((total, pair) => {
      const [key, value] = pair;
      return total + value;
    }, 0);

    if (total <= 0) {
      return "Please specify more than zero items!";
    }

    if (!this.state.pickupTime.trim()) {
      return "Please provide a time for pickup!";
    }

    if (!this.state.agreedToWearMask || !this.state.agreedToBringTupperware) {
      return "Please agree to the required terms!";
    }

    return null;
  }

  incrementFunction(itemName) {
    return e => {
      e.preventDefault();

      let state = this.state;
      state.items[itemName] = Math.min(3, this.state.items[itemName] + 1);

      this.setState(state);
    };
  }

  decrementFunction(itemName) {
    return e => {
      e.preventDefault();

      let state = this.state;
      state.items[itemName] = Math.max(0, this.state.items[itemName] - 1);

      this.setState(state);
    };
  }

  renderForm() {
    const menuItemList = menuItems.map(item => (
      <QuantityPicker
        key={item.id}
        name={item.name}
        quantity={this.state.items[item.id]}
        handleIncrement={this.incrementFunction(item.id)}
        handleDecrement={this.decrementFunction(item.id)}
      />
    ));

    return (
      <form>
        <div className="row">
          <h3>Name:</h3>
        </div>

        <div className="row space1">
          <div className="span3">
            <input
              ref={input => {
                this.nameInput = input;
              }}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="row">
          <h3>Email address: *</h3>
        </div>

        <div className="row space1">
          <div className="span4">
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="row space1">
          <h3>Items: *</h3>
        </div>

        <div className="row space1">{menuItemList}</div>

        <div className="row space1">
          <div className="span8">
            <h3>Pickup time: *</h3>
            <p>Available hours: 10am-4pm on Sunday.</p>
            <input
              type="text"
              name="pickupTime"
              value={this.state.pickupTime}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="span8">
            <h3>Comments or special requests:</h3>
          </div>
        </div>

        <div className="row space1">
          <div className="span8">
            <input
              type="text"
              name="comments"
              value={this.state.comments}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="row">
          <input
            name="agreedToWearMask"
            type="checkbox"
            checked={this.state.agreedToWearMask}
            onChange={this.handleCheckbox}
          />
          I agree to wear a mask during pickup.
        </div>
        <div className="row space1">
          <div className="span8">
            <input
              name="agreedToBringTupperware"
              type="checkbox"
              checked={this.state.agreedToBringTupperware}
              onChange={this.handleCheckbox}
            />
            I will bring a tupperware.
          </div>
        </div>

        <div className="row">
          <div className="span4">
            <div
              className={cx("btn", { disabled: this.state.submitting })}
              onClick={this.handleSubmit}
            >
              <h3 className="text-white">Submit</h3>
            </div>
          </div>
        </div>

        <div className="row text-red">{this.state.validationError}</div>

        <div className="space2"></div>
      </form>
    );
  }

  renderFormSubmitted() {
    return (
      <div>
        <div className="row space2">
          <div className="span4">
            <Link to="/">
              <div className="btn">
                <h3 className="text-white">Home</h3>
              </div>
            </Link>
          </div>
        </div>

        <Follow />
      </div>
    );
  }

  render() {
    const text = this.state.submitted ? (
      <p>
        Looking forward to seeing you this weekend! We'll be in touch with a
        confirmation soon.
      </p>
    ) : (
      <div>
        <p>
          Pickup will be located outside the lobby of 33 Tehama St in San
          Francisco.{" "}
          <b>
            As I’m still waiting on an order of takeout boxes, please bring a
            tupperware that can fit your desired amount of pie.
          </b>{" "}
          You may need to wait 5 minutes or so during pickup while I sanitize
          and fill your tupperware in my kitchen.
        </p>
        <p>
          If not consuming immediately, please keep your pie refrigerated until
          15 minutes before serving. And of course, enjoy!
        </p>
      </div>
    );

    return (
      <div>
        <div className="row">
          <div className="span8">
            <h1>Free Pie Sunday</h1>
            {text}
          </div>
        </div>

        {this.state.submitted ? this.renderFormSubmitted() : this.renderForm()}
      </div>
    );
  }
}

export default Form;
