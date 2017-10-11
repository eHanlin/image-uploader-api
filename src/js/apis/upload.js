
import {upload as uploadFile} from '../https/http';
import {build as buildDefaultDecriptor} from '../builders/imageDescriptorBuilder';
import {POST} from '../constants/Http';
import {KEY, FILE, CONTENT} from '../constants/UploadFormData';


export const upload = (url, key, blob, decorateDecriptor = null, uploadFn = null)=> {
  let formData = new FormData();
  let descriptor = buildDefaultDecriptor();
  if (decorateDecriptor) decorateDecriptor(descriptor);

  formData.append(KEY, key);
  formData.append(FILE, blob);
  formData.append(CONTENT, JSON.stringify(descriptor));
  return uploadFile(url, POST, formData, uploadFn);
};

