import React from 'react';
import Nav from './Nav'
import SuperHeros from './SuperHeros'
import { Switch, Route } from 'react-router-dom'
import './App.css';



class App extends React.Component {
  static defaultProps = {
    superHeros: [
      {
        name: 'Spiderman',
        age: 35,
        src: "https://media.playstation.com/is/image/SCEA/marvels-spider-man-screen-02-ps4-us-30mar18?$native_nt$",
        facts: [
          "Bitten by a spider",
          'Loves web-slinging',
          'In a relationship with Mary Jane'
        ]
      },
      {
        name: 'Batman',
        age: 38,
        src: "https://cdnb.artstation.com/p/assets/images/images/021/907/073/large/jeehyung-lee-dc-batman-grave-04.jpg?1573406013",
        facts: [
          "Became an opphan",
          'Has a lair in a batcave',
          'In love with Catwoman'
        ]
      },
      {
        name: 'Ironman',
        age: 42,
        src: "https://framelag.com/wp-content/uploads/2019/03/IM-header-1200x676.jpg",
        facts: [
          "Built his own suit",
          'Playboy Billionaire philanthropist',
          'In love with Pepper'
        ]
      }
    ]
  }
  state = {}
  render() {
    return (
      <div>
        <Nav superHeros={this.props.superHeros} />
        <Switch>
          <Route exact path='/' render={(routerProps) =>
            <SuperHeros superHeros={this.props.superHeros}
              {...routerProps} />}></Route>
        </Switch>
      </div >
    );
  }
}

export default App;
