export async function GET() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const headers = {
    Authorization: `token ${token}`,
    'User-Agent': username,
  };

  // Followers count
  const userRes = await fetch(`https://api.github.com/users/${username}`, { headers });
  const userData = await userRes.json();

  // Repositories to calculate total stars
  const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { headers });
  const repos = await reposRes.json();
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

  // ⚠️ Getting total commits is tricky — GitHub doesn’t expose it directly.
  // Here's a simple way (approximate):
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
    followers: userData.followers,
    stars: totalStars,
    commits: totalCommits,
  });
}
