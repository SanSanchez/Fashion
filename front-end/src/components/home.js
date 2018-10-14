'use strict';

import React from 'react';
import PropTypes from 'prop-types';
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
        <Featurette />
      </div>
      </div>
    )
  }
}

