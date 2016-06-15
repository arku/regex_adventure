// 1 - LITERALLY
module.exports = function(str){
    //Returns whether the string contains LITERALLY
    return /LITERALLY/.test(str)
}

// 2 - ANCHOR START
module.exports = function(str){
    //Returns whether the string starts with LITERALLY
    return /^LITERALLY/.test(str)
}

// 3 - ANCHOR END
module.exports = function (str) {
    // returns whether str ends with "BANANAS"
    return /BANANAS$/.test(str);
}

// 4 - CHARACTER CLASS
module.exports = function (str) {
    // returns whether str starts with a vowel or a digit 
    return /^[aeiou0-9]/.test(str);
}

// 5 - NEGATED CHARACTER CLASS
module.exports = function (str) {
    //returns true when first character is not a digit and the second character
    //is not a uppercase alphabet
    return /^[^0-9][^A-Z]/.test(str);
}

// 6 - META
module.exports = function (str) {
    // returns true if the string ends with a dot
    return /\.$/.test(str);
}

// 7- QUANTIFIER
/* Export a function that takes a filename string as an argument and returns
whether the entire filename is a sequence of one or more digits followed by
`.jpg` or `.jpeg`.*/

module.exports = function(str) {
   // return /[0-9]+\.jpg$|[0-9]+.\.jpeg$/.test(str);
   return /^[0-9]+\.jpe?g$/.test(str);
}

// 8- SPLIT
/*Write a module that accepts a string as its argument and returns an array that
splits the string on commas separated by arbitrary amounts of whitespace.*/


module.exports = function (str) {
      return str.split(/\s*,\s*/);
}

// 9- CAPTURE
/* Export a module that searches for the string `x=` followed by
numbers and returns the number found after the equal sign.*/


module.exports = function (str) {
   var match = /x=(\d+)/.exec(str);
   return match? match[1] : null;
}

//10 - CAPTURE(BREAKWORD)
/*Just like before, export a module that searches for `x=` followed by a number
and return the number found after the equal sign.

Unlike before, your solution should only match `x=` when there are no word
characters immediately before `x=` or immediately after the number to the right
of the equal sign.*/

module.exports = function(str) {
    var match = /\bx=(\d+)\b/.exec(str);
    return match? match[1] : null;
}

//11- ALTERATION
/*Export a function that takes a string argument and returns whether the string
starts with `cat`, `dog`, or `robot` followed by a number to the end of the
string.*/

module.exports = function(str) {
    return /^(cat|dog|robot).*\d+$/.test(str);
}

//12- QUANTIFIER GROUP
/*Export a function that takes a string argument and returns whether the string
contains exactly 8 columns of hex codes formatted like: 0xFF with one or more
characters of trailing whitespace after each hex code to separate the columns.

The hex codes begin with `0x` and have exactly 2 more characters, which may be
uppercase `A-F` or lowercase `a-f` or any digit.*/

module.exports = function(str) {
    return /^(0x[\dA-F]{2}\s*){8}$/i.test(str);
}

//13- QUOTES
/*Write a module that accepts a string as its argument and returns an array of
the quoted strings contained in the input. Strings will be quoted with double
quotes. Your program should include the double quotes in its output.

For example, given the string: 'cool "beans" "beep boop" whatever "yay"'
your program should return: ['"beans"', '"beep boop"', '"yay"']*/


module.exports = function (str) {
      return str.match(/".*?"/g);
}

//14- BLINK
/*Implement a custom markdown operator that will translate all text between
`@@...@@` and into `<blink>...</blink>` tags.

For example, `@@whatever@@` becomes `<blink>whatever</blink>`.*/
module.exports = function(str) {
     //ToDO
}
