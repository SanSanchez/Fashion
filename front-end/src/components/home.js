'use strict';

import React from 'react';
import {Carousel} from './carousel';
import {Featurette} from './featurette';

export class Home extends React.Component {

  render() {
    return (
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
    )
  }
}

Home.propTypes = {

};

