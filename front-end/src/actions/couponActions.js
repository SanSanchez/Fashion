import CouponApi from '../api/couponApi';
import Dispatcher from '../dispatcher/appDispatcher';

const CouponActions = {

  readCoupons: () => {
    CouponApi.getAllCoupons()
      .then((res) => {
        Dispatcher.dispatch({
          actionType: 'read_coupons',
          data: res
        });
      })
      .catch((error) => error);
  } 
};

module.exports = CouponActions;