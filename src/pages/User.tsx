import { Match, Switch, createResource } from "solid-js";
import Hero from "../components/Hero";
import { useSearchParams } from "@solidjs/router";
import { getUserData } from "../lib/services";
import Repositories from "../components/Repositories";

export default function User() {
	const [searchParams] = useSearchParams<{ id: string }>();
	const [user] = createResource(searchParams.id, getUserData);

	return (
		<main class="container">
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