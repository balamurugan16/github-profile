import { ComponentProps } from "solid-js";
import { useNavigate } from "@solidjs/router";
import github from "../assets/github-mark-white.png";

function Home() {
	const navigate = useNavigate();

	const onSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const username = data.get("username");
		navigate(`/user?id=${username}`);
	};

	return (
		<main class="container">
			<form onSubmit={onSubmit}>
				<img src={github} alt="github" />
				<input
					class="username-input"
					type="text"
					id="username"
					placeholder="View your profile"
					name="username"
				/>
			</form>
		</main>
	);
}

export default Home;
