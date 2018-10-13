'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {Carousel} from './carousel';
import {Featurette} from './featurette';

export class Home extends React.Component {

  render() {
    return (
      <div>
        <Carousel />
        <Featurette />
      </div>
    )
  }
}

Home.propTypes = {
};
