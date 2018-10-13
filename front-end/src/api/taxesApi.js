'use strict';

import api from '../api';

const TaxApi = {

  getIncome : (from, to) => {
    return api({
      method: 'GET',
      url: 'taxes/purchases/completed/' + from + '/' + to,
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
};

module.exports = TaxApi;