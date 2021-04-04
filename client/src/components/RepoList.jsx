import React from 'react';

let num = 0;

const RepoList = (props) => (
  <div class="repo-list">
    <h4> TOP REPOS (by stars)</h4>
    <div>
      <table>
    {props.repos.map((repo, index) => {
      num++;
    return(
    <tr>
      <td>
      #{index + 1}: <a href={repo.url} target="blank">{repo.name}</a>
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