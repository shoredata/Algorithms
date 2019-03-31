// condition ? value-if-true : value-if-false

// tarai(x,y,z) =  x<=y ? y : tarai(tarai(x-1,y,z), tarai(y-1,z,x), tarai(z-1,x,y))


//fascinating, ints vs. floats:
//view-source:https://www.g200kg.com/docs/asmjs/testcall.html

function pauseBrowser(millis) {
    var date = Date.now();
    var curDate = null;
    do {
        curDate = Date.now();
    } while (curDate-date < millis);
}


function tarai(x,y,z) {
    // counter+=1;
    if (x<=y) {
        return y;
    }
    return tarai(tarai(x-1,y,z),tarai(y-1,z,x),tarai(z-1,x,y)); 
}

console.log(10,2,9,tarai(10,2,9));
// the above = 9 but does not print out the 4145 counter & im not sure whey ....