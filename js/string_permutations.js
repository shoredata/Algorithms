function getPermutations(string) {
    var results = [];

    if (string.length === 1) 
    {
        results.push(string);
        return results;
    }

    for (var i = 0; i < string.length; i++) 
    {
        var firstChar = string[i];

        // for inorder substitutions, uncomment this next block:
        // (prevents duplicates in output array)
        // if (string.indexOf(firstChar) != i)
        //     continue; // test char already in output, ignore


        var otherChar = string.substring(0, i) + string.substring(i + 1);
        var otherPermutations = getPermutations(otherChar);
        
        for (var j = 0; j < otherPermutations.length; j++) {
        results.push(firstChar + otherPermutations[j]);
        }
    }
    return results;
}

console.log();
var permutation = getPermutations('YES');
console.log("Total permutation: "+permutation.length);
console.log(permutation);

console.log
var permutation = getPermutations('ABBA');
console.log("Total permutation: "+permutation.length);
console.log(permutation);

console.log
var permutation = getPermutations('ABCD');
console.log("Total permutation: "+permutation.length);
console.log(permutation);

