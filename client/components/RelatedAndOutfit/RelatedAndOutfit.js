import React from 'react';
import Outfit from './Outfit.js';
import exampleData from './exampleData.js';
import { HooksRelatedItems } from './hooksRelatedItems.js';

class RelatedAndOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfit: [],
    };
  }

  /// When product overview changes to a new product, pull new related items:

  render() {
    return (
      <div className="c-related-items-and-outfit d-module">
        <section className="c-related-items">
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
