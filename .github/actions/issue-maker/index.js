import { getInput, setFailed } from '@actions/core'
import { getOctokit, context } from '@actions/github'

async function run() {
    try {
        const issueTitle = getInput('issue-title')
        const jokeBody = getInput('joke')
        const token = getInput('repo-token')

        const octokit = getOctokit(token)

        const newIssue = await octokit.rest.issues.create({
            repo: context.repo.repo,
            owner: context.repo.owner,
            title: issueTitle,
            body: jokeBody
        })
    } catch (err) {
        setFailed(err.message)
    }
}

run()
