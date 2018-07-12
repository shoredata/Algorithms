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
for (str  of substrings)
    console.log(str);

console.log(substrings.length + " results ^^^^");

