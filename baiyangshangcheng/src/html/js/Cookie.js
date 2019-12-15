 function get(key) {
     let val;
     let data = document.cookie.split("; ");

     for (let i = 0, len = data.length; i < len; i++) {
         let arr = data[i].split("=");
         let attrName = arr[0];
         let attrVal = arr[1];
         if (attrName == key) {
             val = attrVal;
             break;
         }
     }
     return val;
 }

 function set(key, val, day) {
     if (arguments.length == 3) {
         var date = new Date();
         date.setDate(date.getDate() + day);
         document.cookie = `${key}=${val};expires=` + date;
     } else {
         document.cookie = `${key}=${val}`;
     }
 }

 function del(key) {
     set(key, null, -1);
 }

 function clear() {
     let arr = keys();
     arr.forEach(ele => set(ele, null, -1));
 }

 function keys() {
     let keyArr = [];
     let data = document.cookie.split("; ");

     for (let i = 0, len = data.length; i < len; i++) {
         let arr = data[i].split("=");
         let attrName = arr[0];
         keyArr.push(attrName);
     }
     return keyArr;
 }

 let Cookie = {get, set, del, keys, clear }