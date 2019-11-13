import React from "react";

const MenuItem = ({ name, description, prices }) => {
  const renderSize = size => {
    if (!size) {
      return null;
    }

    return <span className="text-brown">{`(${size}”)`}</span>;
  };

  const priceList = prices.map(({ price, size }) => (
    <h3 key={`${name}${price}`}>
      {price < 10 ? <span>&nbsp;</span> : null}
      {price} {renderSize(size)}
    </h3>
  ));

  const phonePriceList = prices.map(({ price, size }) => (
    <span key={`${name}${price}`}>
      &nbsp;&middot; {price} {renderSize(size)}
    </span>
  ));

  return (
    <div className="row menu-item">
      <div className="span8">
        <h3 className="phone-hidden menu-item-name">{name}</h3>

        <div className="phone-visible">
          <h3>
            {name}
            {phonePriceList}
          </h3>
        </div>

        <p>
          <em>{description}</em>
        </p>
      </div>

      <div className="span3 offset1 phone-hidden text-right">{priceList}</div>
    </div>
  );
};

export default MenuItem;
