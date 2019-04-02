//string to word array
//given string with words, space, tabs, lfs return array of words
function split(string) {
    //this regex also allows contractions
    var str = string.match(/\b(\w+)'?(\w+)?\b/g);
    console.log(str);
    return str;
}
split("Sentence doesn't not have a tab\t here.\nIt also has a newline, as well as several periods.");

// \b(\w+)'?(\w+)?\b g
// /
// gm
//   matches the character   literally (case sensitive)
// \b assert position at a word boundary (^\w|\w$|\W\w|\w\W)
// 1st Capturing Group (\w+)
// \w+ matches any word character (equal to [a-zA-Z0-9_])
// + Quantifier — Matches between one and unlimited times, as many times as possible, giving back as needed (greedy)
// '? matches the character ' literally (case sensitive)
// ? Quantifier — Matches between zero and one times, as many times as possible, giving back as needed (greedy)
// 2nd Capturing Group (\w+)?
// ? Quantifier — Matches between zero and one times, as many times as possible, giving back as needed (greedy)
// \w+ matches any word character (equal to [a-zA-Z0-9_])
// + Quantifier — Matches between one and unlimited times, as many times as possible, giving back as needed (greedy)
// \b assert position at a word boundary (^\w|\w$|\W\w|\w\W)
//  g matches the characters  g literally (case sensitive)
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
// m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)



function reverse_word_order(array){
    console.log(split(array).reverse());
}

reverse_word_order("Find a good string to test the split().reverse() functtons on!");

function find_longest_word(string){
    console.log("longest:", split(string).sort(function(a, b){return b.length - a.length})[0]);
}

find_longest_word("Find a good string to test the split().reverse() functions on!");


function find_unique_words(string) {
    var arr = split(string);
    var ret = {};
    for (var str in arr) {
        console.log("a", arr[str]);
        if (arr[str] in ret) {
            console.log("a", arr[str], ret);

        } 
        else{
            console.log("c", "need to add", arr[str]);
            ret[arr[str]] = str;
        }
    }
    console.log(ret);
    return str;
}
find_unique_words("test test 1 2 3 a b c c hello, world.");

function rotate_chars(string, rotate=1){
    if (rotate==0){
        console.log(string);
    }
    else{
        rotate_chars(string.substring(1, string.length) + string[0], --rotate);
    }
}
rotate_chars("abc");
rotate_chars("This is a good sentence to rotate on!! :)",5);

function censor(string,array){
    for (var idx in array){
        console.log(array[idx], Array(array[idx].length+1).join("*"));
        string = string.replace(array[idx], Array(array[idx].length+1).join("*"));
    }
    console.log(string);

}
censor("You are a shithead!", ["shit"]);