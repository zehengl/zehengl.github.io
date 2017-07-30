---
layout: post
title:  "Dynamic Programming Examples"
date:   2016-05-12
author: Zeheng Li
---

In this post I will use two simple examples from LeetCode to illustrate the idea of Dynamic Programming.

### Dynamic Programming

The idea of *Dynamic Programming* is to solve a problem by resolving its sub-problems **over and over**.

Let's use Fibonacci sequence (0, 1, 1, 2, 3, 5, 8, 13, ...) as an example. We know that F(n) = F(n-1) + F(n-2).

In other words, to solve F(n) we need the value of F(n-1) and F(n-2), which leads to finding F(n-2), F(n-3), F(n-4), F(n-5), over and over.

When it comes to F(0) and F(1), we have F(0)=0 and F(1)=1.

Hence, we can cast the problem into a "table fulfilling" tasks (memorizing the optimal values of sub-problems.)

Let's solve the Fibonacci number problem when n = 6.

I first initialize a array (1x7 table).

| n    | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|:----:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| F(n) | 0 | 1 |   |   |   |   |   |

<br> Then compute n = 2

| n    | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|:----:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| F(n) | 0 | 1 | 1 |   |   |   |   |

<br> Then compute n = 3

| n    | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|:----:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| F(n) | 0 | 1 | 1 | 2 |   |   |   |

<br> **...**

<br> Then compute n = 6

| n    | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|:----:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| F(n) | 0 | 1 | 1 | 2 | 3 | 5 | 8 |

### The problems

The Fibonacci number problem may be too simple. Let's take a look at two exmaples from [LeetCode](https://leetcode.com/).

**1. [House Robber](https://leetcode.com/problems/house-robber/) (LeetCode 198)**: *Houses in a row*

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

**2. [House Robber II](https://leetcode.com/problems/house-robber-ii/) (LeetCode 213)**: *Houses in a circle*

After robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention. This time, all houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the same as for those in the previous street.
Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

### Solution

Let's use [1, 2, 5, 3, 9, 3, 2] as an example to represent the values (always greater than 0) of the houses.

**Situation 1: Houses in a row**

G(n) denotes the optimal gain after robbing house **n**.

First I initialize the table as follows.

  - G(0) means no gain if there's no house to rob.
  - G(1) means always robbing the house if there's only one.

  |   n  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
  |:----:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
  | V(n) | 0 | 1 | 2 | 5 | 3 | 9 | 3 | 2 |
  | G(n) | 0 | 1 |   |   |   |   |   |   |


<br> Therefore, after robbing the n *th* house, the optimal gain is to choose the following:

1. robbing the n-2 *th* house and the current house
2. robbing the n-1 *th* house and but not the current house

Or using the notation: G(n) = max( G(n-1), G(n-2)+V(n) )

<br> Then compute n = 2

|   n  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|:----:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| V(n) | 0 | 1 | 2 | 5 | 3 | 9 | 3 | 2 |
| G(n) | 0 | 1 | 2 |   |   |   |   |   |

<br> Then compute n = 3

|   n  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|:----:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| V(n) | 0 | 1 | 2 | 5 | 3 | 9 | 3 | 2 |
| G(n) | 0 | 1 | 2 | 6 |   |   |   |   |

<br> Then compute n = 4

|   n  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|:----:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| V(n) | 0 | 1 | 2 | 5 | 3 | 9 | 3 | 2 |
| G(n) | 0 | 1 | 2 | 6 | 6 |   |   |   |

<br> Then compute n = 5

|   n  | 0 | 1 | 2 | 3 | 4 |  5 | 6 | 7 |
|:----:|:-:|:-:|:-:|:-:|:-:|:--:|:-:|:-:|
| V(n) | 0 | 1 | 2 | 5 | 3 |  9 | 3 | 2 |
| G(n) | 0 | 1 | 2 | 6 | 6 | 15 |   |   |

<br> Then compute n = 6

|   n  | 0 | 1 | 2 | 3 | 4 |  5 | 6 | 7 |
|:----:|:-:|:-:|:-:|:-:|:-:|:--:|:-:|:-:|
| V(n) | 0 | 1 | 2 | 5 | 3 |  9 | 3 | 2 |
| G(n) | 0 | 1 | 2 | 6 | 6 | 15 |   |   |

<br> Then compute n = 7

|   n  | 0 | 1 | 2 | 3 | 4 |  5 |  6 |  7 |
|:----:|:-:|:-:|:-:|:-:|:-:|:--:|:--:|:--:|
| V(n) | 0 | 1 | 2 | 5 | 3 |  9 |  3 |  2 |
| G(n) | 0 | 1 | 2 | 6 | 6 | 15 | 15 | 17 |

<br>

**Situation 2: Houses in a circle**

This is a variation of Situation 1. Let's think this way.

1. if we begin robbing from the first house, we can not rob the last one since it's next to the first one
2. if we want to rob the last house, we can begin robbing from the second one so that alarm will not be triggered

whichever way from the above gives the larger gain, the robber follows

Therefore we can reuse the codes from ***Situation 1***.

### Implementation

<script src="https://gist.github.com/zehengl/b8594073d1119ceb829896d84fdde2db.js"></script>

Both submissions are <strong style="color:green;">Accepted</strong>
