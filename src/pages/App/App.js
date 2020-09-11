import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import BensThings from '../BensThings/BensThings'

class App extends Component {
  state = {
    bensThings: [
      {
        name: 'banana',
        image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        attributes: ['potassium-rich', 'yellow when good', 'not a taco', 'ring ring ring ring ring ring ring']
      },
      {
        name: 'turkey',
        image: 'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        attributes: ['such gobbles', 'good when stuffed', 'not a taco', 'why gravy exists']
      },
      {
        name: 'taco',
        image: 'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        attributes: ['yummy in my tummy', 'salsas may vary', 'definitely a taco', 'very edible']
      },
      {
        name: 'linux',
        image: 'https://i.imgur.com/3BmfSOA.png',
        attributes: ["not a taco", "not Windows", "not macOS", "Penguins?"]
      },

    ],
    alexandriasThings: [
      {
        name: 'cats',
        image: 'https://static.catsoncatnip.co/images/kbLzCGdBvspA_6361_700.jpg',
        attributes: ['fluffy', 'playful', 'likes yarn', 'snuggly']
      },
      {
        name: 'knitting',
        image: 'https://cdn.aarp.net/content/dam/aarp/home-and-family/your-home/2019/04/1140-knitting-is-back.imgcache.rev0371f0dd036540f060fb49bf5aaea7d5.jpg',
        attributes: ['fluffy', 'calming', 'is yarn', 'good fer yer brain and stress levels']
      },
      {
        name: 'potatoes',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/are-potatoes-healthy-1570222022.jpg?crop=0.669xw:1.00xh;0.331xw,0&resize=768:*',
        attributes: ['yummy', 'good source of potassium', 'is not yarn', 'good fer yer brain and body']
      },
      {
        name: 'roses',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-pink-flowering-plants-royalty-free-image-1584835015.jpg?crop=0.99627xw:1xh;center,top&resize=768:*',
        attributes: ['beautiful', 'thats my middle name', 'is not yarn', 'good fer yer brain and eyes and soul']
      },
    ],

  }
  render() {
    return (
      <>
        <Route
          exact path='/'
          render={() =>
            <>
              {/* All the <a> tags should live here */}
              <h2>All-The-Things</h2>
              <a href="/themanliestthings">Ben's Things</a>
            </>
          }
        />
        {/* All the <Route> components should live here */}
        <Route
          exact path='/themanliestthings'
          render={() =>
            <BensThings
              bensThings={this.state.bensThings}
            />
          } />
      </>

    );
  }
}

export default App;

