// Program to generate all possible valid IP addresses from given string
//  Given a string containing only digits, restore it by returning all 
//  possible valid IP address combinations.

// A valid IP address must be in the form of A.B.C.D, where A, B, C, and 
//  D are numbers from 0-255. The numbers cannot be 0 prefixed unless they are 0.

console.log("IP Addresses from a string of numbers");
console.log("Ex: Input : 25525511135");
console.log("    Output : ['255.255.11.135', '255.255.111.35']");

function createIPList(strnum) {
    console.log("createIPList(" + strnum + ")");
    // 3 3 3 3 
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
                    console.log("char mismatch: " + test);
                }
            }
        }
    }
    console.log(addr);
    return addr;
}

function isIPValid(staddr) {
    console.log();
    console.log("isIPValid(" + staddr + ")");
    if (staddr.length>15 || staddr.length < 7) {
        console.log(staddr + " address length invalid");
        return false;
    }
    var addrs = staddr.split(".");
    for (let i in addrs) {
        if (addrs[i].startsWith("0", 0)) {
            console.log(addrs[i] + " starts with 0");
            return false;
        }
        else if (addrs[i].length > 3 || addrs[i].length < 1) {
            console.log(addrs[i] + " ip length invalid");
            return false;
        }
        else {
            var j = parseInt(addrs[i]);
            if (j<1 || j>255) {
                console.log(addrs[i] + " value invalid");
                return false;
            }
        }
    }
    return true;
}

console.log(isIPValid("0"));
console.log(isIPValid("00000000000000000000"));
console.log(isIPValid("255.011.255.255"));
console.log(isIPValid("0.011.255.255"));
console.log(isIPValid("256.011.255.255"));
console.log(isIPValid("255.11.255.255"));


createIPList("25525511135");


// Bart@bart-i7-6000k MINGW64 ~/projects/algorithms/js (master)
// $ node ip_addresses.js
// IP Addresses from a string of numbers
// Ex: Input : 25525511135
//     Output : ['255.255.11.135', '255.255.111.35']

// isIPValid(0)
// 0 address length invalid
// false

// isIPValid(00000000000000000000)
// 00000000000000000000 address length invalid
// false

// isIPValid(255.011.255.255)
// 011 starts with 0
// false

// isIPValid(0.011.255.255)
// 0 starts with 0
// false

// isIPValid(256.011.255.255)
// 256 value invalid
// false

// isIPValid(255.11.255.255)
// true
// createIPList(25525511135)

// isIPValid(2.5.5.25511135)
// 25511135 ip length invalid

// isIPValid(2.5.52.5511135)
// 5511135 ip length invalid

// isIPValid(2.5.525.511135)
// 525 value invalid

// isIPValid(2.55.2.5511135)
// 5511135 ip length invalid

// isIPValid(2.55.25.511135)
// 511135 ip length invalid

// isIPValid(2.55.255.11135)
// 11135 ip length invalid

// isIPValid(2.552.5.511135)
// 552 value invalid

// isIPValid(2.552.55.11135)
// 552 value invalid

// isIPValid(2.552.551.1135)
// 552 value invalid

// isIPValid(25.5.2.5511135)
// 5511135 ip length invalid

// isIPValid(25.5.25.511135)
// 511135 ip length invalid

// isIPValid(25.5.255.11135)
// 11135 ip length invalid

// isIPValid(25.52.5.511135)
// 511135 ip length invalid

// isIPValid(25.52.55.11135)
// 11135 ip length invalid

// isIPValid(25.52.551.1135)
// 551 value invalid

// isIPValid(25.525.5.11135)
// 525 value invalid

// isIPValid(25.525.51.1135)
// 525 value invalid

// isIPValid(25.525.511.135)
// 525 value invalid

// isIPValid(255.2.5.511135)
// 511135 ip length invalid

// isIPValid(255.2.55.11135)
// 11135 ip length invalid

// isIPValid(255.2.551.1135)
// 551 value invalid

// isIPValid(255.25.5.11135)
// 11135 ip length invalid

// isIPValid(255.25.51.1135)
// 1135 ip length invalid

// isIPValid(255.25.511.135)
// 511 value invalid

// isIPValid(255.255.1.1135)
// 1135 ip length invalid

// isIPValid(255.255.11.135)

// isIPValid(255.255.111.35)
// [ '255.255.11.135', '255.255.111.35' ]

// Bart@bart-i7-6000k MINGW64 ~/projects/algorithms/js (master)