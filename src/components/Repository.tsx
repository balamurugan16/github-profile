import RepoIcon from "../assets/repository.svg?component-solid";
import StarIcon from "../assets/star.svg?component-solid";
import ForkIcon from "../assets/fork.svg?component-solid";
import { Repo } from "../lib/types";
import { Show } from "solid-js";

export default function Repository(props: { repo: Repo }) {
	return (
		<a class="repository-card" href={props.repo.url} target="_blank">
			<div class="repository-card-header">
				<span class="repository-title">
					<RepoIcon />
					<h4 class="flex-row">{props.repo.name}</h4>
				</span>
				<Show when={props.repo.description}>
					<p class="repository-description">{props.repo.description}</p>
				</Show>
			</div>

			<div class="repository-card-footer">
				<Show when={props.repo.language}>
					<div class="flex-row">
						<span
							class="language-color"
							style={{ "background-color": props.repo.language.color }}
						/>
						<p>{props.repo.language.name}</p>
					</div>
				</Show>
				<div class="repo-stats flex-row">
					<div class="flex-row">
						<StarIcon />
						<p>{props.repo.stars}</p>
					</div>
					<div class="flex-row">
						<ForkIcon />
						<p>{props.repo.forks}</p>
					</div>
					<span class="size">{props.repo.size} KB</span>
				</div>
			</div>
		</a>
	);
}
