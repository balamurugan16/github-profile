import { A } from "@solidjs/router";

export default function NotFound(props: { username: string }) {
	return (
		<div class="not-found">
			<h1>404!</h1>
			<h3>
				The user <span>{props.username}</span> is not found
			</h3>
			<A href="/">&larr; Back to home</A>
		</div>
	);
}
