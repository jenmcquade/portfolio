import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/jenmcquade/portfolio/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork jenmcquade/portfolio on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/jenmcquade/portfolio"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star jenmcquade/portfolio on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
