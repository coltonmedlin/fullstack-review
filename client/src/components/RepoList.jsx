import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> TOP REPOS </h4>
    <div>
    {props.repos.map((repo) =>
    <div>
      <a href={repo.url}>{repo.name}</a>
      <p>{repo.description}</p>
      <p>{repo.stargazersCount}</p>
      </div>
    )}
    </div>
  </div>
)

export default RepoList;