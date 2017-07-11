/**
 * @author Chenzhyc
 * @description 异步加载script tag
 */
import "babel-polyfill";

export default function asyncLoad(url) {
    console.log('load url = ', url);
    return new Promise(function(resolve, reject) {
        const oScript = document.createElement('script');
        oScript.type = 'text/javascript';
        oScript.async = true;
        oScript.src = url;

        const isIE = !-[1,];

        if (isIE) {
            oScript.onreadystatechange = function() {
                if (this.readyState == 'loaded' || this.readyState == 'complete') {
                    resolve();
                }
            }
        }else {
            oScript.onload = function() {
                resolve();
            }
        }

        document.body.appendChild(oScript);
    });
}
