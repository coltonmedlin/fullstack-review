import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.search = this.search.bind(this);
    this.render = this.render.bind(this);
  }

  componentDidMount () {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:1128/repos',
      contentType: "application/json",
      success: (response) => {
        this.setState({repos: response});
        console.log('state', this.state.repos);
      }
    });
  }

  search (term) {
    //console.log(`${term} was searched`);

    $.ajax({
      type: 'POST',
      url: 'http://localhost:1128/repos',
      contentType: "application/json",
      data: JSON.stringify({handle: term}),
      success: (response) => {
        this.setState({repos: response});
        console.log('state', this.state.repos);
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));