"use strict";

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CouponStore from '../stores/couponStore';
import {Home} from './home';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          couponList: []
        };
    }

    render() {
        return (
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        )
    }

    componentDidMount(){
        CouponStore.addChangeListener(this._onCouponChange.bind(this));
    }

    componentWillUnmount(){
      CouponStore.removeChangeListener(this._onCouponChange(this));
    }

    _onCouponChange() {
      this.setState({couponList: CouponStore.getAllCoupons()});
    }
}