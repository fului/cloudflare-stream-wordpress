module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    // Set the maximum line length for body. Replace 100 with your desired length
    'body-max-line-length': [2, 'always', 200],
  },
  ignores: [(commit) => {
    // Ignore linting for commits that start with 'chore(release)'
    return commit.startsWith('chore(release)');
  }]
};
