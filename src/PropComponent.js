import React from "react";

export default class PropComponent extends React.Component {
  render() {
    const { title, half, mapped, iceCream, complex } = this.props;

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>{title}</h2>
        <div>
          <strong>halve:</strong>
          <span>{half / 2}</span>
        </div>
        <hr />
        <div>
          <strong>map something:</strong>
          {mapped.map(element => (
            <div>➡{element}</div>
          ))}
        </div>
        <hr />
        <div>
          <strong>Ice Cream 🍦:</strong>
          <span>{iceCream}</span>
        </div>
        <hr />
        <h3>read from objects 👓</h3>
        <div>
          <strong>
            <span style={{ color: "grey" }}>complex.firstValue</span>:
          </strong>
          <span>{complex.firstValue}</span>
        </div>
        <div>
          <strong>
            half of{" "}
            <span style={{ color: "grey" }}>complex.nested.secondValue</span>:
            {""}
          </strong>
          <span>{complex.nested.secondValue / 2}</span>
        </div>
      </div>
    );
  }
}
