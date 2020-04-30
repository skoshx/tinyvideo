#!/usr/bin/env node

parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Bg87":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,s){function i(e){try{u(n.next(e))}catch(t){s(t)}}function l(e){try{u(n.throw(e))}catch(t){s(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(i,l)}u((n=n.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var r,n,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function l(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(l){s=[6,l],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}};Object.defineProperty(exports,"__esModule",{value:!0});var r,n=require("globby"),o=require("execa"),s=require("chalk"),i=require("path").join;function l(e,t){0===t?(console.log("✅ "+s.green(e)),process.exit(t)):(console.log("🚨 "+s.red(e)),process.exit(t))}exports.defaultCompressionOptions={compressionRate:30,overwrite:!1,suffix:"_compressed"},exports.exit=l,function(e){e[e.success=0]="success",e[e.invalid_glob=1]="invalid_glob",e[e.no_glob_provided=2]="no_glob_provided",e[e.compress_error=3]="compress_error"}(r=exports.CompressResult||(exports.CompressResult={}));var u=function(){function s(){}return s.compress=function(s,i){return e(this,void 0,Promise,function(){var e,l,u,c,a,f;return t(this,function(t){switch(t.label){case 0:return i&&(this.options=i),s.length<1?[2,r.no_glob_provided]:(e=this,[4,n(s)]);case 1:if(e.files=t.sent(),0===this.files.length)return[2,r.invalid_glob];l=0,t.label=2;case 2:if(!(l<this.files.length))return[3,7];u=this.fixSpaces(this.files[l]),"ffmpeg",c=this.getOutputFilename(u,this.options.suffix),a="ffmpeg -i "+u+" -vcodec libx264 -strict -2 -crf "+this.options.compressionRate+" "+c,console.log("Compressing file "+(l+1)+"/"+this.files.length+". This might take a while depending on the size of your video…"),t.label=3;case 3:return t.trys.push([3,5,,6]),[4,o.command(a)];case 4:return t.sent(),[3,6];case 5:return f=t.sent(),console.log(f+"\n\n"),[2,r.compress_error];case 6:return l++,[3,2];case 7:return[2,r.success]}})})},s.getBinaryFile=function(e){return i(__dirname,"win32"===e?"../ffmpeg_binaries/ffmpeg.exe":"../ffmpeg_binaries/ffmpeg")},s.fixSpaces=function(e){return e.replace(/(\s+)/g,"\\$1")},s.getOutputFilename=function(e,t){return""+e.substring(0,e.lastIndexOf("."))+t+e.substring(e.lastIndexOf("."))},s.options=exports.defaultCompressionOptions,s}();exports.VideoCompressor=u;
},{}],"XE8U":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,r,t,o){return new(t||(t=Promise))(function(n,s){function i(e){try{l(o.next(e))}catch(r){s(r)}}function a(e){try{l(o.throw(e))}catch(r){s(r)}}function l(e){var r;e.done?n(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then(i,a)}l((o=o.apply(e,r||[])).next())})},r=this&&this.__generator||function(e,r){var t,o,n,s,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,o&&(n=2&s[0]?o.return:s[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,s[1])).done)return n;switch(o=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,o=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(6===s[0]&&i.label<n[1]){i.label=n[1],n=s;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(s);break}n[2]&&i.ops.pop(),i.trys.pop();continue}s=r.call(e,i)}catch(a){s=[6,a],o=0}finally{t=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./compressor");function o(){return e(this,void 0,void 0,function(){var e,o;return r(this,function(r){switch(r.label){case 0:return e=process.argv.slice(2),[4,t.VideoCompressor.compress(e)];case 1:return(o=r.sent())===t.CompressResult.no_glob_provided&&t.exit("You need to pass a glob pattern. For example: compress dist/*.mp4 to compress all MP4 files in the dist folder.",1),o===t.CompressResult.invalid_glob&&t.exit("No files found for that glob pattern. Make sure your glob pattern is correct. For example: compress dist/*.mp4 to compress all MP4 files in the dist folder.",1),o===t.CompressResult.compress_error&&t.exit("There was an error compressing your files. The error logs above might help you figure out what is causing the error.",1),o===t.CompressResult.success&&t.exit("Your files have been compressed!",0),[2]}})})}o();
},{"./compressor":"Bg87"}]},{},["XE8U"], null)
//# sourceMappingURL=/tinyvideo.js.map