'use strict';

import ProductApi from '../api/productApi';
import Dispatcher from '../dispatcher/appDispatcher';

const ProductActions = {
<<<<<<< HEAD
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

    getProductById : id => {
        ProductApi.getProductById(id)
            .then( res => {
                Dispatcher.dispatch({
                    actionType : 'get_product_byId',
                    data : res
                });
            })
            .catch(err => err);
    }
=======
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
>>>>>>> Santiago
};

module.exports = ProductActions;