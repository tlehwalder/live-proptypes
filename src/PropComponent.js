import React from "react";
import PropTypes from "prop-types";

export default class PropComponent extends React.Component {
  render() {
    const { title, half, mapped, iceCream, complex } = this.props;

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>{title}</h2>
        <div>
          <strong>
            half{" "}
            <span role="img" aria-label="a">
              ➗
            </span>
            :
          </strong>
          &nbsp;
          <span className="lime">{half / 2}</span>
        </div>
        <hr />
        <div>
          <strong>map something:</strong>
          {mapped.map((element, _i) => (
            <div key={_i}>➡{element}</div>
          ))}
        </div>
        <hr />
        <div>
          <strong>
            ice cream{" "}
            <span role="img" aria-label="b">
              🍦
            </span>
            :
          </strong>
          &nbsp;
          <span className="purple">{iceCream}</span>
        </div>
        <hr />
        <h3>
          read from objects{" "}
          <span role="img" aria-label="c">
            👓
          </span>
        </h3>
        <div>
          <strong>
            <span style={{ color: "grey" }}>complex.firstValue</span>:
          </strong>
          &nbsp;
          <span className="blue">{complex.firstValue}</span>
        </div>
        <div>
          <strong>
            half of{" "}
            <span style={{ color: "grey" }}>complex.nested.secondValue</span>:
            {""}
          </strong>
          &nbsp;
          <span className="maroon">{complex.nested.secondValue / 2}</span>
        </div>
      </div>
    );
  }
}

PropComponent.propTypes = {
  iceCream: PropTypes.oneOf(["chocolate", "vanilla", "strawberry"])
};
