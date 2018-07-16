//string: In-order subsets

function string_inorder_subsets(string) {

	// base
    if (string.length < 2) 
    	return string;
 
    var results = []; 

    for (var idx = 0; idx < string.length; idx++ ) {
        var char_idx = string[idx];

        
        if (string.indexOf(char_idx) != idx)
            continue; // test char already in output, ignore

        var str_remain = string.slice(0,idx) + string.slice(idx+1,string.length);

        for (var str_substring of string_inorder_subsets(str_remain))
            results.push(char_idx + str_substring)  
            //push this char in results + each subsequent char

    }
    return results;
}

var stest = "aabcdaabc";
var substrings = string_inorder_subsets(stest);
console.log(substrings.length + " results:");
var icount=0;
for (str  of substrings){
    icount++;
    console.log(icount, str);
}

console.log(substrings.length + " results ^^^^");



var s1 = "abca";
var s2 = string_inorder_subsets(s1);
console.log(s2.length + " results:");
var i2=0;
for (str  of s2){
    i2++;
    console.log(i2, str);
}

console.log(s2.length + " results ^^^^");


s1 = "abcd";
s2 = string_inorder_subsets(s1);
console.log(s2.length + " results:");
i2=0;
for (str  of s2){
    i2++;
    console.log(i2, str);
}

console.log(s2.length + " results ^^^^");

