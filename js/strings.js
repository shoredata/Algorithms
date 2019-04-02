function reverseString(str) {
  newstr = ""
  for (var idx = str.length-1; idx>=0; idx--) {
    newstr += str[idx];
  }
  return newstr
}
function isPalindrome(str) {
  return reverseString(str)==str;
}
function isPalindrome2(str) {
  for (var i=0; i< Math.floor(str.length/2); i++) {
    if (str[i] != str[str.length-1-i]) {
      return false;
    }
  }
  return true;
}

console.log("22. ");
test1 = "abba"
test2="rabbit"
console.log(true, ":", test1 + " (isPalindrome-strcopy) " + isPalindrome(test1))
console.log(false, ":", test2 + " (isPalindrome-strcopy) " + isPalindrome(test2))
console.log(true, ":", test1 + " (isPalindrome-inplace) " + isPalindrome2(test1))
console.log(false, ":", test2 + " (isPalindrome-inplace) " + isPalindrome2(test2))
console.log("");


console.log("23. ");
function SubString(str, start, length) {
  var retn = "";
  for (var i=start; i<start+length; i++) {
    retn += str[i];    
  }
  // console.log(retn);
  return retn;
}
function ChrString(count,char) {
  var retn = "";
  for (var i=0; i<count; i++) {
    retn += char;    
  }
  return retn;
}
function CensorString(str,word) {
  retn = "";
  repl = ChrString(word.length, "*");
  // console.log(repl);
  for (i=0; i<str.length; i++) {
    teststr = SubString(str,i,word.length);
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
