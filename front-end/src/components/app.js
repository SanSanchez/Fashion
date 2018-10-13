"use strict";

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CouponStore from '../stores/couponStore';
import PurchaseStore from '../stores/purchaseStore';
import TaxStore from '../stores/taxStore';
import {Home} from './home';
import {Purchase} from './online/purchases';
import {Product} from './online/product';
import {SalesReport} from './Accountant/SalesReport'

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          couponList : [],
          purchaseList : [],
          taxList : [],
          product : ''
        };
    }

    render() {
        return (
          <div>
            <Switch>
              <Route path='/coupons' render={(props) => (<Home {...props} couponList={this.state.couponList} />)}/>
              <Route path='/purchases' render={(props) => (<Purchase {...props} purchaseList={this.state.purchaseList} />)}/>
              <Route path='/taxes' render={(props) => (<SalesReport {...props} taxList={this.state.taxList} />)}/>
              <Route path='/products/product' render={(props) => (<Product {...props} taxList={this.state.taxList}/>)}/>
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        )
    }

    componentDidMount(){
      CouponStore.addChangeListener(this._onCouponChange.bind(this));
      PurchaseStore.addChangeListener(this._onPurchaseChange.bind(this));
      TaxStore.addChangeListener(this._onTaxChange.bind(this));
    }

    componentWillUnmount(){
      CouponStore.removeChangeListener(this._onCouponChange(this));
      PurchaseStore.removeChangeListener(this._onPurchaseChange(this));
      TaxStore.removeChangeListener(this._onTaxChange(this));
    }

    _onCouponChange() {
      this.setState({couponList: CouponStore.getAllCoupons()});
    }

    _onPurchaseChange() {
      this.setState({purchaseList: PurchaseStore.getAllPurchases()});
    }

    _onTaxChange() {
      this.setState({taxList: TaxStore.getAllTaxes()});
    }
}