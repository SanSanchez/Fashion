import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

const _productStore = {
  products: []
};

class ProductStoreClass extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb){
    this.removeListener(CHANGE_EVENT, cb);
  }

  emitChange(){
    this.emit(CHANGE_EVENT);
  }

  getAllProducts(){
    return _productStore.products;
  }
}

const ProductStore = new ProductStoreClass();

Dispatcher.register((action) => {

  switch (action.actionType) {
    case 'get_products':
      _productStore.products = action.data;
      ProductStore.emitChange();
      break;
    default:
  }
});

export default ProductStore;