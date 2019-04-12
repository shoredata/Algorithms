# JavaScript Algorithms and Data Structures

This repository contains JavaScript based examples of many
popular algorithms and data structures.

Each algorithm and data structure has its own separate README
with related explanations and links for further reading (including ones
to YouTube videos).


## Data Structures

A data structure is a particular way of organizing and storing data in a computer so that it can
be accessed and modified efficiently. More precisely, a data structure is a collection of data
values, the relationships among them, and the functions or operations that can be applied to
the data.

`B` - Beginner, `A` - Advanced

DONE:
* `B` [Linked List - js](js/LinkedList.js)
* `B` [Queue - js](js/Queue.js)
* `B` [Doubly Linked List - js ](js/DoublyLinkedList.js)

===============================================================================
IN PROGRESS:
* `B` [Stack](js/src/data-structures/stack)

===============================================================================
TODO:
* `B` [Hash Table](js/src/data-structures/hash-table)
* `B` [Heap](js/src/data-structures/heap) - max and min heap versions
* `B` [Priority Queue](js/src/data-structures/priority-queue)
* `A` [Trie](js/src/data-structures/trie)
* `A` [Tree](js/src/data-structures/tree)
  * `A` [Binary Search Tree](js/src/data-structures/tree/binary-search-tree)
  * `A` [AVL Tree](js/src/data-structures/tree/avl-tree)
  * `A` [Red-Black Tree](js/src/data-structures/tree/red-black-tree)
  * `A` [Segment Tree](js/src/data-structures/tree/segment-tree) - with min/max/sum range queries examples
  * `A` [Fenwick Tree](js/src/data-structures/tree/fenwick-tree) (Binary Indexed Tree)
* `A` [Graph](js/src/data-structures/graph) (both directed and undirected)
* `A` [Disjoint Set](js/src/data-structures/disjoint-set)
* `A` [Bloom Filter](js/src/data-structures/bloom-filter)

## Algorithms

An algorithm is an unambiguous specification of how to solve a class of problems. It is
a set of rules that precisely define a sequence of operations.

`B` - Beginner, `A` - Advanced


DONE:

===============================================================================
IN PROGRESS:
* **Integers**
  * `B` [Integer Algorithms](js/integers.js)
  * `B` [Greatest Common Factor](js/greatest_common_factor.js) 
  * `B` [Factorial](js/factorial.js) 
  * `B` [Sum of Squares](js/sum_of_squares.js) 
  * `B` [Tarai Function](js/tarai.js) 
  * `B` [Sigma Function](js/sigma.js) 
  * `B` [Fibonacci Number](js/fibonacci.js) - all versions
* **Strings**
  * `B` [String Permutations](js/string_permutations.js)
  * `B` [String In-Order Subsets](js/string_inorder_subsets.js)
  * `B` [String Algorithms](js/strings.js)
  * `A` [IP Addresses](js/ip_addresses.js) - valid ipv4 addresses from string of integers
  * `A` [Longest Common Substring](js/src/algorithms/string/longest-common-substring)
* **Arrays**
  * `B` [Flood-Fill](js/array_flood_fill.js) 
  * `B` [Array Algorithms](js/arrays.js)
  * `A` [Permutations](js/src/algorithms/sets/permutations) (with and without repetitions)
  * `A` [Combinations](js/src/algorithms/sets/combinations) (with and without repetitions)
  * `A` [Longest Common Subsequence](js/src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Longest Increasing Subsequence](js/src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Shortest Common Supersequence](js/src/algorithms/sets/shortest-common-supersequence) (SCS)
* **Searches**
  * `B` [Binary Search](js/binary-search.js) - search in sorted array
* **Linked Lists**
  * `B` [Straight Traversal](js/src/algorithms/linked-list/traversal)
  * `B` [Reverse Traversal](js/src/algorithms/linked-list/reverse-traversal)
* **Misc**
  * `B` [Tower of Hanoi](js/hanoi.js)

===============================================================================
TODO:

### Algorithms by Topic

* **Math**
  * `B` [Bit Manipulation](js/src/algorithms/math/bits) - set/get/update/clear bits, multiplication/division by two, make negative etc.
  * `B` [Primality Test](js/src/algorithms/math/primality-test) (trial division method)
  * `B` [Euclidean Algorithm](js/src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  * `B` [Least Common Multiple](js/src/algorithms/math/least-common-multiple) (LCM)
  * `B` [Sieve of Eratosthenes](js/src/algorithms/math/sieve-of-eratosthenes) - finding all prime numbers up to any given limit
  * `B` [Is Power of Two](js/src/algorithms/math/is-power-of-two) - check if the number is power of two (naive and bitwise algorithms)
  * `B` [Pascal's Triangle](js/src/algorithms/math/pascal-triangle)
  * `B` [Complex Number](js/src/algorithms/math/complex-number) - complex numbers and basic operations with them
  * `B` [Radian & Degree](js/src/algorithms/math/radian) - radians to degree and backwards conversion
  * `B` [Fast Powering](js/src/algorithms/math/fast-powering)
  * `A` [Integer Partition](js/src/algorithms/math/integer-partition)
  * `A` [Square Root](js/src/algorithms/math/square-root) - Newton's method
  * `A` [Liu Hui π Algorithm](js/src/algorithms/math/liu-hui) - approximate π calculations based on N-gons
  * `A` [Discrete Fourier Transform](js/src/algorithms/math/fourier-transform) - decompose a function of time (a signal) into the frequencies that make it up 
* **Sets**
  * `B` [Cartesian Product](js/src/algorithms/sets/cartesian-product) - product of multiple sets
  * `B` [Fisher–Yates Shuffle](js/src/algorithms/sets/fisher-yates) - random permutation of a finite sequence
  * `A` [Power Set](js/src/algorithms/sets/power-set) - all subsets of a set (bitwise and backtracking solutions)
  * `A` [Knapsack Problem](js/src/algorithms/sets/knapsack-problem) - "0/1" and "Unbound" ones
  * `A` [Maximum Subarray](js/src/algorithms/sets/maximum-subarray) - "Brute Force" and "Dynamic Programming" (Kadane's) versions
  * `A` [Combination Sum](js/src/algorithms/sets/combination-sum) - find all combinations that form specific sum
* **Strings**
  * `B` [Hamming Distance](js/src/algorithms/string/hamming-distance) - number of positions at which the symbols are different
  * `A` [Levenshtein Distance](js/src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * `A` [Knuth–Morris–Pratt Algorithm](js/src/algorithms/string/knuth-morris-pratt) (KMP Algorithm) - substring search (pattern matching)
  * `A` [Z Algorithm](js/src/algorithms/string/z-algorithm) - substring search (pattern matching)
  * `A` [Rabin Karp Algorithm](js/src/algorithms/string/rabin-karp) - substring search
  * `A` [Regular Expression Matching](js/src/algorithms/string/regular-expression-matching)
* **Searches**
  * `B` [Linear Search](js/src/algorithms/search/linear-search)
  * `B` [Jump Search](js/src/algorithms/search/jump-search) (or Block Search) - search in sorted array
  * `B` [Interpolation Search](js/src/algorithms/search/interpolation-search) - search in uniformly distributed sorted array
* **Sorting**
  * `B` [Bubble Sort](js/src/algorithms/sorting/bubble-sort)
  * `B` [Selection Sort](js/src/algorithms/sorting/selection-sort)
  * `B` [Insertion Sort](js/src/algorithms/sorting/insertion-sort)
  * `B` [Heap Sort](js/src/algorithms/sorting/heap-sort)
  * `B` [Merge Sort](js/src/algorithms/sorting/merge-sort)
  * `B` [Quicksort](js/src/algorithms/sorting/quick-sort) - in-place and non-in-place implementations
  * `B` [Shellsort](js/src/algorithms/sorting/shell-sort)
  * `B` [Counting Sort](js/src/algorithms/sorting/counting-sort)
  * `B` [Radix Sort](js/src/algorithms/sorting/radix-sort)
* **Trees**
  * `B` [Depth-First Search](js/src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Breadth-First Search](js/src/algorithms/tree/breadth-first-search) (BFS)
* **Graphs**
  * `B` [Depth-First Search](js/src/algorithms/graph/depth-first-search) (DFS)
  * `B` [Breadth-First Search](js/src/algorithms/graph/breadth-first-search) (BFS)
  * `B` [Kruskal’s Algorithm](js/src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Dijkstra Algorithm](js/src/algorithms/graph/dijkstra) - finding shortest paths to all graph vertices from single vertex
  * `A` [Bellman-Ford Algorithm](js/src/algorithms/graph/bellman-ford) - finding shortest paths to all graph vertices from single vertex
  * `A` [Floyd-Warshall Algorithm](js/src/algorithms/graph/floyd-warshall) - find shortest paths between all pairs of vertices
  * `A` [Detect Cycle](js/src/algorithms/graph/detect-cycle) - for both directed and undirected graphs (DFS and Disjoint Set based versions)
  * `A` [Prim’s Algorithm](js/src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Topological Sorting](js/src/algorithms/graph/topological-sorting) - DFS method
  * `A` [Articulation Points](js/src/algorithms/graph/articulation-points) - Tarjan's algorithm (DFS based)
  * `A` [Bridges](js/src/algorithms/graph/bridges) - DFS based algorithm
  * `A` [Eulerian Path and Eulerian Circuit](js/src/algorithms/graph/eulerian-path) - Fleury's algorithm - Visit every edge exactly once
  * `A` [Hamiltonian Cycle](js/src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * `A` [Strongly Connected Components](js/src/algorithms/graph/strongly-connected-components) - Kosaraju's algorithm
  * `A` [Travelling Salesman Problem](js/src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
* **Cryptography**
  * `B` [Polynomial Hash](js/src/algorithms/cryptography/polynomial-hash) - rolling hash function based on polynomial
* **Uncategorized**
  * `B` [Square Matrix Rotation](js/src/algorithms/uncategorized/square-matrix-rotation) - in-place algorithm
  * `B` [Jump Game](js/src/algorithms/uncategorized/jump-game) - backtracking, dynamic programming (top-down + bottom-up) and greedy examples 
  * `B` [Unique Paths](js/src/algorithms/uncategorized/unique-paths) - backtracking, dynamic programming and Pascal's Triangle based examples 
  * `B` [Rain Terraces](js/src/algorithms/uncategorized/rain-terraces) - trapping rain water problem (dynamic programming and brute force versions)
  * `B` [Recursive Staircase](js/src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top (4 solutions)
  * `A` [N-Queens Problem](js/src/algorithms/uncategorized/n-queens)
  * `A` [Knight's Tour](js/src/algorithms/uncategorized/knight-tour)

### Algorithms by Paradigm

An algorithmic paradigm is a generic method or approach which underlies the design of a class
of algorithms. It is an abstraction higher than the notion of an algorithm, just as an
algorithm is an abstraction higher than a computer program.

* **Brute Force** - look at all the possibilities and selects the best solution
  * `B` [Linear Search](js/src/algorithms/search/linear-search)
  * `B` [Rain Terraces](js/src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  * `B` [Recursive Staircase](js/src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top
  * `A` [Maximum Subarray](js/src/algorithms/sets/maximum-subarray)
  * `A` [Travelling Salesman Problem](js/src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
  * `A` [Discrete Fourier Transform](js/src/algorithms/math/fourier-transform) - decompose a function of time (a signal) into the frequencies that make it up
* **Greedy** - choose the best option at the current time, without any consideration for the future
  * `B` [Jump Game](js/src/algorithms/uncategorized/jump-game)
  * `A` [Unbound Knapsack Problem](js/src/algorithms/sets/knapsack-problem)
  * `A` [Dijkstra Algorithm](js/src/algorithms/graph/dijkstra) - finding shortest path to all graph vertices
  * `A` [Prim’s Algorithm](js/src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Kruskal’s Algorithm](js/src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
* **Divide and Conquer** - divide the problem into smaller parts and then solve those parts
  * `B` [Binary Search](js/binary-search.js)
  * `B` [Tower of Hanoi](js/hanoi.js)

  * `B` [Pascal's Triangle](js/src/algorithms/math/pascal-triangle)
  * `B` [Euclidean Algorithm](js/src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  * `B` [Merge Sort](js/src/algorithms/sorting/merge-sort)
  * `B` [Quicksort](js/src/algorithms/sorting/quick-sort)
  * `B` [Tree Depth-First Search](js/src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Graph Depth-First Search](js/src/algorithms/graph/depth-first-search) (DFS)
  * `B` [Jump Game](js/src/algorithms/uncategorized/jump-game)
  * `B` [Fast Powering](js/src/algorithms/math/fast-powering)
  * `A` [Permutations](js/src/algorithms/sets/permutations) (with and without repetitions)
  * `A` [Combinations](js/src/algorithms/sets/combinations) (with and without repetitions)
* **Dynamic Programming** - build up a solution using previously found sub-solutions
  * `B` [Fibonacci Number](js/src/algorithms/math/fibonacci)
  * `A` [Longest Common Subsequence](js/src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Longest Common Substring](js/src/algorithms/string/longest-common-substring)
  * `A` [Longest Increasing Subsequence](js/src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Shortest Common Supersequence](js/src/algorithms/sets/shortest-common-supersequence)

  * `B` [Jump Game](js/src/algorithms/uncategorized/jump-game)
  * `B` [Unique Paths](js/src/algorithms/uncategorized/unique-paths)
  * `B` [Rain Terraces](js/src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  * `B` [Recursive Staircase](js/src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top
  * `A` [Levenshtein Distance](js/src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * `A` [0/1 Knapsack Problem](js/src/algorithms/sets/knapsack-problem)
  * `A` [Integer Partition](js/src/algorithms/math/integer-partition)
  * `A` [Maximum Subarray](js/src/algorithms/sets/maximum-subarray)
  * `A` [Bellman-Ford Algorithm](js/src/algorithms/graph/bellman-ford) - finding shortest path to all graph vertices
  * `A` [Floyd-Warshall Algorithm](js/src/algorithms/graph/floyd-warshall) - find shortest paths between all pairs of vertices
  * `A` [Regular Expression Matching](js/src/algorithms/string/regular-expression-matching)
* **Backtracking** - similarly to brute force, try to generate all possible solutions, but each time you generate next solution you test
if it satisfies all conditions, and only then continue generating subsequent solutions. Otherwise, backtrack, and go on a
different path of finding a solution. Normally the DFS traversal of state-space is being used.
  * `B` [Jump Game](js/src/algorithms/uncategorized/jump-game)
  * `B` [Unique Paths](js/src/algorithms/uncategorized/unique-paths)
  * `B` [Power Set](js/src/algorithms/sets/power-set) - all subsets of a set
  * `A` [Hamiltonian Cycle](js/src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * `A` [N-Queens Problem](js/src/algorithms/uncategorized/n-queens)
  * `A` [Knight's Tour](js/src/algorithms/uncategorized/knight-tour)
  * `A` [Combination Sum](js/src/algorithms/sets/combination-sum) - find all combinations that form specific sum
* **Branch & Bound** - remember the lowest-cost solution found at each stage of the backtracking
search, and use the cost of the lowest-cost solution found so far as a lower bound on the cost of
a least-cost solution to the problem, in order to discard partial solutions with costs larger than the
lowest-cost solution found so far. Normally BFS traversal in combination with DFS traversal of state-space
tree is being used.


==== NOT IMPLEMENTED ==============================================================================

## How to use this repository 

**Install all dependencies**
```
npm install
```

**Run ESLint**

You may want to run it to check code quality.

```
npm run lint
```

**Run all tests**
```
npm test
```

**Run tests by name**
```
npm test -- 'LinkedList'
```

**Playground**

You may play with data-structures and algorithms in `./src/playground/playground.js` file and write
tests for it in `./src/playground/__test__/playground.test.js`.

Then just simply run the following command to test if your playground code works as expected:

```
npm test -- 'playground'
```

## Useful Information

### References

[▶ Data Structures and Algorithms on YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

[▶ Javascript Repository I am using as Inspiration](https://github.com/trekhleb/javascript-algorithms)

### Big O Notation

*Big O notation* is used to classify algorithms according to how their running time or space requirements grow as the input size grows.
On the chart below you may find most common orders of growth of algorithms specified in Big O notation.

![Big O graphs](./assets/big-o-graph.png)

Source: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Below is the list of some of the most used Big O notations and their performance comparisons against different sizes of the input data.

| Big O Notation | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | 1                            | 1                             | 1                               |
| **O(log N)**   | 3                            | 6                             | 9                               |
| **O(N)**       | 10                           | 100                           | 1000                            |
| **O(N log N)** | 30                           | 600                           | 9000                            |
| **O(N^2)**     | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### Data Structure Operations Complexity

| Data Structure          | Access    | Search    | Insertion | Deletion  | Comments  |
| ----------------------- | :-------: | :-------: | :-------: | :-------: | :-------- |
| **Array**               | 1         | n         | n         | n         |           |
| **Stack**               | n         | n         | 1         | 1         |           |
| **Queue**               | n         | n         | 1         | 1         |           |
| **Linked List**         | n         | n         | 1         | n         |           |
| **Hash Table**          | -         | n         | n         | n         | In case of perfect hash function costs would be O(1) |
| **Binary Search Tree**  | n         | n         | n         | n         | In case of balanced tree costs would be O(log(n)) |
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Red-Black Tree**      | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Bloom Filter**        | -         | 1         | 1         | -         | False positives are possible while searching |

### Array Sorting Algorithms Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Bubble sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Selection sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | No        |           |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | No        |           |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        | Quicksort is usually done in-place with O(log(n)) stack space |
| **Shell sort**        | n&nbsp;log(n)   | depends on gap sequence   | n&nbsp;(log(n))<sup>2</sup>  | 1         | No         |           |
| **Counting sort**     | n + r           | n + r               | n + r               | n + r     | Yes       | r - biggest number in array |
| **Radix sort**        | n * k           | n * k               | n * k               | n + k     | Yes       | k - length of longest key |
