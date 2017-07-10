/**
 * @author Chenzhyc
 * @description 异步加载script tag
 */

export default function asyncLoad(url, callback) {
    // return new Promise(function(resolve, reject) {
    const oScript = document.createElement('script');
    oScript.type = 'text/javascript';
    oScript.async = true;
    oScript.src = url;

    const isIE = !-[1,];

    if (isIE) {
        oScript.onreadystatechange = function() {
            if (this.readyState == 'loaded' || this.readyState == 'complete') {
                callback();
            }
        }
    }else {
        oScript.onload = function() {
            callback();
        }
    }

    document.body.appendChild(oScript);
    // });
}
