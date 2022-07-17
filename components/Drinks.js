import React from "react";

export default function Drinks() {
  return (
    <>
      <div className="container text-light text-center pt-3">
        <h2 className="h2 text-primary baskerville-font">Drinks</h2>
        <p>
          Real and craft ales, wines, spirits, and cocktails. Traditional
          Thinking…Modern Drinking… <br /> Click below to view our Drinks Menu
        </p>
        <a href="./ANCHOR_DRINKS_MENU.pdf">
          <button className="btn drinks-menu btn-lg">Drinks Menu</button>
        </a>
      </div>
    </>
  );
}
