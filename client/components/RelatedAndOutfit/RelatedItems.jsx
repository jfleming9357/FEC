import React from 'react';
import exampleData from './exampleData.js';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  // getRelatedItems(productId) {
  //   let url = 'http://localhost:3000/proxy/api/fec2/hratx/reviews/?product_id=' + productId;
  //   return axios.get(url)
  //   .then((relatedProducts) => {
  //     return relatedProducts;
  //   })
  //   .catch((error) => {
  //     console.error('OOOPS!  There was an error getting the items related to this one.');
  //   })
  // }

  render() {
    return (
      <div>
       *** MAGICAL CAROUSEL OF RELATED ITEMS! ***
      </div>
    );
  }
}

export default RelatedItems;