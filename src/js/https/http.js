
import Promise from '../utils/Promise';

let upload = (url, method, formData, uploadFn = null)=> {

  let promise = new Promise((resolve, reject)=> {
    let xhr = new XMLHttpRequest();

    let progressPromise = new Promise((progressResolve, progressReject)=>{
      xhr.upload.addEventListener('progress', (evt)=> {
        progressResolve(evt);
      });

      xhr.addEventListener('progress', (evt)=> {
        progressReject(evt);
      });
    });

    if (uploadFn) progressPromise.then(uploadFn);

    xhr.onload = (evt)=> {
      resolve(evt);
    };

    xhr.onerror = (evt)=> {
      reject(evt);
    };

    xhr.open(method, url, true);
    xhr.send(formData);
  });
  return promise;
};

export {upload};
