import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    console.log('In constructor');
    super(props);

    this.state = {
      theBeers: [],
      isClicked: false,
    };
  }

  componentDidMount() {
    console.log('Mounted');
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => {
        return response.json();
      })
      .then((data) =>
        this.setState({
          theBeers: data,
        })
      );
  }

  componentDidUpdate() {
    console.log(this.state.theBeers);
  }

  likeButton = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    })
  }

  render() {
    console.log('In render');
    return (
      <ul>
        {this.state.theBeers.map((beers, index) => {
          return (
            <li>
              <h2>{beers.name}</h2>
              <button onClick={this.likeButton}>{this.state.isClicked ? "Unlike 👎": "Like 👍"}</button>
              <p>
                <b>ABV:</b> {beers.abv}
              </p>
              <p>
                <b>Tips:</b> {beers.brewers_tips}
              </p>
              <p>
                <b>Description:</b> {beers.description}
              </p>
              <img src={beers.image_url} class="image"></img>
            </li>
          );
        })}
      </ul>
    );
  }
}


