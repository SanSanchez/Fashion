'use strict';

import api from '../api';

const ProductApi = {

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
};

module.exports = ProductApi;