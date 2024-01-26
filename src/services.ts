import { Octokit } from "octokit";

const octokit = new Octokit();

export type User = {
	image: string;
	username: string;
	githubHandle: string;
	createdAt: string;
	repos: number;
	followers: number;
	following: number;
	location: string | null;
	work: string | null;
};

export const getUserData = async (username: string) => {
	const response = await octokit.rest.users.getByUsername({ username });

	const formatter = new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const user: User = {
		image: response.data.avatar_url,
		username: response.data.name!,
		githubHandle: response.data.login,
		createdAt: formatter.format(new Date(response.data.created_at)),
		repos: response.data.public_repos,
		followers: response.data.followers,
		following: response.data.following,
		location: response.data.location,
		work: response.data.company,
	};

	return user;
};
