import {
	Match,
	Switch,
	createEffect,
	createResource,
	createSignal,
} from "solid-js";
import Hero from "../components/Hero";
import { useSearchParams } from "@solidjs/router";
import { getUserData } from "../lib/services";
import Repositories from "../components/Repositories";
import "../styles/user.css";
import Header from "../components/Header";

export default function User() {
	const [searchParams] = useSearchParams<{ id: string }>();
	const [username, setUsername] = createSignal(searchParams.id);
	const [user] = createResource(username, getUserData);

	createEffect(() => {
		document.title = `Github Profile | ${username()}`;
	});

	return (
		<main class="container">
			<Header setUsername={setUsername} />
			<Switch fallback={<Hero user={user()!.user} />}>
				<Match when={user.state === "errored"}>Oh no</Match>
				<Match when={user.state === "pending"}>loading</Match>
			</Switch>
			<Switch fallback={<Repositories repos={user()!.repos} />}>
				<Match when={user.state === "errored"}>Oh no</Match>
				<Match when={user.state === "pending"}>loading</Match>
			</Switch>
		</main>
	);
}
