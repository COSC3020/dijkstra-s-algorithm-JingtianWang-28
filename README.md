# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

///

In the first for loop, each node needs to be traversed once, including V nodes

In while (visited.size < Object.keys(graph).length), the number of loop runs is proportional to the number of nodes, and each node needs to be marked as visited after processing

for (let node in distances) traverses all nodes and processes unvisited nodes.

The time complexity of each search is O(V), the outer loop is O(V), and the total time complexity of this part is O(V^2)

for (let neighbor in graph[currentNode]) traverses all neighbors of the current node, each edge will be processed at most once, and each edge connecting two nodes will be visited once, including E edges

The total time complexity is O(V^2+E)

###
Source:those webs and cosc4760 lecture slide help me wtih the math problem and code logic.

https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
https://www.w3schools.com/dsa/dsa_algo_graphs_dijkstra.php

Plagiarism Statement: “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
