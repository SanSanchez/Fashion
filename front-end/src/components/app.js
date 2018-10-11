"use strict";

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CouponStore from '../stores/couponStore';

export class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          couponList: []
        };
    }

    render() {
        return();
    }

    UNSAFE_componentWillMount(){
        CouponStore.addChangeListener(this._onCouponChange.bind(this));
    }

    UNSAFE_componentWillUnmount(){
      CouponStore.removeChangeListener(this._onCouponChange(this));
    }

    _onCouponChange() {
      this.setState({couponList: CouponStore.getAllCoupons()});
    }

}