/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./styles/index.css";
import Home from "./pages/Home";
import User from "./pages/UserPage";

const root = document.getElementById("root");

const setFavicon = () => {
	const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
	favicon.href = window.matchMedia("(prefers-color-scheme: dark)").matches
		? "github-mark-white.png"
		: "github-mark.png";
};

setFavicon();

render(
	() => (
		<Router>
			<Route path="/" component={Home} />
			<Route path="/user" component={User} />
		</Router>
	),
	root!,
);
