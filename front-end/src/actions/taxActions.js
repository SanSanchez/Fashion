'use strict';

import TaxApi from '../actions/taxActions';
import Dispatcher from '../dispatcher/appDispatcher';

const TaxActions = {
  getIncomeRange : (from, to) => {
    TaxApi.getTaxRange(from, to)
      .then( res => {
        Dispatcher.dispatch({
          actionType : 'getTaxes',
          data : res
        });
      })
      .catch(err => err);
  }
};

module.exports = TaxActions;