import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//COMPONENTS
import Header from './components/header';
import NewsList from './components/news_list';
import JSON from './db.json'


class App extends Component {

  state = {
    news: JSON,
    filtered: []
  }

  getKeyword = (event) => {
    let keyword = event.target.value;
    let filtered = this.state.news.filter(item => {
      return item.title.indexOf(keyword) > -1;
    });
  
  this.setState({
    filtered:filtered
  })  
}  

  render(){
    return (
      <div className="container">
        <Header keywords = {this.getKeyword}/>
        <NewsList news = {this.state.filtered.length === 0 ? this.state.news : this.state.filtered}>
        The news Are:
        </NewsList>
      </div>
  )
}
  }  


ReactDOM.render(
<App/>, document.querySelector('#root'));