import React from 'react';
import RelatedItems from './RelatedItems.jsx';
import Outfit from './Outfit.jsx';
import exampleData from './exampleData.js';

class RelatedAndOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfit: []
  }
  }

  /// When product overview changes to a new product, pull new related items:

  render() {
    return (
      <div
        id="related-items-and-outfit"
        className="c-module">
        <div
          className='c-related-items'>   RELATED ITEMS
          <RelatedItems />
        </div>
        <div
          className='c-outfit'>   YOUR OUTFIT
          <Outfit />
        </div>
      </div>
    )
  }
}

export default RelatedAndOutfit;