'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = asyncLoad;

require('babel-polyfill');

function asyncLoad(url) {
    return new Promise(function (resolve, reject) {
        var oScript = document.createElement('script');
        oScript.type = 'text/javascript';
        oScript.async = true;
        oScript.src = url;

        var isIE = !-[1];

        if (isIE) {
            oScript.onreadystatechange = function () {
                if (this.readyState == 'loaded' || this.readyState == 'complete') {
                    resolve();
                }
            };
        } else {
            oScript.onload = function () {
                resolve();
            };
        }

        document.body.appendChild(oScript);
    });
} /**
   * @author Chenzhyc
   * @description 异步加载script tag
   */