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
    Object.keys(menuItems).forEach(id => {
      items[id] = 0;
    });

    this.state = {
      name: "",
      phone: "",
      items: items,
      pickupTime: "",
      comments: "",
      submitting: false,
      submitted: false,
      agreedToWearMask: false,
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
    if (!this.state.name.trim()) {
      return "Please provide a name!";
    }

    if (!this.state.phone.trim()) {
      return "Please provide a phone number!";
    }

    const total = Object.entries(this.state.items).reduce((total, pair) => {
      const [key, value] = pair;
      return total + value;
    }, 0);

    if (total <= 0) {
      return "Please specify more than zero items!";
    }

    if (!this.state.pickupTime.trim()) {
      return "Please specify a pickup time!";
    }

    if (!this.state.agreedToWearMask) {
      return "Please agree to the required terms!";
    }

    return null;
  }

  incrementFunction(itemName) {
    return e => {
      e.preventDefault();

      let state = this.state;
      state.items[itemName] = Math.min(2, this.state.items[itemName] + 1);

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
    const menuItemList = Object.entries(menuItems).map(([id, item]) => (
      <QuantityPicker
        key={id}
        name={item.name}
        description={item.description}
        price={item.price}
        quantity={this.state.items[id]}
        handleIncrement={this.incrementFunction(id)}
        handleDecrement={this.decrementFunction(id)}
      />
    ));

    const orderTotal = Object.entries(this.state.items)
      .map(([id, quantity]) => quantity * menuItems[id].price)
      .reduce((a, b) => a + b, 0);

    return (
      <form>
        <div className="row">
          <h3>Name: *</h3>
        </div>

        <div className="row space1">
          <div className="span3">
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="span8">
            <h3>Phone number: *</h3>
            <p>
              Confirmation and pickup reminders will be sent via text to this
              number.
            </p>
          </div>
        </div>

        <div className="row space1">
          <div className="span4">
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="row space1">
          <h3>Items: *</h3>
        </div>

        <div className="row space1">
          {menuItemList}
          <p>
            <em>
              Your order total is <b>${orderTotal}</b>.
            </em>
          </p>
        </div>

        <div className="row space1">
          <div className="span8">
            <h3>Pickup time: *</h3>
            <p>
              Pickup is available on December 23 and 24 between 9am and 1pm.
              Please arrive no more than 15 minutes before or after your
              designated time.
            </p>
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

        <div className="row space2">
          <input
            name="agreedToWearMask"
            type="checkbox"
            checked={this.state.agreedToWearMask}
            onChange={this.handleCheckbox}
          />
          I agree to wear a mask during pickup.
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
      <div>
        <p>
          Thank you for ordering from Julia’s Pies! We'll be in touch soon to
          confirm your order.
        </p>
      </div>
    ) : (
      <div>
        <p>
          Pickup is located outside the lobby of{" "}
          <b>33 Tehama St, San Francisco</b> on{" "}
          <b>December 23 and 24 between 9am and 1pm</b>. Please arrive no more
          than 15 minutes before or after your designated time. Sorry, delivery
          is not available!
        </p>
        <p>
          Questions? Send a DM to{" "}
          <a
            href="https://www.instagram.com/juliamakespies"
            className="text-red"
          >
            @juliamakespies
          </a>{" "}
          on Instagram and I’ll answer as soon as possible.
        </p>
      </div>
    );

    return (
      <div>
        <div className="row">
          <div className="span8">
            <h1>Christmas Pre-order</h1>
            {text}
          </div>
        </div>

        {this.state.submitted ? this.renderFormSubmitted() : this.renderForm()}
      </div>
    );
  }
}

export default Form;
