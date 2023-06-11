import { Octokit } from "octokit";
import { decode } from 'base-64';
import { GithubProjectUser } from "./types/link-owner";

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: process.env.auth_token
  })
  
export const getReadme = async (owner : string,repositories: string)=> {
  const value=  await octokit.request('GET /repos/{owner}/{repo}/readme', {
        owner: owner,
        repo: repositories,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
    return decode(value.data.content).toString() 
 }  
