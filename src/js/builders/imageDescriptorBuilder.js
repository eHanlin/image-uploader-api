
export const build = function(){
  let cloneScreen = {}; 
  let screenAttrs = ['availHeight', 'availLeft', 'availTop', 'availWidth', 'colorDepth', 'height', 'pixelDepth', 'width'];
 
  for(let index in screenAttrs) {
    let name = screenAttrs[index];
    cloneScreen[name] = screen[name];
  }
 
  let bodyElem = document.body;
  let documentElem = document.documentElement;
 
  return {
    screen:cloneScreen,
    width:bodyElem.clientWidth,
    height:bodyElem.clientHeight,
    documentHeight:documentElem.clientHeight,
    documentWidth:documentElem.clientWidth,
    url:location.href,
    userAgent:navigator.userAgent
  };
};


