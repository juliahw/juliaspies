import React from "react";
import cx from "classnames";

const QuantityPicker = props => (
  <div className="row">
    <div className="span6">
      <h3 className="text-brown menu-item-name phone-hidden">
        {props.name} · ${props.price}
      </h3>
      <span className="phone-visible">
        <b>
          {props.name} · ${props.price}
        </b>
      </span>
      <p>{props.description}</p>
    </div>

    <div className="span6">
      <div className="quantity-picker">
        <div
          className={cx("decrement", { disabled: props.quantity == 0 })}
          onClick={props.handleDecrement}
        >
          -
        </div>
        {props.quantity}
        <div
          className={cx("increment", { disabled: props.quantity >= 2 })}
          onClick={props.handleIncrement}
        >
          +
        </div>
      </div>
    </div>
  </div>
);

export default QuantityPicker;
