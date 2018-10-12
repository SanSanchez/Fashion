'use strict';

import api from '../api';

const PurchaseApi = {
  getAllPurchases: () => {
    return api({
      method: 'GET',
      url: 'online_store/purchases/',
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

  getOnePurchase: id => {
    return api({
      method : 'GET',
      url : 'online_store/purchases/' + id,
      headers : {
        accept : 'application/json'
      },
      json : true
    })
      .then(res => res.data)
      .catch(error => error)
  },

  postPurchase : purchase => {
    return api({
      method : 'POST',
      url : 'online_store/purchase',
      headers : {
        accept : 'application/json',
        contentType : 'application/json'
      },
      data : purchase,
      json : true
    })
      .then(res => res.data)
      .catch(error => error)
  },

  putPurchase : (id, purchase) => {
    return api({
      method : 'PUT',
      url : 'online_store/purchases/' + id,
      headers : {
        accept : 'application/json',
        contentType : 'application/json'
      },
      data : purchase,
      json : true
    })
      .then(res => res.data)
      .catch(error => error)
  },

  deletePurchase : id => {
    return api({
      method : 'DELETE',
      url : 'online_store/purchases/' + id,
      json : true
    })
      .catch(err => err)
  }
};

module.exports = PurchaseApi;