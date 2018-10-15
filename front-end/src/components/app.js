"use strict";

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CouponStore from '../stores/couponStore';
import PurchaseStore from '../stores/purchaseStore';
import ProductStore from "../stores/productStore";
import TaxStore from '../stores/taxStore';

import {Home} from './home';
import {Product} from "./online/product";
import {Purchase} from './online/purchases';
<<<<<<< HEAD
import {Product} from './online/product';
import {SalesReport} from './Accountant/SalesReport';
=======
import ProductList from './online/ProductList';
import {Login} from './login';
>>>>>>> Santiago
import {Header} from './header';
import ProductList from "./online/productList";
import ProductStore from "../stores/productStore";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          couponList : [],
          purchaseList : [],
          taxList : [],
<<<<<<< HEAD
          products :  [],
            product: ''
=======
          products : [],
>>>>>>> Santiago
        };
    }

    render() {
        console.log(this.state.products);
        return (
          <div>
            <Header />
            <Switch>
              <Route path='/coupons' render={(props) => (<Home {...props} couponList={this.state.couponList} />)}/>
              <Route path='/purchases' render={(props) => (<Purchase {...props} purchaseList={this.state.purchaseList} />)}/>
<<<<<<< HEAD
              <Route path='/taxes' render={(props) => (<SalesReport {...props} taxList={this.state.taxList} />)}/>
                <Route path='/products/product/:id' render={(props) => (<Product {...props} product={this.state.product}/>)}/>
                <Route path='/products' render={(props) => (<ProductList {...props} products={this.state.products} />)}/>
                  <Route exact path='/' component={Home}/>
=======
              <Route path='taxes' render={(props) => (<Tax {...props} taxList={this.state.taxList} />)}/>
              <Route path='/products/product' render={(props) => (<Product {...props} />)}/>
              <Route path='/products' render={(props) => (<ProductList {...props} products={this.state.products} />)}/>
              <Route path='/login' render={(props) => (<Login {...props} />)}/>
              <Route exact path='/' component={Home} />
>>>>>>> Santiago
            </Switch>
          </div>
        )
    }

    componentDidMount(){
      CouponStore.addChangeListener(this._onCouponChange.bind(this));
      PurchaseStore.addChangeListener(this._onPurchaseChange.bind(this));
      TaxStore.addChangeListener(this._onTaxChange.bind(this));
      ProductStore.addChangeListener(this._onProductChange.bind(this));
    }

    componentWillUnmount(){
      CouponStore.removeChangeListener(this._onCouponChange(this));
      PurchaseStore.removeChangeListener(this._onPurchaseChange(this));
      TaxStore.removeChangeListener(this._onTaxChange(this));
<<<<<<< HEAD
      ProductStore.removeChangeListener(this._onProductChange(this));
=======
      ProductStore.removeChangeListener(this._onProductChange.bind(this));
>>>>>>> Santiago
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

<<<<<<< HEAD
    _onProductChange(){
        this.setState({products: ProductStore.getAllProducts(),
        product: ProductStore.getProduct()})
=======
    _onProductChange() {
      this.setState({products: ProductStore.getAllProducts()});
>>>>>>> Santiago
    }
}