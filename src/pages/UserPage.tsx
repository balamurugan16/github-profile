import { useSearchParams } from "@solidjs/router";
import {
	ErrorBoundary,
	Show,
	Suspense,
	createEffect,
	createResource,
	createSignal,
} from "solid-js";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Repositories from "../components/Repositories";
import { getUserData } from "../lib/services";
import "../styles/user.css";
import NotFound from "../components/NotFound";
import Loading from "../components/Loading";

export default function User() {
	const [searchParams] = useSearchParams<{ id: string }>();
	const [username, setUsername] = createSignal(searchParams.id);
	const [user] = createResource(username, getUserData);

	createEffect(() => {
		document.title = `Github Profile | ${username()}`;
	});

	return (
		<main class="container">
			<Suspense fallback={<Loading />}>
				<ErrorBoundary fallback={<NotFound username={username()!} />}>
					<Show when={user()}>
						{(user) => (
							<>
								<Header setUsername={setUsername} />
								<Hero user={user().user} />
								<Repositories repos={user().repos} />
							</>
						)}
					</Show>
				</ErrorBoundary>
			</Suspense>
		</main>
	);
}
