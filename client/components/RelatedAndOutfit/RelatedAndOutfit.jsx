import React from 'react';
import RelatedItems from './RelatedItems.jsx';
import Outfit from './Outfit.jsx';
import exampleData from './exampleData.js';
import { HooksRelatedItems } from './hooksRelatedItems.jsx';

class RelatedAndOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfit: []
    };
  }

  /// When product overview changes to a new product, pull new related items:

  render() {
    return (
      <div
        className="c-related-items-and-outfit">
        <section className='c-related-items'>
          <div>
            <HooksRelatedItems />
          </div>
        </section>
        <section className="c-outfit">
          <div>
            <Outfit />
          </div>
        </section>
      </div>
    );
  }
}

export default RelatedAndOutfit;