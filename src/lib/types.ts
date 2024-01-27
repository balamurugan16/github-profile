export type GithubGraphqlResponse = {
	user: {
		image: string;
		name: string;
		githubHandle: string;
		createdAt: string;
		url: string;
		login: string;
		repositories: {
			totalCount: number;
			nodes: Repo[];
		};
		followers: {
			totalCount: number;
		};
		following: {
			totalCount: number;
		};
		location: string | null;
		work: string | null;
	};
};

export type User = {
	image: string;
	name: string;
	url: string;
	login: string;
	createdAt: string;
	repoCount: number;
	followers: number;
	following: number;
	location: string | null;
	work: string | null;
};

export type Repo = {
	name: string;
	description: string | null;
	language: {
		name: string;
		color: string;
	};
	stars: number;
	forks: number;
	url: string;
	size: number;
};
