const QUESTIONS = [
  {
    "id": 1,
    "title": "Voting Eligibility",
    "description": "Input age. If >= 18 print \"You can vote!\", else \"Too young to vote.\"",
    "testCases": [
      { "input": "20", "output": "You can vote!", "hidden": false },
      { "input": "16", "output": "Too young to vote.", "hidden": false },
      { "input": "18", "output": "You can vote!", "hidden": false },
      { "input": "0", "output": "Too young to vote.", "hidden": true },
      { "input": "100", "output": "You can vote!", "hidden": true }
    ]
  },
  {
    "id": 2,
    "title": "Area of a Pizza",
    "description": "Write a function `area_circle(r)` (although for this environment, just write the script that takes input and prints output). Input radius `r`. Print \"The pizza area is {area}\". Use 3.14 for pi.",
    "testCases": [
      { "input": "10", "output": "The pizza area is 314.0", "hidden": false },
      { "input": "1", "output": "The pizza area is 3.14", "hidden": false },
      { "input": "5", "output": "The pizza area is 78.5", "hidden": false },
      { "input": "0", "output": "The pizza area is 0.0", "hidden": true },
      { "input": "2", "output": "The pizza area is 12.56", "hidden": true }
    ]
  },
  {
    "id": 3,
    "title": "Even or Odd",
    "description": "Function `check_even(num)` logic (script style). Input number. Print \"Even\" or \"Odd\".",
    "testCases": [
      { "input": "4", "output": "Even", "hidden": false },
      { "input": "7", "output": "Odd", "hidden": false },
      { "input": "0", "output": "Even", "hidden": false },
      { "input": "-2", "output": "Even", "hidden": true },
      { "input": "101", "output": "Odd", "hidden": true }
    ]
  },
  {
    "id": 4,
    "title": "Sum of First N",
    "description": "Sum 1 to n. Input n. Print the sum.",
    "testCases": [
      { "input": "5", "output": "15", "hidden": false },
      { "input": "10", "output": "55", "hidden": false },
      { "input": "1", "output": "1", "hidden": false },
      { "input": "0", "output": "0", "hidden": true },
      { "input": "100", "output": "5050", "hidden": true }
    ]
  },
  {
    "id": 5,
    "title": "Swap Variables",
    "description": "Input a, then input b. Swap them and print \"a: {val}, b: {val}\".",
    "testCases": [
      { "input": "5\n10", "output": "a: 10, b: 5", "hidden": false },
      { "input": "1\n1", "output": "a: 1, b: 1", "hidden": false },
      { "input": "-5\n5", "output": "a: 5, b: -5", "hidden": false },
      { "input": "0\n100", "output": "a: 100, b: 0", "hidden": true },
      { "input": "99\n98", "output": "a: 98, b: 99", "hidden": true }
    ]
  },
  {
    "id": 6,
    "title": "Largest of Three",
    "description": "Input a, b, c. Print largest of the three.",
    "testCases": [
      { "input": "10\n50\n20", "output": "50", "hidden": false },
      { "input": "5\n5\n5", "output": "5", "hidden": false },
      { "input": "-1\n-10\n-5", "output": "-1", "hidden": false },
      { "input": "100\n1\n1", "output": "100", "hidden": true },
      { "input": "1\n2\n3", "output": "3", "hidden": true }
    ]
  },
  {
    "id": 7,
    "title": "Multiplication Table",
    "description": "Input n. Print 1 to 10 for input n. Format \"n x i = result\".",
    "testCases": [
      { "input": "2", "output": "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20", "hidden": false },
      { "input": "5", "output": "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50", "hidden": false },
      { "input": "0", "output": "0 x 1 = 0\n0 x 2 = 0\n0 x 3 = 0\n0 x 4 = 0\n0 x 5 = 0\n0 x 6 = 0\n0 x 7 = 0\n0 x 8 = 0\n0 x 9 = 0\n0 x 10 = 0", "hidden": false },
      { "input": "1", "output": "1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10", "hidden": true },
      { "input": "-3", "output": "-3 x 1 = -3\n-3 x 2 = -6\n-3 x 3 = -9\n-3 x 4 = -12\n-3 x 5 = -15\n-3 x 6 = -18\n-3 x 7 = -21\n-3 x 8 = -24\n-3 x 9 = -27\n-3 x 10 = -30", "hidden": true }
    ]
  },
  {
    "id": 8,
    "title": "Count Vowels",
    "description": "Input a string. Count a,e,i,o,u in string (case insensitive). Print the count.",
    "testCases": [
      { "input": "Hello", "output": "2", "hidden": false },
      { "input": "Python", "output": "1", "hidden": false },
      { "input": "AEIOU", "output": "5", "hidden": false },
      { "input": "Sky", "output": "0", "hidden": true },
      { "input": "Education", "output": "5", "hidden": true }
    ]
  },
  {
    "id": 9,
    "title": "Factorial",
    "description": "Input n. Calculate n!. Print result.",
    "testCases": [
      { "input": "5", "output": "120", "hidden": false },
      { "input": "3", "output": "6", "hidden": false },
      { "input": "0", "output": "1", "hidden": false },
      { "input": "1", "output": "1", "hidden": true },
      { "input": "4", "output": "24", "hidden": true }
    ]
  },
  {
    "id": 10,
    "title": "Palindrome Checker",
    "description": "Input string. Check if Palindrome. Print True/False.",
    "testCases": [
      { "input": "MADAM", "output": "True", "hidden": false },
      { "input": "PYTHON", "output": "False", "hidden": false },
      { "input": "racecar", "output": "True", "hidden": false },
      { "input": "a", "output": "True", "hidden": true },
      { "input": "12321", "output": "True", "hidden": true }
    ]
  },
  {
    "id": 11,
    "title": "Right-Aligned Star Pyramid",
    "description": "Print stars for n rows, right aligned.",
    "testCases": [
      { "input": "3", "output": "  *\n **\n***", "hidden": false },
      { "input": "1", "output": "*", "hidden": false },
      { "input": "2", "output": " *\n**", "hidden": false },
      { "input": "0", "output": "", "hidden": true },
      { "input": "4", "output": "   *\n  **\n ***\n****", "hidden": true }
    ]
  },
  {
    "id": 12,
    "title": "Sum Positive Only",
    "description": "Input 5 numbers (one per line). Sum only positives. Print \"Sum: {val}\".",
    "testCases": [
      { "input": "1\n-2\n3\n-4\n5", "output": "Sum: 9.0", "hidden": false },
      { "input": "-1\n-1\n-1\n-1\n-1", "output": "Sum: 0.0", "hidden": false },
      { "input": "10\n20\n30\n40\n50", "output": "Sum: 150.0", "hidden": false },
      { "input": "0\n0\n0\n0\n0", "output": "Sum: 0.0", "hidden": true },
      { "input": "5.5\n-5.5\n2\n-100\n1", "output": "Sum: 8.5", "hidden": true }
    ]
  },
  {
    "id": 13,
    "title": "Check Prime",
    "description": "Input n. Check if it is Prime. Print \"Prime\" or \"Not Prime\".",
    "testCases": [
      { "input": "7", "output": "Prime", "hidden": false },
      { "input": "10", "output": "Not Prime", "hidden": false },
      { "input": "1", "output": "Not Prime", "hidden": false },
      { "input": "2", "output": "Prime", "hidden": true },
      { "input": "97", "output": "Prime", "hidden": true }
    ]
  },
  {
    "id": 14,
    "title": "Password System",
    "description": "Input loop. If input is \"secret\", print \"Unlocked!\" and break. If 3 fails, print \"Locked out!\" and break.",
    "testCases": [
      { "input": "secret", "output": "Unlocked!", "hidden": false },
      { "input": "w\nw\nw", "output": "Locked out!", "hidden": false },
      { "input": "w\nsecret", "output": "Unlocked!", "hidden": false },
      { "input": "a\nb\nc", "output": "Locked out!", "hidden": true },
      { "input": "w\nw\nsecret", "output": "Unlocked!", "hidden": true }
    ]
  },
  {
    "id": 15,
    "title": "Simple Calculator",
    "description": "Input x, then input y. Add them. Print \"The sum is: {val}\".",
    "testCases": [
      { "input": "10\n5", "output": "The sum is: 15.0", "hidden": false },
      { "input": "100\n200", "output": "The sum is: 300.0", "hidden": false },
      { "input": "-5\n5", "output": "The sum is: 0.0", "hidden": false },
      { "input": "0\n0", "output": "The sum is: 0.0", "hidden": true },
      { "input": "1.5\n2.5", "output": "The sum is: 4.0", "hidden": true }
    ]
  },
  {
    "id": 16,
    "title": "Count Digits",
    "description": "Input number (0-999). Print \"1 Digit Number\", \"2 Digit Number\", or \"3 Digit Number\".",
    "testCases": [
      { "input": "5", "output": "1 Digit Number", "hidden": false },
      { "input": "50", "output": "2 Digit Number", "hidden": false },
      { "input": "500", "output": "3 Digit Number", "hidden": false },
      { "input": "0", "output": "1 Digit Number", "hidden": true },
      { "input": "99", "output": "2 Digit Number", "hidden": true }
    ]
  },
  {
    "id": 17,
    "title": "Reverse String",
    "description": "Input string, print reverse.",
    "testCases": [
      { "input": "Hello", "output": "olleH", "hidden": false },
      { "input": "Python", "output": "nohtyP", "hidden": false },
      { "input": "A", "output": "A", "hidden": false },
      { "input": "", "output": "", "hidden": true },
      { "input": "123", "output": "321", "hidden": true }
    ]
  },
  {
    "id": 18,
    "title": "Increasing Number Pyramid",
    "description": "Input n. Print rows with numbers increasing: 1, then 1 2, ...",
    "testCases": [
      { "input": "3", "output": "1\n1 2\n1 2 3", "hidden": false },
      { "input": "1", "output": "1", "hidden": false },
      { "input": "2", "output": "1\n1 2", "hidden": false },
      { "input": "0", "output": "", "hidden": true },
      { "input": "4", "output": "1\n1 2\n1 2 3\n1 2 3 4", "hidden": true }
    ]
  },
  {
    "id": 19,
    "title": "Traffic Light",
    "description": "Input Color. Red->\"Stop\", Yellow->\"Wait\", Green->\"Go!\". Else \"Invalid Color\". Case Sensitive.",
    "testCases": [
      { "input": "Red", "output": "Stop", "hidden": false },
      { "input": "Green", "output": "Go!", "hidden": false },
      { "input": "Blue", "output": "Invalid Color", "hidden": false },
      { "input": "yellow", "output": "Wait", "hidden": true },
      { "input": "RED", "output": "Stop", "hidden": true }
    ]
  },
  {
    "id": 20,
    "title": "Hollow Square",
    "description": "Input n. Print square of stars with hollow center.",
    "testCases": [
      { "input": "4", "output": "****\n* *\n* *\n****", "hidden": false },
      { "input": "2", "output": "**\n**", "hidden": false },
      { "input": "5", "output": "*****\n*   *\n*   *\n*   *\n*****", "hidden": false },
      { "input": "1", "output": "*", "hidden": true },
      { "input": "3", "output": "***\n* *\n***", "hidden": true }
    ]
  },
  {
    "id": 21,
    "title": "Find Divisible by 7",
    "description": "Input n. Print count of nums 1 to n divisible by 7.",
    "testCases": [
      { "input": "20", "output": "2", "hidden": false },
      { "input": "5", "output": "0", "hidden": false },
      { "input": "7", "output": "1", "hidden": false },
      { "input": "28", "output": "4", "hidden": true },
      { "input": "1", "output": "0", "hidden": true }
    ]
  },
  {
    "id": 22,
    "title": "Baker's Dilemma",
    "description": "Input total cookies. Print \"Full Boxes: {div}\\nLeftovers: {mod}\". Box size is 12.",
    "testCases": [
      { "input": "50", "output": "Full Boxes: 4\nLeftovers: 2", "hidden": false },
      { "input": "12", "output": "Full Boxes: 1\nLeftovers: 0", "hidden": false },
      { "input": "5", "output": "Full Boxes: 0\nLeftovers: 5", "hidden": false },
      { "input": "25", "output": "Full Boxes: 2\nLeftovers: 1", "hidden": true },
      { "input": "0", "output": "Full Boxes: 0\nLeftovers: 0", "hidden": true }
    ]
  },
  {
    "id": 23,
    "title": "Inverted Star Pattern",
    "description": "Input n. Print stars from n down to 1.",
    "testCases": [
      { "input": "3", "output": "***\n**\n*", "hidden": false },
      { "input": "1", "output": "*", "hidden": false },
      { "input": "2", "output": "**\n*", "hidden": false },
      { "input": "0", "output": "", "hidden": true },
      { "input": "5", "output": "*****\n****\n***\n**\n*", "hidden": true }
    ]
  },
  {
    "id": 24,
    "title": "Club Bouncer",
    "description": "Input Age. Input Invite (yes/no). Print \"Welcome...\" if Age >= 18 AND invite \"yes\", else \"Access Denied.\"",
    "testCases": [
      { "input": "19\nyes", "output": "Welcome...", "hidden": false },
      { "input": "20\nno", "output": "Access Denied.", "hidden": false },
      { "input": "15\nyes", "output": "Access Denied.", "hidden": false },
      { "input": "18\nyes", "output": "Welcome...", "hidden": true },
      { "input": "18\nno", "output": "Access Denied.", "hidden": true }
    ]
  },
  {
    "id": 25,
    "title": "Cube Lambda",
    "description": "Input num. Print cube of number.",
    "testCases": [
      { "input": "2", "output": "8", "hidden": false },
      { "input": "10", "output": "1000", "hidden": false },
      { "input": "1", "output": "1", "hidden": false },
      { "input": "0", "output": "0", "hidden": true },
      { "input": "-2", "output": "-8", "hidden": true }
    ]
  },
  {
    "id": 26,
    "title": "List Check",
    "description": "Input fruit. Check if in [\"apple\", \"banana\", \"cherry\"]. Print True/False.",
    "testCases": [
      { "input": "apple", "output": "True", "hidden": false },
      { "input": "mango", "output": "False", "hidden": false },
      { "input": "banana", "output": "True", "hidden": false },
      { "input": "Cherry", "output": "False", "hidden": true },
      { "input": "grape", "output": "False", "hidden": true }
    ]
  },
  {
    "id": 27,
    "title": "Room Area",
    "description": "Input Length, Width. Print \"Room Area is: {area}\".",
    "testCases": [
      { "input": "10\n5", "output": "Room Area is: 50.0", "hidden": false },
      { "input": "2.5\n4", "output": "Room Area is: 10.0", "hidden": false },
      { "input": "0\n5", "output": "Room Area is: 0.0", "hidden": false },
      { "input": "10\n10", "output": "Room Area is: 100.0", "hidden": true },
      { "input": "1.1\n2", "output": "Room Area is: 2.2", "hidden": true }
    ]
  },
  {
    "id": 28,
    "title": "Name Tag",
    "description": "Input name. Print \"Hello\\nMy name is\\n{name}\"",
    "testCases": [
      { "input": "John", "output": "Hello\nMy name is\nJohn", "hidden": false },
      { "input": "Alice", "output": "Hello\nMy name is\nAlice", "hidden": false },
      { "input": "Bob", "output": "Hello\nMy name is\nBob", "hidden": false },
      { "input": "", "output": "Hello\nMy name is\n", "hidden": true },
      { "input": "123", "output": "Hello\nMy name is\n123", "hidden": true }
    ]
  },
  {
    "id": 29,
    "title": "Diamond Pattern",
    "description": "Input n. Print diamond pattern with max width n (top half) and n-1 (bottom half). (Description is vague, following visible test cases pattern for n=3).",
    "testCases": [
      { "input": "3", "output": "  *\n ***\n*****\n ***\n  *", "hidden": false },
      { "input": "1", "output": "*", "hidden": false },
      { "input": "2", "output": " *\n***\n *", "hidden": false },
      { "input": "0", "output": "", "hidden": true },
      { "input": "4", "output": "   *\n  ***\n *****\n*******\n *****\n  ***\n   *", "hidden": true }
    ]
  },
  {
    "id": 30,
    "title": "Number Staircase",
    "description": "Input n. Print rows with continuous numbers. Row 1 has 1 number, Row 2 has 2 numbers etc.",
    "testCases": [
      { "input": "3", "output": "1\n2 3\n4 5 6", "hidden": false },
      { "input": "1", "output": "1", "hidden": false },
      { "input": "2", "output": "1\n2 3", "hidden": false },
      { "input": "0", "output": "", "hidden": true },
      { "input": "4", "output": "1\n2 3\n4 5 6\n7 8 9 10", "hidden": true }
    ]
  }
];

QUESTIONS.forEach(q => {
  q.solution = "# Write your solution for " + q.title + " here\n";
});
