import React from 'react'
import { hydrate } from "react-dom";
import App from './App.js';

console.log('-----Hydrating App------')

hydrate(<App />, document.getElementById("root"));
