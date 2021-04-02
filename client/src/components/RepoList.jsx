import React from 'react';

let num = 0;

const RepoList = (props) => (
  <div>
    <h4> TOP REPOS </h4>
    <div>
    {props.repos.map((repo) => {
      num++;
    return(
    <div>
      #{num} <a href={repo.url}>{repo.name}</a>
      <p>{repo.description}</p>
      <p>	&#9734; 	&#9734; 	&#9734; 	&#9734; {repo.stargazersCount}</p>
      </div>
    );
    })}
    </div>
  </div>
)

export default RepoList;