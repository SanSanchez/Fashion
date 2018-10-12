import PurchaseApi from '../api/purchaseApi';
import Dispatcher from '../dispatcher/appDispatcher';

const PurchaseActions = {

  getPurchases: () => {
    PurchaseApi.getAllPurchases()
      .then((res) => {
        Dispatcher.dispatch({
          actionType: 'get_purchases',
          data: res
        });
      })
      .catch((error) => error);
  },

  getPurchase : id => {
    PurchaseApi.getOnePurchase(id)
      .then(res => {
        Dispatcher.dispatch({
          actionType : 'get_purchases',
          data : res
        });
      })
      .catch(err => err);
  },

  postPurchase : purchase => {
    PurchaseApi.postPurchase(purchase)
      .then(res => {
        Dispatcher.dispatch({
          actionType : 'post_purchase',
          data : res
        });
      })
      .catch(err => err);
  },

  putPurchase : (id, purchase) => {
    PurchaseApi.putPurchase(id, purchase)
      .then(res => {
        Dispatcher.dispatch({
          actionType : 'put_purchase',
          data : res
        });
      })
      .catch(err => err);
  },

  deletePurchase : id => {
    PurchaseApi.deletePurchase(id)
      .then(() => {
        Dispatcher.dispatch({
          actionType : 'delete_purchase',
          data : id
        })
      })
      .catch(err => err);
  }
};

module.exports = PurchaseActions;