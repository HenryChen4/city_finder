# city_finder
Finding 5 closest cities to an epicenter point by using an original first search algorithm

trying a new approach to limit the number of http requests to reduce errors and increase performance.

The center node is the only known item. for example at [0,0]. the checkNeighbors function will run first and check all unmarked coordinates north, south, east, and west 
in 0.25 long lat increments (14-15 miles). New coords will be marked and the the algorithm will run again. This will continue for a set radius of lets say 2 long lat
increments (120 miles). After, we just count the number of http requests and calculate the shortest path. Kinda lackluster but should run at an ok speed.

Kinda like a slime mold growing.
