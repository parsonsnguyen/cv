import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    var data = [
      {
        imageUrl: 'images/img_bg1.jpg',
        description: {
          title: 'Hi! ',
          content: "I'm Ph♥ng"
        },
        contact: {
          link: 'google.com',
          text: 'View CV',
          className: 'icon-download4' 
        }
      },
      {
        imageUrl: 'images/img_bg2.jpg',
        description: {
          title: 'I love building ',
          content: "THINGS !!"
        },
        contact: {
          link: 'google.com',
          text: 'View Projects',
          className: 'icon-briefcase3' 
        }
      },
      {
        imageUrl: 'images/img_bg3.jpg',
        description: {
          title: 'I often ',
          content: "Write ..."
        },
        contact: {
          link: 'google.com',
          text: 'View Projects',
          className: 'icon-book' 
        }
      }
    ];
    var content = data.map(item => {
      return <li style={{backgroundImage: `url(${item.imageUrl})`}}>
      <div className="overlay" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
            <div className="slider-text-inner js-fullheight">
              <div className="desc">
                <h1>{item.description.title} <br />{item.description.content}</h1>
                <p><a className="btn btn-primary btn-learn" href={item.contact.link} target="_blank" rel="noopener noreferrer">{item.contact.text}<i className={item.contact.className} /></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>;
     });

    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
             {content}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
