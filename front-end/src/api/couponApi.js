'use strict';

import api from '../api';

const CouponApi = {
  getAllCoupons: () => {
    return api({
      method: 'GET',
      url: 'online_store/coupons',
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

  getOneCoupon: id => {
    return api({
      method : 'GET',
      url : 'online_store/coupons/' + id,
      headers : {
        accept : 'application/json'
      },
      json : true
    })
      .then(res => res.data)
      .catch(error => error)
  },

  postCoupon : coupon => {
    return api({
      method : 'POST',
      url : 'online_store/coupon',
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
    return api({
      method : 'PUT',
      url : 'online_store/coupons/' + id,
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
    return api({
      method : 'DELETE',
      url : 'online_store/coupons/' + id,
      json : true
    })
      .catch(err => err)
  }
};

module.exports = CouponApi;