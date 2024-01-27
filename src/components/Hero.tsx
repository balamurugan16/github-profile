import { User } from "../lib/types";
import Calendar from "../assets/calendar.svg?component-solid";
import Location from "../assets/location.svg?component-solid";
import Work from "../assets/work.svg?component-solid";
import { Show } from "solid-js";
import "../styles/hero.css";

export default function Hero(props: { user: User }) {
	return (
		<section class="hero">
			<img class="hero-image" src={props.user.image} alt={props.user.name} />
			<h2>{props.user.name}</h2>
			<a target="_blank" href={props.user.url} class="github-handle">
				@{props.user.login}
			</a>
			<div class="details">
				<Show when={!!props.user.work}>
					<span>
						<Work />
						<p>{props.user.work}</p>
					</span>
				</Show>
				<Show when={!!props.user.location}>
					<span>
						<Location />
						<p>{props.user.location}</p>
					</span>
				</Show>
				<span>
					<Calendar />
					<p>Joined {props.user.createdAt}</p>
				</span>
			</div>
			<div class="stats">
				<div>
					<span>{props.user.repoCount}</span>
					<label>REPOSITORIES</label>
				</div>
				<div>
					<span>{props.user.followers}</span>
					<label>FOLLOWERS</label>
				</div>
				<div>
					<span>{props.user.following}</span>
					<label>FOLLOWING</label>
				</div>
			</div>
		</section>
	);
}
