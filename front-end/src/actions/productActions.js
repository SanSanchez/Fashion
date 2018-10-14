'use strict';

import ProductApi from '../api/productApi';
import Dispatcher from '../dispatcher/appDispatcher';

const ProductActions = {
  getProducts : () => {
    ProductApi.getProducts()
      .then( res => {
        Dispatcher.dispatch({
          actionType : 'get_products',
          data : res
        });
      })
      .catch(err => err);
  },

  getProduct : (id) => {
    return api({
      method : 'GET',
      url : 'online_store/products/' + id,
      headers : {
        accept : 'application/json'
      },
      json : true
    })
      .then((res) => res)
      .catch((error) => error);
  }
};

module.exports = ProductActions;