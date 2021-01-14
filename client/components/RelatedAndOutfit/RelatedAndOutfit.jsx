import React from 'react';
import Outfit from './Outfit.jsx';
import RelatedItems from './RelatedItems.jsx';

class RelatedAndOutfit extends React.Component {
  constructor(props) {
    super(props);
  }
  this.state = {
    outfit = []
  }

  /// When product overview changes to a new product, pull new related items:

  render() {
    return (
      <div>
        <div>
          <RelatedItems />
        </div>
        <div>
          <Outfit />
        </div>
      </div>
    )
  }
}