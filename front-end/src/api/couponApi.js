'use strict';

import Axios from 'axios';
import info from '../configInfo';

const CouponApi = {
  getAllCoupons: () => {
    return Axios({
      method: 'GET',
      url: info.backEndUrl,
      headers: {
        accept: 'application/json'
      },
      json: true
    })
      .then(res => res.data)
      .catch((error) => {
        return error;
      });
  },
};

module.exports = CouponApi;