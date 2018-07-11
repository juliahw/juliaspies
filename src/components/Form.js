import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import menuItems from '../menuItems'
import Follow from './Follow'
import QuantityPicker from './QuantityPicker'

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxLsg2RVdZjtPLyKPzOKO1d5fKd0DKq5b33bbsDaiss35r8qgeP/exec'

class Form extends React.Component {
  constructor(props) {
    super(props)

    const items = {}
    menuItems.forEach(i => {
      items[i.id] = 0
    })

    this.state = {
      name: '',
      email: '',
      phone: '',
      items: items,
      pickupDate: '',
      pickupTime: '',
      airbnbLocation: '',
      comments: '',
      submitting: false,
      submitted: false,
      validationError: null,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.incrementFunction = this.incrementFunction.bind(this)
  }

  // componentDidMount() {
  //   if (!this.state.submitted) {
  //     this.nameInput.focus()
  //   }
  // }

  handleChange(e) {
    let state = {}
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  handleSubmit(e) {
    e.preventDefault()

    if (this.state.submitting) { return }

    const validationError = this.validate()
    this.setState({ validationError: validationError })

    if (validationError) { return }

    this.setState({ submitting: true })

    const params = Object.assign(this.state, this.state.items)

    let url = new URL(GOOGLE_SCRIPT_URL)
    url.search = new URLSearchParams(params)

    fetch(url).then(response => response.json()).then(response => {
      this.setState({
        submitting: false,
        submitted: true,
      })
    })
  }

  validate() {
    if (!this.state.email.trim()) {
      return 'Please specify your email address!'
    }

    const total = Object.entries(this.state.items).reduce((total, pair) => {
      const [key, value] = pair
      return total + value
    }, 0)

    if (total <= 0) {
      return 'Please specify items to order!'
    }

    if (!this.state.pickupDate.trim()) {
      return 'Please provide a date for pickup!'
    }

    if (!this.state.pickupTime.trim()) {
      return 'Please provide a time for pickup!'
    }

    return null
  }

  incrementFunction(itemName) {
    return (e) => {
      e.preventDefault()

      let state = this.state
      state.items[itemName] = Math.min(5, this.state.items[itemName] + 1)

      this.setState(state)
    }
  }

  decrementFunction(itemName) {
    return (e) => {
      e.preventDefault()

      let state = this.state
      state.items[itemName] = Math.max(0, this.state.items[itemName] - 1)

      this.setState(state)
    }
  }

  renderForm() {
    const menuItemList = menuItems.map((item) => (
      <QuantityPicker
        key={item.id}
        name={item.name}
        quantity={this.state.items[item.id]}
        handleIncrement={this.incrementFunction(item.id)}
        handleDecrement={this.decrementFunction(item.id)}
      />
    ))

    return (
      <form>
        <div className="row">
          <h3>Name:</h3>
        </div>

        <div className="row space1">
          <div className="span3">
            <input
              ref={(input) => { this.nameInput = input }}
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

        <div className="row">
          <h3>Phone number:</h3>
          <p>Leave your phone number if you’d like a text when your order is ready for pickup.</p>
        </div>

        <div className="row space2">
          <div className="span3">
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
        </div>

        <div className="row">
          <div className="span8">
            <h3>Pickup date: *</h3>
          </div>
        </div>

        <div className="row space1">
          <div className="span3">
            <input
              type="text"
              name="pickupDate"
              value={this.state.pickupDate}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="row space1">
          <div className="span8">
            <h3>Pickup time: *</h3>
            <p>
              Available hours: 9am-6pm Mon-Fri. Feel free to leave a note if you would like to schedule a pickup off-hours.
            </p>
            <input
              type="text"
              name="pickupTime"
              value={this.state.pickupTime}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="row space1">
          <div className="span8">
            <h3>Work at Airbnb?</h3>
            <p>
              Leave your nearest café in 888 or 999 below, and we can drop off your order there!
            </p>
            <input
              type="text"
              name="airbnbLocation"
              value={this.state.airbnbLocation}
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
          <div className="span4">
            <div
              className={cx("btn", { disabled: this.state.submitting })}
              onClick={this.handleSubmit}
            >
              <h3 className="text-white">Submit</h3>
            </div>
          </div>
        </div>

        <div className="row text-red">
          {this.state.validationError}
        </div>

        <div className="space2"></div>
      </form>
    )
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
    )
  }

  render() {
    const text = this.state.submitted ? (
      <p>
        Thank you for ordering from Julia’s Pies! We'll be in touch with a confirmation soon.
      </p>
    ) : (
      <p>
        All items are made fresh to order, so <span className="text-red">please allow 24 hours</span>. We accept payment with cash on pickup or Venmo (@juliahw). Please pick up your order from 855 Brannan St, San Francisco, 94103. And most importantly, <span className="text-red">enjoy</span>!
      </p>
    )

    return (
      <div>
        <div className="row">
          <div className="span8">
            <h1>Order</h1>
            {text}
          </div>
        </div>

        {this.state.submitted ? this.renderFormSubmitted() : this.renderForm()}
      </div>
    )
  }
}

export default Form
