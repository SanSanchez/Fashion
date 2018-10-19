'use strict';

import React from 'react';
import {Carousel} from './carousel';
import {Featurette} from './featurette';

export class Home extends React.Component {

  render() {
    return (
      <div className='jumbotron'>
        <h1>Fashion Store</h1>
        <table>
          <thead>
            <tr>
              <th>Coupon Code</th>
              <th>Discount Percentage</th>
              <th>Minimum Purchase Requirement</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      <div>
        <Carousel />
        <Featurette
          headerText='Sometimes our shoppers drink coffee with their new clothes.'
          subHeaderText='Just take a look.'
          imgSrc='../images/roberto-nickson-g-707118-unsplash.jpg'
        />
        <Featurette
          headerText="Sometimes they like to pose like it's no big deal in the flower fields."
          imgSrc='../images/priscilla-du-preez-361818-unsplash.jpg'
        />
        <Featurette
          headerText="You wish your dog looked this good."
          imgSrc='./images/charles-deluvio-540415-unsplash-changed.jpg'
        />
      </div>
      </div>
    )
  }
}


Home.propTypes = {

};

