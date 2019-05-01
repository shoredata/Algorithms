// Program to generate all possible valid IP addresses from given string
//  Given a string containing only digits, restore it by returning all 
//  possible valid IP address combinations.

// A valid IP address must be in the form of A.B.C.D, where A, B, C, and 
//  D are numbers from 0-255. The numbers cannot be 0 prefixed unless they are 0.

// console.log("IP Addresses from a string of numbers");
// console.log("Ex: Input : 25525511135");
// console.log("    Output : ['255.255.11.135', '255.255.111.35']");

export function createIPList(strnum) {
    // console.log("createIPList(" + strnum + ")");
    var addr = [];
    if (strnum.length>12 || strnum.length < 4) {
        console.log("Invalid string of numbers");
        return [];
    }

    for (var idx=1;idx<=3;idx++){
        for (var idy=1;idy<=3;idy++){
            for (var idz=1;idz<=3;idz++){
                var test = strnum.slice(0, idx) + ".";
                test += strnum.slice(idx, idx + idy) + ".";
                test += strnum.slice(idx + idy, idx + idy + idz) + ".";
                test += strnum.slice(idx + idy + idz);
                if (test.length == strnum.length + 3) {
                    if (isIPValid(test)) {
                        addr.push(test);
                    }
                }
                else{
                    // console.log("char mismatch: " + test);
                }
            }
        }
    }
    // console.log(addr);
    return addr;
}


export function isIPValid(staddr) {
    if (staddr.length>15 || staddr.length < 7) {
        return false;
    }
    var addrs = staddr.split(".");
    for (let i in addrs) {
        if (addrs[i].startsWith("0", 0)) {
            return false;
        }
        else if (addrs[i].length > 3 || addrs[i].length < 1) {
            return false;
        }
        else {
            var j = parseInt(addrs[i]);
            if (j<1 || j>255) {
                return false;
            }
        }
    }
    return true;
}




