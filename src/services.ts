import { Octokit } from "octokit"

const octokit = new Octokit()

export const getUserData = async (username: string) => {
  const response = await octokit.rest.users.getByUsername({ username })
  return response;
}

