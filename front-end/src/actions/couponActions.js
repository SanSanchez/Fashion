import CouponApi from '../api/couponApi';
import Dispatcher from '../dispatcher/appDispatcher';

const CouponActions = {

  getCoupons: () => {
    CouponApi.getAllCoupons()
      .then((res) => {
        Dispatcher.dispatch({
          actionType: 'get_coupons',
          data: res
        });
      })
      .catch((error) => error);
  },

  getCoupon : id => {
    CouponApi.getOneCoupon(id)
      .then(res => {
        Dispatcher.dispatch({
          actionType : 'get_coupons',
          data : res
        });
      })
      .catch(err => err);
  },

  postCoupon : coupon => {
    CouponApi.postCoupon(coupon)
      .then(res => {
        Dispatcher.dispatch({
          actionType : 'post_coupon',
          data : res
        });
      })
      .catch(err => err);
  },

  putCoupon : (id, coupon) => {
    CouponApi.putCoupon(id, coupon)
      .then(res => {
        Dispatcher.dispatch({
          actionType : 'put_coupon',
          data : res
          });
        })
      .catch(err => err);
  },

  deleteCoupon : id => {
    CouponApi.deleteCoupon(id)
      .then(() => {
        Dispatcher.dispatch({
          actionType : 'delete_coupon',
          data : id
        })
      })
      .catch(err => err);
  }
};

module.exports = CouponActions;