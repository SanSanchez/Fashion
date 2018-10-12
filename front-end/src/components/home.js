'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  render() {
    return (
      <div className='jumbotron'>
        <h1>Fashion Store</h1>
        {this.props.couponList.map(() => {

        })}
      </div>
    )
  }
}

Home.propTypes = {
  couponList : PropTypes.array.isRequired
}