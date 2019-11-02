
import React, {useState} from "react";
import {Redirect} from "react-router-dom";


// console.log('setState:', useState);
let sessionID;
export default function DashboardPageButton() {

  return (
    <div className="endSessionButton">
      <button onSubmit={<Redirect to={{pathname: `/dashboard`}}/>}>
        Back to Dashboard
      </button>
    </div>
  );
}
