import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

const _productStore = {
<<<<<<< HEAD
    products: [],
    product: ''
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
    getProduct(){
        return _productStore.product;
    }
=======
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
>>>>>>> Santiago
}

const ProductStore = new ProductStoreClass();

Dispatcher.register((action) => {

<<<<<<< HEAD
    switch (action.actionType) {
        case 'get_products':
            _productStore.products = action.data;
            ProductStore.emitChange();
            break;
        case 'get_product_byId':
            _productStore.product = action.data;
            ProductStore.emitChange();
        default:
    }
=======
  switch (action.actionType) {
    case 'get_products':
      _productStore.products = action.data;
      ProductStore.emitChange();
      break;
    default:
  }
>>>>>>> Santiago
});

export default ProductStore;