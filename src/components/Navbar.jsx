import React, { useState } from "react";
import Logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="nav">
      <div className="logo">
        <div className="logo-box">
          {" "}
          <img src={Logo} alt="Logo" width={40} />
        </div>
        Quantix
      </div>

      <div className="nav-pill">
        {["Home", "About", "Feature", "Pricing", "Integration", "Blog"].map(
          (l) => (
            <div
              key={l}
              className={`nl${active === l ? " on" : ""}`}
              onClick={() => setActive(l)}
            >
              {l}
            </div>
          )
        )}
      </div>

      <button className="nav-btn">Contact →</button>
    </nav>
  );
}
