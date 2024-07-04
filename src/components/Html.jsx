import React from "react";

const Html = () => {
  return (
    <div
      style={{
        background: "white",
        fontFamily: "sans-serif",
        fontSize: "min(5vw, 86px)",
        textAlign: "center",
        width: "100vw",
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "50vh",
          left: "50vw",
          transform: "translateX(-50%)", // center horizontally!
          color: "#ffffff",

          margin: 0,
          whiteSpace: "nowrap",
        }}
      >
        {`R3F Scrollproject`}
      </h1>

      <h1
        style={{
          position: "absolute",
          top: "120vh",
          left: "50vw",
          transform: "translateX(-50%)",
          color: "#f4b677",
          margin: 0,
        }}
      >
        {`I love to create Webexperiences`}
      </h1>
      <h1
        style={{
          position: "absolute",
          top: "200vh",
          left: "50vw",
          transform: "translateX(-50%)",
          color: "#673ab7",
          margin: 0,
          whiteSpace: "nowrap",
        }}
      >
        {`Let´s scroll!`}
      </h1>
    </div>
  );
};

export default Html;
