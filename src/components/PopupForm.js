import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import menuItems from "../menuItems";
import Follow from "./Follow";
import QuantityPicker from "./QuantityPicker";

import Logo from "../images/logo.png";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxLsg2RVdZjtPLyKPzOKO1d5fKd0DKq5b33bbsDaiss35r8qgeP/exec";

class Form extends React.Component {
  constructor(props) {
    super(props);

    const quantities = Object.fromEntries(
      Object.entries(menuItems).map(([key, value]) => [key, 0])
    );

    this.state = {
      name: "",
      email: "",
      phone: "",
      quantities: quantities,
      pickupTime: "",
      comments: "",
      agreedToPay: false,
      submitting: false,
      submitted: false,
      validationError: null
    };

    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleCheckboxInputChange = this.handleCheckboxInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.incrementFunction = this.incrementFunction.bind(this);
  }

  handleTextInputChange(e) {
    let state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleCheckboxInputChange(e) {
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

    const params = Object.assign(this.state, this.state.quantities);
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

    const total = Object.values(this.state.quantities).reduce(
      (total, quantity) => {
        return total + quantity;
      },
      0
    );

    if (total <= 0) {
      return "Please specify items to order!";
    }

    if (!this.state.pickupTime.trim()) {
      return "Please specify a time for pickup!";
    }

    return null;
  }

  incrementFunction(itemId) {
    return e => {
      e.preventDefault();

      let state = this.state;
      state.quantities[itemId] = Math.min(
        menuItems[itemId].maxQuantity,
        this.state.quantities[itemId] + 1
      );

      this.setState(state);
    };
  }

  decrementFunction(itemName) {
    return e => {
      e.preventDefault();

      let state = this.state;
      state.quantities[itemName] = Math.max(
        0,
        this.state.quantities[itemName] - 1
      );

      this.setState(state);
    };
  }

  renderForm() {
    const menuItemList = Object.entries(menuItems).map(([id, item]) => (
      <QuantityPicker
        key={id}
        name={item.name}
        quantity={this.state.quantities[id]}
        maxQuantity={item.maxQuantity}
        description={item.description}
        handleIncrement={this.incrementFunction(id)}
        handleDecrement={this.decrementFunction(id)}
      />
    ));

    const orderTotal = Object.entries(this.state.quantities).reduce(
      (total, entry) => {
        const [itemId, quantity] = entry;
        const price = menuItems[itemId].price;
        return total + quantity * price;
      },
      0
    );

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
              onChange={this.handleTextInputChange}
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
              onChange={this.handleTextInputChange}
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
            <p>
              Pies must be picked up on Wednesday, November 27 between 1 and 7
              PM from 33 Tehama St in San Francisco.
            </p>
            <input
              type="text"
              name="pickupTime"
              value={this.state.pickupTime}
              onChange={this.handleTextInputChange}
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
              onChange={this.handleTextInputChange}
            />
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

        <div className={cx({ hidden: orderTotal == 0 })}>
          <em>
            Your order total is <b>${orderTotal}</b>.
          </em>
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
        Thank you for ordering from Julia’s Pies! We'll be in touch with a
        confirmation soon.
      </p>
    ) : (
      <p>
        We accept cash upon pickup or Venmo (@juliahw). After pickup, please
        keep your pie refrigerated until 20-30 minutes before serving. And of
        course, enjoy!
      </p>
    );

    return (
      <div>
        <div className="row">
          <div className="span12">
            <Link to="/">
              <img id="logo-left" src={Logo} alt="Julia's Pies" />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="span8">
            <h1>Order</h1>
            {text}
          </div>
        </div>

        {this.state.submitted ? this.renderFormSubmitted() : this.renderForm()}
      </div>
    );
  }
}

export default Form;
