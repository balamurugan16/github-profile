import { Octokit } from "octokit";

const octokit = new Octokit()

const data = await octokit.rest.repos.get({
  owner: "btholt",
  repo: "complete-intro-to-sql"
})

console.log(data)

