
import es6Promise from 'promise-polyfill';
 
let Promise = window.Promise;
 
if (typeof window.Promise === 'undefined') {
  Promise = es6Promise.Promise;
}

export default Promise;

