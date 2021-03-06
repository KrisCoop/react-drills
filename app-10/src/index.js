import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { HashoRouter } from 'react-router-dom'

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
, document.getElementById("root"));

registerServiceWorker();
