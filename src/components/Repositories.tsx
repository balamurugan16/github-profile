import { For } from "solid-js";
import { Repo } from "../lib/types";
import Repository from "./Repository";
import "../styles/repositories.css";

export default function Repositories(props: { repos: Repo[] }) {
	return (
		<ul class="repositories">
			<For each={props.repos}>
				{(repo) => {
					return (
						<li>
							<Repository repo={repo} />
						</li>
					);
				}}
			</For>
		</ul>
	);
}
