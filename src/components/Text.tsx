import React from "react";

export const PrimaryText: React.FC = (props) => {
  const style: React.CSSProperties = {
    fontFamily: "Arial",
    fontSize: 48,
    fontWeight: "bold",
  };

  return <h1 style={style}>{props.children}</h1>;
};

export const SecondaryText: React.FC = (props) => {
  const style: React.CSSProperties = {
    fontFamily: "Arial",
    fontSize: 32,
    fontWeight: "normal",
  };

  return <h2 style={style}>{props.children}</h2>;
};
