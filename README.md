image-uploader-api
===========================

The `image-uploader-api` is a upload API, it implement multipart format.

You can use this client api if you don't want to depend on other packages.


## Usage

The api use like this：

```js
let context = imageUploaderApi.createContext(url);

let promise = context.upload('your key', fileBlob);
promise.then(()=> console.log('done'), ()=> console.log('error'));
```

## API

#### imageUploaderApi.createContexnt(url:String) : ImageUploaderApiContext

Create an ImageUploaderApiContext.

* url(required): The parameter is api host.


#### ImageUploaderApiContext(url:String)

For `ImageUploaderApiContext`, it's a context object that is able to set some of default parameters.

* url(required): The parameter is api host.

##### upload(key:String, fileBlob:Blob, decorateDescriptor:function?, uploadCB:function?) : Promise

* key(required): Be able to be filename or path.
* fileBlob(required): File content will be uploaded to server.
* decorateDescriptor(optional): The function is able to decorate default descriptor of image, and it will be send to server to be processed.

```js
function decorateDescriptor(descriptor) {
  descriptor['version'] = '1.0.0';
}
```

* uploadCB(optional): The function will be called when the progress succeeed with file where to upload server.


**See default descriptor below：**

```js
{  
   "screen":{  
      "availHeight":773,
      "availLeft":0,
      "availTop":23,
      "availWidth":1280,
      "colorDepth":24,
      "height":800,
      "pixelDepth":24,
      "width":1280
   },
   "width":1264,
   "height":41,
   "documentHeight":351,
   "documentWidth":1280,
   "url":"http://0.0.0.0:8080/build/",
   "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
}
```

## Server side

Implement your http api if you want to receive form data from this client api.

You need be able to parse format from content type of `multipart/form-data` and method of `POST`, and it send the parameters of `key` 、 `file` and `content` to your server.

If you don't know what to parse `multipart/form-data` format, be able to use some packages from third-party like [busboy](https://github.com/mscdex/busboy) or [multer](https://github.com/expressjs/multer).



