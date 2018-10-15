'use strict';

import api from '../api';

const ProductApi = {

<<<<<<< HEAD
    getProducts : () => {
        return api({
            method: 'GET',
            url: 'online_store/products',
            headers: {
                accept: 'application/json'
            },
            json: true
        })
            .then(res => {
                console.log(res.data);
                return res.data
            })
            .catch((error) => error);
    },

    getProductById : (id) => {
        return api({
            method: 'GET',
            url: 'online_store/products/' + id,
            headers: {
                accept: 'application/json'
            },
            json: true
        })
            .then(res => {
                console.log(res.data);
                return res.data
            })
            .catch((error) => error);
    }
=======
  getProducts : () => {
    return api({
      method: 'GET',
      url: 'online_store/products',
      headers: {
        accept: 'application/json'
      },
      json: true
    })
      .then(res => res.data)
      .catch((error) => error);
  }
>>>>>>> Santiago
};

module.exports = ProductApi;