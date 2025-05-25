// components/Clouds.js
import React from "react";

export default function Clouds() {
  return (
    <div className="cloudPane h-screen">
      <div className="stars">
        <div className="star" id="star1"></div>
        <div className="star"></div>
        <div className="star" id="star2"></div>
        <div className="star"></div>
        <div className="star" id="star3"></div>
        <div className="star"></div>
        <div className="star" id="star4"></div>
        <div className="star"></div>
        <div className="star" id="star5"></div>
        <div className="star"></div>
        <div className="star" id="star6"></div>
        <div className="star"></div>
        <div className="star" id="star7"></div>
        <div className="star"></div>
        <div className="star" id="star8"></div>
        <div className="star"></div>
        <div className="star" id="star9"></div>
        <div className="star"></div>
        <div className="star" id="star10"></div>
        <div className="star"></div>
        <div className="star" id="star11"></div>
        <div className="star"></div>
      </div>

      {[1, 2, 3, 4, 5, 6, 7].map((num) => (
        <div className="bigCloud" id={`cloud${num}`} key={num}>
          <div className="largeCircle" id="circ1">
            <div className="largeCircle" id="circ1shadow"></div>
          </div>
          <div className="middleCircle" id="circ2">
            <div className="middleCircle" id="circ2shadow"></div>
          </div>
          <div className="middleCircle" id="circ3">
            <div className="middleCircle" id="circ3shadow"></div>
          </div>
          <div className="smallCircle" id="circ4"></div>
          <div className="smallCircle" id="circ5">
            <div className="smallCircle" id="circ5shadow"></div>
          </div>
          <div className="smallCircle" id="circ6">
            <div className="smallCircle" id="circ6shadow"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
