// condition ? value-if-true : value-if-false
// tarai(x,y,z) =  x<=y ? y : tarai(tarai(x-1,y,z), tarai(y-1,z,x), tarai(z-1,x,y))
//fascinating, ints vs. floats:
//view-source:https://www.g200kg.com/docs/asmjs/testcall.html

export function pauseBrowser(millis) {
    var date = Date.now();
    var curDate = null;
    do {
        curDate = Date.now();
    } while (curDate-date < millis);
}


export function tarai(x,y,z) {
    if (x<=y) {
        return y;
    }
    return tarai(tarai(x-1,y,z),tarai(y-1,z,x),tarai(z-1,x,y)); 
}
