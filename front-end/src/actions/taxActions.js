'use strict';

import TaxApi from '../api/taxesApi';
import Dispatcher from '../dispatcher/appDispatcher';

const TaxActions = {

  getIncomeRange : (from, to) => {
    TaxApi.getIncome(from, to)
      .then( res => {
        Dispatcher.dispatch({
          actionType : 'get_taxes',
          data : res
        });
      })
      .catch(err => err);
  }
};

module.exports = TaxActions;