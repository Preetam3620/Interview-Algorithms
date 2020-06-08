# Interview-Algorithms

Interview-Algorithms is a set of javascript solutions asked in coding interviews and also provides test for the solutions.

## Algorithms

An algorithm is an unambiguous specification of how to solve a class of problems. It is a set of rules that precisely define a sequence of operations.

-   [`anagrams`](algorithms/anagrams/index.js) : Check to see if two provided strings are anagrams of each other.
-   [`arrayChunk`](algorithms/arrayChunk/index.js) : Given an array and chunk size, divide the array into many subarrays.
-   [`capitalize`](algorithms/capitalize/index.js) : Capitalize the first letter of each word in the string.
-   [`circular`](algorithms/circular/index.js) : Check to see if provided linked list is circular or not.
-   [`countlen`](algorithms/countlen/index.js) : Count the length of the string.
-   [`fibonacci`](algorithms/fibonacci/index.js) : Print the n-th entry of the fibonacci number.
-   [`fizzbuzz`](algorithms/fizzbuzz/index.js) : Check if a number is fizz, buzz or fizzbuzz.
-   [`fromlast`](algorithms/fromlast/index.js) : Find the node that is n spaces from the last node.
-   [`levelwidth`](algorithms/levelwidth/index.js): Return an array with the width of the tree at each level.
-   [`maxchar`](algorithms/maxchar/index.js) : Find the most occuring character in the string.
-   [`midpoint`](algorithms/midpoint/index.js) : Find the midpoint of a linked list.
-   [`palindrome`](algorithms/palindrome/index.js) : Find if the string is palindrome or not.
-   [`pyramid`](algorithms/pyramid/index.js) : Print pyramid of level n.
-   [`qfroms`](algorithms/qfroms/index.js) : Queue data structure using two stacks
-   [`recursion101`](algorithms/recursion101/index.js) : Basics of recursion.
-   [`reverseInteger`](algorithms/reverseInteger/index.js) : Reverse the given integer.
-   [`reversestring`](algorithms/reversestring/index.js) : Reverse the given string.
-   [`spiralmatrix`](algorithms/spiralmatrix/index.js) : Return n \* n spiral matrix.
-   [`steps`](algorithms/steps/index.js) : Print steps of n level.
-   [`validate`](algorithms/validate/index.js) : Validate the given binary search tree
-   [`vowels`](algorithms/vowels/index.js) : Return the number of vowels from given string.
-   [`weave`](algorithms/weave/index.js) : Merge the contents of two queues alternatively.

## Data Structures

A data structure is a particular way of organizing data in a computer so that it can be used effectively.

-   [Queue](data-structures/queue/index.js)
-   [Stack](data-structures/stack/index.js)
-   [Linked List](data-structures/linkedlist/index.js)
-   [Tree](data-structures/tree/index.js)
-   [Binary Search Tree](data-structures/bst/index.js)

## How to use this repository

**Use the npm to install the dependencies.**

```bash
npm install -g jest
```

**Run tests by name**

Solution folders in the project contains `index.js` which contains solution code for the problem and `test.js` which test the solution.

To test the folder `arrayChunk`,

```bash
cd algorithms/
jest arrayChunck/ --watch
```

## Contributions

Pull requests are welcome.
