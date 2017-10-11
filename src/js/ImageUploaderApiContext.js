
import {upload} from './apis/upload';

class ImageUploaderApiContext {

  constructor(url) {
    this.url = url;
  }

  upload(key, blob, decorateDescriptor = null, uploadCB = null) {
    return upload(this.url, key, blob, decorateDescriptor, uploadCB);
  }

}

export default ImageUploaderApiContext;

