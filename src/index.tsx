/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./styles/index.css";
import Home from "./pages/Home";
import User from "./pages/UserPage";

const root = document.getElementById("root");

render(
	() => (
		<Router>
			<Route path="/" component={Home} />
			<Route path="/user" component={User} />
		</Router>
	),
	root!,
);
