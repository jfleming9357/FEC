import React from 'react';
import exampleData from './exampleData.js';


class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitList: []
    };
  }

  /// methods here

  render() {
    return (
      <div>
      ***ANOTHER MAGICAL CAROUSEL, THIS IS OF ITEMS IN YOUR STUPID OUTFIT!***
      </div>
    );
  }
}

export default Outfit;