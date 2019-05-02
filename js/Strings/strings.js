// https://repl.it/@bearfish47x/Javascript-Algorithms-Strings-v1


function ReverseString(str) {
  newstr = ""
  for (var idx = str.length-1; idx>=0; idx--) {
    newstr += str[idx];
  }
  return newstr
}
function PalindromeTestStrCopy(str) {
  return ReverseString(str)==str;
}
function PalindromeTestInPlace(str) {
  for (var i=0; i< Math.floor(str.length/2); i++) {
    if (str[i] != str[str.length-1-i]) {
      return false;
    }
  }
  return true;
}
test1 = "abba"
test2="rabbit"
console.log(true, "PalindromeTestStrCopy:", test1, PalindromeTestStrCopy(test1))
console.log(false, "PalindromeTestStrCopy:", test2, PalindromeTestStrCopy(test2))
console.log(true, "PalindromeTestInPlace:", test1, PalindromeTestInPlace(test1))
console.log(false, "PalindromeTestInPlace:", test2, PalindromeTestInPlace(test2))
console.log("");


dg.WvmMTM:i3r8A

function GenerateStringOfChar(char, count) {
  var retn = "";
  for (var i=0; i<count; i++) {
    retn += char;    
  }
  return retn;
}

//string to word array
//given string with words, space, tabs, lfs return array of words
function StringToWordArray(string) {
    //this regex also allows contractions
    var str = string.match(/\b(\w+)'?(\w+)?\b/g);
    console.log(str);
    return str;
}
StringToWordArray("Sentence doesn't not have a tab\t here.\nIt also has a newline, as well as several periods.");
console.log("");

// \b(\w+)'?(\w+)?\b g
// /
// gm
//   matches the character   literally (case sensitive)
// \b assert position at a word boundary (^\w|\w$|\W\w|\w\W)
// 1st Capturing Group (\w+)
// \w+ matches any word character (equal to [a-zA-Z0-9_])
// + Quantifier � Matches between one and unlimited times, as many times as possible, giving back as needed (greedy)
// '? matches the character ' literally (case sensitive)
// ? Quantifier � Matches between zero and one times, as many times as possible, giving back as needed (greedy)
// 2nd Capturing Group (\w+)?
// ? Quantifier � Matches between zero and one times, as many times as possible, giving back as needed (greedy)
// \w+ matches any word character (equal to [a-zA-Z0-9_])
// + Quantifier � Matches between one and unlimited times, as many times as possible, giving back as needed (greedy)
// \b assert position at a word boundary (^\w|\w$|\W\w|\w\W)
//  g matches the characters  g literally (case sensitive)
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
// m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)



function ReverseWordOrder(array){
    console.log(StringToWordArray(array).reverse());
}
ReverseWordOrder("Find a good string to test the StringToWordArray().reverse() functions on!");
console.log("");

function FindLongestWord(string){
    console.log("longest:", StringToWordArray(string).sort(function(a, b){return b.length - a.length})[0]);
}
FindLongestWord("Find a good string to test the StringToWordArray().reverse() functions on!");
console.log("");


function FindUniqueWords(string) {
    var arr = StringToWordArray(string);
    var ret = {};
    for (var str in arr) {
        // console.log("a", arr[str]);
        if (arr[str] in ret) {
            // console.log("a", arr[str], ret);
        } 
        else{
            // console.log("c", "need to add", arr[str]);
            ret[arr[str]] = str;
        }
    }
    console.log(ret);
    return ret;
}
FindUniqueWords("test test 1 2 3 a b c c hello, world.");
console.log("");


// function ReturnSubstring(str, start, length) {
//   var retn = "";
//   for (var i=start; i<start+length; i++) {
//     retn += str[i];    
//   }
//   return retn;
// }



function RotateChars(string, rotate=1){
    if (rotate==0){
        console.log(string);
    }
    else{
        RotateChars(string.substring(1, string.length) + string[0], --rotate);
    }
}
RotateChars("abc");
RotateChars("This is a good sentence to rotate on!! :)",5);
console.log("");


function censor(string,array){
    for (var idx in array){
        console.log(array[idx], Array(array[idx].length+1).join("*"));
        string = string.replace(array[idx], Array(array[idx].length+1).join("*"));
    }
    console.log(string);

}
censor("You are a forehead in the ore rehost!", ["fore"]);


function CensorString(str,word) {
  retn = "";
  repl = GenerateStringOfChar('*', word.length);
  // console.log(repl);
  for (i=0; i<str.length; i++) {
    teststr = ReturnSubstring(str,i,word.length);
    if (teststr == word) {
      // console.log(teststr);
      retn += repl;
      i += word.length-1;
    }
    else{
      retn += str[i];
      // console.log(retn);
    }
  }
  return retn;
}
var source_string = "day.yad.Sunday is the shortest day of the week.day.d";
var target_string = "day";
console.log(source_string, ":");
console.log(CensorString(source_string, target_string));



