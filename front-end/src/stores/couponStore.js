import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

const _couponStore = {
  coupons: []
};

class CouponStoreClass extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb){
    this.removeListener(CHANGE_EVENT, cb);
  }

  emitChange(){
    this.emit(CHANGE_EVENT);
  }

  getAllCoupons(){
    return _couponStore.coupons;
  }
}

const CouponStore = new CouponStoreClass();

Dispatcher.register((action) => {

  switch (action.actionType) {
    case 'read_coupons':
      _couponStore.coupons = action.data;
      CouponStore.emitChange();
      break;

    case 'make_coupon':
      _couponStore.coupons.push(action.data);
      CouponStore.emitChange();
      break;

    case 'update_coupon':
      _couponStore.coupons.splice(_couponStore.coupons.findIndex(x => x.couponId === action.data.couponId), 1, action.data);
      CouponStore.emitChange();
      break;

    case 'delete_coupon':
      _couponStore.coupons.splice(_couponStore.coupons.findIndex(x => x.couponId === action.data), 1);
      CouponStore.emitChange();
      break;

    default:
  }
});

export default CouponStore;
