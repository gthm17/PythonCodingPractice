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
    ],
    "solution": "age = int(input())\nif age >= 18:\n    print(\"You can vote!\")\nelse:\n    print(\"Too young to vote.\")"
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
    ],
    "solution": "r = float(input())\narea = 3.14 * r * r\nprint(f\"The pizza area is {area}\")"
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
    ],
    "solution": "num = int(input())\nif num % 2 == 0:\n    print(\"Even\")\nelse:\n    print(\"Odd\")"
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
    ],
    "solution": "n = int(input())\nprint(sum(range(1, n + 1)))"
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
    ],
    "solution": "a = input()\nb = input()\na, b = b, a\nprint(f\"a: {a}, b: {b}\")"
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
    ],
    "solution": "a = int(input())\nb = int(input())\nc = int(input())\nprint(max(a, b, c))"
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
    ],
    "solution": "n = int(input())\nfor i in range(1, 11):\n    print(f\"{n} x {i} = {n * i}\")"
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
    ],
    "solution": "s = input().lower()\nvowels = \"aeiou\"\ncount = 0\nfor char in s:\n    if char in vowels:\n        count += 1\nprint(count)"
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
    ],
    "solution": "import math\nn = int(input())\nprint(math.factorial(n))"
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
    ],
    "solution": "s = input()\nprint(s == s[::-1])"
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
    ],
    "solution": "n = int(input())\nfor i in range(1, n + 1):\n    print(\" \" * (n - i) + \"*\" * i)"
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
    ],
    "solution": "total = 0\nfor _ in range(5):\n    try:\n        val = float(input())\n        if val > 0:\n            total += val\n    except:\n        break\nprint(f\"Sum: {total}\")"
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
    ],
    "solution": "n = int(input())\nif n <= 1:\n    print(\"Not Prime\")\nelse:\n    is_prime = True\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            is_prime = False\n            break\n    print(\"Prime\" if is_prime else \"Not Prime\")"
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
    ],
    "solution": "for _ in range(3):\n    pwd = input()\n    if pwd == \"secret\":\n        print(\"Unlocked!\")\n        break\nelse:\n    print(\"Locked out!\")"
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
    ],
    "solution": "x = float(input())\ny = float(input())\nprint(f\"The sum is: {x + y}\")"
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
    ],
    "solution": "n = int(input())\nif 0 <= n < 10:\n    print(\"1 Digit Number\")\nelif 10 <= n < 100:\n    print(\"2 Digit Number\")\nelif 100 <= n < 1000:\n    print(\"3 Digit Number\")"
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
    ],
    "solution": "print(input()[::-1])"
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
    ],
    "solution": "n = int(input())\nfor i in range(1, n + 1):\n    print(\" \".join(str(x) for x in range(1, i + 1)))"
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
    ],
    "solution": "c = input()\nif c == \"Red\":\n    print(\"Stop\")\nelif c == \"Yellow\":\n    print(\"Wait\")\nelif c == \"Green\":\n    print(\"Go!\")\nelse:\n    print(\"Invalid Color\")"
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
    ],
    "solution": "n = int(input())\nif n == 1:\n    print(\"*\")\nelse:\n    print(\"*\" * n)\n    for _ in range(n - 2):\n        print(\"*\" + \" \" * (n - 2) + \"*\")\n    if n > 1:\n        print(\"*\" * n)"
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
    ],
    "solution": "n = int(input())\ncount = 0\nfor i in range(1, n + 1):\n    if i % 7 == 0:\n        count += 1\nprint(count)"
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
    ],
    "solution": "cookies = int(input())\nprint(f\"Full Boxes: {cookies // 12}\")\nprint(f\"Leftovers: {cookies % 12}\")"
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
    ],
    "solution": "n = int(input())\nfor i in range(n, 0, -1):\n    print(\"*\" * i)"
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
    ],
    "solution": "age = int(input())\ninvite = input()\nif age >= 18 and invite == \"yes\":\n    print(\"Welcome...\")\nelse:\n    print(\"Access Denied.\")"
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
    ],
    "solution": "x = int(input())\nprint(x ** 3)"
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
    ],
    "solution": "fruit = input()\nprint(fruit in [\"apple\", \"banana\", \"cherry\"])"
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
    ],
    "solution": "l = float(input())\nw = float(input())\nprint(f\"Room Area is: {l * w}\")"
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
    ],
    "solution": "name = input()\nprint(\"Hello\\nMy name is\")\nprint(name)"
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
    ],
    "solution": "n = int(input())\nfor i in range(1, n + 1):\n    print(\" \" * (n - i) + \"*\" * (2 * i - 1))\nfor i in range(n - 1, 0, -1):\n    print(\" \" * (n - i) + \"*\" * (2 * i - 1))"
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
    ],
    "solution": "n = int(input())\ncount = 1\nfor i in range(1, n + 1):\n    row = []\n    for _ in range(i):\n        row.append(str(count))\n        count += 1\n    print(\" \".join(row))"
  },
  {
    "id": 31,
    "title": "Simple Greeting",
    "description": "Write a function `greet` that takes a name as input and prints 'Hello, [name]!'. Input is a single string.",
    "testCases": [
      { "input": "Alice", "output": "Hello, Alice!", "hidden": false },
      { "input": "Bob", "output": "Hello, Bob!", "hidden": false },
      { "input": "World", "output": "Hello, World!", "hidden": true }
    ],
    "solution": "def greet(name):\n    print(f'Hello, {name}!')\n\nn = input()\ngreet(n)"
  },
  {
    "id": 32,
    "title": "Rectangle Area (Default Args)",
    "description": "Write a function `area` that calculates the area of a rectangle. If only one dimension is provided, assume it is a square. Input is one or two integers separated by space.",
    "testCases": [
      { "input": "5 10", "output": "50", "hidden": false },
      { "input": "4", "output": "16", "hidden": false },
      { "input": "7 7", "output": "49", "hidden": true }
    ],
    "solution": "def area(l, w=None):\n    if w is None:\n        return l * l\n    return l * w\n\nargs = list(map(int, input().split()))\nprint(area(*args))"
  },
  {
    "id": 33,
    "title": "Sum of Many (*args)",
    "description": "Write a function that accepts an arbitrary number of integers as arguments using `*args` and returns their sum. Input is a line of space-separated numbers.",
    "testCases": [
      { "input": "1 2 3", "output": "6", "hidden": false },
      { "input": "10 20", "output": "30", "hidden": false },
      { "input": "5", "output": "5", "hidden": true },
      { "input": "", "output": "0", "hidden": true }
    ],
    "solution": "def sum_all(*args):\n    return sum(args)\n\nline = input().split()\nnums = map(int, line)\nprint(sum_all(*nums))"
  },
  {
    "id": 34,
    "title": "Key-Value Formatter (**kwargs)",
    "description": "Write a function that accepts variable keyword arguments using `**kwargs` and prints them in 'key: value' format, one per line, sorted alphabetically by key. Input is a string 'key=value' separated by spaces.",
    "testCases": [
      { "input": "name=John age=25", "output": "age: 25\nname: John", "hidden": false },
      { "input": "b=2 a=1 c=3", "output": "a: 1\nb: 2\nc: 3", "hidden": true }
    ],
    "solution": "def print_details(**kwargs):\n    for k in sorted(kwargs):\n        print(f'{k}: {kwargs[k]}')\n\ninp = input().split()\nd = {x.split('=')[0]: x.split('=')[1] for x in inp}\nprint_details(**d)"
  },
  {
    "id": 35,
    "title": "Lambda Square",
    "description": "Use a lambda function to square a number. Input is an integer.",
    "testCases": [
      { "input": "5", "output": "25", "hidden": false },
      { "input": "10", "output": "100", "hidden": false },
      { "input": "-3", "output": "9", "hidden": true }
    ],
    "solution": "square = lambda x: x ** 2\nprint(square(int(input())))"
  },
  {
    "id": 36,
    "title": "Filter Evens",
    "description": "Use `filter()` and a lambda function to print only the even numbers from a list. Input is space-separated integers.",
    "testCases": [
      { "input": "1 2 3 4 5 6", "output": "2 4 6", "hidden": false },
      { "input": "1 3 5", "output": "", "hidden": false },
      { "input": "10 22 33", "output": "10 22", "hidden": true }
    ],
    "solution": "nums = list(map(int, input().split()))\nevens = filter(lambda x: x % 2 == 0, nums)\nprint(*evens)"
  },
  {
    "id": 37,
    "title": "Map Powers",
    "description": "Use `map()` to raise every number in a list to the power of 3. Input is space-separated integers.",
    "testCases": [
      { "input": "1 2 3", "output": "1 8 27", "hidden": false },
      { "input": "0 4", "output": "0 64", "hidden": true }
    ],
    "solution": "nums = list(map(int, input().split()))\ncubes = map(lambda x: x**3, nums)\nprint(*cubes)"
  },
  {
    "id": 38,
    "title": "Recursive Factorial",
    "description": "Write a recursive function to calculate the factorial of `n`. Input is a single integer.",
    "testCases": [
      { "input": "5", "output": "120", "hidden": false },
      { "input": "1", "output": "1", "hidden": false },
      { "input": "0", "output": "1", "hidden": true }
    ],
    "solution": "def fact(n):\n    if n == 0:\n        return 1\n    return n * fact(n - 1)\n\nprint(fact(int(input())))"
  },
  {
    "id": 39,
    "title": "Recursive Fibonacci",
    "description": "Write a recursive function to find the nth Fibonacci number (starts 0, 1, 1, 2...). Input is integer n.",
    "testCases": [
      { "input": "6", "output": "8", "hidden": false },
      { "input": "0", "output": "0", "hidden": false },
      { "input": "10", "output": "55", "hidden": true }
    ],
    "solution": "def fib(n):\n    if n <= 1:\n        return n\n    return fib(n-1) + fib(n-2)\n\nprint(fib(int(input())))"
  },
  {
    "id": 40,
    "title": "Variable Scope Test",
    "description": "Write a function that updates a global variable `count` by adding the input number to it. Input is a number.",
    "testCases": [
      { "input": "5", "output": "5", "hidden": false },
      { "input": "10", "output": "10", "hidden": false }
    ],
    "solution": "count = 0\ndef add_to_global(n):\n    global count\n    count += n\n\nval = int(input())\nadd_to_global(val)\nprint(count)"
  },
  {
    "id": 41,
    "title": "List Creation & Slicing",
    "description": "Create a list from input numbers. Print the sublist from index 2 to 4 (exclusive). Input is space-separated integers.",
    "testCases": [
      { "input": "0 1 2 3 4 5", "output": "[2, 3]", "hidden": false },
      { "input": "10 20 30 40 50", "output": "[30, 40]", "hidden": false },
      { "input": "1 2 3", "output": "[3]", "hidden": true }
    ],
    "solution": "lst = list(map(int, input().split()))\nprint(lst[2:4])"
  },
  {
    "id": 42,
    "title": "List Methods: Append & Pop",
    "description": "Start with an empty list. Append `n` inputs to it, then pop the last element and print the list. Input: first line `n`, second line `n` numbers.",
    "testCases": [
      { "input": "3\n1 2 3", "output": "[1, 2]", "hidden": false },
      { "input": "1\n5", "output": "[]", "hidden": false }
    ],
    "solution": "n = int(input())\nnums = list(map(int, input().split()))\nres = []\nfor i in nums:\n    res.append(i)\nres.pop()\nprint(res)"
  },
  {
    "id": 43,
    "title": "List Comprehension: Squares",
    "description": "Use list comprehension to create a list of squares for all even numbers in the input string. Input is space-separated integers.",
    "testCases": [
      { "input": "1 2 3 4 5", "output": "[4, 16]", "hidden": false },
      { "input": "1 3 5", "output": "[]", "hidden": false },
      { "input": "-2 -4", "output": "[4, 16]", "hidden": true }
    ],
    "solution": "nums = map(int, input().split())\nprint([x**2 for x in nums if x % 2 == 0])"
  },
  {
    "id": 44,
    "title": "Tuple Immutability Check",
    "description": "Convert input list to a tuple. Try to access index 1. Print the element at index 1. Input is space-separated words.",
    "testCases": [
      { "input": "apple banana cherry", "output": "banana", "hidden": false },
      { "input": "one two", "output": "two", "hidden": false }
    ],
    "solution": "t = tuple(input().split())\nprint(t[1])"
  },
  {
    "id": 45,
    "title": "Tuple Unpacking",
    "description": "Given 3 space-separated inputs, store them in a tuple, then unpack them into variables a, b, c and print `c b a`.",
    "testCases": [
      { "input": "1 2 3", "output": "3 2 1", "hidden": false },
      { "input": "x y z", "output": "z y x", "hidden": false }
    ],
    "solution": "data = tuple(input().split())\na, b, c = data\nprint(c, b, a)"
  },
  {
    "id": 46,
    "title": "Set Union",
    "description": "Find the union of two sets of numbers. Input: two lines of space-separated integers. Output: sorted list of unique elements.",
    "testCases": [
      { "input": "1 2 3\n3 4 5", "output": "1 2 3 4 5", "hidden": false },
      { "input": "1 1\n1", "output": "1", "hidden": false }
    ],
    "solution": "s1 = set(map(int, input().split()))\ns2 = set(map(int, input().split()))\nprint(*sorted(s1 | s2))"
  },
  {
    "id": 47,
    "title": "Set Intersection",
    "description": "Find common elements between two lists using sets. Input: two lines of numbers. Output: sorted common elements.",
    "testCases": [
      { "input": "1 2 3 4\n3 4 5 6", "output": "3 4", "hidden": false },
      { "input": "1 2\n3 4", "output": "", "hidden": false }
    ],
    "solution": "s1 = set(map(int, input().split()))\ns2 = set(map(int, input().split()))\nprint(*sorted(s1 & s2))"
  },
  {
    "id": 48,
    "title": "Set Difference",
    "description": "Print elements present in the first list but not the second. Input: two lines of numbers. Output: sorted result.",
    "testCases": [
      { "input": "1 2 3 4\n3 4", "output": "1 2", "hidden": false },
      { "input": "5 6\n1 2", "output": "5 6", "hidden": true }
    ],
    "solution": "s1 = set(map(int, input().split()))\ns2 = set(map(int, input().split()))\nprint(*sorted(s1 - s2))"
  },
  {
    "id": 49,
    "title": "Dictionary Creation",
    "description": "Create a dictionary from a string of 'key:value' pairs separated by spaces. Print the value for a specific key query. Input Line 1: Pairs, Line 2: Query Key.",
    "testCases": [
      { "input": "a:1 b:2 c:3\nb", "output": "2", "hidden": false },
      { "input": "name:John age:30\nname", "output": "John", "hidden": false },
      { "input": "x:100 y:200\nz", "output": "Not Found", "hidden": true }
    ],
    "solution": "pairs = input().split()\nd = {p.split(':')[0]: p.split(':')[1] for p in pairs}\nquery = input()\nprint(d.get(query, 'Not Found'))"
  },
  {
    "id": 50,
    "title": "Dictionary Word Count",
    "description": "Count the frequency of each word in a string. Print words and counts sorted alphabetically by word. Input is a sentence.",
    "testCases": [
      { "input": "apple banana apple", "output": "apple: 2\nbanana: 1", "hidden": false },
      { "input": "hi hi hi", "output": "hi: 3", "hidden": false }
    ],
    "solution": "words = input().split()\nd = {}\nfor w in words:\n    d[w] = d.get(w, 0) + 1\nfor k in sorted(d):\n    print(f'{k}: {d[k]}')"
  },
  {
    "id": 51,
    "title": "Nested Dictionary Access",
    "description": "Given a predefined nested dictionary `data = {'users': {'admin': {'access': 'full'}}}`, write a function to safely get the access level of a user. Input: username.",
    "testCases": [
      { "input": "admin", "output": "full", "hidden": false },
      { "input": "guest", "output": "None", "hidden": false }
    ],
    "solution": "data = {'users': {'admin': {'access': 'full'}}}\nuser = input()\nprint(data['users'].get(user, {}).get('access', 'None'))"
  },
  {
    "id": 52,
    "title": "Invert Dictionary",
    "description": "Create a dictionary from 'key:value' inputs where values are integers. Invert it so values become keys. (Assume unique values). Input: 'a:1 b:2'. Output: sorted keys of inverted dict.",
    "testCases": [
      { "input": "a:1 b:2 c:3", "output": "1 2 3", "hidden": false },
      { "input": "x:10", "output": "10", "hidden": false }
    ],
    "solution": "pairs = input().split()\nd = {p.split(':')[0]: int(p.split(':')[1]) for p in pairs}\ninv = {v: k for k, v in d.items()}\nprint(*sorted(inv.keys()))"
  },
  {
    "id": 53,
    "title": "Reduce Product",
    "description": "Use `functools.reduce` to calculate the product of a list of numbers. Input: space-separated integers.",
    "testCases": [
      { "input": "1 2 3 4", "output": "24", "hidden": false },
      { "input": "5 5", "output": "25", "hidden": false }
    ],
    "solution": "from functools import reduce\nnums = list(map(int, input().split()))\nres = reduce(lambda x, y: x * y, nums)\nprint(res)"
  },
  {
    "id": 54,
    "title": "Choosing Data Structure: Unique Sort",
    "description": "Given a list of numbers with duplicates, print the unique numbers in descending order. Input: space-separated integers.",
    "testCases": [
      { "input": "1 2 2 3 1 4", "output": "4 3 2 1", "hidden": false },
      { "input": "5 5 5", "output": "5", "hidden": false }
    ],
    "solution": "nums = list(map(int, input().split()))\nunique = sorted(list(set(nums)), reverse=True)\nprint(*unique)"
  },
  {
    "id": 55,
    "title": "Recursion: Sum of Digits",
    "description": "Write a recursive function to calculate the sum of digits of a number. Input is a single integer.",
    "testCases": [
      { "input": "123", "output": "6", "hidden": false },
      { "input": "456", "output": "15", "hidden": false },
      { "input": "9", "output": "9", "hidden": true }
    ],
    "solution": "def sum_digits(n):\n    if n == 0:\n        return 0\n    return (n % 10) + sum_digits(n // 10)\n\nprint(sum_digits(int(input())))"
  },
  {
    "id": 56,
    "title": "Dictionary: Group By Length",
    "description": "Group words by their length in a dictionary. Print the list of words for a given length query. Input Line 1: Words, Line 2: Length Query.",
    "testCases": [
      { "input": "cat dog apple pear\n3", "output": "['cat', 'dog']", "hidden": false },
      { "input": "hello world\n5", "output": "['hello', 'world']", "hidden": false },
      { "input": "a bb ccc\n4", "output": "None", "hidden": true }
    ],
    "solution": "words = input().split()\nlength = int(input())\nd = {}\nfor w in words:\n    l = len(w)\n    if l not in d: d[l] = []\n    d[l].append(w)\nprint(d.get(length, 'None'))"
  },
  {
    "id": 57,
    "title": "Lambda Sorting",
    "description": "Sort a list of tuples based on the second element using lambda. Input format: 'a 1, b 3, c 2'. Output: keys sorted by value.",
    "testCases": [
      { "input": "a 1, b 3, c 2", "output": "a c b", "hidden": false },
      { "input": "john 20, doe 10", "output": "doe john", "hidden": false }
    ],
    "solution": "raw = input().split(', ')\ndata = [(x.split()[0], int(x.split()[1])) for x in raw]\ndata.sort(key=lambda x: x[1])\nprint(*[x[0] for x in data])"
  },
  {
    "id": 58,
    "title": "Function: Multiple Returns",
    "description": "Write a function that returns both the minimum and maximum of a list. Input: space-separated integers. Output: 'Min: X, Max: Y'.",
    "testCases": [
      { "input": "1 2 3 4 5", "output": "Min: 1, Max: 5", "hidden": false },
      { "input": "10 -10 0", "output": "Min: -10, Max: 10", "hidden": false }
    ],
    "solution": "def get_min_max(nums):\n    return min(nums), max(nums)\n\nlst = list(map(int, input().split()))\nmn, mx = get_min_max(lst)\nprint(f'Min: {mn}, Max: {mx}')"
  },
  {
    "id": 59,
    "title": "List Rotation",
    "description": "Rotate a list to the left by `k` steps using slicing. Input Line 1: List numbers, Line 2: k.",
    "testCases": [
      { "input": "1 2 3 4 5\n2", "output": "3 4 5 1 2", "hidden": false },
      { "input": "10 20\n1", "output": "20 10", "hidden": false }
    ],
    "solution": "lst = input().split()\nk = int(input()) % len(lst)\nres = lst[k:] + lst[:k]\nprint(*res)"
  },
  {
    "id": 60,
    "title": "Anagram Check (Structure Choice)",
    "description": "Check if two words are anagrams (contain same letters) by choosing the right data structure (Sorting or Dict). Input: two words separated by space. Output: True/False.",
    "testCases": [
      { "input": "listen silent", "output": "True", "hidden": false },
      { "input": "hello world", "output": "False", "hidden": false },
      { "input": "rat tar", "output": "True", "hidden": true }
    ],
    "solution": "w1, w2 = input().split()\nprint(sorted(w1) == sorted(w2))"
  },
  {
    "id": 61,
    "title": "String Character Access",
    "description": "Given a string, print its first and last character using indexing[cite: 18, 20]. Input: a single word. Output: two characters separated by a space.",
    "testCases": [
      { "input": "Python", "output": "P n", "hidden": false },
      { "input": "Hello", "output": "H o", "hidden": false },
      { "input": "A", "output": "A A", "hidden": true },
      { "input": "12345", "output": "1 5", "hidden": true }
    ],
    "solution": "s = input().strip()\nprint(f\"{s[0]} {s[-1]}\")"
  },
  {
    "id": 62,
    "title": "Reverse Slicing",
    "description": "Reverse a given string using the slicing technique [start:end:step][cite: 24, 27, 29].",
    "testCases": [
      { "input": "OpenAI", "output": "IAnepO", "hidden": false },
      { "input": "racecar", "output": "racecar", "hidden": false },
      { "input": "12345", "output": "54321", "hidden": true },
      { "input": "a b c", "output": "c b a", "hidden": true }
    ],
    "solution": "print(input().strip()[::-1])"
  },
  {
    "id": 63,
    "title": "Safe Integer Conversion",
    "description": "Try to convert a user input to an integer. If it fails due to a ValueError, print 'Invalid'; otherwise, print the number[cite: 136, 150].",
    "testCases": [
      { "input": "100", "output": "100", "hidden": false },
      { "input": "abc", "output": "Invalid", "hidden": false },
      { "input": "12.5", "output": "Invalid", "hidden": true },
      { "input": "-50", "output": "-50", "hidden": true }
    ],
    "solution": "try:\n    print(int(input()))\nexcept ValueError:\n    print('Invalid')"
  },
  {
    "id": 64,
    "title": "Email Case Normalizer",
    "description": "Convert a given email string to all lowercase and remove any leading/trailing whitespace using lower() and strip()[cite: 34, 36, 38].",
    "testCases": [
      { "input": "  User@Example.COM  ", "output": "user@example.com", "hidden": false },
      { "input": "ADMIN@mail.in", "output": "admin@mail.in", "hidden": false },
      { "input": "  test  ", "output": "test", "hidden": true },
      { "input": "UPPER", "output": "upper", "hidden": true }
    ],
    "solution": "print(input().strip().lower())"
  },
  {
    "id": 65,
    "title": "Zero Division Shield",
    "description": "Take two numbers a and b. Print a/b. Catch ZeroDivisionError and print 'Cannot divide'[cite: 149, 152].",
    "testCases": [
      { "input": "10 0", "output": "Cannot divide", "hidden": false },
      { "input": "10 2", "output": "5.0", "hidden": false },
      { "input": "0 5", "output": "0.0", "hidden": true },
      { "input": "-6 2", "output": "-3.0", "hidden": true }
    ],
    "solution": "try:\n    a, b = map(int, input().split())\n    print(a/b)\nexcept ZeroDivisionError:\n    print('Cannot divide')"
  },
  {
    "id": 66,
    "title": "Word Extractor",
    "description": "Extract a substring from index 1 to 4 (index 4 excluded) from a given string[cite: 26, 31].",
    "testCases": [
      { "input": "Programming", "output": "rog", "hidden": false },
      { "input": "Python", "output": "yth", "hidden": false },
      { "input": "ABCD", "output": "BCD", "hidden": true },
      { "input": "123456", "output": "234", "hidden": true }
    ],
    "solution": "print(input().strip()[1:4])"
  },
  {
    "id": 67,
    "title": "Digit Validator",
    "description": "Check if the input string consists only of digits using isdigit()[cite: 48, 50]. Output True or False.",
    "testCases": [
      { "input": "2026", "output": "True", "hidden": false },
      { "input": "Python3", "output": "False", "hidden": false },
      { "input": "12 34", "output": "False", "hidden": true },
      { "input": "000", "output": "True", "hidden": true }
    ],
    "solution": "print(input().strip().isdigit())"
  },
  {
    "id": 68,
    "title": "f-String Greeting",
    "description": "Given a name and age, use an f-string to output: 'My name is [name] and I am [age] years old'[cite: 63, 64].",
    "testCases": [
      { "input": "Alice 21", "output": "My name is Alice and I am 21 years old", "hidden": false },
      { "input": "Bob 30", "output": "My name is Bob and I am 30 years old", "hidden": false },
      { "input": "Sam 5", "output": "My name is Sam and I am 5 years old", "hidden": true }
    ],
    "solution": "n, a = input().split()\nprint(f\"My name is {n} and I am {a} years old\")"
  },
  {
    "id": 69,
    "title": "The finally Cleanup",
    "description": "Simulate a process where 'Processing' is printed in the try block, and 'Finished' is always printed in the finally block[cite: 142, 143, 145].",
    "testCases": [
      { "input": "test", "output": "Processing\nFinished", "hidden": false },
      { "input": "123", "output": "Processing\nFinished", "hidden": true }
    ],
    "solution": "try:\n    print('Processing')\nfinally:\n    print('Finished')"
  },
  {
    "id": 70,
    "title": "Negative Step Slice",
    "description": "Print every second character of a string in reverse order using slicing[cite: 27, 29].",
    "testCases": [
      { "input": "Python", "output": "nhy", "hidden": false },
      { "input": "123456", "output": "642", "hidden": false },
      { "input": "ABCDE", "output": "ECA", "hidden": true },
      { "input": "hi", "output": "i", "hidden": true }
    ],
    "solution": "print(input().strip()[::-2])"
  },
  {
    "id": 71,
    "title": "Custom Age Validator",
    "description": "Input an age. If age < 18, raise a ValueError with the message 'Minor'. Catch it and print the message[cite: 157, 159].",
    "testCases": [
      { "input": "15", "output": "Minor", "hidden": false },
      { "input": "20", "output": "20", "hidden": false },
      { "input": "18", "output": "18", "hidden": true },
      { "input": "5", "output": "Minor", "hidden": true }
    ],
    "solution": "try:\n    a = int(input())\n    if a < 18: raise ValueError('Minor')\n    print(a)\nexcept ValueError as e:\n    print(e)"
  },
  {
    "id": 72,
    "title": "String Replacement",
    "description": "Replace all occurrences of 'bad' with 'good' in a sentence using replace()[cite: 41, 45].",
    "testCases": [
      { "input": "bad day bad luck", "output": "good day good luck", "hidden": false },
      { "input": "it is not bad", "output": "it is not good", "hidden": false },
      { "input": "badbad", "output": "goodgood", "hidden": true },
      { "input": "hello", "output": "hello", "hidden": true }
    ],
    "solution": "print(input().replace('bad', 'good'))"
  },
  {
    "id": 73,
    "title": "Multiple Exception Handling",
    "description": "Catch IndexError or ValueError. List is [10, 20, 30][cite: 132, 134].",
    "testCases": [
      { "input": "5", "output": "Out of range", "hidden": false },
      { "input": "x", "output": "Invalid input", "hidden": false },
      { "input": "1", "output": "20", "hidden": true },
      { "input": "-1", "output": "30", "hidden": true }
    ],
    "solution": "try:\n    idx = int(input())\n    print([10, 20, 30][idx])\nexcept IndexError:\n    print('Out of range')\nexcept ValueError:\n    print('Invalid input')"
  },
  {
    "id": 74,
    "title": "Vowel Counter",
    "description": "Count how many vowels (a, e, i, o, u) are in a string[cite: 32, 38].",
    "testCases": [
      { "input": "Icecream", "output": "4", "hidden": false },
      { "input": "Python", "output": "1", "hidden": false },
      { "input": "AEIOU", "output": "5", "hidden": true },
      { "input": "bcdfg", "output": "0", "hidden": true }
    ],
    "solution": "s = input().lower()\nprint(sum(1 for char in s if char in 'aeiou'))"
  },
  {
    "id": 75,
    "title": "The format() Placeholder",
    "description": "Use the .format() method to insert a price: 'Total: {}.00 dollars'[cite: 65, 68, 69].",
    "testCases": [
      { "input": "50", "output": "Total: 50.00 dollars", "hidden": false },
      { "input": "100", "output": "Total: 100.00 dollars", "hidden": false },
      { "input": "5", "output": "Total: 5.00 dollars", "hidden": true }
    ],
    "solution": "print(\"Total: {}.00 dollars\".format(input()))"
  },
  {
    "id": 76,
    "title": "Check Alphanumeric",
    "description": "Verify if a string contains only letters and numbers using isalnum()[cite: 52].",
    "testCases": [
      { "input": "Python3", "output": "True", "hidden": false },
      { "input": "Python 3!", "output": "False", "hidden": false },
      { "input": "123", "output": "True", "hidden": true },
      { "input": "abc@", "output": "False", "hidden": true }
    ],
    "solution": "print(input().strip().isalnum())"
  },
  {
    "id": 77,
    "title": "Raise for Negative",
    "description": "Raise a ValueError if input < 0. Catch and print 'No Negatives'[cite: 157, 159].",
    "testCases": [
      { "input": "-5", "output": "No Negatives", "hidden": false },
      { "input": "10", "output": "10", "hidden": false },
      { "input": "0", "output": "0", "hidden": true },
      { "input": "-1", "output": "No Negatives", "hidden": true }
    ],
    "solution": "try:\n    val = int(input())\n    if val < 0: raise ValueError('No Negatives')\n    print(val)\nexcept ValueError as e: print(e)"
  },
  {
    "id": 78,
    "title": "Sentence Splitter",
    "description": "Split a sentence by spaces and print the list[cite: 43, 45].",
    "testCases": [
      { "input": "Python is fun", "output": "['Python', 'is', 'fun']", "hidden": false },
      { "input": "A B C", "output": "['A', 'B', 'C']", "hidden": false },
      { "input": "One", "output": "['One']", "hidden": true }
    ],
    "solution": "print(input().split())"
  },
  {
    "id": 79,
    "title": "String Uppercase Toggle",
    "description": "Convert input to uppercase if it starts with 'p'[cite: 35, 38].",
    "testCases": [
      { "input": "python", "output": "PYTHON", "hidden": false },
      { "input": "Java", "output": "java", "hidden": false },
      { "input": "PHP", "output": "PHP", "hidden": true },
      { "input": "c++", "output": "c++", "hidden": true }
    ],
    "solution": "s = input()\nprint(s.upper() if s.lower().startswith('p') else s.lower())"
  },
  {
    "id": 80,
    "title": "Exception Else Clause",
    "description": "Use the 'else' block to print 'Success' if no error occurs during integer conversion[cite: 137, 139, 140].",
    "testCases": [
      { "input": "10", "output": "Success", "hidden": false },
      { "input": "abc", "output": "Error", "hidden": false },
      { "input": "5.5", "output": "Error", "hidden": true },
      { "input": "-1", "output": "Success", "hidden": true }
    ],
    "solution": "try:\n    int(input())\nexcept ValueError:\n    print('Error')\nelse:\n    print('Success')"
  },
  {
    "id": 81,
    "title": "Multi-line String Simulation",
    "description": "Calculate the length of the provided string[cite: 15, 17].",
    "testCases": [
      { "input": "Hello", "output": "5", "hidden": false },
      { "input": "Python Prog", "output": "11", "hidden": false },
      { "input": " ", "output": "1", "hidden": true }
    ],
    "solution": "print(len(input()))"
  },
  {
    "id": 82,
    "title": "Index of Character",
    "description": "Find the index of the first 'a'. If not found, print -1[cite: 18, 21].",
    "testCases": [
      { "input": "Banana", "output": "1", "hidden": false },
      { "input": "Sky", "output": "-1", "hidden": false },
      { "input": "apple", "output": "0", "hidden": true },
      { "input": "data", "output": "1", "hidden": true }
    ],
    "solution": "print(input().find('a'))"
  },
  {
    "id": 83,
    "title": "Type Error Protection",
    "description": "Try adding a string and an integer. Catch TypeError and print 'Type Mismatch'[cite: 151].",
    "testCases": [
      { "input": "Age 25", "output": "Type Mismatch", "hidden": false },
      { "input": "10 20", "output": "Type Mismatch", "hidden": true }
    ],
    "solution": "try:\n    s, i = input().split()\n    res = s + int(i)\nexcept TypeError:\n    print('Type Mismatch')"
  },
  {
    "id": 84,
    "title": "Palindrome String",
    "description": "Check if a string is a palindrome[cite: 24, 29].",
    "testCases": [
      { "input": "madam", "output": "True", "hidden": false },
      { "input": "Python", "output": "False", "hidden": false },
      { "input": "121", "output": "True", "hidden": true },
      { "input": "Abba", "output": "False", "hidden": true }
    ],
    "solution": "s = input().strip()\nprint(s == s[::-1])"
  },
  {
    "id": 85,
    "title": "Strip and Replace",
    "description": "Remove trailing spaces and replace internal spaces with hyphens[cite: 36, 41].",
    "testCases": [
      { "input": "  Hello World  ", "output": "Hello-World", "hidden": false },
      { "input": "Code Sphere", "output": "Code-Sphere", "hidden": false },
      { "input": " a b ", "output": "a-b", "hidden": true }
    ],
    "solution": "print(input().strip().replace(' ', '-'))"
  },
  {
    "id": 86,
    "title": "Negative Indexing Last 3",
    "description": "Extract the last three characters using negative indexing[cite: 22, 23].",
    "testCases": [
      { "input": "Pythonic", "output": "nic", "hidden": false },
      { "input": "Coding", "output": "ing", "hidden": false },
      { "input": "12345", "output": "345", "hidden": true },
      { "input": "abc", "output": "abc", "hidden": true }
    ],
    "solution": "print(input().strip()[-3:])"
  },
  {
    "id": 87,
    "title": "Custom Exception Class",
    "description": "Inherit from Exception class and raise it[cite: 153, 155, 156].",
    "testCases": [
      { "input": "trigger", "output": "Caught", "hidden": false }
    ],
    "solution": "class MyError(Exception): pass\ntry: raise MyError()\nexcept MyError: print('Caught')"
  },
  {
    "id": 88,
    "title": "String to List of Ints",
    "description": "Convert space-separated digits to a list of integers. Catch ValueError[cite: 43, 150].",
    "testCases": [
      { "input": "1 2 3", "output": "[1, 2, 3]", "hidden": false },
      { "input": "1 a 3", "output": "Error", "hidden": false },
      { "input": "10 20", "output": "[10, 20]", "hidden": true },
      { "input": " ", "output": "[]", "hidden": true }
    ],
    "solution": "try:\n    print([int(x) for x in input().split()])\nexcept ValueError:\n    print('Error')"
  },
  {
    "id": 89,
    "title": "f-String Precision",
    "description": "Format a float to 2 decimal places[cite: 60, 63].",
    "testCases": [
      { "input": "3.14159", "output": "3.14", "hidden": false },
      { "input": "2.5", "output": "2.50", "hidden": false },
      { "input": "10", "output": "10.00", "hidden": true }
    ],
    "solution": "print(f\"{float(input()):.2f}\")"
  },
  {
    "id": 90,
    "title": "Title Case Conversion",
    "description": "Convert string to Title Case (capitalize first letter of each word)[cite: 32, 38].",
    "testCases": [
      { "input": "python is fun", "output": "Python Is Fun", "hidden": false },
      { "input": "HELLO WORLD", "output": "Hello World", "hidden": false },
      { "input": "a b c", "output": "A B C", "hidden": true }
    ],
    "solution": "print(input().title())"
  }
];
