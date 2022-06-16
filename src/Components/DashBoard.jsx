import * as React from "react";
import landing from "../assets/landing-image.jpg";

export const Dashboard = () => (
  <>
    <h1 style={{
        marginLeft:"25%",
        marginTop:"5%"

    }}>!!Welcome to Hacking world of Anish !!</h1>
    <img
      src={landing}
      alt="landing"
      style={{
        height: "80%",
        width: "100%", 
      }}
    ></img>
  </>
);
