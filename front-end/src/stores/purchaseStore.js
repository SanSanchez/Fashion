import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

const _purchaseStore = {
  purchases: []
};

class PurchaseStoreClass extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb){
    this.removeListener(CHANGE_EVENT, cb);
  }

  emitChange(){
    this.emit(CHANGE_EVENT);
  }

  getAllPurchases(){
    return _purchaseStore.purchases;
  }
}

const PurchaseStore = new PurchaseStoreClass();

Dispatcher.register((action) => {

  switch (action.actionType) {
    case 'get_purchases':
      _purchaseStore.purchases = action.data;
      PurchaseStore.emitChange();
      break;

    case 'post_purchase':
      _purchaseStore.purchases.push(action.data);
      PurchaseStore.emitChange();
      break;

    case 'put_purchase':
      _purchaseStore.purchases.splice(_purchaseStore.purchases.findIndex(x => x.purchaseId === action.data.purchaseId), 1, action.data);
      PurchaseStore.emitChange();
      break;

    case 'delete_purchase':
      _purchaseStore.purchases.splice(_purchaseStore.purchases.findIndex(x => x.purchaseId === action.data), 1);
      PurchaseStore.emitChange();
      break;

    default:
  }
});

export default PurchaseStore;
