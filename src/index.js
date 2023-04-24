import * as dotenv from 'dotenv';
dotenv.config();
console.log(process.env)

import ReactDOM from "react-dom";
import { App } from "./App";

const container = document.getElementById("app");
ReactDOM.render(<App />, container);

