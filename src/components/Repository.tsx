import RepoIcon from "../assets/repository.svg?component-solid";
import StarIcon from "../assets/star.svg?component-solid";
import ForkIcon from "../assets/fork.svg?component-solid";
import { Repo } from "../lib/types";
import { Show } from "solid-js";

export default function Repository(props: { repo: Repo }) {
	//TODO! on click navigate to repo url
	return (
		<a class="repository-card" href={props.repo.url} target="_blank">
			<div class="repository-card-header">
				<h3 class="icon-text">
					<RepoIcon />
					{props.repo.name}
				</h3>
				<Show when={props.repo.description}>
					<p>{props.repo.description}</p>
				</Show>
			</div>
			<div class="repository-card-footer">
				<div class="repo-stats icon-text">
					<Show when={props.repo.language}>
						<div class="icon-text">
							<span
								class="language-color"
								style={{ "background-color": props.repo.language.color }}
							/>
							<p>{props.repo.language.name}</p>
						</div>
					</Show>
					<div class="icon-text">
						<StarIcon />
						<p>{props.repo.stars}</p>
					</div>
					<div class="icon-text">
						<ForkIcon />
						<p>{props.repo.forks}</p>
					</div>
				</div>
				<span class="size">{props.repo.size} KB</span>
			</div>
		</a>
	);
}
