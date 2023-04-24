import * as dotenv from 'dotenv';
dotenv.config();

import ReactDOM from "react-dom";
import { App } from "./App";

const container = document.getElementById("app");
ReactDOM.render(<App />, container);

