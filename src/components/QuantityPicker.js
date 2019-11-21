import React from "react";
import cx from "classnames";

const QuantityPicker = props => (
  <div className="row">
    <div className="span6">
      <div className="text-brown menu-item-name">
        <h3>{props.name}</h3>
        <em>{props.description}</em>
      </div>
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
          className={cx("increment", {
            disabled: props.quantity >= props.maxQuantity
          })}
          onClick={props.handleIncrement}
        >
          +
        </div>
      </div>
    </div>
  </div>
);

export default QuantityPicker;
