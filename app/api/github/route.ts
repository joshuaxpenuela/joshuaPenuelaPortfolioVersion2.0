export const dynamic = 'force-dynamic';

export async function GET() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username || !token) {
    return Response.json(
      { error: 'Missing GITHUB_USERNAME or GITHUB_TOKEN environment variables.' },
      { status: 500 }
    );
  }

  const headers = {
    Authorization: `token ${token}`,
    'User-Agent': username,
  };

  try {
    // Fetch user info
    const userRes = await fetch(`https://api.github.com/users/${username}`, { headers });
    const userData = await userRes.json();

    // Fetch repos
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      { headers }
    );
    const repos = await reposRes.json();

    // ✅ Defensive check
    if (!Array.isArray(repos)) {
      console.error('GitHub API returned unexpected data:', repos);
      return Response.json(
        { error: 'Unexpected GitHub API response (check your token or rate limit).' },
        { status: 500 }
      );
    }

    const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

    // Approximate total commits
    const commitCounts = await Promise.all(
      repos.map(async (repo) => {
        const commitsRes = await fetch(
          `https://api.github.com/repos/${username}/${repo.name}/commits?author=${username}&per_page=1`,
          { headers }
        );
        const linkHeader = commitsRes.headers.get('Link');
        if (linkHeader) {
          const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
          return match ? parseInt(match[1]) : 0;
        }
        return 0;
      })
    );

    const totalCommits = commitCounts.reduce((a, b) => a + b, 0);

    return Response.json({
      followers: userData.followers || 0,
      stars: totalStars,
      commits: totalCommits,
    });
  } catch (error) {
    console.error('GitHub API error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
