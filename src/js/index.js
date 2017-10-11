
import ImageUploaderApiContext from './ImageUploaderApiContext';

export const createContext = (url)=> {
  return new ImageUploaderApiContext(url);
}

