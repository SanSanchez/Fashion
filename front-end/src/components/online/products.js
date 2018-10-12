'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import PurchaseActions from '../../actions/purchaseActions';

export class Home extends React.Component {

  componentDidMount() {
    PurchaseActions.getPurchases();
  }

  // TODO
  // componentWillUnmount() {
  //
  // }

  createRow(props) {
    return (
      <tr key={props.code}>
        <td>{props.code}</td>
        <td>{props.discountPct}</td>
        <td>{props.minPurchaseVal}</td>
      </tr>
    )
  }

  render() {
    return (
      <div className='jumbotron'>
        <h1>Fashion Store</h1>
        <table>
          <thead>
          <tr>
            <th>Purchase Code</th>
            <th>Discount Percentage</th>
            <th>Minimum Purchase Requirement</th>
          </tr>
          </thead>
          <tbody>
          {this.props.purchaseList.map(this.createRow, this)}
          </tbody>
        </table>
      </div>
    )
  }
}

Home.propTypes = {
  purchaseList : PropTypes.array.isRequired
};
