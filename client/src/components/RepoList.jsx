import React from 'react';

let num = 0;

const RepoList = (props) => (
  <div class="repo-list">
    <h4> TOP REPOS (by stars)</h4>
    <div>
      <table>
    {props.repos.map((repo) => {
      num++;
    return(
    <tr>
      <td>
      <a href={repo.url}>{repo.name}</a>
      </td>
      <td>
      <p>{repo.description}</p>
      <p>&#9734; 	&#9734; 	&#9734; 	&#9734; {repo.stargazersCount}</p>
      </td>
      <td>
        <h5>{repo.owner.name}</h5>
      </td>
      <td>
        <img src={repo.owner.avatarUrl}></img>
      </td>
      </tr>
    );
    })}
      </table>
    </div>
  </div>
)

export default RepoList;