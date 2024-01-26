import { ComponentProps } from "solid-js";
import { useNavigate } from "@solidjs/router";

function App() {
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
				<input
					class="username-input"
					type="text"
					id="username"
					name="username"
				/>
			</form>
		</main>
	);
}

export default App;
