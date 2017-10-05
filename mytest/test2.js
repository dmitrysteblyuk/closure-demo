(() => {

var noop = function () {};
// var w = typeof window == 'undefined' ? noop : window;
function getType(d) {
    if (d === null) {
        return 1;
    } else if (d instanceof FormData) {
        return 2;
    } else {
        return 3;
    }
}

window.getType = getType;

const FormData =typeof window=="object"&&window['FormData'] || noop;

})();
