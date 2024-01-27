import { Octokit } from "octokit";
import { GithubGraphqlResponse, User } from "./types";

const octokit = new Octokit({
	auth: import.meta.env.VITE_GITHUB_TOKEN,
});

const query = `
query getUser($owner: String!) {
	user (login:$owner) {
		name
		image:avatarUrl
		url
		login
		createdAt
		followers {
			totalCount
		}
		following {
			totalCount
		}
		repositories(visibility: PUBLIC, first: 9, orderBy: {field:STARGAZERS, direction: DESC}) {
			totalCount
			nodes {
				name
				url
				description
				stars: stargazerCount
				forks: forkCount
				size: diskUsage
				language: primaryLanguage {
					color
					name
				}
			}
		}
		location
		work: company
	}
}

`;
export const getUserData = async (username: string) => {
	const { user: response } = await octokit.graphql<GithubGraphqlResponse>(
		query,
		{
			owner: username,
		},
	);

	const formatter = new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const user: User = {
		image: response.image,
		location: response.location,
		login: response.login,
		name: response.name,
		url: response.url,
		work: response.work,
		createdAt: formatter.format(new Date(response.createdAt)),
		repoCount: response.repositories.totalCount,
		followers: response.followers.totalCount,
		following: response.following.totalCount,
	};

	const repos = response.repositories.nodes;

	return { user, repos };
};
