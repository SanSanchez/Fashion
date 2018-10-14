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
    }
};

module.exports = ProductActions;