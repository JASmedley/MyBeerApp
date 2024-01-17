import React from 'react';
import Beer from "./Beer"

class Beers extends React.Component {
  constructor(props) {
    console.log('In constructor');
    super(props);

    this.state = {
      theBeers: [],
      isLiked: false,
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
      isLiked: !this.state.isLiked,
    })
  }

  render() {
    console.log('In render');
    return (
      <ul className="beers">
        {this.state.theBeers.map((beers, index) => {
         return <Beer name={beers.name} image={beers.image_url} abv={beers.abv} tips={beers.brewers_tips} description={beers.description}/>
          // return (
          //   <li key={index} className="beer"> 
          //     <button onClick={this.likeButton}>{this.state.isLiked ? "Liked ♥": "Like ♡"}</button>
          //   </li>
          // );
        })}
      </ul>
    );
  }
}

export default Beers
