---
title: "Endianness and Bit Masking"
date: "2016-06-09"
description: "How to handle some bit level data manipualtions in Python."
tags: ["endianness", "python"]
---

## Endianness

See this [wiki](https://en.wikipedia.org/wiki/Endianness) for background knowledge about endianness. It refers to the ordering of bytes.

- Big endianness is to store with the most significant bit coming first.
- Little endianness is to store in the opposite order where the most significant bit comes last.

For example, we have a **hex** number 0A0B0C0D

Note that endianness talks about the order of **bytes**

_0A0B0C0D_ should be separated into chunks with size of 8 bits

that is, 0A \| 0B \| 0C \| 0D

In big endianness, it shall be written as 0A0B0C0D

In little endianness, it shall be written as 0D0C0B0A

## Python

Python provides a handy library (**struct**) to handle such conversion. See [here](https://docs.python.org/3/library/struct.html) for detail.

`gist:zehengl/1c592f9e3f3cc5797f03c02e8e953b28`

**Explanation:**

Say, we want to create the big/little endian representation for three numbers: 1025, 2050, and 4099

1025 = 1024 + 1, written in hex, it is 0x0401

2050 = 2048 + 2, written in hex, it is 0x0802

4099 = 4096 + 3, written in hex, it is 0x1003

Using struct, we can _pack_ these numbers with a formatted string ">hhh" or ">3h"

- **>** means big endian
- **h** means short int, which is 2 byte or 16 bit

Similarly, we can _pack_ those numbers with a formatted string "<hhh" or "<3h"

- **<** means little endian

Therefore, these three numbers are represented:

- in big endian, 040108021003
- in little endian, 010402080310

In order to extract the numbers, we use _unpack_ with the corresponding formatted string

## Bit Masking

Bit level and/or/xor manipulations

and, take certain bits

or, set certain bits

xor, toggle certain bits

For example, 1025 which is 0b10000000001

take last two bits: 1025 & 0b11 = 0b1

set last two bits: 1025 \| 0b11 = 0b10000000111 = 1031

toggle last two bits: 1025 ^ 0b11 = 0b10000000110 = 1030
