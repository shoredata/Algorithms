//string: In-order subsets

export function stringInOrderSubsets(str) {

    // base
    if (str.length < 2) 
        return str;
 
    var results = []; 

    for (var idx = 0; idx < str.length; idx++ ) {
        var char_idx = str[idx];

        
        if (str.indexOf(char_idx) != idx)
            continue; // test char already in output, ignore

        var str_remain = str.slice(0,idx) + str.slice(idx+1,str.length);

        for (var str_substring of stringInOrderSubsets(str_remain))
            results.push(char_idx + str_substring)  
            //push this char in results + each subsequent char

    }
    // listResults(str, results);
    return results;
}

export function listResults(str, ar)
{
    if (ar == null) {}
    else if (ar == undefined) {}
    else if (ar.length == 0) {}
    else {
        console.log(str + ": " + ar.length + " results..");
        if (ar.length<=12)
        {
            let icount = 0;
            for (let s  of ar){
                icount++;
                console.log(icount, s);
            }
        }
    }
}

// var stest = "aabcdaabc";
// var substrings = stringInOrderSubsets(stest);
// console.log(stest, substrings.length + " results:");
// var icount=0;
// for (let str  of substrings){
//     icount++;
//     console.log(icount, str);
// }

// console.log(substrings.length + " results ^^^^");


// var s1 = "abba";
// var s2 = stringInOrderSubsets(s1);
// console.log(s1, s2.length + " results:");
// var i2=0;
// for (let str  of s2){
//     i2++;
//     console.log(i2, str);
// }

// console.log(s2.length + " results ^^^^");


// var s1 = "abca";
// var s2 = stringInOrderSubsets(s1);
// console.log(s1, s2.length + " results:");
// var i2=0;
// for (let str  of s2){
//     i2++;
//     console.log(i2, str);
// }

// console.log(s2.length + " results ^^^^");


// s1 = "abcd";
// s2 = stringInOrderSubsets(s1);
// console.log(s1, s2.length + " results:");
// i2=0;
// for (let str  of s2){
//     i2++;
//     console.log(i2, str);
// }

// console.log(s2.length + " results ^^^^");

// Bart@bart-i7-6000k MINGW64 ~/projects/algorithms/js (master)
// $ node stringInOrderSubsets.js
// 3780 results:
// 1 'aabcdaabc'
// 2 'aabcdaacb'
// 3 'aabcdabac'
// --snip--
// 3780 'dccbbaaaa'
// 3780 results ^^^^
// 12 results:
// 1 'abca'
// 2 'abac'
// 3 'acba'
// 4 'acab'
// 5 'aabc'
// 6 'aacb'
// 7 'baca'
// 8 'baac'
// 9 'bcaa'
// 10 'caba'
// 11 'caab'
// 12 'cbaa'
// 12 results ^^^^
// 24 results:
// 1 'abcd'
// 2 'abdc'
// 3 'acbd'
// 4 'acdb'
// 5 'adbc'
// 6 'adcb'
// 7 'bacd'
// 8 'badc'
// 9 'bcad'
// 10 'bcda'
// 11 'bdac'
// 12 'bdca'
// 13 'cabd'
// 14 'cadb'
// 15 'cbad'
// 16 'cbda'
// 17 'cdab'
// 18 'cdba'
// 19 'dabc'
// 20 'dacb'
// 21 'dbac'
// 22 'dbca'
// 23 'dcab'
// 24 'dcba'
// 24 results ^^^^