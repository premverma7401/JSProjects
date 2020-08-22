class GitHub {
  constructor() {
    this.clientId = 'ecfcfdb19e1a5cdb559f';
    this.clientSecret = 'd211740712e282020b0fe52c7cbfa0af1285d399';
    this.repo_count = 5;
    this.repo_sort = 'created:asc';
  }
  async getUser(user) {
    const profile = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );
    const repo = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );
    const proDate = await profile.json();
    const repoData = await repo.json();
    return {
      proDate,
      repoData,
    };
  }
}
