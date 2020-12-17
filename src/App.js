import React, { Component } from 'react';
import './App.css';
import About from './components/about';
import Projects from './components/projects';
import Blog from './components/blog';
import Introduction from './components/introduction';
import Sidebar from './components/sidebar';
import Timeline from './components/timeline';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
        </div>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Projects></Projects>
					<Blog></Blog>
					<Timeline></Timeline>
      	</div>
      </div>
    );
  }
}

export default App;
