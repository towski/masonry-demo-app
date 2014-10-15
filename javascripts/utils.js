var hasOwnProperty = Object.prototype.hasOwnProperty;

function isEmpty(obj) {
  if (obj == null) return true;
  if (obj.length > 0)    return false;
  if (obj.length === 0)  return true;
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
  }
  return true;
}

function pad(num, size) {
  var s = "000000000" + num;
  return s.substr(s.length-size);
}

function ajaxRequest(url, callback){
  var request = new XMLHttpRequest()
  request.open('GET', url) 
  request.onload = function() {
    if (this.status == 200 || this.status == 304){ 
      callback(this)
    } else {
      // nothing
    }
  }
  request.send()
}

function query(xpath, callback){
  var results = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
  for ( var i=0 ; i < results.snapshotLength; i++ ) {
    if(callback){
      callback(results.snapshotItem(i))
    } else {
      console.log(results.snapshotItem(i))
    }
  }
}

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function prevent_unload(){
  window.onbeforeunload = function() {  return false }
}

function windowSize(){
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return [x, y]
}

function biggerThanBrowser(imageX, imageY){
  return biggerThanBrowserX() || biggerThanBrowserY()
}

function biggerThanBrowserX(imageX){
  var size = windowSize()
  var x = size[0]
  if(imageX > x){
    return true
  } else {
    return false
  }
}

function biggerThanBrowserY(imageY){
  var size = windowSize()
  var y = size[1]
  if(imageY > y){
    return true
  } else {
    return false
  }
}
