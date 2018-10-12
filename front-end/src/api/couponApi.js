'use strict';

import Axios from 'axios';
import info from '../configInfo';

const CouponApi = {
  getAllCoupons: () => {
    return Axios({
      method: 'GET',
      url: info.backEndUrl + 'coupons',
      headers: {
        accept: 'application/json'
      },
      json: true
    })
      .then(res => res.data)
      .catch((error) => error);
  },

  getOneCoupon: id => {
    return Axios({
      method : 'GET',
      url : info.backEndUrl + 'coupons/' + id,
      headers : {
        accept : 'application/json'
      },
      json : true
    })
      .then(res => res.data)
      .catch(error => error)
  },

  postCoupon : coupon => {
    return Axios({
      method : 'POST',
      url : info.backEndUrl + 'coupon',
      headers : {
        accept : 'application/json',
        contentType : 'application/json'
      },
      data : coupon,
      json : true
    })
      .then(res => res.data)
      .catch(error => error)
  },

  putCoupon : (id, coupon) => {
    return Axios({
      method : 'PUT',
      url : info.backEndUrl + 'coupons/' + id,
      headers : {
        accept : 'application/json',
        contentType : 'application/json'
      },
      data : coupon,
      json : true
    })
      .then(res => res.data)
      .catch(error => error)
  },

  deleteCoupon : id => {
    return Axios({
      method : 'DELETE',
      url : info.backEndUrl + 'coupons/' + id,
      json : true
    })
      .catch(err => err)
  }
};

module.exports = CouponApi;