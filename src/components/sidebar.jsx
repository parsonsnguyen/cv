import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    var data = {
      FullName: 'Ph♥ng Nguyễn',
      Email: 'phongit.ou@gmail.com',
      socials: [
        {
          "name":"facebook",
          "url":"http://facebook.com/0989681553",
          "className":"icon-facebook2"
        },
        {
          "name":"twitter",
          "url":"http://facebook.com/0989681553",
          "className":"icon-twitter2"
        },
        {
          "name":"linkedin",
          "url":"http://facebook.com/0989681553",
          "className":"icon-linkedin2"
        },
        {
          "name":"github",
          "url":"http://facebook.com/0989681553",
          "className":"icon-github"
        },
      ]
    };
    var networks = data.socials.map(network => {
     return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
    });

    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">{data.FullName}</a></h1>
              <span className="email"><i className="icon-mail"></i>{data.Email}</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#blog" data-nav-section="blog">Blog</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>{networks}</ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                Something coming soon !!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
