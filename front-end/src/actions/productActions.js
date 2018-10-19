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
};

module.exports = ProductActions;