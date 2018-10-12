'use strict';

import api from '../api';

// http://fashionalb-1423079644.us-east-1.elb.amazonaws.com:8090/taxes/purchases/completed/2018-01-04/2018-04-04
const TaxApi = {
  getTaxRange: (from, to) => {
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