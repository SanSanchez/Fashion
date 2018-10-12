import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

const _taxStore = {
  taxes: []
};

class TaxStoreClass extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb){
    this.removeListener(CHANGE_EVENT, cb);
  }

  emitChange(){
    this.emit(CHANGE_EVENT);
  }

  getAllTaxes(){
    return _taxStore.taxes;
  }
}

const TaxStore = new TaxStoreClass();

Dispatcher.register((action) => {

  switch (action.actionType) {
    case 'get_taxes':
      _taxStore.taxes = action.data;
      TaxStore.emitChange();
      break;

    default:
  }
});

export default TaxStore;
