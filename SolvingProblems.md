# Solving Problems

[Start](README.md) | [Next Up: Analyzing Solutions](AnalyzingSolutions.md) 



> Solving problems uses a similar set of techniques for moving from understanding the problem to articulating and testing a solution.

There are similar steps each time, below we explore the basic steps, what to do when you get stuck and then a nice little pneumonic to help remember.  

## Basic Steps

1. **Understand the problem**
   1. Articulate a inputs and output simulation
   2. State any assumptions
   3. Test/Validate assumption if possible
2. **Start with a simple example**
   1. Demonstrate a *methodical* approach to unpacking the problem/solution
   2. Demonstrate a *logical* thought process 
3. **Explore the algorithms and data structures to solve the problem**
   1. This may require more examples to explore
   2. Think about things like pre-sorting vs. taking actions as iterating
   3. Consider if steps are being repeated or brute-forced unnecessarily
   4. Think measure twice, cut once - no need to jump into code too soon, unless trying to validate a thought-process
4. **Articulate your solution - playing it back may reveal gaps**
   1. Helps to double check your approach can be done eg. data structure can do that
   2. Validate the cost of each step.
5. **Check facts - either ask questions or verbalize**
   1. Playing back what you assume is factual - or even just ask the question out loud
   2. Be sure to check you have really solved the problem
6. **Trace through the solution and verify**
   1. Check the code works for at least 1 case, possibly the happy path
   2. Next explore other common cases
   3. test
7. **Check for all kinds errors, special cases and boundary conditions**
   1. Try to think of all kinds of possible errors
   2. Consider -1, 0, 1, 2 and many cases
   3. Explore edges of the data structure, time and memory conditions

## When you get stuck

1. **Go back and walk through the outcome**
   1. Take things step by step and see where things go wrong
   2. Start by matching the specific outcomes and then try to be more general
   3. Consider a different data structure
   4. Consider alternative looping/map/reduce/iteration features of the language

## REACTO

Borrowed from [Full Stack Academy]([Whiteboard Coding Interviews: A 6 Step Process to… | Fullstack Academy](https://www.fullstackacademy.com/blog/whiteboard-coding-interviews-a-6-step-process-to-solve-any-problem))

* Repeat - repeat the question and paraphrase to make sure you get
* Examples - write out some examples, inputs/outputs possibly a table
* Approach - describe options eg. brute force, recursive and data structures
* Code - breadth first, decompose into parts, leave room between each line
* Test - trace solution and verify, consider kind of errors, -1,0,1,2+/many edges
* Optimize - consider the time and space complexity, are there embedded loops, recursive callbacks - can you pre-compute. Are 2 data-structures needed...

[Start](README.md) | [Next Up: Analyzing Solutions](AnalyzingSolutions.md)


