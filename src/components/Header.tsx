import { ComponentProps, Setter } from "solid-js";
import { A, useSearchParams } from "@solidjs/router";
import github from "../assets/github-mark-white.png";
import "../styles/header.css";

export default function Header(props: {
	setUsername: Setter<string | undefined>;
}) {
	const [_, setSearchParams] = useSearchParams<{ id: string }>();

	const onSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const username = data.get("username") as string;
		props.setUsername(username);
		setSearchParams({ id: username });
		e.currentTarget.reset();
	};

	return (
		<header>
			<A href="/">
				<img src={github} alt="github logo" />
			</A>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					id="username"
					placeholder="View your profile"
					name="username"
				/>
			</form>
		</header>
	);
}
