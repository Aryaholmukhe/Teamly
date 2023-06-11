import Login from './Login.js'
import Logout from './Logout.js'
import React from "react"
import ReactDOM from "react-dom/client";
import { useEffect } from "react"
import { BrowserRouter, Routes, RouteMatch, Link } from "react-router-dom";
import Form from "./Form.js"

const clientId = "556413287242-n5kllb52v1kig8ubfm3m55p1su3mirsp.apps.googleusercontent.com";

export default function Home() {

    return (
        <div className="Home">
           
           <h1>TEAMLY</h1>
            <p>
                All info.
                <br/>
                All audience.
                <br/>
                One place.
            </p>
            <Link to="/form">
        <button>Join Now</button>
      </Link>
        </div>
    );
}
