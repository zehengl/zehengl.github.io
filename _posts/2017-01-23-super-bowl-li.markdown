---
title: "Super Bowl LI"
layout: post
date:   2017-01-23
author: Zeheng Li
---

Something about roman numerals, inspired by Super Bowl LI.

# Why

Cheer out for the Partiots and Falcons fans! I am excited about this year's super bowl. Will Tom Brady win his **FIFTHS** or Matt Ryan finish strong for his amazing season?

When I was watching the conference finals on Sunday afternoon, my wife asked "why your name is with super bowl". For a second I was like, with a Nick Young face, "what?". Then I realized she was referring to "SB LI" and replied "that's roman 51".

# Why Cont'd

Answering why NFL uses roman numerals is not the main concern of this post. Clearly roman numerals should be easy to understand in early days but they may get complex later. For example, what does ```XXXVIII``` stand for or what is 39 in roman numeral?

If you can tell within a blink. TL;DR

# Roman Numerals

Let's begin with a chart for roman numerals

| Roman Numeral | Integer |
|:--------------:|:-------:|
| ```I``` | 1 |
| ```V``` | 5 |
| ```X``` | 10 |
| ```L``` | 50 |
| ```C``` | 100 |
| ```D``` | 500 |
| ```M``` | 1000 |

<br>

Alrighty. This makes sense. How about the values in between?

# How to Read

Let's begin with the simple cases.

| Roman Numeral | Integer |
|:--------------:|:-------:|
| ```I``` | 1 |
| ```II``` | 2 |
| ```III``` | 3 |
| ```IV``` | 4 |
| ```V``` | 5 |
| ```VI``` | 6 |
| ```VII``` | 7 |
| ```VIII``` | 8 |
| ```IX``` | 9 |
| ```X``` | 10

<br>

Rules:

1. A roman numeral is written left to right.

2. Values are added left to right if former letter is no smaller than the latter one.

	See ```II``` (2), ```VII``` (7)

3. If the former is smaller, discard the previous added value and subtract the former from then the latter one.

	See ```IV``` (4), ```IX``` (9)

To summarize, we simply keep adding the value of a roman letter till we see a bigger letter. If we encounter a bigger letter, adjust the value by subtracting 2 times of the previous value from the latter.

For example:

| Roman Numeral | Action |
|:--------------:|:-------|
| ```I``` | +1 |
| ```II``` | +1, +1 |
| ```III``` | +1, +1, +1 |
| ```IV``` | +1, +5, -1 x 2 |
| ```V``` | +5 |
| ```VII``` | +5, +1, +1 |
| ```VIII``` | +5, +1, +1, +1 |
| ```IX``` | +1, +10, -1 x 2 |
| ```X``` | +10 |

<br>

Let's check another value ```XLIX``` (49)

```XLIX``` = +10, +50, -10 x 2, +1, +10, -1 x 2 = 49

Looking good! But the rules seem to work only if the given roman numeral is <strong style="color:green;">legit</strong>.

We can also conclude that the biggest roman numeral constructed by the aforementioned letters is 3999 as in ```MMMCMXCIX```

# How to Write

Given a number from 1 to 3999, constructing a legit roman numeral requires:

1. selecting the maximum roman letter no larger than the number

2. subtracting the value from the number

3. repeat step 1 until number is 0

Let's take 3998 as an example:

| number | roman numeral | remaining |
|:------:|:------------:|:---------:|
| 3998 | M | 2998 |
| 2998 | M | 1998 |
| 1998 | M | 998 |
| 998 | D | 498 |
| 498 | C | 398 |
| 398 | C | 298 |
| 298 | C | 198 |
| 198 | C | 98 |

<br>

We know ```DCCCC``` is not a legit roman numeral, which should be written as ```CM```.

| number | roman letter | remaining |
|:------:|:------------:|:---------:|
| 998 | CM | 98 |

<br>

Similarly,

| number | roman letter | remaining |
|:------:|:------------:|:---------:|
| 98 | XC | 8 |

<br>

And finally,

| number | roman letter | remaining |
|:------:|:------------:|:---------:|
| 8 | V | 3 |
| 3 | I | 2 |
| 2 | I | 1 |
| 1 | I | 0 |

<br>

Therefore, 3998 is ```MMMCMXCVIII```.

Let's look at 4 as another example

| number | roman letter | remaining |
|:------:|:------------:|:---------:|
| 4 | I | 3 |
| 3 | I | 2 |
| 2 | I | 1 |
| 1 | I | 0 |

<br>

We know ```IIII``` is not a legit roman numeral, which should be written as ```IV```.

Hmm... to speed up the conversion, we may include ``` 9 x 10 ^ n ``` and ``` 4 x 10 ^ n ``` patterns in the matching process.

# Python Implementation

See my implementation (and [test](https://oeis.org/A006968/a006968.txt)) at the following gist.

<script src="https://gist.github.com/zehengl/4c86a11dcc0f530043e3261f6be5d95d.js"></script>

# The End

Okay. ```XXXVIII``` is 38 and 39 is ```XXXIX```

If you speak Chinese, you may also find "SB LI" hilarious.

Thanks for reading.
