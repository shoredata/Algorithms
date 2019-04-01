p.16 Algorithm Workbook - Master Checklist - Fundamentals pt.1
================================================================
􏰀Setting and Swapping
Set myNumber to 42. Set myName to your name.
Now swap myNumber into myName & vice versa. 􏰀

Print -52 to 1066
Print integers from -52 to 1066 using a FOR loop. 􏰀

Don’t Worry, Be Happy
Create beCheerful(). Within it, console.log string "good morning!"
Call it 98 times.

􏰀Multiples of Three – but Not All
Using FOR, print multiples of 3 from -300 to 0.
Skip -3 and -6.

􏰀Printing Integers with While
Print integers from 2000 to 5280, using a WHILE.

You Say It’s Your Birthday
If 2 given numbers represent your birth month and day in either order,
  log "How did you know?",
else log "Just another day...."

􏰀Leap Year
Write a function that determines whether a given year is a leap year.
If a year is divisible by four, it is a leap year, unless it is divisible
by 100. However, if it is divisible by 400, then it is.

􏰀Print and Count
Print all integer multiples of 5, from 512 to 4096.
Afterward, also log how many there were.

􏰀Multiples of Six
Print multiples of 6 up to 60,000, using a WHILE.

􏰀Counting, the Dojo Way
Print integers 1 to 100. If divisible by 5, print
"Coding" instead. If by 10, also print " Dojo". 􏰀

What Do You Know?
Your function will be given an input parameter incoming.
Please console.log this value.

􏰀Whoa, That Sucker’s Huge...
Add odd integers from -300,000 to 300,000, and console.log the final sum.
Is there a shortcut?

􏰀Countdown by Fours
Log positive numbers starting at 2016, counting
down by fours (exclude 0), without a FOR loop. 􏰀

Flexible Countdown
Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print
multiples of mult from highNum down to lowNum, using a FOR.
For (2,9,3), print 9 6 3 (on successive lines).


From p.20 in Algorithms Workbook for Master Checklist - Fundamentals pt. 2
==========================================================================
Countdown
Create a function that accepts a number as an input. Return a new array that
counts down by one, from the number (as array’s ‘zeroth’ element) down to 0
(as the last element). How long is this array?

􏰀Print and Return
Your function will receive an array with two numbers. Print the first value,
and return the second.

􏰀First Plus Length
Given an array, return the sum of the first value in the array, plus the
array’s length. What happens if the array’s first value is not a number, but a
string (like "what?") or a boolean (like false).

􏰀Values Greater than Second
For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how
many values this is. 􏰀

Values Greater than Second, Generalized
Write a function that accepts any array, and returns a new array with the array
values that are greater than its 2nd value.
Print how many values this is. What will you do if the array is only one element
long?

􏰀This Length, That Value
Given two numbers, return array of length num1 with each value num2.
Print "Jinx!" if they are same.

􏰀Fit the First Value
Your function should accept an array.
If value at [0] is greater than array’s length, print "Too big!";
if value at [0] is less than array’s length, print "Too small!";
otherwise print "Just right!".

􏰀Fahrenheit to Celsius
Kelvin wants to convert between temperature scales.
Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in
Fahrenheit, and returns the equivalent temperature as expressed in Celsius
degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

􏰀Celsius to Fahrenheit
Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius,
and returns
the equivalent temperature expressed in Fahrenheit degrees.

(optional) Do Fahrenheit and Celsius values equate at a certain number?
Scientific calculation can be complex, so for this challenge just try a series
of Celsius integer values starting at 200, going downward (descending),
checking whether it is equal to the corresponding Fahrenheit value.

From p.22 in Algorithms Workbook for Master Checklist - Fundamentals pt. 3
==========================================================================

􏰀Biggie Size
Given an array, write a function that changes all positive numbers in the array
to “big”.
Example:
makeItBig([-1,3,5,-5]) returns that same array,
changed to [-1,"big","big",-5].

􏰀Print Low, Return High
Create a function that takes array of numbers. The function should print the
lowest value in the array, and return the highest value in the array.

􏰀Print One, Return Another
Build a function that takes array of numbers. The function should print
second-to-last value in the array, and return first odd value in the array.
􏰀
Double Vision
Given array, create a function to return a new array where each value in the
original has been doubled. Calling double([1,2,3]) should return [2,4,6]
without changing original.
􏰀
Previous Lengths
You are passed an array containing strings. Working within that same array,
replace each string with a number – the length of the string at previous array
index – and return the array.

􏰀Add Seven to Most
Build function that accepts array. Return a new array with all values except
first, adding 7 to each. Do not alter the original array.

􏰀Reverse Array
Given array, write a function to reverse values, in-place.
Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

􏰀Outlook: Negative
Given an array, create and return a new one containing all the values of the
provided array, made negative (not simply multiplied by -1). Given [1,-3,5],
return [-1,-3,-5].

􏰀Count Positives
Given array of numbers, create function to replace last value with number of
positive values. Example, countPositives([-1,1,1,1]) changes array to
[-1,1,1,3] and returns it.

􏰀Evens and Odds
Create a function that accepts an array. Every time that array has three odd
values in a row, print "That’s odd!" Every time the array has three evens in a
row, print "Even more so!"

􏰀Increment the Seconds
Given arr, add 1 to odd elements ([1], [3],
etc.), console.log all values and return arr.

􏰀Always Hungry
Create a function that accepts an array, and prints "yummy" each time one of
the values is equal to "food". If no array elements are "food", then print
"I'm hungry" once.

􏰀Swap Toward the Center
Given array, swap first and last, third and third-to- last, etc.
Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].
Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

􏰀Scale the Array
Given array arr and number num, multiply each arr value by num, and return the
changed arr.
