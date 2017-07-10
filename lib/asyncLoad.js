'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = asyncLoad;
/**
 * @author Chenzhyc
 * @description 异步加载script tag
 */

function asyncLoad(url, callback) {
    // return new Promise(function(resolve, reject) {
    var oScript = document.createElement('script');
    oScript.type = 'text/javascript';
    oScript.async = true;
    oScript.src = url;

    var isIE = !-[1];

    if (isIE) {
        oScript.onreadystatechange = function () {
            if (this.readyState == 'loaded' || this.readyState == 'complete') {
                callback();
            }
        };
    } else {
        oScript.onload = function () {
            callback();
        };
    }

    document.body.appendChild(oScript);
    // });
}
//# sourceMappingURL=asyncLoad.js.map