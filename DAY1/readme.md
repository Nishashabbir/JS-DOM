if you want to access any element in an HTML page, you always start with accessing the document object.The document object represents your web page.

To manipulate HTML with JavaScript, you first need to select an element.

Below are some examples of how you can use the document object to access HTML

The document object is the owner of all other objects in your web page.
The DOM API provides us with the ability to:

Find and select elements
Change element content and attributes
Add, remove, or modify elements
Change CSS styles
Add event listeners to react to user input
An API Method is an Action that you can do on an HTML element.

An API Property is a Value that you can access on an HTML element

The DOM API is a standard for how to get, change, add, or delete HTML DOM elements.

JavaScript is the language used in browsers to access the DOM through the API.


<!-- REGEX PATTERN **********************************8 -->
<!-- .replace method  -->
RegExp are be used for:

Text searching
Text replacing
Text validation
//         .replace is a method and What .replace() Does ? 
// The .replace() method searches for something in a string and replaces it with something else.
// // e.g 
// let newText = oldText.replace(whatToFind, whatToReplaceWith);

Breaking Down Our Specific Line
javascript
let textWithoutNumber = task.textContent.replace(/^\d+\.\s*/, '');
Part 1: task.textContent
This is the text we're working on, for example: "3. 2. 1. Finish report"

Part 2: /^\d+\.\s*/ (The Pattern - WHAT to find)
This is called a Regular Expression (RegEx) - a pattern for finding text:

Symbol	Meaning	In Our Case
^	Start of string	Look at the VERY beginning
\d+	One or more digits	"1", "23", "456"
\.	A literal dot (period)	The . after the number
\s*	Zero or more spaces	Any spaces after the dot
So this pattern finds: "A number at the start, followed by a dot, followed by any spaces"

Part 3: '' (WHAT to replace with)
An empty string - meaning "remove it"

COMMON REGEX PATTERNS FOR TEXT CLEANING
javascript
// Remove numbers at start: "1. Task" → "Task"
text.replace(/^\d+\.\s*/, '')

// Remove checkmarks: "✓ Task" → "Task"
text.replace(/^✓\s*/, '')

// Remove ALL numbers: "Task123" → "Task"
text.replace(/\d+/g, '')

// Remove special characters: "Hello!!!??" → "Hello"
text.replace(/[!?]/g, '')

// Trim extra spaces: "  Hello  " → "Hello"
text.trim()

js regex flags 
/d	Performs substring matches (new 2022)
/g	Performs a global match (find all)
/i	Performs case-insensitive matching
/m	Performs multiline matching
/ opening and closing the delimitter of the regex /
